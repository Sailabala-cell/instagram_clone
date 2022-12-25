import firebase from 'firebase/app'
import  'firebase/auth'
import 'firebase/firestore'
import 'cors'
const firebaseConfig = {
  apiKey: "AIzaSyCDtIgYxYHOOn5VaCCwVrwTEbdcmigXJ6A",
  authDomain: "rn-instagram-clone-5f6da.firebaseapp.com",
  projectId: "rn-instagram-clone-5f6da",
  storageBucket: "rn-instagram-clone-5f6da.appspot.com",
  messagingSenderId: "395431692732",
  appId: "1:395431692732:web:ce825bf5802498079243b9",
  measurementId: "G-58W1CWN32D"
};


!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
const db = firebase.firestore()
export { firebase, db}