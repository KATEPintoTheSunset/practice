const validationEmail = (email) => /\w{4,}@(yandex|gmail|outlook).com$/.test(email);
const validationPassword = (password) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password);

export {validationEmail, validationPassword}