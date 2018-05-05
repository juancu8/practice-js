
// spread operator ...element -> make array
// method for array reduce, acumulated elments function(acum, elemenet, index), initializer
// map, make a new array -> for this save or return
// filter

const summatory = (...numbers) => {
  return numbers.reduce(function (total, num){
    total += num
    return total
  }, 0)
}

const double = (...numbers) => {
  return numbers.map(num => num *2)
}

const pairs = (...numbers) => {
  return numbers.filter(num => num % 2 == 0)
}

summatory(4, 8, 12, 7)
double(4, 8, 12, 7)
pairs(4, 8, 12, 7)
