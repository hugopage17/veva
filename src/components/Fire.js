import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCIN6KeGtbiV5c8dQy25klBiLM0XFkB0JI",
  authDomain: "veva-dev.firebaseapp.com",
  databaseURL: "https://veva-dev.firebaseio.com",
  projectId: "veva-dev",
  storageBucket: "veva-dev.appspot.com",
  messagingSenderId: "713037402342",
  appId: "1:713037402342:web:9dd01c89262f68ce46eb27",
  measurementId: "G-KJ53HS0MQ9"
};

const fire = firebase.initializeApp(firebaseConfig)
export default fire
