function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === "01062023" && password === "02282023") {
        window.location.href = "utot.html";
    } else {
        alert("Bakit hindi mo alam? May iba ka bang ka-anniv? Ok? Ulitin mo 'yan!");
    }
}
