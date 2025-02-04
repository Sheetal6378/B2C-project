import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// const dotenv = require("dotenv");
// dotenv.config();

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyB17Tgz7W9KcH6-6A1QMuj03IOA1hVCf1s",
  authDomain: "b2c-tech-farming-6967b.firebaseapp.com",
  projectId: "b2c-tech-farming-6967b",
  storageBucket: "b2c-tech-farming-6967b.appspot.com",
  messagingSenderId: "529799874483",
  appId: "1:529799874483:web:ba28394e5300e1f6636dc6",
  measurementId: "G-KQHZV6Z4ZY"
};

export const Firebase = firebase.initializeApp(firebaseConfig);
