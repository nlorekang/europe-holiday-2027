// api/guest-login.js
// Validates a guest code, starts its 24-hour clock the first time it's
// ever used, and mints a short-lived Firebase custom token so the
// guest's browser can sign in read-only. The actual enforcement of
// "read-only" and "expired after 24h" lives in Firestore security
// rules, not here — this function's only job is deciding whether the
// code is currently good, and if so, handing out a token tied to it.

const { admin, db } = require("./_lib/firebase-admin");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "method_not_allowed" });
  }

  const { code } = req.body || {};
  if (!code || typeof code !== "string") {
    return res.status(400).json({ error: "missing_code" });
  }

  const linkRef = db.collection("guestLinks").doc(code);

  try {
    const result = await db.runTransaction(async (tx) => {
      const snap = await tx.get(linkRef);
      if (!snap.exists) {
        return { error: "not_found" };
      }

      const data = snap.data();
      if (data.revoked) {
        return { error: "revoked" };
      }

      const now = admin.firestore.Timestamp.now();
      let expiresAt = data.expiresAt || null;

      if (!data.firstUsedAt) {
        // First time this code has ever been opened — start the 24h
        // clock now, regardless of when the link was created.
        expiresAt = admin.firestore.Timestamp.fromMillis(
          now.toMillis() + 24 * 60 * 60 * 1000
        );
        tx.update(linkRef, { firstUsedAt: now, expiresAt });
      } else if (expiresAt && now.toMillis() > expiresAt.toMillis()) {
        return { error: "expired" };
      }

      return { expiresAt, label: data.label || null };
    });

    if (result.error) {
      const status = result.error === "not_found" ? 404 : 403;
      return res.status(status).json({ error: result.error });
    }

    const uid = `guest_${code}`;
    const token = await admin.auth().createCustomToken(uid, { guest: true });

    return res.status(200).json({
      token,
      expiresAt: result.expiresAt.toMillis(),
      label: result.label
    });
  } catch (err) {
    console.error("guest-login error:", err);
    return res.status(500).json({ error: "server_error" });
  }
};
