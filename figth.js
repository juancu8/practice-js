let lifeGoku = 100
let lifeIronman = 100

const MIN_POWER = 5
const MAX_POWER = 12

const bothWhitLive = () => lifeGoku > 0 && lifeIronman > 0
const calulateKnock = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER)
const gokuWhitLife = () => lifeGoku > 0

let round = 0

while (bothWhitLive()) {
  round++
  console.log(`round ${round}`)

  const knockGoku = calulateKnock()
  const knockIronman = calulateKnock()

  if(knockGoku > knockIronman) {
    console.log(`Goku knock ${knockGoku}`)
    lifeIronman  -= knockGoku
    console.log(`Ironman life is ${lifeIronman}`)
    //ataca goku
  } else {
    console.log(`Ironman knock ${knockIronman}`)
    lifeGoku  -= knockIronman
    console.log(`Goku life is ${lifeGoku}`)
    // ata ironman
  }
}

if(gokuWhitLife()) {
  console.log(`Goku win, his life is ${lifeGoku}`)
} else {
  console.log(`Ironman win, his life is ${lifeIronman}`)
}
