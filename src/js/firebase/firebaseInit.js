// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGg0qJ9JFhf5b2Ge0y513I7mH-MYLKuM4",
  authDomain: "filmoteka-tprj.firebaseapp.com",
  projectId: "filmoteka-tprj",
  storageBucket: "filmoteka-tprj.appspot.com",
  messagingSenderId: "857993502859",
  appId: "1:857993502859:web:d981bc5ccde7830dd0b48e",
  measurementId: "G-7S33D76KYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });