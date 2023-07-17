const buttons = document.getElementsByClassName("nav");
console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const slider =
      buttons[i].parentElement.getElementsByClassName("card_cont")[0];
    const pos = ["flex-start", "space-around", "flex-end"];
    let coef = 1;

    if (i % 2) coef = -1;

    if (pos.indexOf(slider.style.justifyContent) === -1)
      slider.style.justifyContent = pos[1];
    const index = pos.indexOf(slider.style.justifyContent) + coef;

    if (index > -1 && index < 3) slider.style.justifyContent = pos[index];
    if (index === -1) slider.style.justifyContent = pos[2];
    if (index === 3) slider.style.justifyContent = pos[0];
  });
}
