// login.js
function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (username === "OMPSA" && password === "Website") {
        window.location.href = "userinterface.html";
    } else {
      alert("Try again!");
    }
  }
  
  // Expose the login function to the global scope
  window.login = login;
