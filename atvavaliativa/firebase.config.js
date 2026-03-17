// Importa funções do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// 🔥 COLE AQUI SUAS CREDENCIAIS DO FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyBzmj_fVj1JbnfYEaWXRbCaSSR7eOVFI6I",
  authDomain: "meutreinowalery.firebaseapp.com",
  projectId: "meutreinowalery",
  storageBucket: "meutreinowalery.firebasestorage.app",
  messagingSenderId: "687917736109",
  appId: "1:687917736109:web:6a9f9b1133f7a7c11e2624",
  measurementId: "G-TN2JF4VCJE"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Firestore
const db = getFirestore(app);

// Exporta o banco
export { db };