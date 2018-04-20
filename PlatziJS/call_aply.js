const mauro = {
	nombre: 'Mauro',
	apellido: 'Segovia'
}

function saludar(veces){
	for (let i = 0; i < veces; i++){
		console.log(`Hola ${this.nombre} ${this.apellido}`)
	}
}

saludar.call(mauro, 3);