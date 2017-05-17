const nacimiento = new Date(1991, 9, 3);

const hoy = new Date();

const tiempo = hoy - nacimiento;

const tiempoSegundo = tiempo / 1000
const tiempoMin = tiempoSegundo / 1000
const tiempoHoras = tiempoSegundo / 1000

//Saber la proxima fecha de cumpleaños
const proximo = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())

const diasSemana = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado'
]

//Para saber que día cae mi proximo cumpleaños
console.log(diasSemana[proximo.getDay()])
