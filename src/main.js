import { auth } from "./firebaseConfig.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { onAuthReady } from "./authentication.js";
import { db } from "./firebaseConfig.js";
import {
  collection,
  doc,
  getDoc,
  query,
  updateDoc,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
  increment,
} from "firebase/firestore";

// function sayHello() { }
// // document.addEventListener('DOMContentLoaded', sayHello);

// const user = auth.currentUser;
// //const userID = user.uid;
// async function displayGroups(user) {
//     try {
//         const userDocRef = doc(db, `users/${user.uid}`);
//         const userDocSnap = await getDoc(userDocRef);

//         const data = userDocSnap.data();
//         const recentPlans = data.recentPlans;

//         for (const planId of recentPlans) {
//             if (!planId) continue;

//             const planRef = doc(db, `plans/${planId.trim()}`);
//             const planSnap = await getDoc(planRef);

//             if (planSnap.exists()) {
//                 const planBoxTemplate = document.getElementById("planTemplate");
//                 const plan = planSnap.data();

//                 let newPlan = planBoxTemplate.content.cloneNode(true);
//                 newPlan.querySelector(".plan-title").textContent = plan.title;
//                 newPlan.querySelector(".plan-info").textContent = plan.description;
//                 document.getElementById("plans-here").appendChild(newPlan);
//             } else {
//                 console.log(`No plan found for ID: ${planId}`);
//             }
//         }

//     } catch (error) {
//         console.error("error getting documents: ", error);

const plansHere = document.getElementById("plans-here");
const chatBox = document.getElementById("chat-box");
const chatTitle = document.getElementById("chatTitle");
const chatForm = document.getElementById("chat-form");
const chatInput = chatForm.querySelector("input");

let currentMessagesRef = null; // store messages collection ref for selected plan

// Clear plans container
plansHere.innerHTML = "";

// Wait for authentication
onAuthReady(async (user) => {
  if (!user) return;

  const userUID = user.uid;

  try {
    const userDocRef = doc(db, `users/${userUID}`);
    const userDocSnap = await getDoc(userDocRef);

    if (!userDocSnap.exists()) {
      console.error("User document not found.");
      return;
    }

    // Retrieve recentPlans from user document
    const data = userDocSnap.data();

    if (!data.recentPlans || !Array.isArray(data.recentPlans)) {
      console.warn("No recent plans found or it is not an array.");
      return;
    }

    const recentPlans = data.recentPlans;

    // Now load each recent plan
    for (const planId of recentPlans) {
      if (!planId) continue;

      const planRef = doc(db, `plans/${planId.trim()}`);
      const planSnap = await getDoc(planRef);

      if (planSnap.exists()) {
        const plan = planSnap.data();

        // Create plan box
        const planDiv = document.createElement("div");
        planDiv.className = "Msg-Box p-2 mb-2";
        planDiv.innerHTML = `
          <h5 class="plan-title">${plan.title}</h5>
          <p class="plan-info text-muted">${plan.description}</p>
        `;

        // On click: load chat
        planDiv.addEventListener("click", () => {
          loadChat(planId, plan.title, plan.joinCode);
        });

        plansHere.appendChild(planDiv);
      } else {
        console.log(`No plan found for ID: ${planId}`);
      }
    }

    // If no plans were loaded
    if (plansHere.innerHTML === "") {
      const noPlanDiv = document.createElement("div");
      noPlanDiv.className = "card text-center p-3 my-3";
      noPlanDiv.innerHTML = `
        <p class="mb-3 text-muted">You don’t have any plans yet.</p>
        <div class="d-flex justify-content-center gap-2">
          <button class="btn btn-outline-primary" id="createPlanBtn">Create a Plan</button>
          <button class="btn btn-outline-secondary" id="joinPlanBtn">Join a Plan</button>
        </div>
      `;
      plansHere.appendChild(noPlanDiv);

      document.getElementById("createPlanBtn").addEventListener("click", () => {
        window.location.href = "create.html";
      });
      document.getElementById("joinPlanBtn").addEventListener("click", () => {
        window.location.href = "join.html";
      });
    }
  } catch (error) {
    console.error("Error getting documents:", error);
  }
});

// Load chat for a plan
function loadChat(planId, title, joinCode) {
  chatTitle.innerHTML = `${title} <small class="text-muted">(Join code: ${joinCode})</small>`;

  const optionsRef = collection(db, "plans", planId, "options")
  const optionsQuery = query(optionsRef)

  onSnapshot(optionsQuery, (snapshot) =>{
    const options = snapshot.docs.map((doc) => doc.id);

    if (options.length > 0) {
      document.getElementById("option1").textContent = options[0];
      document.getElementById("option2").textContent = options[1];
      document.getElementById("option3").textContent = options[2];

      const option1Button = document.getElementById("option1");
      const option2Button = document.getElementById("option2");
      const option3Button = document.getElementById("option3");

      option1Button.removeEventListener("click", vote);
      option2Button.removeEventListener("click", vote);
      option3Button.removeEventListener("click", vote);

      document.getElementById("option1").onclick = () => vote(planId, options[0]);

      document.getElementById("option2").onclick = () => vote(planId, options[1]);

      document.getElementById("option3").onclick = () => vote(planId, options[2]);

    }
  });

  chatTitle.innerHTML = `
    ${title} <small class="text-muted">(Join code: ${joinCode})</small`;
  chatBox.innerHTML = "";
  chatInput.value = "";

  if (currentMessagesRef) currentMessagesRef = null;

  currentMessagesRef = collection(db, "plans", planId, "messages");
  const messagesQuery = query(currentMessagesRef, orderBy("time"));

  onSnapshot(messagesQuery, (snapshot) => {
    chatBox.innerHTML = "";

    snapshot.forEach((msgDoc) => {
      const msg = msgDoc.data();
      const msgDiv = document.createElement("div");
      msgDiv.innerHTML = `<strong>${msg.senderName}:</strong> ${msg.text} 
        <small class="text-muted">${msg.time?.toDate().toLocaleTimeString() || ""
        }</small>`;
      chatBox.appendChild(msgDiv);
    });
    chatBox.scrollTop = chatBox.scrollHeight;
  });
}

function vote(planId, option){
  const optionRef = doc(db, "plans", planId, "options", option);
  updateDoc(optionRef, {
    votes: increment(1),
  });
}

// auth.onAuthStateChanged(async (user) => {
//     if (user) {
//         await displayGroups(user);
//     } else {
//         console.log("User is not authenticated");
//     }
// });

// Send message
chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!chatInput.value.trim() || !currentMessagesRef) return;

  onAuthReady(async (user) => {
    if (!user) return;

    try {
      await addDoc(currentMessagesRef, {
        senderId: user.uid,
        senderName: user.displayName || "Anonymous",
        text: chatInput.value.trim(),
        time: serverTimestamp(),
      });
      chatInput.value = "";
    } catch (err) {
      console.error("Error sending message:", err);
    }
  });
});
