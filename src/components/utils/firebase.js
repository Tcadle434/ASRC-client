// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEnS26SzO5D0OFwL1o_wx1RX03NAU7hMo",
  authDomain: "asrc-83e3c.firebaseapp.com",
  projectId: "asrc-83e3c",
  storageBucket: "asrc-83e3c.appspot.com",
  messagingSenderId: "253581293726",
  appId: "1:253581293726:web:8326c9328869e3c86c238f",
  measurementId: "G-W2EGF647BR"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export default firebase;