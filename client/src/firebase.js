// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "alumni-verse-e9bc8.firebaseapp.com",
    projectId: "alumni-verse-e9bc8",
    storageBucket: "alumni-verse-e9bc8.appspot.com",
    messagingSenderId: "984815062396",
    appId: "1:984815062396:web:a9ed3f5038e878952668f9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);