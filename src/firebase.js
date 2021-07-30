// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBZSAWfG-qe422a9-H8Ka6J7Wa6AVDO4Ao",
    authDomain: "clone-70a8b.firebaseapp.com",
    projectId: "clone-70a8b",
    storageBucket: "clone-70a8b.appspot.com",
    messagingSenderId: "698715082703",
    appId: "1:698715082703:web:16cf31ad342831e7c70cba",
    measurementId: "G-TFPVG7PZZG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };