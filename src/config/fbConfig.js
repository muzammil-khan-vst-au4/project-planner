import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAb44jE2qvTU9GNs_oSj_i_yNiVsB5QAvE",
    authDomain: "project-planner-6360d.firebaseapp.com",
    databaseURL: "https://project-planner-6360d.firebaseio.com",
    projectId: "project-planner-6360d",
    storageBucket: "project-planner-6360d.appspot.com",
    messagingSenderId: "742113520272",
    appId: "1:742113520272:web:aa0fb3478bb96271cc4615",
    measurementId: "G-03Z49XTX3B"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
firebase.firestore().settings({}) 

export default firebase;