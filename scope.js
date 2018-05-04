
let name = "Juanillo"

hello = (name) => console.log(name)
hello("Pepe")
// Pepe

console.log(name)
// Juanillo

helloNew = () => {
  name = "Manolo"
  console.log(name)
}
helloNew()
// Manolo

console.log(name)
// Manolo, function go to superior scope global

// JS hosting, all variables up to first line. It's the first to execute

// Example:

function hello10(name){
  for(var i = 0; i < 10; i++){
    // some code
  }
}

// it's

function hello10(name){
  var i;
  for(i = 0; i < 10; i++){
    // some code
  }
}

// better use let, make i only to for

function hello10(name){
  for(let i = 0; i < 10; i++){
    // here use i
  }
  // here i is undefined
}
