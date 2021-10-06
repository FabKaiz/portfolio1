const footerName = document.querySelector(".footer__title");

const onHoverShadow = () => {
  footerName.style.transition = "all 0.7s ease";
  footerName.style.color = "rgba(255,0,0,0)";
  footerName.style.textShadow = `
    -0px 0px 2px rgba(255,0,0,0.5),
    -5px 5px 2px rgba(0,255,0,0.5),
    -10px 10px 2px rgba(0,0,255,0.5)
    `;
};

const removeStyle = () => {
  footerName.style.color = "var(--title-color)";
  footerName.style.textShadow = "none";
};

footerName.addEventListener("mouseover", onHoverShadow);
footerName.addEventListener("mouseout", removeStyle);
