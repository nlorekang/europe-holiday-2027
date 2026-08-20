// api/_lib/push.js
// Sends a push to all registered devices (optionally skipping one person's),
// and cleans up any tokens Firebase reports as dead. Shared by the
// user-triggered /api/send-push endpoint and the scheduled booking-window
// reminder job, so both behave identically and stay in sync.

const { admin, db } = require("./firebase-admin");

async function sendPush(title, body, excludeOwner) {
  const tokensSnapshot = await db.collection("deviceTokens").get();

  const tokens = [];
  tokensSnapshot.forEach((doc) => {
    const data = doc.data();
    if (excludeOwner && data.owner === excludeOwner) return;
    if (data.token) tokens.push(data.token);
  });

  if (tokens.length === 0) {
    return { successCount: 0, failureCount: 0, sent: 0 };
  }

  const response = await admin.messaging().sendEachForMulticast({
    tokens: tokens,
    notification: { title, body }
  });

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

  return {
    successCount: response.successCount,
    failureCount: response.failureCount,
    sent: tokens.length
  };
}

module.exports = { sendPush };
