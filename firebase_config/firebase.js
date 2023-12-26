// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDio0TCC30zdflnzYkdlvt5mLufUggW_RU",
  authDomain: "keikoku-138d1.firebaseapp.com",
  projectId: "keikoku-138d1",
  storageBucket: "keikoku-138d1.appspot.com",
  messagingSenderId: "815309660410",
  appId: "1:815309660410:web:973f1fe63db37cac8be943",
  measurementId: "G-NB6H1ZSHYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const googleprovider = new GoogleAuthProvider();

export const db = getFirestore(app);