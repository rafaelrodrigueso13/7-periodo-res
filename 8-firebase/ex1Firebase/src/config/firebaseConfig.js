import { initializeApp } from 'firebase';
import { getAuth } from 'firebase/auth';
import { getFirestone } from 'firebase/firestone';

const firebaseConfig = {
  apiKey: "AIzaSyA581mUBVPCbxVYRwtO5OHtHw7KSdUc_Iw",
  authDomain: "fir-a8eee.firebaseapp.com",
  projectId: "fir-a8eee",
  storageBucket: "fir-a8eee.firebasestorage.app",
  messagingSenderId: "714302088246",
  appId: "1:714302088246:web:a6ecab614157473beaa497",
  measurementId: "G-D0XDFXLWSZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);