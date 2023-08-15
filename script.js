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

