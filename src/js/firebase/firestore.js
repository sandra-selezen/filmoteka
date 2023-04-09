import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { app, db } from "./firebase-Init";

// Додаємо дані користувача
const addUser1 = async () => {

  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace2",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// addUser1();

// Add a second document with a generated ID.

const addUser2 = async () => {

  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Alan",
      middle: "Mathison2",
      last: "Turing",
      born: 1912
    });
  
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// addUser2();

// Зчитуємо дані користувача

const readDataUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
};

// readDataUsers();
