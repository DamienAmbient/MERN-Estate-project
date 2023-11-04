// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-5fe39.firebaseapp.com",
    projectId: "mern-estate-5fe39",
    storageBucket: "mern-estate-5fe39.appspot.com",
    messagingSenderId: "760937585204",
    appId: "1:760937585204:web:5f28fe37f306277c9c0861",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
