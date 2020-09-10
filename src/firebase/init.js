import firebase from 'firebase'
import firestore from 'firebase/firestore'

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

/* 

import firebase from 'firebase'

import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'
const firebaseApp = firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
const api = firestore.settings(settings);
export default api;

*/



