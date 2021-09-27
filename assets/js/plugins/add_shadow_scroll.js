/*==================== ADD SHADOW TO NAV WHEN SCROLLING ====================*/
function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 40 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 40) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)