import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB_41cRz6nvwm5nzJozFANlspV4tO4Aio4",
    authDomain: "chat-react-be88d.firebaseapp.com",
    databaseURL: "https://chat-react-be88d.firebaseio.com",
    projectId: "chat-react-be88d",
    storageBucket: "chat-react-be88d.appspot.com",
    messagingSenderId: "322714834345",
    appId: "1:322714834345:web:8669dc07fb933fb32f60b8",
    measurementId: "G-07NT10TJPX"
};

firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export const db             = firebase.firestore()
export const auth           = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()