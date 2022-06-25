const email = (email) => /\w{4,}@(yandex|gmail|outlook).com$/.test(email);
const password = (password) => (password === '' || password === ' ' || password.length < 8 ? false : true);

export { email, password };
