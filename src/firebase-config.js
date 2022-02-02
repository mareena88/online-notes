import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
 apiKey: "AIzaSyCrW2JLlCg_VdYB2gAWW5z_zqX-N-2mR-M",
 authDomain: "onlinenotes-dev.firebaseapp.com",
 projectId: "onlinenotes-dev",
 storageBucket: "onlinenotes-dev.appspot.com",
 messagingSenderId: "79652839174",
 appId: "1:79652839174:web:e5b87070efac9ab01ec887"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// db firestore
export const db = getFirestore();

export const auth = getAuth(app);
