// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
  apiKey: "AIzaSyDbloeJNjdhU840mPSdQiYaIJkKWCMKOI4",
  authDomain: "alu-hackathon.firebaseapp.com",
  projectId: "alu-hackathon",
  storageBucket: "alu-hackathon.appspot.com",
  messagingSenderId: "903657003269",
  appId: "1:903657003269:web:cdf7eb75098b7aea6ebf6c",
  measurementId: "G-M355NDKVJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
