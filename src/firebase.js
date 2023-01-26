// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0eO9x2uo4UWpVl1bAYzKdGCNvXAUknks",
    authDomain: "nikis-train.firebaseapp.com",
    projectId: "nikis-train",
    storageBucket: "nikis-train.appspot.com",
    messagingSenderId: "824932650389",
    appId: "1:824932650389:web:e28b1a0315d208885eba9c",
    measurementId: "G-S0NE0GH51L",
    databaseURL: 'https://nikis-train-default-rtdb.europe-west1.firebasedatabase.app'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseApp