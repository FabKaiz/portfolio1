/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  slidesPerView: 'auto',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});