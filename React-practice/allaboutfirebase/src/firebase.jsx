import { initializeApp } from 'firebase/app'


const firebaseConfig = {
    apiKey: "AIzaSyBPgRavodcN7AwOMCqz7daZRmG1jyomDH4",
    authDomain: "mybook-app-712dc.firebaseapp.com",
    projectId: "mybook-app-712dc",
    storageBucket: "mybook-app-712dc.appspot.com",
    messagingSenderId: "1074981249711",
    appId: "1:1074981249711:web:da9a74d19f5e899b4b2a5a",
    databaseURL: "https://mybook-app-712dc-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);