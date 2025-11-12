import { auth } from "./firebaseConfig.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { db } from "./firebaseConfig.js";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore";

function sayHello() { }
// document.addEventListener('DOMContentLoaded', sayHello);


const user = auth.currentUser;
//const userID = user.uid;
async function displayGroups(user) {
    try {
        const userDocRef = doc(db, `users/${user.uid}`);
        const userDocSnap = await getDoc(userDocRef);

        const data = userDocSnap.data();
        const recentPlans = data.recentPlans;

        for (const planId of recentPlans) {
            if (!planId) continue;

            const planRef = doc(db, `plans/${planId.trim()}`);
            const planSnap = await getDoc(planRef);

            if (planSnap.exists()) {
                const planBoxTemplate = document.getElementById("planTemplate");
                const plan = planSnap.data();

                let newPlan = planBoxTemplate.content.cloneNode(true);
                newPlan.querySelector(".plan-title").textContent = plan.title;
                newPlan.querySelector(".plan-info").textContent = plan.description;
                document.getElementById("plans-here").appendChild(newPlan);
            } else {
                console.log(`No plan found for ID: ${planId}`);
            }
        }

    } catch (error) {
        console.error("error getting documents: ", error);
    }
}

auth.onAuthStateChanged(async (user) => {
    if (user) {
        await displayGroups(user);
    } else {
        console.log("User is not authenticated");
    }
});