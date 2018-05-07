
const juan = {
  name: 'Juan',
  surname: 'cu'
}


function hello(number, uppercase) {
  let str = `Hey ${this.name}`
  str = uppercase ? str.toUpperCase() : str
  for (let i = 0; i < number; i++) {
    console.log(str)
  }
}

const params = [3, true]
 // Who is this
hello.call(juan, ...params)

// Who is this
hello.apply(juan, params)
