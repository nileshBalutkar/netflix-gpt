// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOSpeATrX03WLPLcXD2-DzeZlWlqaWGZE",
  authDomain: "netflix-gpt-ebe9a.firebaseapp.com",
  projectId: "netflix-gpt-ebe9a",
  storageBucket: "netflix-gpt-ebe9a.firebasestorage.app",
  messagingSenderId: "64851105843",
  appId: "1:64851105843:web:54e5a5acbebd96b208eb46",
  measurementId: "G-4V382GSMMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);