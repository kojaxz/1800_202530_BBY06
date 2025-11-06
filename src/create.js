import { db, auth } from "./firebaseConfig.js";
import { collection, addDoc, serverTimestamp, Timestamp, doc } from "firebase/firestore";

const form = document.querySelector("#planForm");
const alertEl = document.getElementById("planAlert");

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
    // Create a reference to the user document in Firestore
    const userRef = doc(db, "users", user.uid);

    const newPlan = {
      title,
      description,
      createdBy: userRef,          
      createdAt: serverTimestamp(),
      eventDate: Timestamp.fromDate(eventDate),
      members: [userRef],        
      restaurant: null,             // Not chosen yet
    };

    const docRef = await addDoc(collection(db, "plans"), newPlan);
    console.log("Plan created with ID:", docRef.id);

    showAlert("Plan created successfully!", "success");
    setTimeout(() => window.location.href = "planCreated.html", 2000);

  } catch (error) {
    console.error("Error creating plan:", error);
    showAlert("Failed to create plan. Please try again later.");
  }
});
