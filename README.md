# Form Validation Training

This project is a training assignment for **The Odin Project** coding course. The goal is to build a browser-based form with live inline validation using only JavaScript.

## Project Description

The form collects the following fields:

- **Email**
- **Country**
- **Postal Code**
- **Password**
- **Password Confirmation**

### Features

1. **Live Inline Validation**:

   - Fields are validated as the user interacts with them.
   - Invalid fields are highlighted in red, and helpful error messages are displayed until corrected.

2. **Custom Validation**:

   - Validation is implemented purely in JavaScript.
   - The `<form>` element includes the `novalidate` attribute to disable default browser validation.

3. **Submit Behavior**:

   - The form does not actually submit.
   - If the submit button is clicked with any errors or unfilled required fields, an error message is displayed.
   - If all fields are valid, the user is congratulated with a "high five" message.

4. **Styling**:
   - Validation feedback is styled using CSS, including the `:valid` and `:invalid` pseudo-classes.

## Instructions

1. **Set Up**:

   - A blank HTML document is provided with the necessary form structure.

2. **Form Elements**:

   - The form includes fields for email, country, postal code, password, and password confirmation.

3. **Validation Logic**:

   - JavaScript is used to validate fields as the user progresses through the form.
   - Each field is validated when the user leaves it (on blur).

4. **Testing**:

   - Test all possible cases to ensure the validation logic works as expected.

5. **Styling**:
   - Use CSS to visually indicate valid and invalid fields.

## How to Run

1. Open `index.html` in your browser.
2. Interact with the form to see live validation in action.
3. Click the submit button to test the error handling or receive a congratulatory message.

## Learning Objectives

- Practice building forms with custom validation logic.
- Gain experience with JavaScript event handling and DOM manipulation.
- Learn to style forms dynamically using CSS pseudo-classes.

## Acknowledgments

This project is part of **The Odin Project** curriculum. For more details, visit [The Odin Project](https://www.theodinproject.com/).
