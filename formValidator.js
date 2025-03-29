// Global variables
const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const countryInput = document.querySelector('#country');
const postcodeInput = document.querySelector('#postal-code');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const submitButton = document.querySelector('#submit');
const emailError = document.querySelector('#email + .error-message');
const countryError = document.querySelector('#country + .error-message');
const postcodeError = document.querySelector('#postal-code + .error-message');
const passwordError = document.querySelector('#password + .error-message');
const confirmPasswordError = document.querySelector('#confirm-password + .error-message');
const formError = document.querySelector('.form-error');
const successMessage = document.querySelector('.modal');
const postalCodePatterns = {
    'US': /^\d{5}(-\d{4})?$/,
    'DE': /^\d{5}$/,
    'FR': /^\d{5}$/,
    'CA': /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/,
    'UK': /^([A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}|GIR 0AA)$/,
}
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

// validation functions
function validateEmail() {
    const value = emailInput.value.trim();
    if (value === '') {
        showError(emailInput, emailError, 'Email is required.');
        return false;
    } else if (!emailPattern.test(value)) {
        showError(emailInput, emailError, 'Invalid email format.');
        return false;
    }

    clearError(emailInput, emailError);
    return true;
}

function validateCountry() {
    const value = countryInput.value.trim();
    if (value === '') {
        showError(countryInput, countryError, 'Country is required.');
        return false;
    }

    clearError(countryInput, countryError);
    return true;
}

function validatePostcode() {
    const country = countryInput.value.trim();
    const value = postcodeInput.value.trim();
    if (value === '') {
        showError(postcodeInput, postcodeError, 'Postcode is required.');
        return false;
    } else if (!postalCodePatterns[country].test(value)) {
        showError(postcodeInput, postcodeError, 'Invalid postcode format.');
        return false;
    }

    clearError(postcodeInput, postcodeError);
    return true;
}

function validatePassword() {
    const value = passwordInput.value.trim();

    if (value === '') {
        showError(passwordInput, passwordError, 'Password is required.');
        return false;
    } else if (!passwordPattern.test(value)) {
        showError(passwordInput, passwordError, 'Password must be at least 6 characters long, contain at least one number, and one special character.');
        return false;
    }

    clearError(passwordInput, passwordError);
    return true;
}

function validateConfirmPassword() {
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (confirmPassword === '') {
        showError(confirmPasswordInput, confirmPasswordError, 'Confirm password is required.');
        return false;
    } else if (confirmPassword !== password) {
        showError(confirmPasswordInput, confirmPasswordError, 'Passwords do not match.');
        return false;
    }

    clearError(confirmPasswordInput, confirmPasswordError);
    return true;
}
function validateForm() {
    const isEmailValid = validateEmail();
    const isCountryValid = validateCountry();
    const isPostcodeValid = validatePostcode();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isEmailValid && isCountryValid && isPostcodeValid && isPasswordValid && isConfirmPasswordValid) {
        formError.style.display = 'none';
        return true;
    } else {
        formError.textContent = 'Please fix the errors above.';
        formError.style.display = 'block';
        return false;
    }
}


// Helper functions
function showError(input, errorElement, message) {
    input.classList.add('error');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function clearError(input, errorElement) {
    input.classList.remove('error');
    errorElement.textContent = '';
    errorElement.style.display = 'none';
}

// Event listeners
emailInput.addEventListener('input', () => {
    validateEmail();
});

countryInput.addEventListener('change', () => {
    validateCountry();
    validatePostcode();
});

postcodeInput.addEventListener('input', () => {
    validatePostcode();
});

passwordInput.addEventListener('input', () => {
    validatePassword();
    validateConfirmPassword();
});

confirmPasswordInput.addEventListener('input', () => {
    validateConfirmPassword();
});

// Form submission
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (validateForm()) {
        formError.style.display = 'none';
        successMessage.style.display = 'flex';
    }
});

// Close modal on click
successMessage.addEventListener('click', (event) => {
    if (event.target === successMessage) {
        successMessage.style.display = 'none';
    }
});
// Close modal on ESC key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        successMessage.style.display = 'none';
    }
});