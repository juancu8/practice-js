
// Funcion error
function handleError(err){
	console.log(`Request failed: ${err}`)
}
// USE LIBRARY ---->  babel-polyfill


// let luke
// fetch('https://www.swapi.co/api/people/1/')
//   .then(response => response.json())
//   .then((json) => {
//     luke = response
//     return fetch(luke.homeworld)
//   })
//   .then(response => response.json())
//   .then((homeworld) => {
//     luke.homeworld = homeworld
// 		console.log(`${luke.name} born on ${luke.homeworld.name}`)
//   })
//   .catch(err => handleError(err))
// )

// New call:

async function getLuke(){
  try{
    // await wait for result to promise
    const response = await fetch('https://www.swapi.co/api/people/1/')
    const luke = await response.json()
    const responseHomeWorld = await fetch(luke.homeworld)
    luke.homeworld = await responseHomeWorld.json()
    console.log(`${luke.name} born on ${luke.homeworld.name}`)
  }catch(err){
    handleError(err)

  }
}

getLuke()
