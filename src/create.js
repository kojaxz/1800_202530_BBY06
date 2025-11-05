import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "./firebaseConfig.js";
import { setDoc } from "firebase/firestore";

// -------------------------------------------------------------
// Function to populate plan info in the form
// Fetches plan data from Firestore and fills in the form fields
// Assumes user is authenticated and has a plan document in "plans" collection
// Fields: name, description, time, date, members
// Form field IDs: nameInput, descriptionInput, timeInput, dateInput, membersInput
// -------------------------------------------------------------
function populatePlan() {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        const planRef = doc(db, "plans", user.uid);
        const planSnap = await getDoc(planRef);

        if (planSnap.exists()) {
          const { name = "", description = "", time = "", date = "", members = "" } = planSnap.data();

          document.getElementById("nameInput").value = name;
          document.getElementById("descriptionInput").value = description;
          document.getElementById("timeInput").value = time;
          document.getElementById("dateInput").value = date;
          document.getElementById("membersInput").value = members;
        } else {
          console.log("No plan found for this user.");
        }
      } catch (error) {
        console.error("Error fetching plan:", error);
      }
    } else {
      console.log("User not signed in.");
    }
  });
}

// Enable editing
document.querySelector('#editButton').addEventListener('click', () => {
  document.getElementById('planFields').disabled = false;
});

// Save updated plan
document.querySelector('#saveButton').addEventListener('click', async () => {
  const user = auth.currentUser;
  if (!user) {
    alert("Please sign in first.");
    return;
  }

  const name = document.getElementById('nameInput').value;
  const description = document.getElementById('descriptionInput').value;
  const time = document.getElementById('timeInput').value;
  const date = document.getElementById('dateInput').value;
  const members = document.getElementById('membersInput').value;

  try {
    const planRef = doc(db, "plans", user.uid);
    await setDoc(planRef, { name, description, time, date, members }, { merge: true });
    console.log("Plan saved successfully.");
    document.getElementById('planFields').disabled = true;
  } catch (error) {
    console.error("Error saving plan:", error);
  }
});

// Run on load
populatePlan();