import { initializeApp } from "firebase/app";


const firebaseConfig = {

  apiKey: "AIzaSyB5VINA5PtPP2-mEWe-PRVe-eLEykpAM_0",
  authDomain: "painter-f9b0e.firebaseapp.com",
  projectId: "painter-f9b0e",
  storageBucket: "painter-f9b0e.firebasestorage.app",
  messagingSenderId: "892442476828",
  appId: "1:892442476828:web:01449ce78bb687acc73ad9",
  databaseURL: "https://painter-f9b0e-default-rtdb.firebaseio.com",
};


export const app = initializeApp(firebaseConfig);