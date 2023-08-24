// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyBSo8GdufDNqr1Xbqe6nuyxWKgwLZ5SDQg",
    authDomain: "push-notification-8ae10.firebaseapp.com",
    projectId: "push-notification-8ae10",
    storageBucket: "push-notification-8ae10.appspot.com",
    messagingSenderId: "725499709007",
    appId: "1:725499709007:web:348091c0470c48a6428c3a"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});