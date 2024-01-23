// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth, initializeAuth, indexedDBLocalPersistence} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { Capacitor } from "@capacitor/core";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4Quv27K-R1uo6MxugmX5gLDg7DggNkqg",
  authDomain: "ionic-react-practice.firebaseapp.com",
  projectId: "ionic-react-practice",
  storageBucket: "ionic-react-practice.appspot.com",
  messagingSenderId: "180534615858",
  appId: "1:180534615858:web:516a030051d92be0e6c12b",
  measurementId: "G-NPG6LZVLFZ"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);

const selectAuth = () => {
  let auth;
  if (Capacitor.isNativePlatform()) {
    auth = initializeAuth(FIREBASE_APP, {
      persistence: indexedDBLocalPersistence
    })

  } else {
   auth = getAuth(FIREBASE_APP);
  }

  return auth;
}
const FIREBASE_AUTH = selectAuth();



const analytics = getAnalytics(FIREBASE_APP);