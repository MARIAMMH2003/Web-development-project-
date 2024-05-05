
const contain=document.querySelector(".container"),
signUp=document.querySelector(".signup-link"),
login=document.querySelector(".login-link");


signUp.addEventListener('click',()=>{
  
contain.classList.add("active");

});
login.addEventListener('click',()=>{
  
    contain.classList.remove("active");
    
});


const passw = document.getElementById('pass');
const conf = document.getElementById('confirm');
function validatePassword() {
    if(conf.value==""){
        conf.setCustomValidity("fill this field"); 
    }
    else if (passw.value !== conf.value) {
        conf.setCustomValidity("Passwords do not match");
    } else {
        conf.setCustomValidity('');
    }
  
}

passw.addEventListener('change', validatePassword);
conf.addEventListener('keyup', validatePassword);



let accounts=[];
document.getElementById('signuppage').addEventListener('submit',function(event){
event.preventDefault();

const N = document.getElementById("name");
const E = document.getElementById("email");
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
   
    return true;
}
N.addEventListener('change', validateForm);
E.addEventListener('keyup', validateForm);

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
const name=document.getElementById('name').value;
const email=document.getElementById('email').value;
const pass_=document.getElementById('pass').value;

const useraccount={
name:name,
email:email,
password:pass_
};


accounts.push(useraccount);
alert("success");

});



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
        const user = document.getElementsByName("usertype");
        let userType;
        for (let i = 0; i < user.length; i++) {
            if (user[i].checked) {
                userType = user[i].value;
                break;
            }
        }
        if (userType === 'client') {
            window.location.href = "client_home.html";
        } else if (userType === 'tour-guide') {
            window.location.href = "guide_home.html";
        }
    } else {
        alert("Email or password is incorrect.");
    }
});




