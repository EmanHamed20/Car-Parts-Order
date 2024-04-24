   // Retrieve the form data from local storage
// Retrieve the form data from local storage
const formDataString = sessionStorage.getItem('step1Data');

    // Parse the JSON data into an object
    const formData = JSON.parse(formDataString);

    // Retrieve the status from the formData object
    const status = formData.status;
    console.log(status)

    

// Add event listener for form submission
// Add event listener for form submission
document.getElementById('partForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const partQuantity = parseInt(document.getElementById('partQuantity').value, 10);

    // Check status and validate quantity
    if ((status === 'individual' && partQuantity < 1) || (status === 'company' && partQuantity < 10)) {
        // Create error message element if not already present
        let errorMessage = document.getElementById('quantityErrorMessage');
        if (!errorMessage) {
            errorMessage = document.createElement('div');
            errorMessage.id = 'quantityErrorMessage';
            errorMessage.classList.add('text-red-500', 'text-sm', 'mt-1');
            errorMessage.textContent = 'Invalid quantity for the selected status.';

            // Insert error message below the input field
            const quantityInput = document.getElementById('partQuantity');
            quantityInput.parentNode.appendChild(errorMessage);
        }

        // Prevent form submission
        return;
    }

    // If quantity is valid, remove error message if exists
    const errorMessage = document.getElementById('quantityErrorMessage');
    if (errorMessage) {
        errorMessage.remove();
    }
  
    console.log(this);

    // Call submitForm() function to handle form submission
    submitForm(this);
});

function submitForm(form) {
    console.log(form);

    // Ensure that the form parameter is an HTMLFormElement
    if (!(form instanceof HTMLFormElement)) {
        console.error('Parameter is not an HTMLFormElement');
        return;
    }

    // Serialize form data
    const formData = new FormData(form);

    // Store form data in sessionStorage
    sessionStorage.setItem('step2Data', JSON.stringify(Object.fromEntries(formData.entries())));

    // Redirect to the next step
    window.location.href = "step3.html";
        }
