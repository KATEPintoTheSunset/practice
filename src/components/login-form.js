import { createLoginButton, createSignUpButton } from './';
import { createComponent } from './common/create-component';
import { login } from '../actions/login';
import { signUp } from '../actions/signUp';
import * as onBlur from '../actions/onBlur';
import { clear } from '../actions/clear-page';
import { createRecipeList } from '../pages/recipes-list';

const createLoginForm = () => {
    const container = createComponent('div', 'login__form', '');

    const emailContainer = createComponent('div', 'login__form_content', '');
    const emailLabel = createComponent('p', 'login__form_txt', '');
    emailLabel.innerHTML = 'Email';
    const emailInput = createComponent('input', 'login__form__inpt', 'email');
    emailInput.type = 'email';
    emailInput.addEventListener('blur', () => {
        return onBlur.onBlurEmail(emailInput);
    });
    emailContainer.append(emailLabel, emailInput);

    const passwordContainer = createComponent('div', 'login__form_content', '');
    const passwordLabel = createComponent('p', 'login__form_txt', '');
    passwordLabel.innerHTML = 'Password';
    const passwordInput = createComponent('input', 'login__form__inpt', 'password');
    passwordInput.type = 'password';
    passwordInput.addEventListener('blur', () => {
        return onBlur.onBlurPassword(passwordInput);
    });
    passwordContainer.append(passwordLabel, passwordInput);

    container.append(
        emailContainer,
        passwordContainer,
        createLoginButton(async () => {
            const { data } = await login(emailInput, passwordInput);
            if (data) {
                localStorage.setItem('token', data.token);
                clear('login__wrapper');
                createRecipeList();
            } else {
                document.getElementById('status').classList.add('fail');
                document.getElementById('status_txt').innerHTML = 'Incorrect response';
            }
        }),
        createSignUpButton(() => {
            return signUp(emailInput, passwordInput);
        })
    );
    return container;
};

export { createLoginForm };
