"use strict"

// GLOBAL CONTEXT




// CLASS CONTEXT
class Animal {


  constructor (components) {
    this.name = components ['name']
    this.age = components ['age']
    this.foot = components ['foot']
  }


    get name(){
      this.name = name
      return this.name
    }

    get age(){
      this.age = age
      return this.age
    }


    let hewan = new Animal ({name: 'kucing', age: '3'})
    console.log(hewan.name());


// RELEASE 1
