// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNtO0H60oP1sYmOFwkbuHgbU9sLpqryQA",
  authDomain: "vue-app-40f22.firebaseapp.com",
  projectId: "vue-app-40f22",
  storageBucket: "vue-app-40f22.appspot.com",
  messagingSenderId: "123668407736",
  appId: "1:123668407736:web:ee4a0fc76ef32e34145b4d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const userCollection = collection(db, "users");
export default userCollection;
