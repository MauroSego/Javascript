function fibonacci(){
	let a = 0, b = 1;
	return{
		next: function(){
			let f = a 
			a = b 
			b = f + a
			return{ value: f, done: false}
		}
	}
}

//const fibo = fibonacci()
//fibo.next() devuelve un valor o nos dice si terminó o no (value o done)

const fibo = {nombre: 'Mauro'}
fibo[Symbol.iterator] = fibonacci

//Esta es otra estructura de for que se puede utilizar, 
let i = 0
for (let value of fibo){
	console.log(value)
	i++
	if(i > 20) break 
}

/*
A medida que va a avanzando la funcion recuerda los valores anteriores para poder hacer el calculo de fibonacci 
*/