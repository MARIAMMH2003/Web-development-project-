
const contain=document.querySelector(".container"),
signUp=document.querySelector(".signup-link"),
login=document.querySelector(".login-link");


signUp.addEventListener('click',()=>{
  
contain.classList.add("active");

});
login.addEventListener('click',()=>{
  
    contain.classList.remove("active");
    
});





document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signuppage');

    function validateForm() {
const N = document.getElementById("name");
const E = document.getElementById("email");
 const pass = document.getElementById('password');
 const conf = document.getElementById('confirm');
const usertype=document.getElementById('input[name="usertype"]:checked');
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
        if (!validateForm()) 
            {
            return;
        }
           const data = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
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
            } 
            else {
                const error = await response.json();
                alert(error.error);
            }
        } 
        catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form. Please try again later.');
        }
    });


const N=document.getElementById("name");
const E=document.getElementById("email");
const pass=document.getElementById("password");
const conf=document.getElementById("confirm");


    N.addEventListener('change', validateForm);
    E.addEventListener('keyup', validateForm);
    pass.addEventListener('change', validateForm);
    conf.addEventListener('keyup', validateForm);
});
// radio validation
// let usertype = false;
// for (let i = 0; i < useradio.length; i++) {
//     if (useradio[i].checked) {
//         usertype = true;
//         break;
//     }
// }
// if (!usertype) {
//     alert("Please choose a user type");
//     return;
// }

// loging in
document.getElementById('loginpage').addEventListener('submit', function(event) {
    event.preventDefault();
    const loginemail = document.getElementById('loginemail');
    const loginpass = document.getElementById('loginpass');

    function validateForm() {
      
    
         if (loginemail.value.trim() === "") {
            loginemail.setCustomValidity("Please enter your email");
            return false;
        } else {
            loginemail.setCustomValidity('');
        }
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(loginemail.value)) {
            loginemail.setCustomValidity("enter a valid email address");
            return false;
        }
        else {
            loginemail.setCustomValidity('');
        }
        if (loginpass.value.trim() === "") {
            loginpass.setCustomValidity("Please enter your password");
            return false;
        } else {
            loginpass.setCustomValidity('');
        }

        
        return true;
    }
    loginemail.addEventListener('change', validateForm);
    loginpass.addEventListener('keyup', validateForm);
    if (!validateForm()) {
        return;
    }

    const found = accounts.find(account => account.email === loginemail.value);
    if (found && found.password === loginpass.value) {
        sessionStorage.setItem('loggedIn', 'true');
        const user = document.getElementsByName("usertype");
        let userType;
        for (let i = 0; i < user.length; i++) {
            if (user[i].checked) {
                userType = user[i].value;
                break;
            }
        }
    
        if (userType === 'client') {
            window.location.href = "../html/index.html";
        } else if (userType === 'tour-guide') {
            window.location.href = "../html/TourGuide.html";
        }
        else if(found.email === "zeinamabrouk@gmail.com" && found.password === "1234")
            {
                window.location.href = "../html/Tourifyad.html";
            }
          
    } else {
        alert("Email or password is incorrect.");
    }

});




