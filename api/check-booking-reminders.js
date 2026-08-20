// api/check-booking-reminders.js
//
// Runs once a day via Vercel Cron (see vercel.json). Checks every booking
// item's window against the real date and sends a reminder (in-app +
// push) when:
//   - a window opens in exactly 7 days (heads-up)
//   - a window opens today
//   - a window has been open for a week or more and is still unbooked
//     (repeats weekly until marked booked)
//
// NOTE: the bookingItems list below must be kept in sync by hand with the
// one in app.js — they're duplicated because app.js runs in the browser
// and this file runs on the server, so they can't share a plain <script>
// include. If you add/remove/change a booking item, update both places.

const { db } = require("./_lib/firebase-admin");
const { sendPush } = require("./_lib/push");
const admin = require("firebase-admin");

const bookingItems = [
  { id: "book-int-flight", desc: "International Flights (JNB to CDG, FCO to JNB)", openDate: "2026-10-20" },
  { id: "book-paris-flight", desc: "Paris (CDG) to Venice (VCE) Budget Flight", openDate: "2027-01-24" },
  { id: "book-train-ven-flo", desc: "High-Speed Train: Venice to Florence", openDate: "2027-05-27" },
  { id: "book-train-flo-rom", desc: "High-Speed Train: Florence to Naples", openDate: "2027-06-11" },
  { id: "book-train-rom-nap", desc: "High-Speed Train: Naples to Rome", openDate: "2027-06-16" },
  { id: "book-louvre", desc: "Louvre Museum Tickets (Paris)", openDate: "2027-06-20" },
  { id: "book-accademia", desc: "Accademia Gallery Tickets (Florence - David)", openDate: "2027-06-27" },
  { id: "book-vatican", desc: "Vatican Museums & Sistine Chapel Tickets", openDate: "2027-08-06" },
  { id: "book-papal", desc: "Papal Audience Ticket Requests (Rome)", openDate: "2027-04-06" }
];

function daysBetween(a, b) {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.round((a.getTime() - b.getTime()) / msPerDay);
}

function todayUTCMidnight() {
  const now = new Date();
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
}

module.exports = async function handler(req, res) {
  // Only Vercel's own scheduler (or someone with the secret) can trigger this
  if (process.env.CRON_SECRET) {
    const authHeader = req.headers["authorization"];
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }
  }

  try {
    const tripDoc = await db.collection("trip").doc("shared").get();
    const tripData = tripDoc.exists ? tripDoc.data() : {};
    const bookingStates = tripData.bookingStates || {};
    const bookingReminderLog = tripData.bookingReminderLog || {};

    const today = todayUTCMidnight();
    const remindersSent = [];

    for (const item of bookingItems) {
      const isBooked = bookingStates[item.id] === true;
      if (isBooked) continue;

      const openDate = new Date(item.openDate + "T00:00:00Z");
      const diffDays = daysBetween(openDate, today);

      const lastRemindedStr = bookingReminderLog[item.id];
      const daysSinceLastReminder = lastRemindedStr
        ? daysBetween(today, new Date(lastRemindedStr + "T00:00:00Z"))
        : Infinity;

      let title = null;
      let body = null;

      if (diffDays === 7) {
        title = "Booking window opens in 1 week";
        body = `${item.desc} opens for booking in 7 days.`;
      } else if (diffDays === 0) {
        title = "Booking window open today";
        body = `${item.desc} is ready to book now.`;
      } else if (diffDays < 0 && daysSinceLastReminder >= 7) {
        title = "Still need to book";
        body = `${item.desc} — window opened ${Math.abs(diffDays)} days ago and isn't marked booked yet.`;
      }

      if (!title) continue;

      await db.collection("notifications").add({
        type: "booking",
        itemId: item.id,
        message: body,
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      });

      await sendPush(title, body, null); // no excludeOwner — this is a system reminder for both

      const todayStr = today.toISOString().slice(0, 10);
      await db.collection("trip").doc("shared").update({
        [`bookingReminderLog.${item.id}`]: todayStr
      });

      remindersSent.push({ itemId: item.id, title });
    }

    res.status(200).json({ checked: bookingItems.length, remindersSent });
  } catch (err) {
    console.error("check-booking-reminders error:", err);
    res.status(500).json({ error: "Failed to check booking reminders" });
  }
};
