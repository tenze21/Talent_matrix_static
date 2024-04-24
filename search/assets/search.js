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

const openLeaderModel = document.querySelectorAll('.view');
const closeLeaderModel = document.querySelectorAll('.close');
const leaderModel = document.querySelectorAll('.popup');

openLeaderModel.forEach((button, index) => {
  button.addEventListener('click', () => {
    leaderModel[index].showModal();
  });
});

closeLeaderModel.forEach((button, index) => {
  button.addEventListener('click', () => {
    leaderModel[index].close();
  });
});

//hamburger menu functionality
const btnOpen= document.querySelector('#btnOpen');
const btnClose= document.querySelector('#btnClose');

btnOpen.addEventListener('click', ()=>{
    btnOpen.setAttribute('aria-expanded', 'true');
})

btnClose.addEventListener('click', ()=>{
    btnOpen.setAttribute('aria-expanded', 'false')
})


// const dropdown=document.querySelector(".dropdown"),
//     Categories=document.querySelector(".Categories"),
//     options=document.querySelectorAll(".category_list .list_item"),
//     arrow=document.querySelector(".arrow-icon"),
//     result=document.querySelector(".search-result"),
//     searchInput=document.querySelector(".search-input"),
//     search_icon=document.querySelector(".search-icon")


// Categories.addEventListener("click", ()=>{
//     dropdown.classList.toggle("active")
//     arrow.classList.toggle("active")
// })

// options.forEach(option =>{
//     option.addEventListener("click", ()=>{
//         let selectedOption = option.innerText;
//         result.innerText = selectedOption;
//         dropdown.classList.remove("active");
//         arrow.classList.remove("active")
//     });
// });
// searchInput.addEventListener("keydown", function(event) {
//   if (event.keyCode === 13) {
//     // Get the value of the search input
//     const searchTerm = searchInput.value;
//     result.textContent = searchTerm;
//   }
//   else{
//     search_icon.addEventListener("click",()=>{
//         const searchTerm = searchInput.value;
//         result.textContent = searchTerm;
//     })
//   }
// });

// category filter 
const category= document.querySelector("#category");
const result= document.querySelector(".search-result");

category.addEventListener("change", ()=>{
    const categoryValue= category.value;
    result.textContent = categoryValue;
})