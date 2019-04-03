console.log('Client side js loaded');

const email = localStorage.getItem("newEmail");
const password = localStorage.getItem("newPassword");
console.log(email, password);

axios.post('/users', {
        "email": email,
        "password": password
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });