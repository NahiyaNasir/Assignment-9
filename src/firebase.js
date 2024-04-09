// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9s6dNG4JUc3tRjEeOGvqOO5lSartyTNI",
  authDomain: "assigment9-d9c65.firebaseapp.com",
  projectId: "assigment9-d9c65",
  storageBucket: "assigment9-d9c65.appspot.com",
  messagingSenderId: "797400157368",
  appId: "1:797400157368:web:02f78e43acab44cf24f84d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
console.log(auth);
export  default auth