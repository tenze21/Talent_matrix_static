const confirmationModal = document.querySelector(".confirmation_modal");
const modalOpen = document.querySelector(".delete_user_btn");
const modalClose = document.querySelector(".cancel_btn");

modalOpen.addEventListener('click', ()=>{
    confirmationModal.showModal()
})

modalClose.addEventListener("click", () => {
  confirmationModal.close();
});