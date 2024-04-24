const phoneInputField = document.querySelector("#phoneNumber");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
fetch('country.json')
    .then(response => response.json())
    .then(countryData => {
        const countrySelect = document.getElementById('country');
        console.log(countrySelect)

        countryData.forEach(country => {
            const option = document.createElement('option');
            option.value = country.code; // Assuming each country object has a "country" property
            option.textContent = country.name; // Assuming each country object has a "country" property
            countrySelect.appendChild(option);
        });
    })
    .catch(error => console.error('Error fetching country data:', error));

    const fullNameArabicInput = document.getElementById('fullNameArabic');
            
    fullNameArabicInput.addEventListener('input', function() {
        const arabicRegex = /[\u0600-\u06FF\s]/g; // Unicode range for Arabic characters and space
        
        // Check if any English characters are present in the input
        if (this.value.match(/[a-zA-Z]/)) {
            // If English characters are present, remove them
            this.value = this.value.replace(/[a-zA-Z]/g, '');
        }
    });
document.getElementById('shippingInfoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    
    const phoneInputField = document.querySelector("#phoneNumber");
    const phoneInput = window.intlTelInput(phoneInputField);
    const phoneNumber = phoneInput.getNumber();
    const formData = new FormData(this);
    
    sessionStorage.setItem('step4Data', JSON.stringify(Object.fromEntries(formData.entries())));
    window.location.href="completedForm.html"

});

