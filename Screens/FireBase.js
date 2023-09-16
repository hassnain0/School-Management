import { initializeApp } from '@firebase/app';
import { getAuth } from '@firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage'
import 'firebase/compat/firestore';


 const firebaseConfig = {
  apiKey: "AIzaSyA60j551D3501j6P8g0R4s9GxHFZlOXjKY",
  authDomain: "myproject-6dfb3.firebaseapp.com",
  projectId: "myproject-6dfb3",
  storageBucket: "myproject-6dfb3.appspot.com",
  messagingSenderId: "71963470961",
  appId: "1:71963470961:web:500afe0c4fae6e58a17fd0",
  measurementId: "G-13TTND3JEG",

};

 const app=initializeApp(firebaseConfig)
    firebase.initializeApp(firebaseConfig)
   
   const db=firebase.firestore()

   const auth=getAuth(app);

   export  {db,auth,firebaseConfig,firebase};   
