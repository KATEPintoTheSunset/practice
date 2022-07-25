async function addRecipe(emailInput, passwordInput) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Allow-Origin', '*');

    if (!validate.email(emailInput.value) || !validate.password(passwordInput.value)) {
        document.getElementById('status').classList.add('fail');
        document.getElementById('status_txt').innerHTML = 'Password or email error';
    }

    try {
        const response = await fetch(`http://${ip}/ica/api/recipes`, {
            method: 'POST',
            body: JSON.stringify({
                "name": "Mesivo",
                "products": [
                    {
                        "productId": 1,
                        "amount": 300
                    }
                ]
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
    } catch (error) {
        document.getElementById('status').classList.add('fail');
        document.getElementById('status_txt').innerHTML = error.message;
    }
}

export { addRecipe }