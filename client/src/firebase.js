// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "estate-mate-7b7d1.firebaseapp.com",
    projectId: "estate-mate-7b7d1",
    storageBucket: "estate-mate-7b7d1.appspot.com",
    messagingSenderId: "907824597820",
    appId: "1:907824597820:web:38ac64815dfda4f338ac39",
    measurementId: "G-Z2DV89KN22"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);