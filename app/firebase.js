// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHeOcuiophUzCclUdKbD0mO2B5eWdBUXo",
  authDomain: "pantry-app-dc7b2.firebaseapp.com",
  projectId: "pantry-app-dc7b2",
  storageBucket: "pantry-app-dc7b2.firebasestorage.app",
  messagingSenderId: "308879003589",
  appId: "1:308879003589:web:9522aadd3e5640c08d05ac",
  measurementId: "G-ZGB0YCSZF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export{app, firestore}