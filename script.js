console.log('%c Mimozemšťan přístál na zemi ', 'color:green;background-color:black;');


// toto budeš potřebovat později
// funkce zjistí, zda se dva obdélníky překrývají
// tj. zda se dva předměty srazily
const jeSrazka = (obj1, obj2) => {
	return !(
		obj1.x + obj1.sirka < obj2.x
		|| obj2.x + obj2.sirka < obj1.x
		|| obj1.y + obj1.vyska < obj2.y
		|| obj2.y + obj2.vyska < obj1.y
	);
}

const nastavPozici = (obj) => {
	obj.element.style.left = obj.x + 'px';
	obj.element.style.top = obj.y + 'px';
}


const priStiskuKlavesy = (event) => {

	if (event.code === 'ArrowRight') {
		panacek.x += 10;
		if (panacek.x + panacek.sirka > window.innerWidth) {
			panacek.x = window.innerWidth - panacek.sirka;
		}
		panacek.element.src = 'obrazky/panacek-vpravo.png';
	}

	if (event.code === 'ArrowLeft') {
		panacek.x -= 10;
		if (panacek.x < 0) {
			panacek.x = 0;
		}
		panacek.element.src = 'obrazky/panacek-vlevo.png';
	}

	if (event.code === 'ArrowUp') {
		panacek.y -= 10;
		if (panacek.y < 0) {
			panacek.y = 0;
		}
		panacek.element.src = 'obrazky/panacek-nahoru.png';
	}

	if (event.code === 'ArrowDown') {
		panacek.y += 10;
		if (panacek.y + panacek.vyska > window.innerHeight) {
			panacek.y = window.innerHeight - panacek.vyska;
		}
		panacek.element.src = 'obrazky/panacek.png';
	}

	nastavPozici(panacek);

	if (jeSrazka(panacek, mince)) {
		mince.x = 500;
		mince.y = 100;
		nastavPozici(mince);
	}
}


const panacek = {
	x: 25,
	y: 100,
	sirka: 64,
	vyska: 70,
	element: document.querySelector('#panacek'),
}

const mince = {
	x: 150,
	y: 210,
	sirka: 36,
	vyska: 36,
	element: document.querySelector('#mince'),
}

nastavPozici(panacek);
nastavPozici(mince);
document.addEventListener('keydown', priStiskuKlavesy);

// nahodna pozice mince pri sebrani
// pocitat a zobrazovat skore
// prehravat zvuky
// ukoncit hru a oznamit vitezstvi pri sebrani 5 minci - alert()