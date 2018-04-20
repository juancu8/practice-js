function Point(x,y) {
  this.x = x
  this.y = y
}

Point.prototype.moveInX = function moveInX(x) {
  this.x += x
}

Point.prototype.moveInY = function moveInY(y) {
  this.y += y
}

Point.prototype.distance = function distance(p) {
  const x = this.x - p.x
  const y = this.y - p.y

  return Math.sqrt(x * x + y * y )
}

const p1 = new Point(0,4)
const p2 = new Point(3,0)
// Make new object, assing like prototype -> this

console.log(p1.distance(p2))
p1.moveInX(10)
console.log(p1.distance(p2))

// p1._proto_ 
