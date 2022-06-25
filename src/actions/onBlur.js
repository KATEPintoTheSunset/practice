import * as validate from '../core/validation';

function onBlurEmail(emailInput) {
    if (!validate.email(emailInput.value)) {
        emailInput.classList.add('fail');
    } else {
        emailInput.classList.remove('fail');
    }
}

function onBlurPassword(passwordInput) {
    if (!validate.password(passwordInput.value)) {
        passwordInput.classList.add('fail');
    } else {
        passwordInput.classList.remove('fail');
    }
}

export { onBlurEmail, onBlurPassword };
