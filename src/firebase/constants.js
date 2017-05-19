import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBeIRUbaA5qirbF0Y6PocLAdrNet5RuJ84",
  authDomain: "marvelousvo-96160.firebaseapp.com",
  databaseURL: "https://marvelousvo-96160.firebaseio.com",
  projectId: "marvelousvo-96160",
  storageBucket: "marvelousvo-96160.appspot.com",
  messagingSenderId: "615670358203"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const auth = firebase.auth();
export const db = firebase.database();
//export var storageRef = firebase.storage().ref();
export const google = new firebase.auth.GoogleAuthProvider();
export const github = new firebase.auth.GithubAuthProvider();

//export default firebase;
