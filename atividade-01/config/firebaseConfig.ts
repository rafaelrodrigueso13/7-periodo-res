// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDDWsffmibnL_fK3OXvN7m7TmNMeYwJVag",
  authDomain: "pratica-931da.firebaseapp.com",
  projectId: "pratica-931da",
  storageBucket: "pratica-931da.firebasestorage.app",
  messagingSenderId: "800957682258",
  appId: "1:800957682258:web:599400359c1c5823db858b",
  measurementId: "G-F4441BPBQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);