//import firebase from 'firebase'
import firestore from 'firebase/firestore'

/* 
const firebaseConfig = {
    apiKey: "AIzaSyCGjYEU8Wo2PfWoZy_5-m6WW8yjD_zLZEU",
    authDomain: "crud-cliente-b2ed9.firebaseapp.com",
    databaseURL: "https://crud-cliente-b2ed9.firebaseio.com",
    projectId: "crud-cliente-b2ed9",
    storageBucket: "crud-cliente-b2ed9.appspot.com",
    messagingSenderId: "505931563320",
    appId: "1:505931563320:web:d27e44d1b53d6db69401cd",
    measurementId: "G-RSQFMMFF7P"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({});//timestampsInSnapshots: true

export default firebaseApp.firestore();

*/

import {initializeApp} from 'firebase'

const app = initializeApp({
    apiKey: "AIzaSyCGjYEU8Wo2PfWoZy_5-m6WW8yjD_zLZEU",
    authDomain: "crud-cliente-b2ed9.firebaseapp.com",
    databaseURL: "https://crud-cliente-b2ed9.firebaseio.com",
    projectId: "crud-cliente-b2ed9",
    storageBucket: "crud-cliente-b2ed9.appspot.com",
    messagingSenderId: "505931563320",
    appId: "1:505931563320:web:d27e44d1b53d6db69401cd",
    measurementId: "G-RSQFMMFF7P"
})

export const db = app.database()





