// Import Firebase Auth
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "/src/firebaseConfig.js";
import { logoutUser } from "/src/authentication.js";

class SiteNavbar extends HTMLElement {
  constructor() {
    super();
    this.renderNavbar();
    this.renderAuthControls();
  }

  renderNavbar() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-light bg-primary-subtle">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Event Planner</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto">
              <li class="nav-item"><a class="nav-link" href="home.html">Home</a></li>
              <li class="nav-item protected-link"><a class="nav-link" href="profile.html">Profile</a></li>
              <li class="nav-item protected-link"><a class="nav-link" href="main.html">Chats</a></li>
              <li class="nav-item protected-link"><a class="nav-link" href="create.html">Create</a></li>
              <li class="nav-item protected-link"><a class="nav-link" href="#">Join</a></li>
            </ul>

            <div class="d-flex align-items-center gap-2 ms-lg-2">
              <div id="authControls" class="auth-controls d-flex align-items-center gap-2 my-2 my-lg-0">
                <!-- populated by JS -->
              </div>
            </div>
          </div>
        </div>
      </nav>

      <!-- Floating Error Alert -->
      <div id="authAlert" class="alert alert-danger d-none mx-auto" role="alert" style="max-width: 420px;"></div>
    `;
  }

  renderAuthControls() {
    const authControls = this.querySelector("#authControls");
    const alertEl = this.querySelector("#authAlert");

    // Placeholder to maintain layout
    authControls.innerHTML = `<div class="btn btn-outline-dark" style="visibility: hidden; min-width: 80px;">Log out</div>`;

    onAuthStateChanged(auth, (user) => {
      // Populate login/logout button
      if (user) {
        authControls.innerHTML = `<button class="btn btn-outline-dark" id="signOutBtn" type="button" style="min-width: 80px;">Log out</button>`;
        authControls.querySelector("#signOutBtn")?.addEventListener("click", logoutUser);
      } else {
        authControls.innerHTML = `<a class="btn btn-outline-dark" id="loginBtn" href="/login.html" style="min-width: 80px;">Log in</a>`;
      }

      // Protect certain links
      const protectedLinks = this.querySelectorAll(".protected-link a");
      protectedLinks.forEach(link => {
        link.addEventListener("click", (e) => {
          if (!user) {
            e.preventDefault();
            if (alertEl) {
              alertEl.innerHTML = `Cannot access "<strong>${link.textContent}</strong>" without logging in.`;
              alertEl.classList.remove("d-none");
              alertEl.classList.add("show");

              // Auto-hide after 5 seconds
              setTimeout(() => {
                alertEl.classList.remove("show");
                alertEl.classList.add("d-none");
              }, 5000);
            }
          }
        });
      });
    });
  }
}

customElements.define("site-navbar", SiteNavbar);
