async function deleteRecipe(id) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Allow-Origin', '*');
    headers.append('auth-token', localStorage.getItem('token'));

    try {
        const response = await fetch(`http://192.168.31.110:3105/ica/api/recipes/${id}`, {
            method: 'DELETE',
            headers,
        });

        if (!response.ok) {
            return;
        }

        const { data } = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export { deleteRecipe };
