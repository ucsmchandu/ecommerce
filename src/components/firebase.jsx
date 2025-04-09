// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYg2imZQj7B0dUtHpT2veJ06qr6NpA87k",
  authDomain: "e-commerce-ae46b.firebaseapp.com",
  projectId: "e-commerce-ae46b",
  storageBucket: "e-commerce-ae46b.firebasestorage.app",
  messagingSenderId: "217856123875",
  appId: "1:217856123875:web:4c371abc4f5a6c2085b6d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();//this is for login,signin and currentUser to get the details
export const db=getFirestore(app);//this is for to store the extra details fo the user like username and other stuff in firestore
export default app;