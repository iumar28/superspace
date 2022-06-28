import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCzKkPu6CAAooVl3fd4mK0oyqSu6hhT1U0",
    authDomain: "superspaceikg.firebaseapp.com",
    databaseURL: "https://superspaceikg-default-rtdb.firebaseio.com",
    projectId: "superspaceikg",
    storageBucket: "superspaceikg.appspot.com",
    messagingSenderId: "291650181465",
    appId: "1:291650181465:web:f28b8bb4ec4d6c51349448"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const storage = getStorage(app)

export {app, firestore, storage};


