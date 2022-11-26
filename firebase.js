import { initializeApp } from './node_modules/firebase/app';
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, updateDoc} from './node_modules/firebase/firestore/lite';

const config = {
    apiKey: "AIzaSyAUddfNnWpmwAeFVjxfHpX0C0r8Fvgk-f8",
    authDomain: "lista-mob.firebaseapp.com",
    projectId: "lista-mob",
    storageBucket: "lista-mob.appspot.com",
    messagingSenderId: "653538213953",
    appId: "1:653538213953:web:48394e39f72fddde9106c0",
    measurementId: "G-SV23TLYQ8N"
};

const app = initializeApp(config);
const db = getFirestore(app);

export { db, collection, getDocs, addDoc, deleteDoc, doc, updateDoc}