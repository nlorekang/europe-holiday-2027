// --- Firebase setup (shared real-time data for EuroTrip 2027) ---
// Loaded before app.js. Uses the "compat" SDK so it works with plain
// <script> tags — no build step or module bundler needed.

const firebaseConfig = {
  apiKey: "AIzaSyBsH0K9hTiVHhO4UTW8FEowhA5b-LoZB6Y",
  authDomain: "europe-holiday-2027.firebaseapp.com",
  projectId: "europe-holiday-2027",
  storageBucket: "europe-holiday-2027.firebasestorage.app",
  messagingSenderId: "170052330414",
  appId: "1:170052330414:web:4b12f7118d04bd56fb1e3f"
};

firebase.initializeApp(firebaseConfig);

// Global Firestore handle used throughout app.js
const db = firebase.firestore();

// --- Offline mode ---
// Caches everything you've loaded/viewed so it stays visible with no
// signal (e.g. on a train or in a spot with no roaming), and queues up
// any edits made offline (adding a note, checking off a booking) to
// sync automatically once you're back online. No extra code needed
// anywhere else in the app — this one call handles it.
db.enablePersistence().catch((err) => {
  if (err.code === "failed-precondition") {
    // Happens if the app is open in more than one browser tab at once —
    // offline cache can only be active in one tab at a time. The app
    // still works fine online, it just won't cache in the extra tab(s).
    console.warn("Offline mode only works in the first open tab. Close extra tabs of the app for full offline support.");
  } else if (err.code === "unimplemented") {
    // Some older/unusual browsers don't support the storage APIs this needs
    console.warn("This browser doesn't support offline mode.");
  } else {
    console.error("Failed to enable offline mode:", err);
  }
});