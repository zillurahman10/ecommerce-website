// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYqFXgdz3EJ2NL3c4Pk7PCAivZJRuJjds",
    authDomain: "ecommerce-website-2d515.firebaseapp.com",
    projectId: "ecommerce-website-2d515",
    storageBucket: "ecommerce-website-2d515.appspot.com",
    messagingSenderId: "450818725894",
    appId: "1:450818725894:web:36f0b023f65264093f0b87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth