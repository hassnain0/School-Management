// Import the functions you need from the SDKs you need
import { initializeApp } from '@firebase/app';
import { getAuth } from '@firebase/auth';
import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 export const firebaseConfig = {
  apiKey: "AIzaSyCiEeFjdxAYZLrnQshkdFitBgZYU49dUFs",
  authDomain: "schoolproject-a0cc0.firebaseapp.com",
  projectId: "schoolproject-a0cc0",
  storageBucket: "schoolproject-a0cc0.appspot.com",
  messagingSenderId: "679623123689",
  appId: "1:679623123689:web:9cf7c90a3712f470a84678",
  measurementId: "G-KMJFH4W4ZB"
};

const app=initializeApp(firebaseConfig)
firebase.initializeApp(firebaseConfig)
   
const db=firebase.firestore()
const auth=getAuth(app);
export  {db,auth};   


