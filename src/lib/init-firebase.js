import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getDatabase } from "firebase/database";

//Configuracion del proyecto
const firebaseConfig = {
  apiKey: "AIzaSyCXlJJdTDvT4ZYjwz-RuQPN-voAs1_3Ks4",
  authDomain: "nuevaprueba-9e0ff.firebaseapp.com",
  projectId: "nuevaprueba-9e0ff",
  storageBucket: "nuevaprueba-9e0ff.appspot.com",
  messagingSenderId: "68763080115",
  appId: "1:68763080115:web:c8075315e347c3f38b27c6"
};

// Iniciar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const database = getDatabase();
