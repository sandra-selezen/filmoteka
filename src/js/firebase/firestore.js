import {
  collection,
  addDoc,
  getDocs,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
  DocumentSnapshot,
  updateDoc,
} from 'firebase/firestore';
import { app, db } from './firebase-Init';
import { movieInfo } from '../fetch-one-film';

let UserID = '';

// Додаємо дані до Firebase
export const writeUser = id => {
  const UserData = doc(db, `users/${id}`);
  const Data = {
    watched: [],
    queue: [],
  };
  setDoc(UserData, Data);
  UserID = id;
};

// Оновлюємо дані у Firebase

export async function saveDataToWatched(data) {
  console.log('UserID: ', UserID);
  const UserData = doc(db, `users/${UserID}`);
  const Data = {
    watched: [JSON.stringify(data)],
    queue: [],
  };
  try {
    await setDoc(UserData, Data, { merge: true });
    console.log('This value has been written to the database');
  } catch (error) {
    console.log(`I got an error ${error}`);
  }
}

// =================did not finish=================

// Отримуємо дані з firestore
export async function readASingleDocument() {
  console.log('UserID: ', UserID);
  try {
    const mySnapshot = await getDoc(doc(db, `users/${UserID}`));
    if (mySnapshot.exists()) {
      const docData = mySnapshot.data();
      console.log(`My data is ${JSON.stringify(docData)}`);
      return docData;
    }
  } catch (error) {
    console.log(`I got an error ${error}`);
  }
}
//Необхідно дані в змінній docData зробити масивом для подальшої роботи логіки в saveToWatched
// =========================================================================

// function saveToWatched() {
//   const currentLocalStorageContent = JSON.parse(
//     localStorage.getItem(WATCHED_KEY)
//   );

//   const filmId = document.querySelector('.js-modal-card img').dataset.id;
//   const watchedArray = [];

//   if (currentLocalStorageContent) {
//     const filmIncluded = currentLocalStorageContent.find(
//       filmData => filmData.id === movieInfo.id
//     );
//     if (!filmIncluded) {
//       currentLocalStorageContent.push(movieInfo);
//       localStorage.setItem(
//         WATCHED_KEY,
//         JSON.stringify(currentLocalStorageContent)
//       );
//     }
//     {
//       return;
//     }
//   } else {
//     watchedArray.push(movieInfo);
//     localStorage.setItem(WATCHED_KEY, JSON.stringify(watchedArray));
//   }
// }

// Додаємо дані до Firebase
// const specialOfTheDay = doc(db, 'dailySpecial/2021-09-14');
// function writeDailySpecial() {
//   const docData = {
//     name: 'Pol',
//     age: 90,
//   };
//   setDoc(specialOfTheDay, docData);
// }

// Оновлюємо дані у Firebase

// const specialOfTheDay = doc(db, 'dailySpecial/2021-09-14');
// async function updateWrittenDailySpecial() {
//   const docData = {
//     name: 'Pol',
//     age: 98,
//     vegan: false,
//   };
//   try {
//     await setDoc(specialOfTheDay, docData, { merge: true });
//     console.log('This value has been written to the database');
//   } catch (error) {
//     console.log(`I got an error ${error}`);
//   }
// };

// Додаємо дані в створену колекцію з автоматичним генеруванням ID
// const ordersCollection = collection(db, 'orders');

// async function addNewDocument() {
//   const newDoc = await addDoc(ordersCollection, {
//     customer: 'Arthur',
//     drink: 'Latte',
//     total_cost: 100,
//   });
//   console.log(`Your doc was created at ${newDoc.path}`);
// };

// Отримуємо дані з firestore
// async function readASingleDocument() {
//   const mySnapshot = await getDoc(specialOfTheDay);
//   if (mySnapshot.exists()) {
//     const docData = mySnapshot.data();
//     console.log(`My data is ${JSON.stringify(docData)}`);
//   }
// };

// Встановлення слухача документа. Слухач робить:
// 1. Створює знімок документу;
// 2. Після кожного оновлення документу робить його новий знімок.
// function listenToADocument() {
//   onSnapshot(specialOfTheDay, docSnapshot => {
//     if (docSnapshot.exists()) {
//       const docData = docSnapshot.data();
//       console.log(`My data is ${JSON.stringify(docData)}`);
//     }
//   });
// };

// writeDailySpecial();
// addNewDocument();
// readASingleDocument();
// listenToADocument();
// updateWrittenDailySpecial();
