import { initializeApp } from "firebase/compat/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/database';
import 'firebase/compat/firestore';
import "@firebase/auth";






  const firebaseConfig = {

    apiKey: "AIzaSyDRssn5ZuwZzvqICDtRjsBKsMEWERudgaw",
    authDomain: "tasks-7b353.firebaseapp.com",
    databaseURL: "https://tasks-7b353-default-rtdb.firebaseio.com",
    projectId: "tasks-7b353",
    storageBucket: "tasks-7b353.appspot.com",
    messagingSenderId: "95793570338",
    appId: "1:95793570338:web:65ce0ea57534ae84e6607b"
    }
  
  
  firebase.initializeApp(firebaseConfig);
  //const database = firebase.firestore();
  //const database = firebase.firestore();

  export default firebase