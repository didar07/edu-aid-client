// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB55Yr731RZu85sdeJdrdN4Hvx7sEEElss",
    authDomain: "edu-aid-client.firebaseapp.com",
    projectId: "edu-aid-client",
    storageBucket: "edu-aid-client.appspot.com",
    messagingSenderId: "296403760076",
    appId: "1:296403760076:web:cdbb69015c883c2297a369"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app