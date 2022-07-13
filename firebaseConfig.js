import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQw9ng8SRZ-MEYrdZJYAY-3TcF-j-Fv1I",
  authDomain: "discopersc-d84de.firebaseapp.com",
  projectId: "discopersc-d84de",
  storageBucket: "discopersc-d84de.appspot.com",
  messagingSenderId: "834630350211",
  appId: "1:834630350211:web:ad7262b6327e8ed3b432b6",
  measurementId: "G-7SLPZT3TX8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
