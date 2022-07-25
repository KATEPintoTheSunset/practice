import { ip } from "../config";

async function getList() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Allow-Origin', '*');
    headers.append('auth-token', localStorage.getItem('token'));

    try {
        const response = await fetch(`http://${ip}/ica/api/recipes?my=true`, {
            method: 'GET',
            headers,
        });

        if (!response.ok) {
            return;
        }

        const { data } = await response.json();
        if (!Array.isArray(data)) {
            throw new Error('Incorrect answer');
        }
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export { getList };
