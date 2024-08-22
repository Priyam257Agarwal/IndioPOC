document.addEventListener("DOMContentLoaded", () => {
    const bookingForm = document.getElementById('bookingForm');
    const searchButton = document.getElementById('searchFlight');
    const errorPopup = document.getElementById('errorPopup');
    const errorMessage = document.getElementById('errorMessage');

    searchButton.addEventListener('click', (e) => {
        e.preventDefault();

        const fields = ['from', 'to', 'deptarture', 'return', 'passengerNo'];
        const [from, to, departureValue, returnValue, passengers] = fields.map(field => document.querySelector(`input[name="${field}"]`).value);
        const travelPurpose = document.getElementById('travelOpt').value;

        let message = from ? to ? departureValue ? returnValue ? passengers ? travelPurpose ? 
            new Date(departureValue) >= new Date(returnValue) ? 'The departure date must be before the return date.' : ''
            : 'Select your travel purpose.' 
            : 'Mention the number of passengers.' 
            : 'Select a return date.' 
            : 'Select a departure date.' 
            : 'Enter your destination city.' 
            : 'Enter your departure city.';

        if (message) {
            errorMessage.textContent = message;
            errorPopup.style.display = 'block';
            setTimeout(() => errorPopup.style.display = 'none', 7000);
        } else {
            alert("Form submitted successfully!");
            bookingForm.submit();
        }
    });
});
