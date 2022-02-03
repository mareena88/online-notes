import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
 apiKey: "AIzaSyBBhO5pQPkFTHSyfC1XKEgsz4fqUlMpf8A",
 authDomain: "online-notes-app-f7787.firebaseapp.com",
 projectId: "online-notes-app-f7787",
 storageBucket: "online-notes-app-f7787.appspot.com",
 messagingSenderId: "820266170911",
 appId: "1:820266170911:web:05bef7fc1377c32a22732a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// db firestore
export const db = getFirestore();

export const auth = getAuth(app);
