// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWnfILA5qrF0CeNu3tMbMnomBXkM_XXNc",
  authDomain: "blog-website-40904.firebaseapp.com",
  projectId: "blog-website-40904",
  storageBucket: "blog-website-40904.appspot.com",
  messagingSenderId: "1041676906234",
  appId: "1:1041676906234:web:870cd1b476bc3e74bd6343",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
