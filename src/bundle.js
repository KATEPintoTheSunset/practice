import { createLoginPage } from './pages/login';

document.addEventListener('DOMContentLoaded', () => {
    document.body.append(createLoginPage());
    // document.getElementById("email").addEventListener("blur", onBlurEmail);
    // document.getElementById("password").addEventListener("blur", onBlurPassword);
});

// function onBlurEmail() {
//     const email = document.getElementById('email').value;
//     if (validationEmail(email)) {
//         document.getElementById("email").classList.remove("fail");
//     }else {
//         document.getElementById("email").classList.add("fail");
//     }
// };

// function onBlurPassword() {
//     const password = document.getElementById("password").value;
//     if (validationPassword(password)) {
//         document.getElementById("password").classList.remove("fail");
//     }else {
//         document.getElementById("password").classList.add("fail");
//     }
// };
