
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA6Kf9WfUM270VHkRdc8YpQGGgBUrUo3P8",
  authDomain: "multi-project-85527.firebaseapp.com",
  projectId: "multi-project-85527",
  storageBucket: "multi-project-85527.appspot.com",
  messagingSenderId: "91632430153",
  appId: "1:91632430153:web:287f1a5aaaa2a083e8e398",
  measurementId: "G-NWSWZ1QE24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};
