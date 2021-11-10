import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyDR_V-kFUytZkQpNWKGNorDZ1fLxC8KtGs",
    authDomain: "tarefas-1e8c2.firebaseapp.com",
    projectId: "tarefas-1e8c2",
    storageBucket: "tarefas-1e8c2.appspot.com",
    messagingSenderId: "568987438343",
    appId: "1:568987438343:web:18d4ae44d23260915809a2",
    measurementId: "G-1K1T1BRE8K"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;