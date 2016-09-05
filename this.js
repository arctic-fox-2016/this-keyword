"use strict"

// GLOBAL CONTEXT
for (let name in this) {
  if (this.hasOwnProperty(name)) console.log(name)
}
// console.log(this)



// CLASS CONTEXT
class Sahbanaji {
  constructor(name, address) {
    this.name = name
    this.address = address
  }
  printProperty() {
    console.log(this.name + ",\nalamat:" + this.address);
  }
}
let sahbanaji = new Sahbanaji('sahban aji', 'khayangan')
sahbanaji.printProperty()
  // RELEASE 1
