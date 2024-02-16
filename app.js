// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzfM-hL1CtBzAK8Zu8T019Gd-4eDcMO0c",
  authDomain: "koirat-6011e.firebaseapp.com",
  projectId: "koirat-6011e",
  storageBucket: "koirat-6011e.appspot.com",
  messagingSenderId: "903666657027",
  appId: "1:903666657027:web:e70af11ae94773e7a0ab36",
  measurementId: "G-FT98PEZWPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);