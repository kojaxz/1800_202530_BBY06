import { db, auth } from "./firebaseConfig.js";
import {
  collection,
  addDoc,
  getDocs,
  setDoc,
  serverTimestamp,
  Timestamp,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

const form = document.querySelector("#planForm");
const alertEl = document.getElementById("planAlert");

// Show alert function
function showAlert(message, type = "danger", showLoginBtn = false) {
  alertEl.textContent = message;
  alertEl.className = `alert alert-${type} mt-3`;
  alertEl.classList.remove("d-none");

/**      if (planSnap.exists()) {
        const data = planSnap.data();
        document.getElementById("titleInput").value = data.title;
        document.getElementById("descriptionInput").value = data.description;
        document.getElementById("timeInput").value = data.time;
        document.getElementById("dateInput").value = data.date;
        document.getElementById("membersInput").value = data.members;
      } else {
        console.log("No existing plan found.");
      }
    } catch (error) {
      console.error("Error fetching plan:", error);
    }
  });*/

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

  /*const title = document.getElementById("titleInput").value;
  const description = document.getElementById("descriptionInput").value;
  const time = document.getElementById("timeInput").value;
  const date = document.getElementById("dateInput").value;
  const members = document.getElementById("membersInput").value;
*/
  try {
    const userRef = doc(db, "users", user.uid);

 //   await setDoc(planRef, { title, description, time, date, members }, { merge: true });
    // Generate a unique join code
    const joinCode = await generateUniqueJoinCode();
    const newPlan = {
      title,
      description,
      joinCode, //joinCode field
      createdBy: userRef,
      createdAt: serverTimestamp(),
      eventDate: Timestamp.fromDate(eventDate),
      members: [userRef],
      restaurant: null,
    };

    const docRef = await addDoc(collection(db, "plans"), newPlan);
    console.log("Plan created with ID:", docRef.id, "Join Code:", joinCode);

    const foodList = collection(db, 'cuisine types');
    const food = await getDocs(foodList);
    const cuisines = food.docs.map(doc => doc.id);
    console.log(cuisines);

    function getRandom() {
      const result = [];

      for (let i = 0; i < 3;) {
        const randomFood = cuisines[Math.floor(Math.random() * cuisines.length)];
        if (!result.includes(randomFood)) {
          result.push(randomFood);
          i++;
        }
      }
      console.log(result);
      return result;
    }

    const options = getRandom();

    for (const cuisine of options) {
      const optionRef = doc(docRef, "options", cuisine);
      await setDoc(optionRef, {
        votes: 0
      })
    }

    showAlert(
      `Plan created successfully! Your join code: ${joinCode}`,
      "success"
    );
    setTimeout(() => (window.location.href = "planCreated.html"), 2500);

    const userDocSnap = await getDoc(userRef);

    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      const recentPlans = Array.isArray(userData.recentPlans)
        ? userData.recentPlans
        : [];
      recentPlans.push(docRef.id);

      // Update Firestore with the new recentPlans array
      await updateDoc(userRef, { recentPlans });
    }
  } catch (error) {
    console.error("Error creating plan:", error);
    showAlert("Failed to create plan. Please try again later.");
  }
});
