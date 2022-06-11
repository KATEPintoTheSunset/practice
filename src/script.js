import {validationEmail, validationPassword} from "./validation";
import './style.css';

async function login(){
    const email = document.getElementById('email').value;
    const password = document.getElementById("password").value;
    if (validationPassword(password) && validationEmail(email)) {
        try {
            let response = await fetch("http://localhost")
            if (response.ok) {
                document.getElementById("status").classList.add("success");
                document.getElementById("status_txt").innerHTML = "Success";
            }
        } catch (error) {
            document.getElementById("status").classList.add("fail");
            document.getElementById("status_txt").innerHTML = "Failed to fetch answer";
            alert(error)
        }
    }else{
        document.getElementById("status").classList.add("fail");
        document.getElementById("status_txt").innerHTML = "Incorrect email or password entry";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btn").addEventListener("click", login);
    document.getElementById("email").addEventListener("blur", onBlurEmail);
    document.getElementById("password").addEventListener("blur", onBlurPassword);
});

function onBlurEmail() {
    const email = document.getElementById('email').value;
    if (validationEmail(email)) {
        document.getElementById("email").classList.remove("fail"); 
    }else {
        document.getElementById("email").classList.add("fail"); 
    }
};

function onBlurPassword() {
    const password = document.getElementById("password").value;
    if (validationPassword(password)) {
        document.getElementById("password").classList.remove("fail"); 
    }else {
        document.getElementById("password").classList.add("fail"); 
    }
};