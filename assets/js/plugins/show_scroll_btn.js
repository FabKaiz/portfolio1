function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 1500 viewport height, add the show-scroll class to the a tag with the scroll-up class
  if(this.scrollY >= 1500) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
