// src/loginSignup.js
// Handles Login/Signup with validation and Firebase Authentication

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../styles/style.css";
import { loginUser, signupUser, authErrorMessage } from "./authentication.js";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "/src/firebaseConfig.js";

// Redirect if already logged in
onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = "main.html";
  }
});

function initAuthUI() {
  const alertEl = document.getElementById("authAlert");
  const loginView = document.getElementById("loginView");
  const signupView = document.getElementById("signupView");
  const toSignupBtn = document.getElementById("toSignup");
  const toLoginBtn = document.getElementById("toLogin");
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const redirectUrl = "main.html";

  // --- Helpers ---
  function setVisible(el, visible) {
    el.classList.toggle("d-none", !visible);
  }

  function showError(msg) {
    alertEl.textContent = msg || "";
    alertEl.classList.remove("d-none");
    setTimeout(() => alertEl.classList.add("d-none"), 5000); // auto-hide 5s
  }

  function hideError() {
    alertEl.classList.add("d-none");
    alertEl.textContent = "";
  }

  function setSubmitDisabled(form, disabled) {
    const submitBtn = form?.querySelector('[type="submit"]');
    if (submitBtn) submitBtn.disabled = disabled;
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidPassword(password) {
    return password.length >= 6; // Firebase minimum password length
  }

  // --- Toggle views ---
  toSignupBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    hideError();
    setVisible(loginView, false);
    setVisible(signupView, true);
    signupView?.querySelector("input")?.focus();
  });

  toLoginBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    hideError();
    setVisible(signupView, false);
    setVisible(loginView, true);
    loginView?.querySelector("input")?.focus();
  });

  // --- Login ---
  loginForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    hideError();

    const email = document.querySelector("#loginEmail")?.value?.trim() ?? "";
    const password = document.querySelector("#loginPassword")?.value ?? "";

    if (!email || !password) {
      showError("Please enter your email and password.");
      return;
    }

    if (!isValidEmail(email)) {
      showError("Please enter a valid email address.");
      return;
    }

    if (!isValidPassword(password)) {
      showError("Password must be at least 6 characters.");
      return;
    }

    setSubmitDisabled(loginForm, true);
    try {
      await loginUser(email, password);
      location.href = redirectUrl;
    } catch (err) {
      showError(authErrorMessage(err));
      console.error(err);
    } finally {
      setSubmitDisabled(loginForm, false);
    }
  });

  // --- Signup ---
  signupForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    hideError();

    const name = document.querySelector("#signupName")?.value?.trim() ?? "";
    const email = document.querySelector("#signupEmail")?.value?.trim() ?? "";
    const password = document.querySelector("#signupPassword")?.value ?? "";

    if (!name || !email || !password) {
      showError("Please fill in name, email, and password.");
      return;
    }

    if (!isValidEmail(email)) {
      showError("Please enter a valid email address.");
      return;
    }

    if (!isValidPassword(password)) {
      showError("Password must be at least 6 characters.");
      return;
    }

    setSubmitDisabled(signupForm, true);
    try {
      await signupUser(name, email, password);
      location.href = redirectUrl;
    } catch (err) {
      showError(authErrorMessage(err));
      console.error(err);
    } finally {
      setSubmitDisabled(signupForm, false);
    }
  });

  // --- Auto open signup if mode=signup in URL ---
  const params = new URLSearchParams(window.location.search);
  const mode = params.get("mode");

  if (mode === "signup") {
    setVisible(loginView, false);
    setVisible(signupView, true);
  } else {
    setVisible(loginView, true);
    setVisible(signupView, false);
  }
}

// --- Initialize ---
document.addEventListener("DOMContentLoaded", initAuthUI);
