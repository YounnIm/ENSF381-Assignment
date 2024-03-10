document.getElementById('signupButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const email = document.getElementById('email').value;

    const messageBox = document.getElementById('messageBox') || createMessageBox();
    const errorMessage = validateInput(username, password, confirmPassword, email);
    if (errorMessage) {
        messageBox.textContent = errorMessage;
    } else {
        messageBox.textContent = 'Signup successful!';
        messageBox.style.color = 'green';
    }
});

function createMessageBox() {
    const messageBox = document.createElement('div');
    messageBox.id = 'messageBox';
    document.body.insertBefore(messageBox, document.querySelector('footer'));
    return messageBox;
}

function validateInput(username, password, confirmPassword, email) {
    // Username validation
    if (username.length < 3 || username.length > 20 || !isAlphanumeric(username) || !isLetter(username[0])) {
        return 'Invalid username.';
    }

    // Password validation
    if (password.length < 8 || !hasUppercase(password) || !hasLowercase(password) || !hasNumber(password) || !hasSpecialChar(password)) {
        return 'Invalid password.';
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        return 'Passwords do not match.';
    }

    // Email validation
    if (!isValidEmail(email)) {
        return 'Invalid email.';
    }

    return null;
}

function isAlphanumeric(str) {
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123) && // lower alpha (a-z)
            code !== 45 && code !== 95) { // hyphen (-) and underscore (_)
            return false;
        }
    }
    return true;
}

function isLetter(char) {
    return (char.toUpperCase() !== char.toLowerCase());
}

function hasUppercase(str) {
    return (str.toLowerCase() !== str);
}

function hasLowercase(str) {
    return (str.toUpperCase() !== str);
}

function hasNumber(str) {
    return /\d/.test(str);
}

function hasSpecialChar(str) {
    let specialChars = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";
    for (let i = 0; i < str.length; i++) {
        if (specialChars.indexOf(str[i]) !== -1) {
            return true;
        }
    }
    return false;
}

function isValidEmail(email) {
    let parts = email.split('@');
    if (parts.length !== 2 || parts[0].length === 0 || parts[1].length === 0) {
        return false;
    }
    let domainParts = parts[1].split('.');
    if (domainParts.length < 2 || domainParts[0].length === 0 || domainParts[1].length === 0) {
        return false;
    }
    return true;
}