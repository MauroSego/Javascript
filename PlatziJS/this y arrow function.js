class Persona{
	constructor(nombre, amigos = []){
		this.nombre = nombre;
		this.amigos = amigos;
	}
	listarAmigos(){
  /*
  Aca hay dos opciones se puede utilizar this pero solo no funciona entonces se puede utilizar el bind al final de la función de manera que funcione con referencia al this.
  Otra opción es hacer una variable _this referido al this antes del for each entonces se cierra en el scope el this y dentro de la variable y funciona. 

*/
    /*
		//const _this = this; //esto es para referir this sin el bind
		this.amigos.forEach( function(amigo){
			console.log(`Hola mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
		}.bind(this)) //con esta otra manera no es necesario hacer la variable _this
*/
    const _this = this; //esto es para referir this sin el bind
    this.amigos.forEach((amigo)=>{
      console.log(`Hola mi nombre es ${_this.nombre} y soy amigo de ${amigo}`)
    }) //con esta otra manera no es necesario hacer la variable _this
	}
}

const mauro = new Persona("Mauro", ["Pedro", "Juan", "Pepe"]);
/*
La mejor opcion es la de las arrow function porque es la más limpia respecto al escribir el codigo y la performance es igual

*/