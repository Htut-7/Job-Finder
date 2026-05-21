import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALxkacm8QpbmsYYA9Xbjt4EfTmItHTjAU",
  authDomain: "job-finder-e6cb2.firebaseapp.com",
  projectId: "job-finder-e6cb2",
  storageBucket: "job-finder-e6cb2.firebasestorage.app",
  messagingSenderId: "83906567358",
  appId: "1:83906567358:web:d2eed5ce6fd9d0ae23d2ef",
  measurementId: "G-SC29Q1NCVB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db= getFirestore(app);

export {auth,db}