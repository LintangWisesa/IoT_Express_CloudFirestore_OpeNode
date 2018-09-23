import firebase from 'firebase'
// change lines below with your own Firebase snippets!
var config = {
  apiKey: "AIzaSyAhdkYjBD0TVEur7YBlFjhtn7O_WGHjhjs",
  authDomain: "reactjc06tes.firebaseapp.com",
  databaseURL: "https://reactjc06tes.firebaseio.com",
  projectId: "reactjc06tes",
  storageBucket: "reactjc06tes.appspot.com",
  messagingSenderId: "978962357203"
// var config = {
//   apiKey: "1a2b3c4d5e6f7g8h9i0j",
//   authDomain: "lintang.firebaseapp.com",
//   databaseURL: "https://lintang.firebaseio.com",
//   projectId: "lintang",
//   storageBucket: "lintang.appspot.com",
//   messagingSenderId: "1234567890"
};
const fire = firebase.initializeApp(config);
export default fire;