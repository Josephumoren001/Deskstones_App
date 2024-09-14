// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "mern-blog-4fe11.firebaseapp.com",
  projectId: "mern-blog-4fe11",
  storageBucket: "mern-blog-4fe11.appspot.com",
  messagingSenderId: "140081397351",
  appId: "1:140081397351:web:63575fd735273caa29dec2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);