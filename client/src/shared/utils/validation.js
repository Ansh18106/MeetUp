export const validateLoginForm = ({ mail, password }) => {
    const isMailValid = validateMail(mail);
    const isPasswordValid = validatePassword(password);
    return isMailValid && isPasswordValid;
};

export const validateRegisterForm = ({ mail, username, password }) => {
    const isMailValid = validateMail(mail);
    const isUsernameValid = validateUsername(username);
    const isPasswordValid = validatePassword(password);
    return isMailValid && isUsernameValid && isPasswordValid;
}

const validatePassword = (password) => {
    return password.length > 5;
};

const validateMail = (mail) => {
    const emailPattern = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    return emailPattern.test(mail);
}

const validateUsername = (username) => {
    return true;
    // return username.length > 2 && username.length < 13;
};