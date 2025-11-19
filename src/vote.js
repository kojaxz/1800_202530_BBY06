// Firestore imports
import {
  doc,
  setDoc,
  updateDoc,
  increment
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Run after page loads
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".vote-btn");

  buttons.forEach(button => {
    button.addEventListener("click", async () => {
      const choice = button.getAttribute("data-choice");

      // Firestore document reference
      const voteRef = doc(window.db, "votes", "voteCounts");

      try {
        // Make sure document exists first
        await setDoc(voteRef, {}, { merge: true });

        // Increment the field matching the choice
        await updateDoc(voteRef, {
          [choice]: increment(1)
        });

        console.log(`Vote saved for ${choice}`);

        // Redirect after voting
        window.location.href = "thanks.html";

      } catch (err) {
        console.error("Error saving vote:", err);
      }
    });
  });
});
