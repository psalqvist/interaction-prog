import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD0mYdNg8PqhaPpCmOP2qm_6_7NPacy69s",
    authDomain: "dh2642-cocktail-app.firebaseapp.com",
    projectId: "dh2642-cocktail-app",
    storageBucket: "dh2642-cocktail-app.appspot.com",
    messagingSenderId: "231379160286",
    appId: "1:231379160286:web:1b9dad092b1385ae6cc64f",
    measurementId: "G-RJ340N1RTZ"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;

export const db = firebase.database();