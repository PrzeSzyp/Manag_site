import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBPXRsY-RHia0IRb_UYob8xq_MGdfEkGtw",
  authDomain: "managsite-e2cc3.firebaseapp.com",
  projectId: "managsite-e2cc3",
  storageBucket: "managsite-e2cc3.appspot.com",
  messagingSenderId: "670238543238",
  appId: "1:670238543238:web:7e19596d854dd09808b007"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }