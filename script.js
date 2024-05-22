const form = document.querySelector('#form')
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#userEmail');
const phone = document.querySelector('#userPhone');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#passwordConfirm');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

function isValidEmail(email) {
    const emailPattern = /^(?!.*\.\.)(?!.*\.\-)(?!.*\-\.)[a-zA-Z\d\.\-_]{1,64}@[a-zA-Z\d\.\-]{1,255}\.[a-zA-Z]{2,}$/;
  
    return emailPattern.test(email);
  }

function isValidPhoneNumber(phone) {
const phonePattern = /^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

return phonePattern.test(phone);
}

function validateInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const passwordConfirmValue = passwordConfirm.value.trim();

    if (firstNameValue === "") {
        displayError(firstName, "First Name is required");
    } else {
        displaySuccess(firstName);
    };

    if (lastNameValue === "") {
        displayError(lastName, "Last Name is required");
    } else {
        displaySuccess(lastName);
    };

    if (emailValue === "") {
        displayError(email, "Email is required");
    } else if (!isValidEmail(emailValue)) {
        displayError(email, "Enter a valid Email")
    } else {
        displaySuccess(email);
    }

    if (phoneValue === "") {
        displayError(phone, "Phone Number is required");
    } else if (!isValidPhoneNumber(phoneValue)) {
        displayError(phone, "Enter a valid Phone Number");
    } else {
        displaySuccess(phone);
    }

    if (passwordValue === "") {
        displayError(password, "Password is required");
    } else if (passwordValue.length < 8 || passwordValue.length > 16) {
        displayError(password, "Password must contain 8-16 Characters")
    } else {
        displaySuccess(password);
    }

    if (passwordConfirmValue === "") {
        displayError(passwordConfirm, "Confirm Password.")
    } else if (passwordConfirmValue != passwordValue) {
        displayError(passwordConfirm, "Passwords don't match");
    } else {
        displaySuccess(passwordConfirm);
    }

}

function displayError(element, message) {
    const inputContainer = element.parentElement;
    const showEffect = inputContainer.querySelector('.showEffect');

    showEffect.textContent = message;
    inputContainer.classList.add('error');
    inputContainer.classList.remove('success');
}

function displaySuccess(element) {
    const inputContainer = element.parentElement;
    const showEffect = inputContainer.querySelector('.showEffect');

    showEffect.textContent = "";
    inputContainer.classList.add('success');
    inputContainer.classList.remove('error');
}