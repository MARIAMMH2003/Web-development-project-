document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector(".container");
    const signUp = document.querySelector(".signup-link");
    const login = document.querySelector(".login-link");

    signUp.addEventListener('click', () => {
        container.classList.add("active");
    });

    login.addEventListener('click', () => {
        container.classList.remove("active");
    });

    const signupForm = document.getElementById('signuppage');
    const loginForm = document.getElementById('loginpage');

    function validateSignupForm() {
        const N = document.getElementById('name');
        const E = document.getElementById('email');
        const pass = document.getElementById('password');
        const conf = document.getElementById('confirm');

        let valid = true;

        if (N.value.trim() === "") {
            N.setCustomValidity("Please enter your name");
            valid = false;
        } else {
            N.setCustomValidity('');
        }

        const nameRegex = /^[A-Za-z\s]+$/;
        if (!nameRegex.test(N.value.trim())) {
            N.setCustomValidity("Enter a valid name");
            valid = false;
        } else {
            N.setCustomValidity('');
        }

        if (E.value.trim() === "") {
            E.setCustomValidity("Please enter your email");
            valid = false;
        } else {
            E.setCustomValidity('');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(E.value)) {
            E.setCustomValidity("Enter a valid email address");
            valid = false;
        } else {
            E.setCustomValidity('');
        }

        if (pass.value.trim() === "") {
            pass.setCustomValidity("Please enter a password");
            valid = false;
        } else {
            pass.setCustomValidity('');
        }

        if (pass.value.length < 4) {
            pass.setCustomValidity("Password must be at least 4 characters long");
            valid = false;
        } else {
            pass.setCustomValidity('');
        }

        if (conf.value.trim() === "") {
            conf.setCustomValidity("Please confirm your password");
            valid = false;
        } else {
            conf.setCustomValidity('');
        }

        if (conf.value !== pass.value) {
            conf.setCustomValidity("Passwords do not match");
            valid = false;
        } else {
            conf.setCustomValidity('');
        }

        return valid;
    }

    signupForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        if (!validateSignupForm()) {
            return;
        }

        const data = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            usertype: document.querySelector('input[name="usertype"]:checked').value
        };

        try {
            const response = await fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const results = await response.json();
                alert(results.message);
                signupForm.reset();
            } else {
                const error = await response.json();
                alert(error.error);
            }
        } catch (error) {
            console.error('Error submitting signup form:', error);
            alert('Error submitting signup form. Please try again later.');
        }
    });

    function validateLoginForm() {
        const loginemail = document.getElementById('loginemail');
        const loginpass = document.getElementById('loginpass');

        let valid = true;

        if (loginemail.value.trim() === "") {
            loginemail.setCustomValidity("Please enter your email");
            valid = false;
        } else {
            loginemail.setCustomValidity('');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(loginemail.value)) {
            loginemail.setCustomValidity("Enter a valid email address");
            valid = false;
        } else {
            loginemail.setCustomValidity('');
        }

        if (loginpass.value.trim() === "") {
            loginpass.setCustomValidity("Please enter your password");
            valid = false;
        } else {
            loginpass.setCustomValidity('');
        }

        return valid;
    }

    loginForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        if (!validateLoginForm()) {
            return;
        }

        const data = {
            email: document.getElementById('loginemail').value,
            password: document.getElementById('loginpass').value
        };

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const result = await response.json();
                sessionStorage.setItem('loggedIn', 'true');
                sessionStorage.setItem('userType', result.usertype);

                if (result.usertype === 'client') {
                    window.location.href = "/";
                } else if (result.usertype === 'tour-guide') {
                    window.location.href = "../html/TourGuide.html";
                } else if (result.usertype === 'admin') {
                    window.location.href = "../html/Tourifyad.html";
                } else {
                    alert('Unknown user type');
                }
            } else {
                const error = await response.json();
                alert(error.error);
            }
        } catch (error) {
            console.error('Error submitting login form:', error);
            alert('Error submitting login form. Please try again later.');
        }
    });

    // Add event listeners for real-time form validation
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirm');
    const loginemailField = document.getElementById('loginemail');
    const loginpasswordField = document.getElementById('loginpass');

    nameField.addEventListener('change', validateSignupForm);
    emailField.addEventListener('keyup', validateSignupForm);
    passwordField.addEventListener('change', validateSignupForm);
    confirmPasswordField.addEventListener('keyup', validateSignupForm);
    loginemailField.addEventListener('change', validateLoginForm);
    loginpasswordField.addEventListener('change', validateLoginForm);
});
