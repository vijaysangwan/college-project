// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqsOepFqptkqSLKDMhQ0h1fjPdQOTMOFw",
  authDomain: "college-project-3333b.firebaseapp.com",
  projectId: "college-project-3333b",
  storageBucket: "college-project-3333b.appspot.com",
  messagingSenderId: "1032566989837",
  appId: "1:1032566989837:web:9754334638d652a4dee144",
  // measurementId: "G-KWJSWQRNV0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
