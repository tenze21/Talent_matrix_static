const passwordEl= document.querySelector('#password');
const confirmPasswordEl= document.querySelector('#confirm_password');
const form= document.querySelector('#password_reset_form');
const success= document.querySelector('.success_message');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let isPasswordSecure= checkPassword(),
    isConfirmPasswordValid= checkConfirmPassword();

    let isFormValid= isPasswordSecure && isConfirmPasswordValid;

    if(isFormValid){
        form.style.display='none';
        success.style.display='flex';
    }
})

function showError(input, message){
    const formField=input.parentElement;
    const error= formField.querySelector("small");
    error.textContent=  message;
}

function checkPassword(){
    let valid=false;
    const password= passwordEl.value.trim();
    const re= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    if(!re.test(password)){
        showError(passwordEl, "Please use atleats 8 characters including atleast 1 lowercase letter, 1 uppercase letter, 1 digit and 1 special character.")
    }else{
        valid=true;
    }
    return valid;
}

function checkConfirmPassword(){
    let valid= false;
    const password= passwordEl.value.trim();
    const confirmPassword= confirmPasswordEl.value.trim();
    if(password===confirmPassword){
        valid=true;
    }else{
        showError(confirmPasswordEl, "Password doesn't match")
    }
    return valid;
};

//show and hide passoword logic
const showPassword= document.querySelector('.show_password_btn');
const showConfirmPassword= document.querySelector('.show_confirmpassword_btn');

showPassword.addEventListener('click', ()=>{
    showPassword.classList.toggle('bx-show');
    if(passwordEl.type=='password'){
        passwordEl.type='text'
    }else{
        passwordEl.type='password'
    }
});

showConfirmPassword.addEventListener('click', ()=>{
    showConfirmPassword.classList.toggle('bx-show');
    if(confirmPasswordEl.type=='password'){
        confirmPasswordEl.type='text'
    }else{
        confirmPasswordEl.type='password'
    }
});