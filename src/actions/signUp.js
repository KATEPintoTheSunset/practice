import * as validate from '../core/validation';

async function signUp(emailInput, passwordInput) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Allow-Origin', '*');

    if (!validate.email(emailInput.value) || !validate.password(passwordInput.value)) {
        document.getElementById('status').classList.add('fail');
        document.getElementById('status_txt').innerHTML = 'Password or email error';
    }

    try {
        const response = await fetch('http://192.168.31.110:3105/ica/api/auth/signUp', {
            method: 'POST',
            body: JSON.stringify({
                email: emailInput.value,
                password: passwordInput.value,
            }),
            mode: 'cors',
            headers,
        });

        if (!response.ok) {
            document.getElementById('status').classList.add('fail');
            document.getElementById('status_txt').innerHTML = (await response.json()).error;
            return;
        }

        document.getElementById('status').classList.add('success');
        document.getElementById('status_txt').innerHTML = 'Success';
        console.log(await response.json());
    } catch (error) {
        document.getElementById('status').classList.add('fail');
        document.getElementById('status_txt').innerHTML = error.message;
    }
}

export { signUp };
