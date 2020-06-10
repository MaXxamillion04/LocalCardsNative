import * as firebase from "react-native-firebase";
export const config = {
    apiKey: "AIzaSyDoG4eWlZpyV4bUijIbWZWEgwuw60f6fEE",
    authDomain: "localcards-dev.firebaseapp.com",
    databaseURL: "https://localcards-dev.firebaseio.com",
    projectId: "localcards-dev",
    storageBucket: "localcards-dev.appspot.com",
    messagingSenderId: "974634530742",
    appId: "1:974634530742:web:b3e410acc5356eab807317",
    measurementId: "G-W6HW1EW9KG"
  };

  export default firebase.initializeApp(config);