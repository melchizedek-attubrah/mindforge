// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHVjYBwOB-r9u8DekTEbrTjA-wTd0rBqE",
  authDomain: "mindforge-a1046.firebaseapp.com",
  projectId: "mindforge-a1046",
  storageBucket: "mindforge-a1046.firebasestorage.app",
  messagingSenderId: "225881035846",
  appId: "1:225881035846:web:cab98b4f42f31be89c2647",
  measurementId: "G-XTEWV782EZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);