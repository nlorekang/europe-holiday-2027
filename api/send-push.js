// api/send-push.js
//
// Sends a push notification to registered devices via Firebase Cloud
// Messaging. Runs server-side only (Vercel serverless function) because
// sending pushes requires the Firebase Admin SDK and a service account
// credential — this can never run in the browser.
//
// Expects these Vercel environment variables (already set):
//   FIREBASE_PROJECT_ID
//   FIREBASE_CLIENT_EMAIL
//   FIREBASE_PRIVATE_KEY
//
// Request body: { title, body, excludeOwner }
//   excludeOwner: optional — "Nthabi" or "Kevin" — skips that person's
//   registered device(s), e.g. so you don't get notified of your own note.

const admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      // Vercel stores newlines as literal "\n" in env var values;
      // this converts them back to real line breaks for the key to parse.
      privateKey: (process.env.FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n")
    })
  });
}

const db = admin.firestore();

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const { title, body, excludeOwner } = req.body || {};

    if (!title || !body) {
      res.status(400).json({ error: "title and body are required" });
      return;
    }

    const tokensSnapshot = await db.collection("deviceTokens").get();

    const tokens = [];
    tokensSnapshot.forEach((doc) => {
      const data = doc.data();
      if (excludeOwner && data.owner === excludeOwner) return; // skip sender's own device
      if (data.token) tokens.push(data.token);
    });

    if (tokens.length === 0) {
      res.status(200).json({ sent: 0, message: "No registered devices to notify." });
      return;
    }

    const response = await admin.messaging().sendEachForMulticast({
      tokens: tokens,
      notification: { title, body }
    });

    // Clean up any tokens Firebase reports as no-longer-valid (e.g. the
    // person uninstalled the PWA or cleared browser data)
    const staleTokens = [];
    response.responses.forEach((r, i) => {
      if (!r.success && r.error && (
        r.error.code === "messaging/registration-token-not-registered" ||
        r.error.code === "messaging/invalid-registration-token"
      )) {
        staleTokens.push(tokens[i]);
      }
    });

    if (staleTokens.length > 0) {
      await Promise.all(
        staleTokens.map((token) => db.collection("deviceTokens").doc(token).delete().catch(() => {}))
      );
    }

    res.status(200).json({
      sent: response.successCount,
      failed: response.failureCount
    });
  } catch (err) {
    console.error("send-push error:", err);
    res.status(500).json({ error: "Failed to send push notification" });
  }
};
