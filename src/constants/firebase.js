import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDwIFmcZirFKtrD-vZA_kGeBt_ea68mEos",
  authDomain: "my-portfolio-dc418.firebaseapp.com",
  projectId: "my-portfolio-dc418",
  storageBucket: "my-portfolio-dc418.appspot.com",
  messagingSenderId: "550813051227",
  appId: "1:550813051227:web:aba6e5abb1fc6b65c2127e",
  measurementId: "G-MXZK8GG2SC"
};


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;