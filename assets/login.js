const password= document.querySelector('#password');
const showHidePassword= document.querySelector('.password-hide');

showHidePassword.addEventListener('click', function(){
    this.classList.toggle('bx-show')
    if(password.type==='password'){
        password.type='text'
    }else{
        password.type='password'
    }
})