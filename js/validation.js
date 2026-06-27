document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const errorBox = document.getElementById('error-message-box');

    contactForm.addEventListener('submit', (e) => {
        // Stop instant default submitting routines
        e.preventDefault(); 
        
        // Target and fetch input values
        const fullName = document.getElementById('full-name').value.trim();
        const emailAddr = document.getElementById('email-addr').value.trim();
        const phoneNum = document.getElementById('phone-num').value.trim();
        const userMsg = document.getElementById('user-msg').value.trim();

        let validationErrors = [];

        // 1. Mandatory Presence checks
        if (!fullName || !emailAddr || !phoneNum || !userMsg) {
            validationErrors.push("All input fields are mandatory and cannot remain empty.");
        }

        // 2. Structural Email layout confirmation via Regex pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailAddr && !emailPattern.test(emailAddr)) {
            validationErrors.push("Please enter a valid email address configuration format.");
        }

        // 3. String component constraint verify digits only
        const digitsPattern = /^[0-9]+$/;
        if (phoneNum && !digitsPattern.test(phoneNum)) {
            validationErrors.push("The phone number input must strictly consist of numeric digits.");
        }

        // Output formatting display action handling logic
        if (validationErrors.length > 0) {
            errorBox.innerHTML = validationErrors.join('<br>');
            errorBox.style.display = 'block';
            errorBox.style.backgroundColor = '#fce8e6';
            errorBox.style.color = '#a81c1c';
        } else {
            errorBox.style.display = 'block';
            errorBox.style.backgroundColor = '#e6f4ea';
            errorBox.style.color = '#137333';
            errorBox.innerHTML = "Success! Validation cleared safely. Form submission accepted.";
            contactForm.reset();
        }
    });
});