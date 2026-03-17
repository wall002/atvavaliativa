import { db } from "./firebase.config.js";

import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const colRef = collection(db, "treinos");

// Inputs
const btnAdd = document.getElementById('btn-add');
const inputExercise = document.getElementById('exercise');
const inputReps = document.getElementById('reps');

// 👉 SALVAR
btnAdd.addEventListener('click', async () => {
    const nome = inputExercise.value;
    const repeticao = inputReps.value;

    if(nome && repeticao) {
        try {
            await addDoc(colRef, {
                nome: nome,
                repeticao: repeticao,
                criadoEm: serverTimestamp()
            });
            
            inputExercise.value = '';
            inputReps.value = '';
        } catch (error) {
            console.error("Erro ao salvar:", error);
        }
    } else {
        alert("Preencha todos os campos!");
    }
});

// 👉 LISTAR EM TEMPO REAL
const listElement = document.getElementById('exercise-list');

const q = query(colRef, orderBy("criadoEm", "desc"));

onSnapshot(q, (snapshot) => {
    listElement.innerHTML = "";

    if (snapshot.empty) {
        listElement.innerHTML = '<li class="empty-msg">Nenhum treino hoje! 💪</li>';
        return;
    }

    snapshot.docs.forEach(doc => {
        const dado = doc.data();

        const li = document.createElement('li');
        li.classList.add('exercise-item');
        
        li.innerHTML = `
            <div>
                <strong>${dado.nome}</strong>
                <span>${dado.repeticao}</span>
            </div>
            <span>✅</span>
        `;

        listElement.appendChild(li);
    });
});