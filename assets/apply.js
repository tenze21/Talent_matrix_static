const form= document.querySelector('.application-form')
const nameEl= document.querySelector('#name');
const phoneNumberEl= document.querySelector('#phoneNumber');
const passwordEl= document.querySelector('#password');
const confirmPasswordEl= document.querySelector('#confirmPassword');
const showHidePassword= document.querySelector('.hide_password');
const showHideConfirmPassword= document.querySelector('.hide_comfirmpassword');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let isNameValid= checkName(),
    isphoneNumberValid= checkPhoneNumber(),
    isPasswordSecure= checkPassword(),
    isConfirmPasswordValid= checkConfirmPassword();
    
    let isFormValid= isNameValid && isphoneNumberValid && isPasswordSecure && isConfirmPasswordValid;
    if(isFormValid){
        location.reload();
    }
})

function showError(input, message){
    const formField= input.parentElement;
    const error=formField.querySelector("small");
    error.textContent= message;
};

function checkName(){
    let valid= false;
    const name=nameEl.value.trim();
    const re = /^[a-zA-Z\s]+(?:\s+[a-zA-Z\s]+)?$/;
    if(!re.test(name)){
        showError(nameEl, "Name Cannot have numbers and special characters.");
    }else{
        valid=true;
    }
    return valid;
};

function checkPhoneNumber(){
    let valid= false;
    const phoneNumber= phoneNumberEl.value.trim();
    const re= /^(17|77)\d{6}$/;
    if(!re.test(phoneNumber)){
        showError(phoneNumberEl, "Invalid phone number.");
    }else{
        valid=true;
    }
    return valid;
};

function checkPassword(){
    let valid=false;
    const password= passwordEl.value.trim();
    const re= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
    if(!re.test(password)){
        showError(passwordEl, "Password must have atleast 8 characters including at least 1 lowercase letter, 1 uppercase letter, 1 digit and 1 special character.")
    }else{
        valid=true;
    }
    return valid;
};

function checkConfirmPassword(){
    let valid=false;
    const confirmPassword= confirmPasswordEl.value.trim();
    const password=passwordEl.value.trim();
    if(confirmPassword!==password){
        showError(confirmPasswordEl, "Password doesn't match.")
    }else{
        valid=true
    }
    return valid;
};

showHidePassword.addEventListener('click', function(){
    this.classList.toggle('bx-show');
    if(passwordEl.type=='password'){
        passwordEl.type='text';
    }else{
        passwordEl.type='password';
    }
});

showHideConfirmPassword.addEventListener('click', function(){
    this.classList.toggle('bx-show');
    if(confirmPasswordEl.type=='password'){
        confirmPasswordEl.type='text'
    }else{
        confirmPasswordEl.type='password'
    }
})