import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { onAuthReady } from "./authentication.js";
import { db } from "./firebaseConfig.js";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

async function displayGroups() {
  const planBoxTemplate = document.getElementById("planTemplate");
  const plansHere = document.getElementById("plans-here");
  plansHere.innerHTML = ""; // Clear previous content

  onAuthReady(async (user) => {
    if (!user) {
      console.log("No user logged in");
      return;
    }

    const userRef = doc(db, "users", user.uid);
    const personalPlans = collection(db, "plans");

    try {
      const querySnapshot = await getDocs(personalPlans);
      let hasPlans = false;

      querySnapshot.forEach((docSnap) => {
        const plan = docSnap.data();
        const membersArray = Array.isArray(plan.members) ? plan.members : [];
        const isMember = membersArray.some(
          (memberRef) => memberRef.id === userRef.id
        );

        if (isMember) {
          hasPlans = true;
          const newPlan = planBoxTemplate.content.cloneNode(true);
          newPlan.querySelector(".plan-title").textContent = plan.title;
          newPlan.querySelector(".plan-info").textContent = plan.description;
          plansHere.appendChild(newPlan);
        }
      });

      // Show hint if no plans
      if (!hasPlans) {
        const noPlanDiv = document.createElement("div");
        noPlanDiv.className = "card text-center p-3 my-3"; // Bootstrap card
        noPlanDiv.innerHTML = `
          <p class="mb-3 text-muted">You don’t have any plans yet.</p>
          <div class="d-flex justify-content-center gap-2">
            <button class="btn btn-outline-primary" id="createPlanBtn">Create a Plan</button>
            <button class="btn btn-outline-secondary" id="joinPlanBtn">Join a Plan</button>
          </div>
        `;
        plansHere.appendChild(noPlanDiv);

        // Button event listeners
        document
          .getElementById("createPlanBtn")
          .addEventListener("click", () => {
            window.location.href = "create.html";
          });
        document.getElementById("joinPlanBtn").addEventListener("click", () => {
          window.location.href = "join.html";
        });
      }
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  });
}

displayGroups();
