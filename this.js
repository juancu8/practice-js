
class Person{
  constructor(name, friends = []){
    this.name = name
    this.friends = friends
    // this.friends = friends || []
  }

  showFriends() {
    // make a var for this
    // const _this = this
    // self
    // with ES6 make bind authomatic
    this.friends.forEach( (friend) => {
      console.log(`Hi! my name is ${this.name} and this is my friend ${friend}`)
    })
    // or use bind -> who like make reference
    // this.friends.forEach( (friend) => {
    //    console.log(`Hi! my name is ${_this.name} and this is my friend ${friend}`)
    // }.bind(this))
  }

}

const chandler = new Person("Chandler", ["Monica", "Ross", "Joey", "Phoebe", "Rachel"])
