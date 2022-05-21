import firebase from "firebase/app";
import 'firebase/firestore' 
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB1MftpdSwYUTsBMv7iE-rdsiSzirS7srI",
    authDomain: "managmentsite.firebaseapp.com",
    projectId: "managmentsite",
    storageBucket: "managmentsite.appspot.com",
    messagingSenderId: "831789695429",
    appId: "1:831789695429:web:159ba6a152596725e18bac"
  };

  // initalize app
  firebase.initializeApp(firebaseConfig)

  // services
  const proFirestore = firebase.firestore()
  const proAuth = firebase.auth()

  // time
  const timestamp = firebase.firestore.Timestamp

  // exports

  export {proFirestore, proAuth, timestamp}