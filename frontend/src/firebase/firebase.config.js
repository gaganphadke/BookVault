// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSLnELaRPnKIBfpt3EWMGlr1dumwqr0lg",
  authDomain: "bookvault-59325.firebaseapp.com",
  projectId: "bookvault-59325",
  storageBucket: "bookvault-59325.appspot.com",
  messagingSenderId: "282419125669",
  appId: "1:282419125669:web:1c1f7e14230a4287cc5c4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;