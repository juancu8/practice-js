// Distance between two points

const p1 = {
  x: 0,
  y: 4,
  moveInX(x) {this.x += x},
  moveInY(y) {this.y += y}
}

const p2 = {
  x: 3,
  y: 0,
  moveInX(x) {this.x += x},
  moveInY(y) {this.y += y}
}

const distance = (p1, p2) => {
  const x = p1.x - p2.x
  const y = p1.y - p2.y

  return Math.sqrt(x * x + y * y)
}

console.log(distance(p1, {x: 20, y: -7}))
