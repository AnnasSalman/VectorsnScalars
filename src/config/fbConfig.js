import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyABiH-XK-LCPOZKud8IE0QM8GMH5Y-NIMs",
    authDomain: "vectorsnscalars-85f36.firebaseapp.com",
    databaseURL: "https://vectorsnscalars-85f36.firebaseio.com",
    projectId: "vectorsnscalars-85f36",
    storageBucket: "vectorsnscalars-85f36.appspot.com",
    messagingSenderId: "462651156004",
    appId: "1:462651156004:web:c51b1a3f191b0756779ab1",
    measurementId: "G-WEZQVY11FE"
};
// Initialize config
firebase.initializeApp(firebaseConfig);

export default firebase
