// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0rgCWQdkDKmr9p-5b7DDzDKlrfhix86Y",
  authDomain: "full-code-af8cc.firebaseapp.com",
  projectId: "full-code-af8cc",
  storageBucket: "full-code-af8cc.firebasestorage.app",
  messagingSenderId: "104464938416",
  appId: "1:104464938416:web:adf0e0bf24451a193d9275",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};