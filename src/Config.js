import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDWbP4TyLR2VnFwCz-hA-Wxw137HhvkCVU",
    authDomain: "react-todo-99559.firebaseapp.com",
    databaseURL: "https://react-todo-99559.firebaseio.com",
    projectId: "react-todo-99559",
    storageBucket: "react-todo-99559.appspot.com",
    messagingSenderId: "846877547596",
    appId: "1:846877547596:web:9b454316162430cbb728e9",
    measurementId: "G-JH8PKKRCGK"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire;