
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('login-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = form.elements.email.value;
        const password = form.elements.password.value;

        if (isValidEmail(email) && isValidPassword(password)) {
            // The email and password are valid, so you can submit the form
            form.submit();
        } else {
            // The email and/or password are invalid, so show an error message
            alert('Please enter a valid email and password');
        }
    });

    function isValidEmail(email) {
        // Check if the email is a valid format
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPassword(password) {
        // Check if the password is at least 8 characters long
        return password.length >= 8;
    }
});