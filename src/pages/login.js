import { createLoginForm, createStatusContainer } from '../components';

const createLoginPage = () => {
    const container = document.createElement('section');
    container.className = 'login__wrapper';
    container.append(createStatusContainer(), createLoginForm());
    return container;
};

export { createLoginPage };
