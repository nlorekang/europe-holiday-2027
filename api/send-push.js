// api/send-push.js
//
// Sends a push notification to registered devices via Firebase Cloud
// Messaging. Triggered directly from the app (a new note or reminder),
// as opposed to check-booking-reminders.js, which runs on a schedule.
//
// Request body: { title, body, excludeOwner }
//   excludeOwner: optional — "Nthabi" or "Kevin" — skips that person's
//   registered device(s), e.g. so you don't get notified of your own note.

const { sendPush } = require("./_lib/push");

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

    const result = await sendPush(title, body, excludeOwner);

    if (result.sent === 0) {
      res.status(200).json({ sent: 0, message: "No registered devices to notify." });
      return;
    }

    res.status(200).json({ sent: result.successCount, failed: result.failureCount });
  } catch (err) {
    console.error("send-push error:", err);
    res.status(500).json({ error: "Failed to send push notification" });
  }
};
