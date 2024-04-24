const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
phoneInputField.addEventListener('input', function(event) {
    // Get the current value of the input field
    let inputValue = phoneInputField.value;

    // Remove any non-numeric characters from the input value
    inputValue = inputValue.replace(/\D/g, '');

    // Set the cleaned value back to the input field
    phoneInputField.value = inputValue;
});
function togglePasswordVisibility(inputId, iconClass) {
    var inputField = document.getElementById(inputId);
    var icon = document.querySelector(iconClass);

    if (inputField.type === "password") {
        inputField.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        inputField.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}


const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirmPassword');


confirmPasswordField.addEventListener('input', () => {
    if (passwordField.value !== confirmPasswordField.value) {
        confirmPasswordField.setCustomValidity('Passwords do not match');
    } else {
        confirmPasswordField.setCustomValidity('');
    }
});

document.getElementById('additionalInfoForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const formData = new FormData(this);
    
    sessionStorage.setItem('step3Data', JSON.stringify(Object.fromEntries(formData.entries())));
    window.location.href="step4.html"
});
// Function to show or hide the client name error message
function toggleClientNameError(showError) {
    const errorSpan = document.getElementById("clientNameError");
    if (showError) {
        errorSpan.classList.remove("hidden");
    } else {
        errorSpan.classList.add("hidden");
    }
}

// Event listener to validate the client name input
document.getElementById("clientName").addEventListener("input", function() {
    const clientNameInput = document.getElementById("clientName");
    if (!clientNameInput.checkValidity()) {
        toggleClientNameError(true);
    } else {
        toggleClientNameError(false);
    }
});
// Function to show or hide the email error message
function toggleEmailError(showError) {
    const errorSpan = document.getElementById("emailError");
    if (showError) {
        errorSpan.classList.remove("hidden");
    } else {
        errorSpan.classList.add("hidden");
    }
}

// Event listener to validate the email input
document.getElementById("email").addEventListener("input", function() {
    const emailInput = document.getElementById("email");
    if (!emailInput.checkValidity()) {
        toggleEmailError(true);
    } else {
        toggleEmailError(false);
    }
});


