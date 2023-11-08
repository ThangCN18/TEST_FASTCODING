//Drawer
const buttonShowDrawer = document.querySelector("#button-show-drawer")
const drawerMenu = document.querySelector("#drawer-menu")
const buttonCloseDrawer = document.querySelector("#button-close-drawer")
const hangdleDrawer = () => {
    drawerMenu.classList.toggle("show-drawer")
}
buttonShowDrawer.onclick = hangdleDrawer
buttonCloseDrawer.onclick = hangdleDrawer


//Validity form in banner
const nameUserField = document.getElementById('name-user');
const emailUserField = document.getElementById('email-user');
const passwordUserField = document.getElementById('password-user');
const nameRedex = /^[a-zA-Z0-9_]{2,18}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z]).{8,}$/;
const messageRegex = /^(.*?\s){1,}$/;

nameUserField.addEventListener('input', function () {
    const isValidName = nameRedex.test(nameUserField.value);
    if (!isValidName) {
        nameUserField.setCustomValidity('Name Invalid');
    } else {
        nameUserField.setCustomValidity('');
    }
});

emailUserField.addEventListener('input', function () {
    const isValidEmail = emailRegex.test(emailUserField.value);
    if (!isValidEmail) {
        emailUserField.setCustomValidity('Email Invalid');
    } else {
        emailUserField.setCustomValidity('');
    }
});

passwordUserField.addEventListener('input', function () {
    const isValidPassword = passwordRegex.test(passwordUserField.value);
    if (!isValidPassword) {
        passwordUserField.setCustomValidity('Password Invalid');
    } else {
        passwordUserField.setCustomValidity('');
    }
});


//Validity form contact
const nameContactField = document.getElementById('name-contact');
const emailContactField = document.getElementById('email-contact');
const passwordContactField = document.getElementById('password-contact');
const messageContactField = document.getElementById('message-contact');

nameContactField.addEventListener('input', function () {
    const isValidName = nameRedex.test(nameContactField.value);
    if (!isValidName) {
        nameContactField.setCustomValidity('Name Invalid');
    } else {
        nameContactField.setCustomValidity('');
    }
});

emailContactField.addEventListener('input', function () {
    const isValidEmail = emailRegex.test(emailContactField.value);
    if (!isValidEmail) {
        emailContactField.setCustomValidity('Email Invalid');
    } else {
        emailContactField.setCustomValidity('');
    }
});

passwordContactField.addEventListener('input', function () {
    const isValidPassword = passwordRegex.test(passwordContactField.value);
    if (!isValidPassword) {
        passwordContactField.setCustomValidity('Password Invalid');
    } else {
        passwordContactField.setCustomValidity('');
    }
});

messageContactField.addEventListener('input', function () {
    const isValidMessage = messageRegex.test(messageContactField.value);
    if (!isValidMessage) {
        messageContactField.setCustomValidity('Message Invalid');
    } else {
        messageContactField.setCustomValidity('');
    }
});