
const selectedTeam= team => {
  return name => console.log(`Hi! ${name} your team is ${team}`)
}

const teamA = selectedTeam("team A")
const teamB = selectedTeam("team B")

teamA("CR")
teamA("C. Soler")

teamB("Messi")
teamB("Lukaku")
