
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

    signupForm.addEventListener('submit', async function(event) {

const N = document.getElementById("name");
const E = document.getElementById("email");
const pass = document.getElementById('pass');
const conf = document.getElementById('confirm');
const useradio = document.getElementsByName("usertype");


function validateForm() {
    if (N.value.trim() === "") {
        N.setCustomValidity("Please enter your name");
        return false;
    } else {
        N.setCustomValidity('');
    }
    var nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(N.value.trim())) {
       N.setCustomValidity("enter a valid name");
        return false;
    }
    else {
    N.setCustomValidity(''); 
     }

     if (E.value.trim() === "") {
        E.setCustomValidity("Please enter your email");
        return false;
    } else {
        E.setCustomValidity('');
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(E.value)) {
       E.setCustomValidity("enter a valid email address");
        return false;
    }
    else {
        E.setCustomValidity('');
    }
    const emailExists = accounts.some(account => account.email === E.value);
    if (emailExists) {
        E.setCustomValidity("Email already registered");
        return false;
    } else {
        E.setCustomValidity('');
    }
    if (pass.value.trim() === "") {
        pass.setCustomValidity("Please enter a password");
        return false;
    } else {
        pass.setCustomValidity('');
    }
    if (pass.value.length < 4) {
        pass.setCustomValidity("Password must be at least 4 characters long");
        return false;
    } else {
        pass.setCustomValidity('');
    }

    // Validate confirm password
    if (conf.value.trim() === "") {
        conf.setCustomValidity("Please confirm your password");
        return false;
    } else {
        conf.setCustomValidity('');
    }
    if (conf.value !== pass.value) {
        conf.setCustomValidity("Passwords do not match");
        return false;
    } else {
        conf.setCustomValidity('');
    }

   
    return true;
}
N.addEventListener('change', validateForm);
E.addEventListener('keyup', validateForm);
pass.addEventListener('change', validateForm);
conf.addEventListener('keyup', validateForm);

// radio validation
let usertype = false;
for (let i = 0; i < useradio.length; i++) {
    if (useradio[i].checked) {
        usertype = true;
        break;
    }
}
if (!usertype) {
    alert("Please choose a user type");
    return;
}


if (!validateForm()) {
    return; 
}


// saving the user in object array
// const name=document.getElementById('name').value;
// var email=document.getElementById('email').value;
// const pass_=document.getElementById('pass').value;

// const useraccount={
// name:name,
// email:email,
// password:pass_
// };


// accounts.push(useraccount);
// alert("success");

// });

////heeereeee
const userData = {
    name: N.value.trim(),
    email: E.value.trim(),
    password: pass.value.trim(),
    userType: document.querySelector('input[name="usertype"]:checked').value
};

try {
    const response = await fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    if (!response.ok) {
        throw new Error('Failed to register user');
    }

    const result = await response.json();
    alert(result.message); // Success message
    window.location.href = '/login.html'; // Redirect to login page after successful registration
} catch (error) {
    console.error('Error:', error);
    alert('Failed to register user');
}
});
});
///heeeereeeee

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




