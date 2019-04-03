// console.log('Client side js loaded');

const email = localStorage.getItem("email");
const password = localStorage.getItem("password");
// console.log(email, password);

axios.post('/users/login', {
        "email": email,
        "password": password
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });