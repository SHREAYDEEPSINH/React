
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSaynupO5eixBoM_MaXw82n1x4BqEiMFk",
  authDomain: "painter-63c17.firebaseapp.com",
  projectId: "painter-63c17",
  storageBucket: "painter-63c17.firebasestorage.app",
  messagingSenderId: "699944108860",
  appId: "1:699944108860:web:25573b829a72da0b265439",
  databaseURL : "https://painter-63c17-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);