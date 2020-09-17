import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDGElRuGxMKBJEceYvTiux0Ksgc18cZeAE",
    authDomain: "whatsapp-clone-003.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-003.firebaseio.com",
    projectId: "whatsapp-clone-003",
    storageBucket: "whatsapp-clone-003.appspot.com",
    messagingSenderId: "354623977489",
    appId: "1:354623977489:web:9f60acfd151805e97319b0",
    measurementId: "G-EMS9FMTKF8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;