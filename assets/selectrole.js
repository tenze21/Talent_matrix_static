const talentContainer= document.querySelector('.talent');
const clientContainer= document.querySelector('.client');
const talentRadio=document.querySelector('#talent');
const clientRadio= document.querySelector('#client');

talentContainer.addEventListener('click',()=>{
    talentRadio.click();
    talentContainer.classList.add('checked');
    clientContainer.classList.remove('checked');
});

clientContainer.addEventListener('click',()=>{
    clientRadio.click();
    talentContainer.classList.remove('checked');
    clientContainer.classList.add('checked');
});


