import { createLoginButton, createSignUpButton } from './';
import { createComponent } from './common/create-component';
import { login, signUp } from '../actions/login';

const createLoginForm = () => {
    const container = createComponent('div', 'login__form', '');

    const emailContainer = createComponent('div', 'login__form_content', '');
    const emailLabel = createComponent('p', 'login__form_txt', '');
    emailLabel.innerHTML = 'Email';
    const emailInput = createComponent('input', 'login__form__inpt', 'email');
    emailInput.type = 'email';
    emailContainer.append(emailLabel, emailInput);

    const passwordContainer = createComponent('div', 'login__form_content', '');
    const passwordLabel = createComponent('p', 'login__form_txt', '');
    passwordLabel.innerHTML = 'Password';
    const passwordInput = createComponent('input', 'login__form__inpt', 'password');
    passwordInput.type = 'password';
    passwordContainer.append(passwordLabel, passwordInput);

    container.append(
        emailContainer,
        passwordContainer,
        createLoginButton(() => {
            return login(emailInput, passwordInput);
        }),
        createSignUpButton(() => {
            return signUp(emailInput, passwordInput);
        })
    );
    return container;
};

export { createLoginForm };
