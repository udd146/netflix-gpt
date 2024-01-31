// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdyKalUQI9eADtACwpjYRVKXhutY8onBM",
  authDomain: "netflix-gpt-57921.firebaseapp.com",
  projectId: "netflix-gpt-57921",
  storageBucket: "netflix-gpt-57921.appspot.com",
  messagingSenderId: "764396558840",
  appId: "1:764396558840:web:d4334261483a084f421e0d",
  measurementId: "G-ZQXDRT9XMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();