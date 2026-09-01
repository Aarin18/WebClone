const AUTH_CONFIG = {
  demoImage:
    "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/login.jpg?v=1737548884&quality=80",
  storageKey: "Mo.number",
};

document.addEventListener("DOMContentLoaded", () => {
  initAuthSystem();
});

function initAuthSystem() {
  createAuthMarkup();
  setupUserButtonListeners();
}

function createAuthMarkup() {
  if (document.getElementById("authOverlay")) return;

  const overlay = document.createElement("div");
  overlay.id = "authOverlay";
  overlay.className = "auth-overlay";

  overlay.innerHTML = `
    <div id="authModal" class="auth-modal">
      <button id="authClose" class="auth-close-btn" aria-label="Close modal">✕</button>
      <div class="authImageSide">
        <img src="${AUTH_CONFIG.demoImage}" alt="Login Illustration">
      </div>
      <div class="authFormSide" id="authFormSide"></div>
    </div>
  `;

  document.body.appendChild(overlay);
  bindGlobalAuthEvents(overlay);
}

function bindGlobalAuthEvents(overlay) {
  const closeBtn = document.getElementById("authClose");

  closeBtn.addEventListener("click", closeAuthModal);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeAuthModal();
    }
  });
}

function renderPhoneStep() {
  const formSide = document.getElementById("authFormSide");
  if (!formSide) return;

  formSide.innerHTML = `
    <h2>LOGIN OR SIGNUP</h2>
    <p class="authSubtitle">Unlock coupons, profile and much more</p>
    <div class="authPhoneRow">
      <span>+91</span>
      <input type="tel" id="authPhone" maxlength="10" placeholder="Enter phone number" autocomplete="tel">
    </div>
    <p id="authError" class="errorText" aria-live="polite"></p>
    <button id="sendOtpBtn" class="auth-primary-btn">SEND OTP</button>
    <p class="authTerms">By continuing, you agree to the <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a></p>
  `;

  document
    .getElementById("sendOtpBtn")
    .addEventListener("click", handleSendOtp);

  document.getElementById("authPhone").addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleSendOtp();
  });
}

function renderOtpStep(phone) {
  const formSide = document.getElementById("authFormSide");
  if (!formSide) return;

  formSide.innerHTML = `
    <h2>VERIFY OTP</h2>
    <p class="authSubtitle">Enter the OTP sent to +91 ${escapeHtml(phone)}</p>
    <input type="text" id="authOtp" maxlength="4" placeholder="Enter OTP" class="authOtpInput" autocomplete="one-time-code">
    <p id="authOtpError" class="errorText" aria-live="polite"></p>
    <button id="verifyOtpBtn" class="auth-primary-btn">VERIFY OTP</button>
    <p class="authTerms"><a href="#" id="editPhoneLink">Edit phone number</a></p>
  `;

  document
    .getElementById("verifyOtpBtn")
    .addEventListener("click", () => handleVerifyOtp(phone));

  document.getElementById("editPhoneLink").addEventListener("click", (e) => {
    e.preventDefault();
    renderPhoneStep();
  });

  document.getElementById("authOtp").addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleVerifyOtp(phone);
  });
}

function handleSendOtp() {
  const phoneInput = document.getElementById("authPhone");
  const errorMsg = document.getElementById("authError");
  const phone = phoneInput ? phoneInput.value.trim() : "";

  if (errorMsg) errorMsg.textContent = "";

  renderOtpStep(phone);
}

function handleVerifyOtp(phone) {
  const otpInput = document.getElementById("authOtp");
  const errorMsg = document.getElementById("authOtpError");
  const otp = otpInput ? otpInput.value.trim() : "";

  if (errorMsg) errorMsg.textContent = "";

  saveAndAuthenticateUser(phone);
}

function saveAndAuthenticateUser(phone) {
  localStorage.setItem(AUTH_CONFIG.storageKey, phone);

  closeAuthModal();
  updateUserIcon();
}

function openAuthModal() {
  const currentUser = localStorage.getItem(AUTH_CONFIG.storageKey);

  if (currentUser) {
    if (typeof logoutUser === "function") logoutUser();
    localStorage.removeItem(AUTH_CONFIG.storageKey);
    updateUserIcon();
    return;
  }

  renderPhoneStep();
  const overlay = document.getElementById("authOverlay");
  if (overlay) overlay.classList.add("open");
}

function closeAuthModal() {
  const overlay = document.getElementById("authOverlay");
  if (overlay) overlay.classList.remove("open");
}

function setupUserButtonListeners() {
  const userBtn = document.getElementById("userIconBtn");
  if (userBtn) {
    userBtn.addEventListener("click", openAuthModal);
  }
  updateUserIcon();
}

function updateUserIcon() {
  const userBtn = document.getElementById("userIconBtn");
  if (!userBtn) return;

  const currentUser = localStorage.getItem(AUTH_CONFIG.storageKey);
  userBtn.title = currentUser
    ? `Logged in: +91 ${currentUser}`
    : "Login / Signup";
}
// safely cleans text so it won't break the pagee
function escapeHtml(str) {
  if (!str) return "";
  
  const div = document.createElement('div');
  
  div.textContent = str;
  
  return div.innerHTML;
}