const passwordInput = document.querySelector("#password");
const toggleButton = document.querySelector(".ghost-icon");
const loginForm = document.querySelector("#login-form");
const mobileInput = document.querySelector("#mobile-number");
const loginScreen = document.querySelector("#login-screen");
const attendanceScreen = document.querySelector("#attendance-screen");
const loginMessage = document.querySelector("#login-message");
const panelButtons = document.querySelectorAll("[data-toggle-panel]");

const validMobile = "8099122467";
const validPassword = "sritej15";

if (passwordInput && toggleButton) {
  toggleButton.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";
    toggleButton.setAttribute(
      "aria-label",
      isPassword ? "Hide password" : "Toggle password visibility"
    );
  });
}

if (loginForm && mobileInput && passwordInput && loginScreen && attendanceScreen && loginMessage) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const enteredMobile = mobileInput.value.trim();
    const enteredPassword = passwordInput.value;
    const isValid = enteredMobile === validMobile && enteredPassword === validPassword;

    if (!isValid) {
      loginMessage.textContent = "Invalid mobile number or password.";
      loginMessage.classList.remove("is-success");
      return;
    }

    loginMessage.textContent = "Login successful.";
    loginMessage.classList.add("is-success");

    window.setTimeout(() => {
      loginScreen.classList.add("is-hidden");
      attendanceScreen.classList.remove("is-hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 250);
  });
}

panelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const panelId = button.getAttribute("aria-controls");
    const panel = panelId ? document.getElementById(panelId) : null;

    if (!panel) {
      return;
    }

    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isExpanded));
    panel.classList.toggle("is-collapsed", isExpanded);
  });
});
