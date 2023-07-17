const buttons = document.getElementsByClassName("nav");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const slider = buttons[i].parentElement.getElementsByClassName("cards")[0];
    let coef = 1;
    const parrentW = slider.parentElement.offsetWidth;
    const padding = (parrentW - 250) / 2;
    if (!slider.style.left) slider.style.left = `${padding}px`;

    if (i % 2) coef = -1;
    const left = slider.style.left.slice(0, -2);
    if (coef < 0 && left < 0) slider.style.left = `${+left + parrentW}px`;
    else if (coef > 0 && left > -parrentW)
      slider.style.left = `${+left - parrentW}px`;
    else if (coef > 0 && left < -parrentW) slider.style.left = `${padding}px`;
    else if (coef < 0 && left > 0)
      slider.style.left = `${+left - parrentW * 2}px`;
  });

  window.onresize = () => {
    const cards = document.querySelectorAll(".cards");
    if (window.innerWidth > 980)
      cards.forEach((cont) => {
        cont.style.left = "0px";
      });
    else {
      cards.forEach((cont) => {
        cont.style.left = `${(cont.parentElement.offsetWidth - 250) / 2}px`;
      });
    }
  };
}
