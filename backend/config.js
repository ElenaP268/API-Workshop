const firebase = require("firebase");
firebaseConfig = {
    apiKey: "AIzaSyBI6Hx0mvNeYMWD49G6-v5QlTNsO5Df8T0",
    authDomain: "api-workshop-5199e.firebaseapp.com",
    projectId: "api-workshop-5199e",
    storageBucket: "api-workshop-5199e.firebasestorage.app",
    messagingSenderId: "14351871638",
    appId: "1:14351871638:web:f0ba3588ea9ab5a7c41cb7",
    measurementId: "G-JB4FRD52XE"
  };
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;