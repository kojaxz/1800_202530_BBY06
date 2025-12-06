import { auth } from "./firebaseConfig.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { onAuthReady } from "./authentication.js";
import { db } from "./firebaseConfig.js";
import { arrayUnion } from "firebase/firestore";
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

    if (!userDocSnap.exists()) return;

    const data = userDocSnap.data();
    const recentPlans = data.recentPlans || [];

    plansHere.innerHTML = ""; // Clear container

    for (const planId of recentPlans) {
      if (!planId) continue;

      const planRef = doc(db, `plans/${planId.trim()}`);
      const planSnap = await getDoc(planRef);

      if (!planSnap.exists()) continue;

      const plan = planSnap.data();
      const now = new Date();
      const dueDate = plan.dueDate?.toDate();

      if (dueDate && dueDate < now) {
        // Delete expired plan
        await updateDoc(userDocRef, {
          recentPlans: arrayRemove(planId.trim()),
        });
        await deleteDoc(planRef);
        continue; // skip rendering
      }

      // Render plan
      const planDiv = document.createElement("div");
      planDiv.className = "Msg-Box p-2 mb-2";
      planDiv.innerHTML = `
        <h5 class="plan-title">${plan.title}</h5>
        <p class="plan-info text-muted">${plan.description}</p>
      `;

      // If expiring in ≤ 1 day, change background and border directly
      if (dueDate && (dueDate - now) / (1000 * 60 * 60 * 24) <= 1) {
        planDiv.style.border = "2px solid red";
        planDiv.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
      }
      if (window.innerWidth < 800) {
        planDiv.addEventListener("click", () => {
          document.getElementById('messageBox').style.display = 'flex';
          document.getElementById('planBox').style.display = 'none';
          loadChat(planId, plan.title, plan.joinCode);
        });
        document.querySelector('.back').addEventListener('click', function (event) {
          if (event.target.tagName === 'BUTTON') {
            document.getElementById('messageBox').style.display = 'none';
          document.getElementById('planBox').style.display = 'block';
          }
        });
      } else {
        planDiv.addEventListener("click", () => {
          loadChat(planId, plan.title, plan.joinCode);
        });
      }

      plansHere.appendChild(planDiv);
    }
  } catch (error) {
    console.error("Error loading plans:", error);
  }
});

// Load chat for a plan
function loadChat(planId, title, joinCode) {
  chatTitle.innerHTML = `${title} <small class="text-muted">(Join code: ${joinCode})</small>`;

  const optionsRef = collection(db, "plans", planId, "options");
  const optionsQuery = query(optionsRef);

  onSnapshot(optionsQuery, (snapshot) => {
    const options = snapshot.docs.map((doc) => doc.id);

    // Assign labels to buttons
    if (options.length > 0) {
      const option1Btn = document.getElementById("option1");
      const option2Btn = document.getElementById("option2");
      const option3Btn = document.getElementById("option3");

      option1Btn.textContent = options[0];
      option2Btn.textContent = options[1];
      option3Btn.textContent = options[2];

      option1Btn.onclick = () => vote(planId, options[0]);
      option2Btn.onclick = () => vote(planId, options[1]);
      option3Btn.onclick = () => vote(planId, options[2]);

      // Reset UI
      [option1Btn, option2Btn, option3Btn].forEach((btn) => {
        btn.disabled = false;
        btn.classList.remove("voted");
        btn.style.background = "";
      });
    }

    // Calculate total votes
    let totalVotes = 0;
    const optionVotes = {};
    snapshot.forEach((doc) => {
      const data = doc.data();
      optionVotes[doc.id] = data.votes || 0;
      totalVotes += data.votes || 0;
    });

    // Update buttons with gradient and percentages
    function getPercent(votes) {
      return totalVotes === 0 ? 0 : Math.round((votes / totalVotes) * 100);
    }

    const option1Btn = document.getElementById("option1");
    const option2Btn = document.getElementById("option2");
    const option3Btn = document.getElementById("option3");

    option1Btn.textContent = `${options[0]} - ${getPercent(
      optionVotes[options[0]]
    )}%`;
    option2Btn.textContent = `${options[1]} - ${getPercent(
      optionVotes[options[1]]
    )}%`;
    option3Btn.textContent = `${options[2]} - ${getPercent(
      optionVotes[options[2]]
    )}%`;

    snapshot.forEach((doc) => {
      const data = doc.data();
      const btn =
        doc.id === options[0]
          ? option1Btn
          : doc.id === options[1]
            ? option2Btn
            : doc.id === options[2]
              ? option3Btn
              : null;

      if (btn) {
        const percent = getPercent(data.votes);
        btn.style.background = `linear-gradient(90deg, rgba(13,110,253,0.9) ${percent}%, rgba(204,229,255,0.5) ${percent}%)`;
      }
    });

    // Check if the user has voted (only one vote per plan)
    const user = auth.currentUser;
    let hasVoted = false;
    snapshot.forEach((doc) => {
      const data = doc.data();
      if (data.votedUsers && data.votedUsers.includes(user.uid)) {
        hasVoted = true;
        // Show checkmark for voted option
        const votedBtn =
          doc.id === options[0]
            ? option1Btn
            : doc.id === options[1]
              ? option2Btn
              : doc.id === options[2]
                ? option3Btn
                : null;

        if (votedBtn) votedBtn.classList.add("voted");
      }
    });

    // Disable buttons if already voted
    [option1Btn, option2Btn, option3Btn].forEach((btn) => {
      btn.disabled = hasVoted;
    });
  });

  // Load chat messages
  chatBox.innerHTML = "";
  chatInput.value = "";
  currentMessagesRef = collection(db, "plans", planId, "messages");
  const messagesQuery = query(currentMessagesRef, orderBy("time"));

  onSnapshot(messagesQuery, (snapshot) => {
    chatBox.innerHTML = "";
    snapshot.forEach((msgDoc) => {
      const msg = msgDoc.data();
      const msgDiv = document.createElement("div");
      msgDiv.innerHTML = `
        <strong>${msg.senderName}:</strong> ${msg.text}
        <small class="text-muted">${msg.time?.toDate().toLocaleTimeString() || ""
        }</small>
      `;
      chatBox.appendChild(msgDiv);
    });
    chatBox.scrollTop = chatBox.scrollHeight;
  });
}

async function vote(planId, option) {
  const user = auth.currentUser;
  if (!user) return;

  const optionRef = doc(db, "plans", planId, "options", option);
  const optionSnap = await getDoc(optionRef);

  if (!optionSnap.exists()) return;

  const data = optionSnap.data();

  // Prevent double voting
  if (data.votedUsers && data.votedUsers.includes(user.uid)) {
    alert("You already voted.");
    return;
  }

  await updateDoc(optionRef, {
    votes: increment(1),
    votedUsers: arrayUnion(user.uid),
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
