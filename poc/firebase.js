import * as firebase from 'firebase';

// Initialize Firebase
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA_8o8GD_QUrHfsvpkTlgEWDoOwWQshanE",
    authDomain: "reactnativearkhotest.firebaseapp.com",
    databaseURL: "https://reactnativearkhotest.firebaseio.com",
    projectId: "reactnativearkhotest",
    storageBucket: "reactnativearkhotest.appspot.com",
    messagingSenderId: "503266762160"
});

export default firebaseApp;
