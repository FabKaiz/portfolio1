/*==================== SERVICES MODAL ====================*/

const modalViews  = document.querySelectorAll(".services__modal"),
      modalBtns   = document.querySelectorAll(".services__button"),
      modalCloses = document.querySelectorAll(".services__modal-close"),
      activeModal = document.querySelector(".active-modal");


let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalViews.forEach((modalView) => {
  modalView.addEventListener("click", () => {
    modalView.classList.remove("active-modal");
  })
})
