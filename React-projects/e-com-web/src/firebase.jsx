import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyACveWWYjHsBb8y1g9gixggfyFAQquqsro",
  authDomain: "pre-web-app-cd680.firebaseapp.com",
  projectId: "pre-web-app-cd680",
  storageBucket: "pre-web-app-cd680.appspot.com",
  messagingSenderId: "1094058474003",
  appId: "1:1094058474003:web:60f449ec2046fc34b39de6",
  databaseURL : "https://pre-web-app-cd680-default-rtdb.firebaseio.com"
};


export const app = initializeApp(firebaseConfig);