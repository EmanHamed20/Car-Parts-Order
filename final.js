document.addEventListener('DOMContentLoaded', function() {
    // Retrieve stored form data from sessionStorage
    const step1Data = JSON.parse(sessionStorage.getItem('step1Data'));
    const step2Data = JSON.parse(sessionStorage.getItem('step2Data'));
    const step3Data = JSON.parse(sessionStorage.getItem('step3Data'));
    const step4Data = JSON.parse(sessionStorage.getItem('step4Data'));

    const form = document.getElementById('reviewForm');

    // Function to display data for a step
    function displayStepData(stepData) {
        // Get the container element where inputs will be appended
        const inputsContainer = document.getElementById('inputs-container');
        
        // Loop through the stepData object
        Object.keys(stepData).forEach((key) => {
            // Skip "confirmPassword"
            if (key === "confirmPassword" || key==="partImage") {
                return;
            }
            
            // Create a container div for each label-input pair
            const inputContainer = document.createElement('div');
            inputContainer.classList.add('mb-4');
            
            // Create a label element
            const label = document.createElement('label');
            label.textContent = key + ":";
            label.classList.add('block','py-2','text-xl');
            
            // Create an input element
            const input = document.createElement('input');
            input.type = 'text';
            input.value = stepData[key];
            input.readOnly = true;
            input.classList.add('form-input', 'w-full', 'border', 'rounded', 'py-2', 'px-3','bg-transparent','text-red-800');
            
            // Append label and input to the container div
            inputContainer.appendChild(label);
            inputContainer.appendChild(input);
            
            // Append the container div to the inputs container
            inputsContainer.appendChild(inputContainer);
        });
    }
    


    // Display data for each step
    if (step1Data) {
        displayStepData(step1Data);
    } else {
        console.error('Step 1 data not found in sessionStorage.');
    }

    if (step2Data) {
        displayStepData(step2Data);
    } else {
        console.error('Step 2 data not found in sessionStorage.');
    }

    if (step3Data) {
    displayStepData(step3Data);
    }

    if (step4Data) {
        displayStepData(step4Data);
    } else {
        console.error('Step 3 data not found in sessionStorage.');
    }

});

  

    // Event listener for confirm button
    document.getElementById('confirmButton').addEventListener('click', function() {
        // Perform form submission with the collected data
        // For example, send data to the server

        // Redirect to a confirmation page
        window.location.href = "confirm.html";
    });

    // Event listener for edit button
    document.getElementById('editButton').addEventListener('click', function() {
        // Redirect to the appropriate step to edit information
        // For example, redirect to step1.html
        window.location.href = "index.html";
    });

    // Event listener for cancel button
    document.getElementById('cancelButton').addEventListener('click', function() {
        // Clear sessionStorage and redirect to the initial step
        sessionStorage.clear();
        window.location.href = "index.html";
    });
