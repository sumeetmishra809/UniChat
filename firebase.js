 

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBNQp50RwYjyaox6lBr_A49a9X_VajMr4I",
    authDomain: "unichat-32c5a.firebaseapp.com",
    projectId: "unichat-32c5a",
    storageBucket: "unichat-32c5a.appspot.com",
    messagingSenderId: "245537172031",
    appId: "1:245537172031:web:b0d884e39fe025d24c268a",
    measurementId: "G-PQSB67D9TW"
}).auth();

