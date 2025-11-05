import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebaseConfig.js";

// -------------------------------------------------------------
// Populate the form with the user's existing plan (if it exists)
// -------------------------------------------------------------
function populatePlan() {
  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      console.log("User not signed in.");
      return;
    }

    try {
      const planRef = doc(db, "plans", user.uid);
      const planSnap = await getDoc(planRef);

      if (planSnap.exists()) {
        const data = planSnap.data();
        document.getElementById("nameInput").value = data.name || "";
        document.getElementById("descriptionInput").value = data.description || "";
        document.getElementById("timeInput").value = data.time || "";
        document.getElementById("dateInput").value = data.date || "";
        document.getElementById("membersInput").value = data.members || "";
      } else {
        console.log("No existing plan found.");
      }
    } catch (error) {
      console.error("Error fetching plan:", error);
    }
  });
}

// -------------------------------------------------------------
// Enable editing when "Edit" button is clicked
// -------------------------------------------------------------
document.getElementById("editButton").addEventListener("click", () => {
  document.getElementById("planFields").disabled = false;
});

// -------------------------------------------------------------
// Save the plan and redirect
// -------------------------------------------------------------
document.getElementById("saveButton").addEventListener("click", async () => {
  const user = auth.currentUser;

  if (!user) {
    alert("Please sign in first.");
    return;
  }

  const name = document.getElementById("nameInput").value;
  const description = document.getElementById("descriptionInput").value;
  const time = document.getElementById("timeInput").value;
  const date = document.getElementById("dateInput").value;
  const members = document.getElementById("membersInput").value;

  try {
    const planRef = doc(db, "plans", user.uid);

    await setDoc(planRef, { name, description, time, date, members }, { merge: true });

    console.log("✅ Plan saved successfully.");
    document.getElementById("planFields").disabled = true;

    // ✅ Redirect to confirmation page
    window.location.href = "planCreated.html";

  } catch (error) {
    console.error("Error saving plan:", error);
  }
});

// Run when page loads
populatePlan();
