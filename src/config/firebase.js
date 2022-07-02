import firebase from "firebase/app";

require("firebase/auth");
require("firebase/firestore");

export const firebaseConfig = {
  apiKey: "################################",
  authDomain: "################################",
  projectId: "################################",
  storageBucket: "################################",
  messagingSenderId: "################################",
  appId: "################################",
  measurementId: "################################",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
