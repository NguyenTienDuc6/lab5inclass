// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/storage';
import 'firebase/database'
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCqYUqYg_t0z8Wi2_eW0slv9D_kfQ3ULY",
  authDomain: "webb-f09ec.firebaseapp.com",
  projectId: "webb-f09ec",
  storageBucket: "webb-f09ec.appspot.com",
  messagingSenderId: "403747337348",
  appId: "1:403747337348:web:4099899ec56e895beebed1",
  measurementId: "G-KSY58ZNYB0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db