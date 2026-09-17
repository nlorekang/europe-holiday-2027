// api/webauthn-login-options.js
// Step 1 of signing in with a fingerprint. Deliberately doesn't ask who's
// logging in — allowCredentials is left empty so the browser/OS shows
// whichever passkeys it already has for this site, and login-verify
// figures out which account that credential belongs to from its response.

const { generateAuthenticationOptions } = require("@simplewebauthn/server");
const { admin, db } = require("./_lib/firebase-admin");
const { RP_ID } = require("./_lib/webauthn-config");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "method_not_allowed" });
  }

  try {
    const options = await generateAuthenticationOptions({
      rpID: RP_ID,
      userVerification: "preferred",
      allowCredentials: []
    });

    const flowId = db.collection("webauthnChallenges").doc().id;
    await db.collection("webauthnChallenges").doc(flowId).set({
      challenge: options.challenge,
      createdAt: admin.firestore.Timestamp.now(),
      expiresAt: admin.firestore.Timestamp.fromMillis(Date.now() + 5 * 60 * 1000)
    });

    return res.status(200).json({ options, flowId });
  } catch (err) {
    console.error("webauthn-login-options error:", err);
    return res.status(500).json({ error: "server_error" });
  }
};
