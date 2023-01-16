// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBdDycK0geS_U-UuUyZlnqLXYef10nwe8",
  authDomain: "react-disney-app-6dcf2.firebaseapp.com",
  projectId: "react-disney-app-6dcf2",
  storageBucket: "react-disney-app-6dcf2.appspot.com",
  messagingSenderId: "514033699800",
  appId: "1:514033699800:web:58442e98e1c937c13bc0ad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
