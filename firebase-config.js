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
