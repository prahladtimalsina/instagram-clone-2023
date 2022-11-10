// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqbP1UG8H3eYeHFiPj00UFq_DFANFmx30",
  authDomain: "instagram-next-js.firebaseapp.com",
  projectId: "instagram-next-js",
  storageBucket: "instagram-next-js.appspot.com",
  messagingSenderId: "829386304065",
  appId: "1:829386304065:web:54658fa454ce3e1a83b4c0",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
