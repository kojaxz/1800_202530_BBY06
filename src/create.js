import { db, auth } from "./firebaseConfig.js";
import {
  collection,
  addDoc,
  serverTimestamp,
  Timestamp,
  doc,
  getDoc,
} from "firebase/firestore";

const form = document.querySelector("#planForm");
const alertEl = document.getElementById("planAlert");

// Show alert function
function showAlert(message, type = "danger", showLoginBtn = false) {
  alertEl.textContent = message;
  alertEl.className = `alert alert-${type} mt-3`;
  alertEl.classList.remove("d-none");

  if (showLoginBtn) {
    const btn = document.createElement("button");
    btn.className = "btn btn-primary btn-sm ms-3";
    btn.textContent = "Go to Login";
    btn.addEventListener("click", () => {
      window.location.href = "login.html";
    });
    alertEl.appendChild(btn);
  }
}

// Generate random 6-character join code
function generateJoinCode() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

// Ensure join code is unique
async function generateUniqueJoinCode() {
  let unique = false;
  let code = "";
  const plansRef = collection(db, "plans");

  while (!unique) {
    code = generateJoinCode();
    const snap = await getDoc(doc(plansRef, code));
    if (!snap.exists()) unique = true; // unique
  }
  return code;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  form.classList.add("was-validated");
  if (!form.checkValidity()) return;

  const title = document.querySelector("#nameInput").value.trim();
  const description = document.querySelector("#descriptionInput").value.trim();
  const date = document.querySelector("#dateInput").value;
  const time = document.querySelector("#timeInput").value;
  const eventDate = new Date(`${date}T${time}`);
  const user = auth.currentUser;

  if (!user) {
    showAlert("You must be logged in to create a plan.", "warning", true);
    return;
  }

  try {
    const userRef = doc(db, "users", user.uid);

    // Generate a unique join code
    const joinCode = await generateUniqueJoinCode();

    const newPlan = {
      title,
      description,
      joinCode, // <-- added joinCode field
      createdBy: userRef,
      createdAt: serverTimestamp(),
      eventDate: Timestamp.fromDate(eventDate),
      members: [userRef],
      restaurant: null,
    };

    const docRef = await addDoc(collection(db, "plans"), newPlan);
    console.log("Plan created with ID:", docRef.id, "Join Code:", joinCode);

    showAlert(
      `Plan created successfully! Your join code: ${joinCode}`,
      "success"
    );
    setTimeout(() => (window.location.href = "planCreated.html"), 2500);
  } catch (error) {
    console.error("Error creating plan:", error);
    showAlert("Failed to create plan. Please try again later.");
  }
});
