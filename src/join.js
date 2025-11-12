import { db, auth } from "./firebaseConfig.js";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  arrayUnion,
  doc,
} from "firebase/firestore";

const joinForm = document.querySelector("#joinForm");
const alertEl = document.querySelector("#joinAlert");
const joinInput = document.querySelector("#joinCode");

function showAlert(message, type = "danger", showLoginBtn = false) {
  alertEl.innerHTML = message;
  alertEl.className = `alert alert-${type} mt-3`;
  alertEl.classList.remove("d-none");

  // Reset input box styling
  joinInput.classList.remove(
    "border-danger",
    "border-success",
    "border-warning"
  );
  joinInput.style.backgroundColor = "";
  joinInput.style.color = "";

  // Match box style to alert type
  if (type === "success") {
    joinInput.classList.add("border", "border-success");
    joinInput.style.backgroundColor = "#d1e7dd"; // light green
    joinInput.style.color = "#0f5132";
  } else if (type === "warning") {
    joinInput.classList.add("border", "border-warning");
    joinInput.style.backgroundColor = "#fff3cd"; // light yellow
    joinInput.style.color = "#664d03";
  } else if (type === "danger") {
    joinInput.classList.add("border", "border-danger");
    joinInput.style.backgroundColor = "#f8d7da"; // light red
    joinInput.style.color = "#58151c";
  }

  if (showLoginBtn) {
    const btn = document.createElement("button");
    btn.className = "btn btn-primary btn-sm ms-3";
    btn.textContent = "Login";
    btn.addEventListener("click", () => (window.location.href = "login.html"));
    alertEl.appendChild(btn);
  }
}

joinForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  joinForm.classList.add("was-validated");
  if (!joinForm.checkValidity()) return;

  const code = joinInput.value.trim().toUpperCase();
  const user = auth.currentUser;

  if (!user) {
    showAlert("You must be logged in to join a plan.", "warning", true);
    return;
  }

  if (code.length < 4) {
    showAlert("Please enter a valid join code.", "warning");
    return;
  }

  try {
    const plansRef = collection(db, "plans");
    const q = query(plansRef, where("joinCode", "==", code));
    const snap = await getDocs(q);

    if (snap.empty) {
      showAlert("No plan found with that join code.", "danger");
      return;
    }

    const planDoc = snap.docs[0];
    const planData = planDoc.data();
    const planRef = planDoc.ref;
    const userRef = doc(db, "users", user.uid);

    const alreadyMember = planData.members?.some(
      (ref) => ref.id === userRef.id
    );
    if (alreadyMember) {
      showAlert("You're already a member of this plan!", "info");
      return;
    }

    await updateDoc(planRef, {
      members: arrayUnion(userRef),
    });

    showAlert("Successfully joined the plan!", "success");
    setTimeout(() => (window.location.href = "main.html"), 2000);
  } catch (error) {
    console.error("Error joining plan:", error);
    showAlert("Failed to join the plan. Please try again later.", "danger");
  }
});
