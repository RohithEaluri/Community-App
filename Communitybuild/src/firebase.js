import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRtk8ayFfXwEIJduxedTbbSTSrIuZjrhU",
  authDomain: "slackrem.firebaseapp.com",
  projectId: "slackrem",
  storageBucket: "slackrem.appspot.com",
  messagingSenderId: "611368985561",
  appId: "1:611368985561:web:e663053b2476feb5666fc8",
  measurementId: "G-DJ004JK59M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db} 