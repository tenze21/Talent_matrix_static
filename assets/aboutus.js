//for opening the contact us model
const openContactModel=document.querySelector('#open-contact-modal');
const closeContactModal= document.querySelector('.close-contact-modal');
const contactModal= document.querySelector('#contact-modal');

openContactModel.addEventListener('click',()=>{
    contactModal.showModal();
});

closeContactModal.addEventListener('click',()=>{
    contactModal.close();
})

//for opening and closing feedback model
const openFeedbackModal= document.querySelector('#open-feedback-modal');
const closeFeedbackModal= document.querySelector('.close-feedback-modal');
const feedbackModal= document.querySelector('.feedback-modal');

openFeedbackModal.addEventListener('click', ()=>{
    feedbackModal.showModal();
});

closeFeedbackModal.addEventListener('click', ()=>{
    feedbackModal.close()
});

function toggle1(){
    var gray=document.getElementById('gray');
    gray.classList.toggle('active');
    var popup=document.getElementById('popup');
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const left = (viewportWidth - 800 ) / 2;
    const top = (viewportHeight - 600) / 2;
    popup.style.visibility = 'visible';
    popup.style.opacity = '1';
    popup.style.left = `${left}px`;
    popup.style.top = `${top}px`;
    gray.style.filter='grayscale()';
    gray.style.pointerEvents='none';
    gray.style.userSelect='none';
    popup.classList.toggle('active')
  }
  document.getElementById('close').addEventListener('click', function() {
    var gray=document.getElementById('gray');
    var popup=document.getElementById('popup');
      gray.style.filter='none';
      gray.style.pointerEvents='auto';
      gray.style.userSelect='auto';
      popup.style.visibility = 'hidden';
      popup.style.opacity = '0';
    });
  document.getElementById('close-1').addEventListener('click', function() {
  var gray=document.getElementById('gray');
  var popup=document.getElementById('popup1');
    gray.style.filter='none';
    gray.style.pointerEvents='auto';
    gray.style.userSelect='auto';
    popup.style.visibility = 'hidden';
    popup.style.opacity = '0';
  });
  document.getElementById('close-2').addEventListener('click', function() {
    var gray=document.getElementById('gray');
    var popup=document.getElementById('popup2');
      gray.style.filter='none';
      gray.style.pointerEvents='auto';
      gray.style.userSelect='auto';
      popup.style.visibility = 'hidden';
      popup.style.opacity = '0';
    });
    document.getElementById('close-3').addEventListener('click', function() {
    var gray=document.getElementById('gray');
    var popup=document.getElementById('popup3');
      gray.style.filter='none';
      gray.style.pointerEvents='auto';
      gray.style.userSelect='auto';
      popup.style.visibility = 'hidden';
      popup.style.opacity = '0';
    });
    document.getElementById('close-4').addEventListener('click', function() {
    var gray=document.getElementById('gray');
    var popup=document.getElementById('popup4');
      gray.style.filter='none';
      gray.style.pointerEvents='auto';
      gray.style.userSelect='auto';
      popup.style.visibility = 'hidden';
      popup.style.opacity = '0';
    });
  function toggle2(){
    var gray=document.getElementById('gray');
    gray.classList.toggle('active');
    var popup=document.getElementById('popup1');
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const left = (viewportWidth - 800 ) / 2;
    const top = (viewportHeight - 600) / 2;
    popup.style.visibility = 'visible';
    popup.style.opacity = '1';
    popup.style.left = `${left}px`;
    popup.style.top = `${top}px`;
    gray.style.filter='grayscale()';
    gray.style.pointerEvents='none';
    gray.style.userSelect='none';
    popup.classList.toggle('active')
  }
  function toggle3(){
    var gray=document.getElementById('gray');
    gray.classList.toggle('active');
    var popup=document.getElementById('popup2');
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const left = (viewportWidth - 800 ) / 2;
    const top = (viewportHeight - 600) / 2;
    popup.style.visibility = 'visible';
    popup.style.opacity = '1';
    popup.style.left = `${left}px`;
    popup.style.top = `${top}px`;
    gray.style.filter='grayscale()';
    gray.style.pointerEvents='none';
    gray.style.userSelect='none';
    popup.classList.toggle('active')
  }
  function toggle4(){
    var gray=document.getElementById('gray');
    gray.classList.toggle('active');
    var popup=document.getElementById('popup3');
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const left = (viewportWidth - 800 ) / 2;
    const top = (viewportHeight - 600) / 2;
    popup.style.visibility = 'visible';
    popup.style.opacity = '1';
    popup.style.left = `${left}px`;
    popup.style.top = `${top}px`;
    gray.style.filter='grayscale()';
    gray.style.pointerEvents='none';
    gray.style.userSelect='none';
    popup.classList.toggle('active')
  }
  function toggle5(){
    var gray=document.getElementById('gray');
    gray.classList.toggle('active');
    var popup=document.getElementById('popup4');
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const left = (viewportWidth - 800 ) / 2;
    const top = (viewportHeight - 600) / 2;
    popup.style.visibility = 'visible';
    popup.style.opacity = '1';
    popup.style.left = `${left}px`;
    popup.style.top = `${top}px`;
    gray.style.filter='grayscale()';
    gray.style.pointerEvents='none';
    gray.style.userSelect='none';
    popup.classList.toggle('active')
  }
  const btnOpen= document.querySelector('#btnOpen');
const btnClose= document.querySelector('#btnClose');

btnOpen.addEventListener('click', ()=>{
btnOpen.setAttribute('aria-expanded', 'true');
})

btnClose.addEventListener('click', ()=>{
btnOpen.setAttribute('aria-expanded', 'false')
})