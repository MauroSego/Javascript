function suma(...numeros){
	/*let acum = 0;
	for(let i = 0; i < numeros.length; i++){
		acum += numeros[i];
	}	*/

	//funcion orden superior para acumular el valor
	
	return numeros.reduce(function (acum, numero){
		acum += numero;
		return acum;
	}, 0); //0 es el valor inicial del acumulador
	//return acum;
}

//usando la función map (trabaja sobre cada elemento)
const dobles = (...numeros) => numeros.map(numero => numero * 2);

const pares = (...numeros) => numeros.filter(numero => return numero % 2 == 0)

suma(4, 8, 12, 9213, 7);

