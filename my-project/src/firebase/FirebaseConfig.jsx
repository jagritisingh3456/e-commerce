/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8CRqmAGAWNzMydD4C8I6aI9WWp1zzcqo",
  authDomain: "myapp-c7f0f.firebaseapp.com",
  projectId: "myapp-c7f0f",
  storageBucket: "myapp-c7f0f.appspot.com",
  messagingSenderId: "638911033489",
  appId: "1:638911033489:web:f9b8656cc50d0845b08f30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export {fireDB, auth}
