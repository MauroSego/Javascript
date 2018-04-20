function suma(...numbers){ //spread operator, se pone de forma resumida los parametros
	let acum = 0;
	for(let i = 0; i < numbers.length; i++){
		acum += numbers[i];
	}
//Funciones de orden superior
	numbers.reduce()

	return acum;
}

suma (4, 8 , 12, 18 ,102);