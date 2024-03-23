// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "@firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKLl3hZJoi90O3i19kuebYdxLuCFRf29s",
  authDomain: "cyberpolaimageupload.firebaseapp.com",
  projectId: "cyberpolaimageupload",
  storageBucket: "cyberpolaimageupload.appspot.com",
  messagingSenderId: "969922604793",
  appId: "1:969922604793:web:a39a8235b88483b61b7c28",
  measurementId: "G-TGPP96NRR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getStorage(app);