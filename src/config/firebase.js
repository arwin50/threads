
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyClKhvgGtA0xJK3CXWaBA2TG6x5xfABV9A",
    authDomain: "threads-dd0b6.firebaseapp.com",
    projectId: "threads-dd0b6",
    storageBucket: "threads-dd0b6.appspot.com",
    messagingSenderId: "667059551925",
    appId: "1:667059551925:web:6910e1c0b68292513a48fc",
    measurementId: "G-RR1EJ2QDBD"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();

