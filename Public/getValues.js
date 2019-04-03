console.log('Client side js loaded');


function getNewValues() {
    const email = document.getElementById("newEmail").value;
    const password = document.getElementById("newPassword").value;
    // window.email = email;
    // window.password = password;
    localStorage.setItem("newEmail", email);
    localStorage.setItem("newPassword", password);
    console.log(email, password);
}

function getOldValues() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // window.email = email;
    // window.password = password;
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    console.log(email, password);
}