// Import the functions you need from the SDKs you need
import { getMessaging, getToken, onMessage } from "firebase/messaging";



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSo8GdufDNqr1Xbqe6nuyxWKgwLZ5SDQg",
  authDomain: "push-notification-8ae10.firebaseapp.com",
  projectId: "push-notification-8ae10",
  storageBucket: "push-notification-8ae10.appspot.com",
  messagingSenderId: "725499709007",
  appId: "1:725499709007:web:348091c0470c48a6428c3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
const token = getToken(messaging, {vapidKey: "BCXcXsKOoHgZZc_EPM935e1zynyxWUua8uCB8l52Fbn8tNxml3h9vyP9sqdet888vA_BtwYwPTWisZGygPePB28"});
// const onMessageListener = () =>
//   new Promise((resolve) => {
//     onMessage(messaging, (payload) => {
//       resolve(payload);
//     });
// });
export {messaging,token}
