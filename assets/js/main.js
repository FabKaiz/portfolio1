/*==================== JS PLUGINS / SECTIONS ====================*/
import "./plugins/nav.js";
import "./plugins/accordion_skills.js";
import "./plugins/qualification.js";
import "./plugins/modal_services.js";
import "./plugins/portfolio.js";
import "./plugins/contact.js";

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
import "./plugins/scroll_section_links.js"

/*==================== ADD SHADOW TO NAV WHEN SCROLLING ====================*/
import "./plugins/add_shadow_scroll.js"

/*==================== SHOW SCROLL UP ====================*/
import "./plugins/show_scroll_btn.js"

/*==================== DARK LIGHT THEME ====================*/
import "./plugins/dark_light_theme.js";

/*==================== AOS Animate On Scroll ====================*/
// AOS.init({disable: 'mobile'});
AOS.init({
  disable: function() {
    const maxWidth = 850;
    return window.innerWidth < maxWidth;
  },
});

/*==================== Change language ====================*/
const languageBtn = document.getElementById("switch-lang");

languageBtn.addEventListener('click', () => {
  if(languageBtn.innerText === "EN") {
    window.location = 'en.html';
  } else {
    window.location = 'index.html';
  }
});