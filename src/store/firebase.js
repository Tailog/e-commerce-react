import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBh8pwrgGu9Dz7-YGzYNAE4rvw9W4nhZIc",
  authDomain: "e-commerce-db-3b1c6.firebaseapp.com",
  databaseURL: "https://e-commerce-db-3b1c6.firebaseio.com",
  projectId: "e-commerce-db-3b1c6",
  storageBucket: "e-commerce-db-3b1c6.appspot.com",
  messagingSenderId: "447614497996",
  appId: "1:447614497996:web:89591d12f17b193b46fe69"
};

firebase.initializeApp(firebaseConfig);
 
export const auth = firebase.auth();
export const db = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;