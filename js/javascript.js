"use strict";

let passwordField = document.getElementById("password-field");
let confirmPasswordField = document.getElementById("confirm-password-field");
let alertHolder = document.getElementById("alert-holder");
let submitButton = document.querySelector("button");

passwordField.addEventListener("keyup", checkPassword);
confirmPasswordField.addEventListener("keyup", checkPassword);


function checkPassword() {
    let currentPasswordFieldValue = passwordField.value;
    let currentConfirmPasswordValue = confirmPasswordField.value;
    if (currentPasswordFieldValue != currentConfirmPasswordValue) {
        alertHolder.textContent = "Passwords don't match"
        submitButton.disabled = true;
    } else if (currentPasswordFieldValue = currentConfirmPasswordValue) {
        alertHolder.textContent = "";
        submitButton.disabled = false;
    }
}

