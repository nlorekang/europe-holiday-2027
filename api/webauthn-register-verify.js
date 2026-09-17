// api/webauthn-register-verify.js
// Step 2 of "enable fingerprint sign-in on this device". Verifies the
// browser's attestation response against the challenge we stashed in
// register-options, then saves the new public key so login-verify can
// recognize this device later.

const { verifyRegistrationResponse } = require("@simplewebauthn/server");
const { admin, db } = require("./_lib/firebase-admin");
const { RP_ID, ORIGIN } = require("./_lib/webauthn-config");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "method_not_allowed" });
  }

  const authHeader = req.headers.authorization || "";
  const idToken = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
  if (!idToken) {
    return res.status(401).json({ error: "not_signed_in" });
  }

  try {
    const decoded = await admin.auth().verifyIdToken(idToken);
    const uid = decoded.uid;

    const challengeRef = db.collection("webauthnChallenges").doc(uid);
    const challengeSnap = await challengeRef.get();
    if (!challengeSnap.exists) {
      return res.status(400).json({ error: "no_pending_registration" });
    }
    const { challenge, expiresAt } = challengeSnap.data();
    if (admin.firestore.Timestamp.now().toMillis() > expiresAt.toMillis()) {
      await challengeRef.delete();
      return res.status(400).json({ error: "challenge_expired" });
    }

    const verification = await verifyRegistrationResponse({
      response: req.body,
      expectedChallenge: challenge,
      expectedOrigin: ORIGIN,
      expectedRPID: RP_ID
    });

    if (!verification.verified || !verification.registrationInfo) {
      return res.status(400).json({ error: "verification_failed" });
    }

    const { credential } = verification.registrationInfo;
    const transports = (req.body && req.body.response && req.body.response.transports) || [];

    await db.collection("webauthnCredentials").doc(credential.id).set({
      uid,
      publicKey: Buffer.from(credential.publicKey).toString("base64"),
      counter: credential.counter,
      transports,
      createdAt: admin.firestore.Timestamp.now()
    });

    await challengeRef.delete();

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("webauthn-register-verify error:", err);
    return res.status(500).json({ error: "server_error" });
  }
};
