import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD-XIMemNnz9ILk92MOM30-_TmmDNiKug",
  authDomain: "auction-thesis-webapp.firebaseapp.com",
  databaseURL: "https://auction-thesis-webapp-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "auction-thesis-webapp",
  storageBucket: "auction-thesis-webapp.firebasestorage.app",
  messagingSenderId: "223138678351",
  appId: "1:223138678351:web:53ae03d27a1d19a3e38c3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
