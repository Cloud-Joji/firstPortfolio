import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBAZO-6voHVNqAFogxjZ3OlvINvn-9tk2w",
  authDomain: "public-test-portfolio.firebaseapp.com",
  projectId: "public-test-portfolio",
  storageBucket: "public-test-portfolio.appspot.com",
  messagingSenderId: "132990216696",
  appId: "1:132990216696:web:69c77d94bdff506fad0e0d"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore()

