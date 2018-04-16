// Quien puede pasar a ver una película, >18
// definimos unas variables primero

const starWars7 = "Start Wards: El Despertar de la Fuerza"
const pgStarWars = 13

const nameJuan = 'Juan'
const ageJuan = 27

const namePepe = 'Pepe'
const agePepe = 10

function canWatch(name, age, isWithAdult = false){
  if (age >= pgStarWars){
    alert(`${name} puede pasar a ver la película`)
  }
  else if (isWithAdult) {
    alert(`${name} puede pasar a ver ${starWars7}.
      Aunque su edad es ${age}, se encuentra acompañado/a por u adulto.`)
  }
  else{
      alert(`${name} no puede pasar a ver la película.
        Tiene ${age} años y necesita tener ${pgStarWars}`)
  }
}

canWatch(nameJuan, ageJuan)
canWatch(namePepe, agePepe, true)
