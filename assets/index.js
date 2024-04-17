var CategorySlider = new Swiper(".category-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const initTestimonilSlider=()=>{
  const slideBtns= document.querySelectorAll(".slide-button");
  const testimonialList= document.querySelector(".testimonial-list");
  const sliderWrapper=document.querySelector(".slider_wrapper");
  const maxScrollLeft= sliderWrapper.scrollWidth - sliderWrapper.clientWidth;
  
  slideBtns.forEach(button=>{
    button.addEventListener('click', ()=>{
      const direction= button.id==="prev-slide"? -1 : 1;
      const scrollAmount= sliderWrapper.clientWidth * direction;
      console.log(scrollAmount);
      sliderWrapper.scrollBy({left: scrollAmount, behavior:"smooth"})
    })
  });
}
window.addEventListener("resize", initTestimonilSlider);
window.addEventListener("load", initTestimonilSlider);

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

//hamburger menu functionality
const btnOpen= document.querySelector('#btnOpen');
const btnClose= document.querySelector('#btnClose');

btnOpen.addEventListener('click', ()=>{
    btnOpen.setAttribute('aria-expanded', 'true');
})

btnClose.addEventListener('click', ()=>{
    btnOpen.setAttribute('aria-expanded', 'false')
})

