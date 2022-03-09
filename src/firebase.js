import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCapFBRjQG6PixiuAj_gpitXYd_wgcnmbE",
    authDomain: "sickst-dev.firebaseapp.com",
    databaseURL: "https://sickst-dev-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sickst-dev",
    storageBucket: "sickst-dev.appspot.com",
    messagingSenderId: "490324437251",
    appId: "1:490324437251:web:e15353b95b6534718ba136"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);