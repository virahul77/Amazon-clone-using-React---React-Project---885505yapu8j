// import firebase from "firebase";
import {initializeApp} from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
// import {auth} from 'firebase/auth'
const db = require("firebase/database")


const firebaseConfig = {
  apiKey: "AIzaSyA1EavoEIILWVphCeSOTYXKh1PQHNBWbVc",
  authDomain: "clone-v77.firebaseapp.com",
  databaseURL: "https://clone-v77-default-rtdb.firebaseio.com",
  projectId: "clone-v77",
  storageBucket: "clone-v77.appspot.com",
  messagingSenderId: "722997881932",
  appId: "1:722997881932:web:4fa31d7e96dcfd77b598e9",
  measurementId: "G-EDP45CZJ0D"
};

const firebaseApp = initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
const auth = getAuth();

// const auth = require('firebase/auth');
export { db, auth ,createUserWithEmailAndPassword,signInWithEmailAndPassword};
