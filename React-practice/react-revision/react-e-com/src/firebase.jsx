// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmsYZgDcjI0kDPx9c--q2lRIMHQhbq6ic",
  authDomain: "re-e-com.firebaseapp.com",
  projectId: "re-e-com",
  storageBucket: "re-e-com.firebasestorage.app",
  messagingSenderId: "823695185051",
  appId: "1:823695185051:web:61a6e6af72c3ea095fa23e",
  databaseURL: "https://re-e-com-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);