// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7tvagPQnOhlsu8KVp1YwyTr0c6-_Yw78",
    authDomain: "nilami-29e45.firebaseapp.com",
    projectId: "nilami-29e45",
    storageBucket: "nilami-29e45.appspot.com",
    messagingSenderId: "37135620489",
    appId: "1:37135620489:web:9fec561c67b761b253e958"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db };