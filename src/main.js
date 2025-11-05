import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import {
    onAuthReady
} from "./authentication.js"
import { db } from "./firebaseConfig.js";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore";

function sayHello() {}
// document.addEventListener('DOMContentLoaded', sayHello);

async function displayGroups() {
    let planBoxTemplate = document.getElementById("planTemplate");
    const personalPlans = collection(db, "plans")

    try {
        const querySnapshot = await getDocs(personalPlans);
        querySnapshot.forEach(doc => {
            let newPlan = planBoxTemplate.content.cloneNode(true);
            const plan = doc.data();

            newPlan.querySelector(".plan-title").textContent = plan.title;
            newPlan.querySelector(".plan-info").textContent = plan.description;
            document.getElementById("plans-here").appendChild(newPlan);
        });
    } catch (error) {
        console.error("error getting documents: ", error);
    }
}

displayGroups();