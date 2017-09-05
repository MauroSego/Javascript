const Punto = {
  //datos del punto
  init: function init(x, y){
    this.x = x
    this.y = y
  },
  //metodos del punto
  moverEnX: function (x){
    this.x += x
  },
  moverEnY: function (y){
    this.y += y
  },
  distancia: function distancia(p){
    const x = this.x - p.x
    const y = this.y - p.y
    return Math.sqrt(x * x + y * y)
  }
}

//Así se crean los objetos con el prototipo de la función
const p1 = Object.create(Punto)
const p2 = Object.create(Punto)

p1.init(0, 4)
p2.init(3, 0)



console.log(p1.distancia(p2));
console.log(p2.distancia(p1))
p1.moverEnX(10);
console.log(p1.distancia(p2));
p2.moverEnY(-4);
console.log(p1.distancia(p2));

// Los objetos están basados en prototipos, cada cambio en el prototipo creará cambios en el resto de los objetos
