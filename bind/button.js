class Toggable {

  constructor(el) {
    this.el = el
    this.el.innerHTML = 'Off'
    this.activated = false
    // Pass this like el not like html button
    // Other option: this.onClick =  this.onClick.bind(this)
    this.el.addEventListener('click', this.onClick.bind(this))
  }

  onClick() {
    // Change state
    // call toggleText
    this.activated = !this.activated
    this.toggleText()
  }

  toggleText() {
    // Change text
    this.el.innerHTML = this.activated ? 'On' : 'Off'
  }

}

const button = document.getElementById('button')

const myButton = new Toggable(button)

// Make bind to params hello.bind(null, "Juan")
