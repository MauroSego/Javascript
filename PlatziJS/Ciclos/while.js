let vidaGoku = 100;
let vidaSuperman = 100;

const MIN_POWER = 5;
const MAX_POWER = 12;

//Arrow function para chequear si están vivos los personajes
const ambosSiguenVivos = () => vidaGoku > 0 && vidaSuperman > 0
//Calcula el golpe segun el random entre el mayor y menor
const calcularGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER)

const gokuSigueVivo = () => vidaGoku > 0;

let round = 0;

while (ambosSiguenVivos()) {
  round++
  console.log(`Round ${round}`)

  const golpeGoku = calcularGolpe()
  const golpeSuperman = calcularGolpe()

  if (golpeGoku > golpeSuperman) {
    // ataca goku
    console.log(`Goku ataca a Superman con un golpe de ${golpeGoku}`)
    vidaSuperman -= golpeGoku;
    console.log(`Superman queda en ${vidaSuperman} de vida`)
  } else {
    //ataca superman
    console.log(`Superman ataca a Goku con un golpe de ${golpeSuperman}`)
    vidaGoku -= golpeSuperman
    console.log(`Goku queda en ${vidaGoku} de vida`)
  }
}
//chequea si está vivo goku, en caso que no sigue vivo superman
if (gokuSigueVivo()){
  console.log(`Goku ganó la pelea. Su vida es de: ${vidaGoku}`)
} else {
  console.log(`Superman ganó la pelea. Su vida es de: ${vidaSuperman}`)
}
