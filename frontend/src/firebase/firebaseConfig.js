import { initializeApp } from "firebase/app";
import { getAuth,  GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAynoRQCoLrUcwYtcnb_KXl7pQkpGp6OKk",
  authDomain: "mmmm-65a18.firebaseapp.com",
  projectId: "mmmm-65a18",
  storageBucket: "mmmm-65a18.firebasestorage.app",
  messagingSenderId: "124433818589",
  appId: "1:124433818589:web:18080e0fce330c2b360c34",
  measurementId: "G-L0KLC0NZGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();