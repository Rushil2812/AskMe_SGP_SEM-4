// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getauth, GoogleAuthProvider} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcyyQOSRpUyV-Eb3gwUgFwwbnbAmvqREI",
  authDomain: "askme-fa3be.firebaseapp.com",
  projectId: "askme-fa3be",
  storageBucket: "askme-fa3be.appspot.com",
  messagingSenderId: "852352220999",
  appId: "1:852352220999:web:812be8584f1f6c5604d662",
  measurementId: "G-SEG5LVNQ9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getauth()
const provider = new GoogleAuthProvider()

export {auth,provider}