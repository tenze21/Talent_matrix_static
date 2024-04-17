const form= document.querySelector('#verification_form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    window.location.href ="../passwordreset.html";
})