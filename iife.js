
// Functions IIFE
// (Inmediatly Invoked Function Expresion)

// ;(function ....)() <- Call authomatic, ";" separate other vars

// NOT

const name = "Pepe"

[
 "Array",
 "js",
 "Sample"
].forEach((elem) => console.log(elem))

// YES

const name = "Pepe"

;[
 "Array",
 "js",
 "Sample"
].forEach(elem => console.log(elem))
