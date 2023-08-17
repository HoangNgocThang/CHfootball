// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgLNX0N0R0uvMArYVL6DmnFMIo-Uges3A",
    authDomain: "chfootball-d2e67.firebaseapp.com",
    projectId: "chfootball-d2e67",
    storageBucket: "chfootball-d2e67.appspot.com",
    messagingSenderId: "46322550303",
    appId: "1:46322550303:web:7da1b6006ecaee26d4372a",
    measurementId: "G-RH3L8PYDS2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)