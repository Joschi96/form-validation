// Global variables
const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const countryInput = document.querySelector('#country');
const postcodeInput = document.querySelector('#postcode');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const submitButton = document.querySelector('#submit');
const emailError = document.querySelector('#email + .error-message');
const countryError = document.querySelector('#country + .error-message');
const postcodeError = document.querySelector('#postcode + .error-message');
const passwordError = document.querySelector('#password + .error-message');
const confirmPasswordError = document.querySelector('#confirm-password + .error-message');
const formError = document.querySelector('.form-error');
const postalCodePatterns = {
    'US': /^\d{5}(-\d{4})?$/,
    'DE': /^\d{5}$/,
    'FR': /^\d{5}$/,
    'CA': /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/,
    'UK': /^([A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}|GIR 0AA)$/,
}
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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