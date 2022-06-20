import { createComponent } from './common/create-component';

const createButton = (className, text, action) => {
    const btn = createComponent('button', className, 'btn-login');
    btn.type = 'submit';
    btn.innerHTML = text;
    btn.addEventListener('click', action);
    return btn;
};

const createLoginButton = (action) => {
    return createButton('login__form_btn', 'Log In', action);
};

const createSignUpButton = (action) => {
    return createButton('login__form_btn signUp', 'Sign Up', action);
};

export { createLoginButton, createSignUpButton };
