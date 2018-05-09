
// ECMAscript native suport

const promise = new Promise((resolve, reject) => {
  // async
  // If ok, resolve. If error, reject
  setTimeout(() => {
    reject(new Error('Have a error'))
  }, 1000)
})

promise
  .then( () => {
    //ok
  })
  .catch( (err) => {
    //error
  })

//////////////////////////////////////////////////////////////////////////////

// Replace callback by promise

function get(URL){
	const xhr = new XMLHttpRequest();

  return new Promise((resolve, reject) =>{
    xhr.onreadystatechange = function () {
  		const DONE = 4
  		const OK = 200
  		if (this.readyState === DONE) {
  			if(this.status === OK){
  		    resolve(null, JSON.parse(this.responseText))
  			}
        else {
  				reject(new Error(`${this.status}`))
  			}
  		}
  	}
  })

	xhr.open('GET', URL);
	xhr.send(null);
}

// Funcion error
function handleError(err){
	console.log(`Request failed: ${err}`)
}

let luke
get('https://www.swapi.co/api/people/1/')
  .then((response) =>{
    luke = response
    return get(luke.homeworld)
  })
  .then((homeworld) => {
    luke.homeworld = homeworld
		console.log(`${luke.name} born on ${luke.homeworld.name}`)
  })
  .catch(err => handleError(err))
)

// With fetch sintaxt, get isn't necessary

let luke
fetch('https://www.swapi.co/api/people/1/')
  .then(response => response.json())
  .then((json) => {
    luke = response
    return fetch(luke.homeworld)
  })
  .then(response => response.json())
  .then((homeworld) => {
    luke.homeworld = homeworld
		console.log(`${luke.name} born on ${luke.homeworld.name}`)
  })
  .catch(err => handleError(err))
)
