import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const input = document.getElementbyId("inputField")
const boto =  document.getElementbyId("afegir")

const appConfiguracio = {
    databaseURL: "https://llista-428ab-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp (appConfiguracio);
const baseDades = getDatabase (app);
const task = ref(baseDades, "tareas");

boto.addEventListener("click", function (){
    push (task, input.value)
    alert ("Afegir a la BD")

})
















