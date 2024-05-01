
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
const C = document.getElementsByName("logCheck");
const useradio = document.getElementsByName("usertype");


function validateForm() {

    var nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(N.value.trim())) {
       N.setCustomValidity("enter a valid name");
        return false;
    }
    else {
    N.setCustomValidity(''); 
     }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(E.value)) {
       E.setCustomValidity("enter a valid email address");
        return false;
    }
    else {
        E.setCustomValidity('');
    }

    // if(!C.checked){
    //     C.setCustomValidity("please agree on terms and conditions");
    //     return false;
    // }
    // else{
    //     C.setCustomValidity('');
        
    // }
   
    let bool=false;
    for(let i=0;i<useradio.length;i++)
    {
        if(useradio[i].checked){
            bool=true;
            break
        }
    }
    if(!bool)
    {
        alert("please choose a user");
        return false;
    }
   
    return true;
}
N.addEventListener('change', validateForm);
E.addEventListener('keyup', validateForm);





if (!validateForm()) {
    return; 
}
const name=document.getElementById('name').value;
const email=document.getElementById('email').value;
const pass_=document.getElementById('pass').value;
// const confpass_=document.getElementById('confirm').value;

const useraccount={
name:name,
email:email,
password:pass_
};


accounts.push(useraccount);
alert("success");

});


document.getElementById('loginpage').addEventListener('submit',function(event){
    event.preventDefault();
    const loginemail=document.getElementById('loginemail').value;
const loginpass=document.getElementById('loginpass').value;


const found=accounts.find(account=>account.email===loginemail);
if (found && found.password === loginpass) {

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



