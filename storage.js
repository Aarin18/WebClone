function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function setCurrentUser(user, remember) {
  if (remember) {
    localStorage.setItem("currentUser", JSON.stringify(user));
  } else {
    sessionStorage.setItem("currentUser", JSON.stringify(user));
  }
}

function getCurrentUser() {
  let local = JSON.parse(localStorage.getItem("currentUser"));
  let session = JSON.parse(sessionStorage.getItem("currentUser"));
  return local || session || null;
}

function logoutUser() {
  localStorage.removeItem("currentUser");
  sessionStorage.removeItem("currentUser");
}
