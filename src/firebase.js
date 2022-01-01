// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBol6BW_-CBqjEMIZxHJ6F_2Mjp_DPuXGI",
  authDomain: "expense-manager-b7b0d.firebaseapp.com",
  projectId: "expense-manager-b7b0d",
  storageBucket: "expense-manager-b7b0d.appspot.com",
  messagingSenderId: "31923672248",
  appId: "1:31923672248:web:951f2e39e489b02edb104d",
  measurementId: "G-VBPVH9WK23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);