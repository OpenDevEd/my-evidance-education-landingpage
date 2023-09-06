const buttons = document.getElementsByClassName("nav");
const cards_cont = document.querySelectorAll(".cards");
const cards = cards_cont[0].getElementsByClassName('card');
const cards_ref = cards_cont[1].getElementsByClassName('card');
let f;
let space = 0;
const resize_cards = () => {
	f = cards_ref[0].offsetWidth;
	for(d of cards)
	{
		if (d.offsetWidth !== f)
			d.style.minWidth = `${f}px`;
	}
    if (window.innerWidth > 980)
	{
		cards_cont[1].style.justifyContent = 'space-between';
		cards_cont[1].style.left = "0px";
		cards_cont[0].style.maxWidth = `${cards_cont[1].scrollWidth}px`;
		if (window.innerWidth > 1284)
		{
			cards_cont[0].style.gap = `60px`;
			cards_cont[0].style.left = `20px`;
		}
		else
		{
			let gap_size = (cards_cont[0].parentElement.offsetWidth - f * 2) / 3 + 20;
			cards_cont[0].style.gap = `${gap_size}px`;
			let total_card = cards_cont[0].getElementsByClassName('card').length;
			cards_cont[0].style.left = `${gap_size - gap_size / total_card}px`;
		}
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
    let parentOffW = slider.parentElement.offsetWidth;
    const parentW = slider.scrollWidth;
	const child_count = slider.getElementsByClassName('card').length;
	let card_width = 250;
    let padding = (parentOffW - card_width) / 2;

    if (!slider.style.left)
		slider.style.left = `${padding}px`;
	const left = slider.style.left.slice(0, -2);
	let go_back = +left - parentOffW * (child_count - 1);
    let coef = 1;

    if (i % 2)
		coef = -1;
	space = 0;

    if (window.innerWidth > 980)
	{
		card_width = slider.firstElementChild.offsetWidth;
		if (window.innerWidth > 1184)
		{
			padding = 20;
			go_back = -parentOffW;
			if (coef < 0 && left < 0)
				parentOffW += 20;
		}
		else
		{
			padding = (cards_cont[0].parentElement.offsetWidth - f * 2) / 3 + 20;
			go_back = -parentOffW - f * 2 -padding + padding / 3 + 10;
			if ((coef > 0 && left > -parentW + parentOffW) || (coef < 0 && left < 0))
				space =  -padding / 2 - 10;
			padding = `${padding - padding / child_count}`;
		}
	}

    if (coef < 0 && left < 0)
		slider.style.left = `${+left + parentOffW + space}px`;
    else if (coef > 0 && left > -parentW + parentOffW)
      slider.style.left = `${+left - parentOffW - space}px`;
    else if (coef > 0 && left < -parentW + parentOffW)
		slider.style.left = `${padding}px`;
    else if (coef < 0 && left >= 0)
    	slider.style.left = `${go_back}px`;
	});

  window.onresize = () => {
    resize_cards();
  };
}


window.onload = () => {
    resize_cards();
  };