
// swapi.co

function get(URL, callback){
	const xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
		const DONE = 4
		const OK = 200
		if (this.readyState === DONE) {
			if(this.status === OK){
				//all OK
		    callback(null, JSON.parse(this.responseText))
			}
      else {
				//error
				callback(new Error(`${this.status}`))
			}
		}
	}

	xhr.open('GET', URL);
	xhr.send(null);
}

// Funcion error
function handleError(err){
	console.log(`Request failed: ${err}`)
}


// call metod
get('https://www.swapi.co/api/people/1/', function onResponse(err, luke){
	if(err) return handleError(err)

	// get world
	get(luke.homeworld, function onHomeworldResponse(err, homeworld){
		if(err) return handleError(err)

		luke.homeworld = homeworld
		console.log(`${luke.name} born on ${luke.homeworld.name}`)
	})

	console.log(`Request succeded`)
	console.log('luke', luke)
})
