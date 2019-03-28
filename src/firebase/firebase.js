import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDLyl3c34ju8KCw7VnfgBkqG3PqB8HV7-8",
    authDomain: "caloriecounter-bd73f.firebaseapp.com",
    databaseURL: "https://caloriecounter-bd73f.firebaseio.com",
    projectId: "caloriecounter-bd73f",
    storageBucket: "caloriecounter-bd73f.appspot.com",
    messagingSenderId: "280588833272"
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database};