import { initializeApp } from './node_modules/firebase/app';
import { getFirestore, collection, getDocs, addDoc  } from './node_modules/firebase/firestore/lite';

const config = {
    apiKey: "AIzaSyC4Bck0iKPVRHHJUG073LhpOhg_vSaE-JU",
    authDomain: "ect2525-2022.firebaseapp.com",
    projectId: "ect2525-2022",
    storageBucket: "ect2525-2022.appspot.com",
    messagingSenderId: "886112431532",
    appId: "1:886112431532:web:fb4ce054de33a59dfede09",
    measurementId: "G-948HV3D38T"
};

const app = initializeApp(config);
const db = getFirestore(app);

export { db, collection, getDocs, addDoc }