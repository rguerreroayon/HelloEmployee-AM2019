import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC9XERpsB3sqb5PCgzwIVzGHfQzzoYVYSc",
    authDomain: "helloemployee2019.firebaseapp.com",
    databaseURL: "https://helloemployee2019.firebaseio.com",
    projectId: "helloemployee2019",
    storageBucket: "helloemployee2019.appspot.com",
    messagingSenderId: "1035575563065",
    appId: "1:1035575563065:web:9ff00f2431795a58ba8ee8",
    measurementId: "G-M17NX99788"


};


!firebase.app.length ? firebase.initializeApp(config) : '';
firebase.initializeApp(config);
export const auth = firebase.auth();