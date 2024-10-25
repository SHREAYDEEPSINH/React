// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoI9dkcW1rOdCcfwpuX8_OuJfz11gY08A",
  authDomain: "new-app-1a2c1.firebaseapp.com",
  projectId: "new-app-1a2c1",
  storageBucket: "new-app-1a2c1.appspot.com",
  messagingSenderId: "526044241847",
  appId: "1:526044241847:web:389d2d9a364d34c9f51232"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };