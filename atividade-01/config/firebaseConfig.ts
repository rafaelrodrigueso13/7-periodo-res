// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA581mUBVPCbxVYRwtO5OHtHw7KSdUc_Iw",
  authDomain: "fir-a8eee.firebaseapp.com",
  projectId: "fir-a8eee",
  storageBucket: "fir-a8eee.firebasestorage.app",
  messagingSenderId: "714302088246",
  appId: "1:714302088246:web:a6ecab614157473beaa497",
  measurementId: "G-D0XDFXLWSZ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);