// firebase-messaging-sw.js
// Must live at the site root. Handles push notifications that arrive
// while the app tab isn't open/focused. Uses the "compat" SDK to match
// the rest of the app (no build step / bundler).

importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

// Same public config as firebase-config.js — safe to duplicate here,
// service workers can't import other scripts on the page.
firebase.initializeApp({
  apiKey: "AIzaSyBsH0K9hTiVHhO4UTW8FEowhA5b-LoZB6Y",
  authDomain: "europe-holiday-2027.firebaseapp.com",
  projectId: "europe-holiday-2027",
  storageBucket: "europe-holiday-2027.firebasestorage.app",
  messagingSenderId: "170052330414",
  appId: "1:170052330414:web:4b12f7118d04bd56fb1e3f"
});

const messaging = firebase.messaging();

// Shows the OS-level notification when a push arrives and the app
// is in the background or closed.
messaging.onBackgroundMessage((payload) => {
  const title = (payload.notification && payload.notification.title) || "EuroTrip 2027";
  const options = {
    body: (payload.notification && payload.notification.body) || "",
    icon: "/icons/icon-192.png",
    badge: "/icons/icon-192.png"
  };
  self.registration.showNotification(title, options);
});

// Focus/open the app when the notification is tapped
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: "window" }).then((windowClients) => {
      for (const client of windowClients) {
        if ("focus" in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow("/");
    })
  );
});
