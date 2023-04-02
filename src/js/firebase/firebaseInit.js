// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";

import { actionsAfterEntry } from "./log-actions";

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


const refs = {
  form: document.querySelector('.registration'),
}


// реєструє нового користувача
export const toRegisterNewUser = async (email, password) => {
  console.log(email, password);
  const auth = getAuth();
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      console.log(user);
      actionsAfterEntry(user);
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      return errorCode;
    });
};

// Автентифікація нового користувача
// auth
const entryUser = async (email, password) => {
  const auth = getAuth();
  setPersistence(auth, browserSessionPersistence);
  return await signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;

      return user;
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      return errorCode;
    });
};

// вихід з профілю користувача
export const exitUser = async () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log('singOut successful');
  }).catch((error) => {
    // An error happened.
  });
}; 

const submitHandler = (e) => {
  e.preventDefault();
  const { email, password } = e.target.elements;
  console.log(email.value, password.value)
  toRegisterNewUser(email.value, password.value);
};

  refs.form.addEventListener('submit', submitHandler)