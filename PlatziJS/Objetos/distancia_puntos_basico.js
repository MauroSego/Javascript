const p1 = {
	x: 3, 
	y: 0,
	//Funcion para mover el valor de x
	moverEnX: function(x){this.x +=x}
}
const p2 = {
	x: 5, 
	y: 2,
	moverEnX: function(x){this.x +=x}
}

function distancia(p1, p2){
  const x = p1.x - p2.x
  const y = p1.y - p2.y

  return Math.sqrt(x * x + y * y)
}

console.log(distancia(p1, {x: 20, y: -10}));