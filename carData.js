document.addEventListener('DOMContentLoaded', function () {
    // const statusDropdown = document.getElementById('status');
    const carMakerDropdown = document.getElementById('carMaker');
    const carModelDropdown = document.getElementById('carModel');
    const carYearDropdown = document.getElementById('carYear');
    const confirmButton = document.getElementById('confirmButton');
    const carImageContainer = document.getElementById('carImageContainer');
    const statusRadioGroup = document.getElementById('statusRadioGroup');
    const nextStepButton = document.getElementById('nextStep');
    const myform = document.getElementById('myForm');

    // Disable next step button by default
    nextStepButton.disabled="true"
    const storedFormData = sessionStorage.getItem('step1Data');
    console.log('Stored form data:', storedFormData); // Debugging output
    if (storedFormData) {
        try {
            const formData = JSON.parse(storedFormData);
            console.log('Parsed form data:', formData); // Debugging output
            Object.keys(formData).forEach(key => {
                const element = document.getElementById(key);
                console.log('Element ID:', key); // Debugging output
                console.log('Element:', element); // Debugging output
                if (element) {
                    // Check if it's a radio button
                    if (element.type === 'radio') {
                        const radioBtn = document.querySelector(`input[name="${element.name}"][value="${formData[key]}"]`);
                        if (radioBtn) {
                            radioBtn.checked = true;
                        }
                    } else {
                        element.value = formData[key];
                        element.innerHTML=formData[key]
                    }
                }
            });
        } catch (error) {
            console.error('Error parsing form data from session storage:', error);
        }
    }

    // Load car data from JSON file
    fetch('cardata.json')

    .then(response => response.json())
    .then(carData => {
        // Populate status dropdown
        carData.statuses.forEach((status, index) => {
            const label = document.createElement('label');
            label.className = 'inline-flex items-center';

            const input = document.createElement('input');
            input.type = 'radio';
            input.className = 'form-radio';
            input.name = 'status';
            input.id = `status${index}`; // Append unique identifier

            input.value = status.toLowerCase();

            const span = document.createElement('span');
            span.className = 'ml-2';
            span.textContent = status;
            span.id = `statusLabel${index}`; // Append unique identifier
            span.classList.add('text-red-700','px-3');

            label.appendChild(input);
            label.appendChild(span);
            
            statusRadioGroup.appendChild(label);
        });

            // Populate car maker dropdown
            carData.carMakers.forEach(maker => {
                const option = new Option(maker, maker);
                carMakerDropdown.add(option);
            });

            // Event listener for car maker dropdown change
            carMakerDropdown.addEventListener('change', function () {
                const selectedMaker = this.value;
                const carModels = carData.carModels[selectedMaker];

                // Clear car model dropdown
                carModelDropdown.innerHTML = '<option value="" disabled selected>Select Car Model</option>';
                carYearDropdown.innerHTML = '<option value="" disabled selected>Select Car Year</option>';

                // Enable/disable car model dropdown
                carModelDropdown.disabled = !selectedMaker;

                // Populate car model dropdown
                if (carModels) {
                    carModels.forEach(model => {
                        const option = new Option(model, model);
                        carModelDropdown.add(option);
                    });
                }
            });

            // Event listener for car model dropdown change
            carModelDropdown.addEventListener('change', function () {
                const selectedMaker = carMakerDropdown.value;
                const selectedModel = this.value;
                const carYears = carData.carYears[selectedMaker][selectedModel];

                // Clear car year dropdown
                carYearDropdown.innerHTML = '<option value="" disabled selected>Select Car Year</option>';

                // Enable/disable car year dropdown
                carYearDropdown.disabled = !selectedModel;

                // Populate car year dropdown
                if (carYears) {
                    carYears.forEach(year => {
                        const option = new Option(year, year);
                        carYearDropdown.add(option);
                    });
                }
            });

            // Event listener for confirm button click
            carYearDropdown.addEventListener('change', function () {
                const selectedMaker = carMakerDropdown.value;
                const selectedModel = carModelDropdown.value;
                const selectedYear = carYearDropdown.value;
                const carImage = carData.carImages[selectedMaker][selectedModel];

                // Display car image
                const image = document.createElement('img');
                image.src = carImage;
                image.classList.add('w-full')
                carImageContainer.innerHTML = '';
                carImageContainer.appendChild(image);
                nextStepButton.disabled = false;
            });
       })
        .catch(error => console.error('Error fetching car data:', error));
        myform.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
        console.log("function");
            // Get form values
            const status = document.querySelector('input[name="status"]:checked').value;
            const maker = carMakerDropdown.value;
            const model = carModelDropdown.value;
            const year = carYearDropdown.value;
        
            if (status && maker && model && year) {
                
                const formData = new FormData(this);
               
                sessionStorage.setItem('step1Data', JSON.stringify(Object.fromEntries(formData.entries())));
        
                window.location.href = 'step2.html';
            } else {
                alert('Please fill in all fields before proceeding.');
            }
        });
 });
 
