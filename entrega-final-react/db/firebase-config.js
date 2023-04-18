import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0dcBfQ9qQMY_Z5jkGmVlosTy-R6gx0yI",
  authDomain: "ecommerce-coder-fa230.firebaseapp.com",
  projectId: "ecommerce-coder-fa230",
  storageBucket: "ecommerce-coder-fa230.appspot.com",
  messagingSenderId: "327441479566",
  appId: "1:327441479566:web:a3d051a5963b0fa48d96df",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db };
export { auth };
