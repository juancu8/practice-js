
const name = 'Juan'
const days = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo"
]

function run() {
  const min = 5
  const max = 15
  return Math.round(Math.random() * (max - min)) + min
}
// .floor() hacia abajo
// .ceil()
// round()

let totalKms = 0
const length = days.length
for (let i = 0; i < length; i++) {
  const kms = run()
  totalKms += kms
  console.log(`El día ${days[i]} ${name} corrió ${kms}kms`)
}

const mean = totalKms / days.length
console.log(`En promedio, ${name} corrió ${mean.toFixed(2)}`)
