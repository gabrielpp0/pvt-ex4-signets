import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyBSlXwTxpPtotdlCDMZUVaGCHzDPfBe7CM",
  authDomain: "signet-4b02b.firebaseapp.com",
  projectId: "signet-4b02b",
  storageBucket: "signet-4b02b.appspot.com",
  messagingSenderId: "832467340854",
  appId: "1:832467340854:web:ac6e5dde706254b1289297",
  measurementId: "G-CFBP1KN3V6"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
