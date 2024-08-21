import { firebase } from "@react-native-firebase/messaging";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCm-i7wilFlbpCQ1Apaj-cSqPwiYGcfDiE",
  authDomain: "pia-application-e7674.firebaseapp.com",
  projectId: "pia-application-e7674",
  storageBucket: "pia-application-e7674.appspot.com",
  messagingSenderId: "814009539294",
  appId: "1:814009539294:android:d897b29d878583d5ee404f",
  measurementId: "",
};

const app = !getApps().length ?initializeApp(firebaseConfig) :getApp() ;


const auth = getAuth(app);
const db = getFirestore(app);

export { app, firebaseConfig, auth, db };
