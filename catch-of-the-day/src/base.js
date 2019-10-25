import Rebase from 're-base';
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAzYeq1pdqpMHCPr7gCncEpJd1zUjjZdeo",
    authDomain: "catch-of-the-day-oct2019.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-oct2019.firebaseio.com",
    projectId: "catch-of-the-day-oct2019",
    storageBucket: "catch-of-the-day-oct2019.appspot.com",
    messagingSenderId: "927923215537",
    appId: "1:927923215537:web:2508c26b0746d4375f5690",
    measurementId: "G-7BYYB88L5Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
//firebaseApp.analytics();

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;
