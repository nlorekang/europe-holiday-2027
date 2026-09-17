// api/webauthn-login-verify.js
// Step 2 of signing in with a fingerprint. The response tells us WHICH
// credential was used (response.id) — we look that up to find the
// account and stored public key, verify the signature against the
// challenge from login-options, then mint a normal Firebase custom
// token so the client can sign in exactly like any other method.

const { verifyAuthenticationResponse } = require("@simplewebauthn/server");
const { admin, db } = require("./_lib/firebase-admin");
const { RP_ID, ORIGIN } = require("./_lib/webauthn-config");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "method_not_allowed" });
  }

  const { flowId, response } = req.body || {};
  if (!flowId || !response || !response.id) {
    return res.status(400).json({ error: "bad_request" });
  }

  try {
    const challengeRef = db.collection("webauthnChallenges").doc(flowId);
    const challengeSnap = await challengeRef.get();
    if (!challengeSnap.exists) {
      return res.status(400).json({ error: "flow_expired" });
    }
    const { challenge, expiresAt } = challengeSnap.data();
    if (admin.firestore.Timestamp.now().toMillis() > expiresAt.toMillis()) {
      await challengeRef.delete();
      return res.status(400).json({ error: "flow_expired" });
    }

    const credRef = db.collection("webauthnCredentials").doc(response.id);
    const credSnap = await credRef.get();
    if (!credSnap.exists) {
      return res.status(404).json({ error: "not_registered" });
    }
    const credData = credSnap.data();

    const verification = await verifyAuthenticationResponse({
      response,
      expectedChallenge: challenge,
      expectedOrigin: ORIGIN,
      expectedRPID: RP_ID,
      requireUserVerification: false,
      credential: {
        id: credRef.id,
        publicKey: new Uint8Array(Buffer.from(credData.publicKey, "base64")),
        counter: credData.counter,
        transports: credData.transports
      }
    });

    if (!verification.verified) {
      return res.status(401).json({ error: "verification_failed" });
    }

    await credRef.update({ counter: verification.authenticationInfo.newCounter });
    await challengeRef.delete();

    const token = await admin.auth().createCustomToken(credData.uid);
    return res.status(200).json({ token });
  } catch (err) {
    console.error("webauthn-login-verify error:", err);
    return res.status(500).json({ error: "server_error" });
  }
};
