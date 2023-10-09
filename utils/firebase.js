// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUpRYtc5C6QW0Q6wsFRHEJ3EiLI9IKNbk",
  authDomain: "chat-auth-60bc0.firebaseapp.com",
  projectId: "chat-auth-60bc0",
  storageBucket: "chat-auth-60bc0.appspot.com",
  messagingSenderId: "794602056248",
  appId: "1:794602056248:web:7a21a67f819180931554cd",
  measurementId: "G-C08WCLZSXY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);