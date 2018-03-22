
//La funcion interna toma el apellido por scope, puede entrar a las variables declaradas en la funcion externa 

function saludarFamilia(apellido){	
	return function saludarMiembroDeFamilia(nombre){
		console.log(`Hola ${nombre} ${apellido}`)
	}
}

const saludarGomez = saludarFamilia("Gomez");
const saludarPerez = saludarFamilia("Perez");

saludarGomez("Pedro")
saludarGomez("Juan")
saludarPerez("Pedro")
saludarPerez("Juan")


function makePrefixer(prefijo){
	return function prefijoMasPalabra(palabra){
		console.log(`${prefijo}${palabra}`);
	}
}