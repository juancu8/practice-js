// Calcular área de un triágulo.

// console.log("El área de un triángulo de base 5 y altura 7 es: " + 5 * 7 / 2)

let base = 5
let height = 7

// function area(base, height){
//   return base * height / 2
// }
//row function
// let area = (base, height) => {
//   return base * height / 2
// }
// or
//cont function siempre constante
const area = (base, height) => base * height / 2

console.log(`El área de un triángulo de base ${base} y altura ${height} es:  ${area(base, height)}`)
