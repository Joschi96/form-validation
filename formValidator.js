const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const countryInput = document.querySelector('#country');
const postcodeInput = document.querySelector('#postcode');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const submitButton = document.querySelector('#submit');
const postalCodePatterns = {
    'US': /^\d{5}(-\d{4})?$/,
    'DE': /^\d{5}$/,
    'FR': /^\d{5}$/,
    'CA': /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/,
    'UK': /^([A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}|GIR 0AA)$/,
}