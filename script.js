document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const status = document.getElementById('status').value;

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can perform further actions, such as validation, AJAX requests, etc.
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset the form
    document.getElementById('myForm').reset();
});
 // Array of statuses
 const statuses = ['Individual', 'Company'];

 // Select the dropdown element for status
 const statusDropdown = document.getElementById('status');

 // Loop through the array and create options for the dropdown
 statuses.forEach(status => {
     const option = document.createElement('option');
     option.value = status.toLowerCase(); // Lowercase the status value
     option.textContent = status;
     statusDropdown.appendChild(option);
 });

 // Array of car makers
 const carMakers = 
    ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Nissan', 'Tesla', 'Hyundai', 'Kia', 
    // 'Subaru', 'Mazda', 'Volvo', 'Porsche', 'Lexus', 'Jeep', 'Land Rover'
    // ,'Ferrari', 'Maserati', 'Bentley', 'Rolls-Royce', 'Bugatti', 'Lamborghini', 'McLaren', 'Aston Martin', 'Lotus', 'Alfa Romeo', 'Genesis', 'Infiniti', 'Lincoln', 'Buick', 'Cadillac', 'Jaguar', 
    // 'Mini'
    // ,'Ram', 'GMC', 'Chrysler', 'Dodge', 'Mitsubishi', 'Smart', 'Suzuki', 'Acura', 'Fiat', 'Hummer', 'Pontiac', 'Saturn', 'Saab', 'Scion']

    ]
 // Select the dropdown element for car maker
 const carMakerDropdown = document.getElementById('carMaker');
 const carModelDropdown = document.getElementById('carModel');


 // Loop through the array and create options for the dropdown
 carMakers.forEach(maker => {
     const option = document.createElement('option');
     option.value = maker;
     option.textContent = maker;
     carMakerDropdown.appendChild(option);
 });


 const carModels = {
    'Toyota': ['Camry', 'Corolla', 'Rav4', 'Highlander'],
    'Honda': ['Accord', 'Civic', 'CR-V', 'Pilot'],
    'Ford': ['F-150', 'Escape', 'Explorer', 'Focus'],
    'Chevrolet': ['Silverado', 'Malibu', 'Equinox', 'Cruze'],
    'BMW': ['3 Series', '5 Series', 'X3', 'X5'],
    'Mercedes-Benz': ['C-Class', 'E-Class', 'GLC', 'GLE'],
    'Audi': ['A4', 'A6', 'Q5', 'Q7'],
    'Volkswagen': ['Jetta', 'Passat', 'Tiguan', 'Atlas'],
    'Nissan': ['Altima', 'Sentra', 'Rogue', 'Pathfinder'],
    'Tesla': ['Model S', 'Model 3', 'Model X', 'Model Y'],
    'Hyundai': ['Elantra', 'Sonata', 'Tucson', 'Santa Fe'],
    'Kia': ['Optima', 'Sorento', 'Sportage', 'Telluride'],
    // 'Subaru': ['Outback', 'Forester', 'Impreza', 'Legacy'],
    // 'Mazda': ['Mazda3', 'Mazda6', 'CX-5', 'CX-9'],
    // 'Volvo': ['S60', 'S90', 'XC40', 'XC90'],
    // 'Porsche': ['911', 'Cayenne', 'Macan', 'Panamera'],
    // 'Lexus': ['ES', 'RX', 'NX', 'GX'],
    // 'Jeep': ['Wrangler', 'Cherokee', 'Grand Cherokee', 'Renegade'],
    // 'Land Rover': ['Range Rover', 'Discovery', 'Defender', 'Evoque'],
    // 'Ferrari': ['488', '812 Superfast', 'F8 Tributo', 'Portofino'],
    // 'Maserati': ['Ghibli', 'Quattroporte', 'Levante', 'GranTurismo'],
    // 'Bentley': ['Bentayga', 'Continental GT', 'Flying Spur', 'Mulsanne'],
    // 'Rolls-Royce': ['Phantom', 'Ghost', 'Wraith', 'Cullinan'],
    // Add more car makers and models as needed
};
function populateCarModels() {
    const selectedCarMaker = carMakerDropdown.value;

    // Clear existing options in car model dropdown
    carModelDropdown.innerHTML = '<option value="" disabled selected>Select Car Model</option>';
    carModelDropdown.disabled=!(selectedCarMaker && carModels[selectedCarMaker]) 
    // If a car maker is selected, populate car models
    if (selectedCarMaker && carModels[selectedCarMaker]) {
        carModels[selectedCarMaker].forEach(model => {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = model;
            carModelDropdown.appendChild(option);
        });
    }
}

// Event listener to call populateCarModels function when car maker selection changes
carMakerDropdown.addEventListener('change', populateCarModels);

// Populate car models for the initial car maker selection
populateCarModels();
// Object containing car makers, models, and corresponding years
const carYears = {
    'Toyota': {
        'Camry': ['2022', '2021', '2020'],
        'Corolla': ['2022', '2021', '2020'],
        'Rav4': ['2022', '2021', '2020'],
        'Highlander': ['2022', '2021', '2020']
    },
    'Honda': {
        'Accord': ['2022', '2021', '2020'],
        'Civic': ['2022', '2021', '2020'],
        'CR-V': ['2022', '2021', '2020'],
        'Pilot': ['2022', '2021', '2020']
    },
    'Ford': {
        'F-150': ['2022', '2021', '2020'],
        'Escape': ['2022', '2021', '2020'],
        'Explorer': ['2022', '2021', '2020'],
        'Focus': ['2022', '2021', '2020']
    },
    'Chevrolet': {
        'Silverado': ['2022', '2021', '2020'],
        'Malibu': ['2022', '2021', '2020'],
        'Equinox': ['2022', '2021', '2020'],
        'Cruze': ['2022', '2021', '2020']
    },
    'BMW': {
        '3 Series': ['2022', '2021', '2020'],
        '5 Series': ['2022', '2021', '2020'],
        'X3': ['2022', '2021', '2020'],
        'X5': ['2022', '2021', '2020']
    },
    'Mercedes-Benz': {
        'C-Class': ['2022', '2021', '2020'],
        'E-Class': ['2022', '2021', '2020'],
        'GLC': ['2022', '2021', '2020'],
        'GLE': ['2022', '2021', '2020']
    },
    'Audi': {
        'A4': ['2022', '2021', '2020'],
        'A6': ['2022', '2021', '2020'],
        'Q5': ['2022', '2021', '2020'],
        'Q7': ['2022', '2021', '2020']
    },
    'Volkswagen': {
        'Jetta': ['2022', '2021', '2020'],
        'Passat': ['2022', '2021', '2020'],
        'Tiguan': ['2022', '2021', '2020'],
        'Atlas': ['2022', '2021', '2020']
    },
    'Nissan': {
        'Altima': ['2022', '2021', '2020'],
        'Sentra': ['2022', '2021', '2020'],
        'Rogue': ['2022', '2021', '2020'],
        'Pathfinder': ['2022', '2021', '2020']
    },
    'Tesla': {
        'Model S': ['2022', '2021', '2020'],
        'Model 3': ['2022', '2021', '2020'],
        'Model X': ['2022', '2021', '2020'],
        'Model Y': ['2022', '2021', '2020']
    },
    'Hyundai': {
        'Elantra': ['2022', '2021', '2020'],
        'Sonata': ['2022', '2021', '2020'],
        'Tucson': ['2022', '2021', '2020'],
        'Santa Fe': ['2022', '2021', '2020']
    },
    'Kia': {
        'Optima': ['2022', '2021', '2020'],
        'Sorento': ['2022', '2021', '2020'],
        'Sportage': ['2022', '2021', '2020'],
        'Telluride': ['2022', '2021', '2020']
    },
    // Add more car makers, models, and years as needed
};



// Select the dropdown elements for car maker, car model, and car year

const carYearDropdown = document.getElementById('carYear');

// Function to populate car years based on the selected car maker and model
function populateCarYears() {
    const selectedCarMaker = carMakerDropdown.value;
    const selectedCarModel = carModelDropdown.value;

    // Clear existing options in car year dropdown
    carYearDropdown.innerHTML = '<option value="" disabled selected>Select Car Year</option>';

    // If both car maker and model are selected, populate car years
    if (selectedCarMaker && selectedCarModel && carYears[selectedCarMaker] && carYears[selectedCarMaker][selectedCarModel]) {
        carYears[selectedCarMaker][selectedCarModel].forEach(year => {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            carYearDropdown.appendChild(option);
        });
    }
}

// Event listener to call populateCarYears function when car maker or car model selection changes
carMakerDropdown.addEventListener('change', populateCarYears);
carModelDropdown.addEventListener('change', populateCarYears);

// Populate car years for the initial car maker and model selections
populateCarYears();

