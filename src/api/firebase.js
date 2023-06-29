// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJSatE9CwG_V5M6QVTLb2NV-ha0XdigT8",
  authDomain: "kalvettiyal-blogs.firebaseapp.com",
  projectId: "kalvettiyal-blogs",
  storageBucket: "kalvettiyal-blogs.appspot.com",
  messagingSenderId: "800331832457",
  appId: "1:800331832457:web:f8d2436599ed94db573a58",
  measurementId: "G-XLF31DX0KM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);