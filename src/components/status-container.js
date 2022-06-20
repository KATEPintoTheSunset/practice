import { createComponent } from './common/create-component';

const createStatusContainer = () => {
    const container = createComponent('div', 'login__status', 'status');
    const textContainer = createComponent('p', 'login__status_txt', 'status_txt');
    textContainer.innerHTML = 'Enter email and password';
    container.appendChild(textContainer);
    return container;
};

export { createStatusContainer };
