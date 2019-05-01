import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyATwfHsTO3jZuuuistEVG6ByS19rIi1MAM",
  authDomain: "contactsappreactnative.firebaseapp.com",
  databaseURL: "https://contactsappreactnative.firebaseio.com",
  projectId: "contactsappreactnative",
  storageBucket: "contactsappreactnative.appspot.com",
  messagingSenderId: "325128930003"
};
firebase.initializeApp(config);

export default firebase;
