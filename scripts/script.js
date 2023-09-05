const buttons = document.getElementsByClassName("nav");
const cards_cont = document.querySelectorAll(".cards");
const cards = cards_cont[0].getElementsByClassName('card');
const cards_ref = cards_cont[1].getElementsByClassName('card');

const resize_cards = () => {
	let f = cards_ref[0].offsetWidth;
	for(d of cards)
	{
		if (d.offsetWidth !== f)
			d.style.minWidth = `${f}px`;
	}
    if (window.innerWidth > 980)
	{
		cards_cont[1].style.justifyContent = 'space-between';
		cards_cont[1].style.left = "0px";
		cards_cont[0].style.left = `${(cards_cont[0].parentElement.offsetWidth - f) / 2}px`;
		cards_cont[0].style.gap = `${(cards_cont[0].parentElement.offsetWidth - f)}px`;
	}
    else {
      cards_cont.forEach((cont) => {
        cont.style.left = `${(cont.parentElement.offsetWidth - 250) / 2}px`;
      });
    }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const slider = buttons[i].parentElement.getElementsByClassName("cards")[0];
    const parrentOffW = slider.parentElement.offsetWidth;
    const parrentW = slider.scrollWidth;
	const child_count = slider.getElementsByClassName('card').length;
	let card_width = 250;
    if (window.innerWidth > 980)
		card_width = slider.firstElementChild.offsetWidth;
	console.log(parrentOffW,card_width)
    const padding = (parrentOffW - card_width) / 2;
    let coef = 1;

    if (!slider.style.left)
		slider.style.left = `${padding}px`;

    if (i % 2)
		coef = -1;

    const left = slider.style.left.slice(0, -2);
	console.log(left, parrentOffW, +left - parrentOffW)
    if (coef < 0 && left < 0)
		slider.style.left = `${+left + parrentOffW}px`;
    else if (coef > 0 && left > -parrentW + parrentOffW)
      slider.style.left = `${+left - parrentOffW}px`;//
    else if (coef > 0 && left < -parrentW + parrentOffW)
		slider.style.left = `${padding}px`;
    else if (coef < 0 && left > 0)
    	slider.style.left = `${+left - parrentOffW * (child_count - 1)}px`;
  });

  window.onresize = () => {
    resize_cards();
  };
}


window.onload = () => {
    resize_cards();
  };