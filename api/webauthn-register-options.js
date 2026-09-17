// api/webauthn-register-options.js
// Step 1 of "enable fingerprint sign-in on this device". Only reachable
// by someone already logged in with their password (proves they're
// really Nthabi or Kevin before we let them attach a new fingerprint to
// the account) — the ID token is verified below, not just trusted.

const { generateRegistrationOptions } = require("@simplewebauthn/server");
const { admin, db } = require("./_lib/firebase-admin");
const { RP_ID, RP_NAME } = require("./_lib/webauthn-config");

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
    const email = decoded.email || "user";

    // Don't let someone register the same physical authenticator twice
    // for the same account.
    const existing = await db.collection("webauthnCredentials").where("uid", "==", uid).get();
    const excludeCredentials = existing.docs.map((doc) => ({
      id: doc.id,
      transports: doc.data().transports || undefined
    }));

    const options = await generateRegistrationOptions({
      rpName: RP_NAME,
      rpID: RP_ID,
      userName: email,
      userID: Buffer.from(uid, "utf8"),
      attestationType: "none",
      excludeCredentials,
      authenticatorSelection: {
        residentKey: "required",
        userVerification: "preferred",
        authenticatorAttachment: "platform"
      }
    });

    // Stash the challenge so register-verify can confirm the response
    // was actually signed for THIS attempt, not replayed from another.
    await db.collection("webauthnChallenges").doc(uid).set({
      challenge: options.challenge,
      createdAt: admin.firestore.Timestamp.now(),
      expiresAt: admin.firestore.Timestamp.fromMillis(Date.now() + 5 * 60 * 1000)
    });

    return res.status(200).json(options);
  } catch (err) {
    console.error("webauthn-register-options error:", err);
    return res.status(401).json({ error: "invalid_token" });
  }
};
