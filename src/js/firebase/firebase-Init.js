// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// More methods fore use firbase
// https://firebase.google.com/docs/reference/js

import {  getAuth,  createUserWithEmailAndPassword, signOut, setPersistence, browserSessionPersistence, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import { actionsAfterRegistration, actionsAfterFindingUser} from "./log-actions";
import { refs } from "./render-modal";

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


// Get the currently signed -in user
// Отримати поточного користувача, що вже здійснив вхід
// https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    actionsAfterFindingUser(uid);
    // ...
  } else {
    // User is signed out
    // ...
  }
});




// реєструє нового користувача
export const toRegisterNewUser = async (email, password) => {
  const auth = getAuth();
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      actionsAfterRegistration(user);
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      return errorCode;
    });
};

// Автентифікація користувача
const entryUser = async (email, password) => {
  const auth = getAuth();
  setPersistence(auth, browserSessionPersistence);
  return await signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      actionsAfterRegistration(user);
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
  }).catch((error) => {
    // An error happened.
    const errorCode = error.code;
    const errorMessage = error.message;

    return errorCode;
  });
}; 

const submitHandler = (e) => {
  e.preventDefault();
  
  const { email, password } = e.target.elements;

  if (email.hasAttribute('data-action-signUp')) {
    toRegisterNewUser(email.value, password.value);
    return
  };

  if (password.hasAttribute('data-action-logIn')) {
    entryUser(email.value, password.value);
    return
  };
};

refs.form.addEventListener('submit', submitHandler);