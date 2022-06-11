import validationEmail from "./validation";

function login(){
    const email = document.getElementById('email').value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    validationEmail(email);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', login);
});