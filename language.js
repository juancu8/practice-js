
function trans(str){
  let translation = str

  // termina en "ar" se elimina "ar"
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2) // -2 dos últimos caracteres
  }

  // si la palabra empieza con z se añade "pe" al final
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe'
  }

  // si la palabra tiene 10 o más letras se parte por la mitad y se une con un -
  const length = translation.length
  if (length >= 10) {
    const firstHalf = translation.slice(0, Math.round(length/2))
    const secondHalf = translation.slice(Math.round(length/2))
    translation = `${firstHalf}-${secondHalf}`
  }

  const reverse = (str) => str.split('').reverse().join('')

  function minMay(str) {
    const length = str.length
    let translation = ''
    let capitalize = true
    for (let i = 0; i < length; i++) {
      const char = str.charAt(i)
      translation += capitalize ? char.toUpperCase() : char.toLowerCase()
      capitalize = !capitalize
    }
    return translation
  }

  // si la palabra es un palindromo, ninguna cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas
  if (str == reverse(str)) {
    return minMay(str)
  }

  return translation
}

console.log(trans("Programar")) // Program
console.log(trans("Zorro")) // Zorrope
console.log(trans("Zarpar")) // Zarppe
console.log(trans("Abecedario")) // Abece-dario
console.log(trans("sometemos")) // SoMeTeMoS
