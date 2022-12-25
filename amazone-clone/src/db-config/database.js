import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyD5gPv8Dcie6xLV47u_ZMtwJgCFvjY0Yz4",
  authDomain: "clone-f64da.firebaseapp.com",
  projectId: "clone-f64da",
  storageBucket: "clone-f64da.appspot.com",
  messagingSenderId: "1039079580570",
  appId: "1:1039079580570:web:7cf1ae160f8d8f7de09023",
  measurementId: "G-28PTCWZZ31",
});

const db = firebase.firestore();

export { db };
