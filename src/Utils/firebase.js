// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATagtDPPb4_ivef7soDDA9pEq3BQSM-pQ",
  authDomain: "netflix-gpt-36784.firebaseapp.com",
  projectId: "netflix-gpt-36784",
  storageBucket: "netflix-gpt-36784.appspot.com",
  messagingSenderId: "155352399841",
  appId: "1:155352399841:web:34730f47cf8cc5bcfb9ca0",
  measurementId: "G-64XNPL39S5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();