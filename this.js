"use strict"

// GLOBAL CONTEXTß
// this.process.version
// Version node JS adalah: 'v6.4.0'

// CLASS CONTEXT
class Example {
  constructor(contoh) {
    this.contoh = contoh

  }
}
let property = new Example(4)
property.contoh = "test"
console.log(property.contoh)

// RELEASE 1
// 'This' adalah sebuah variable yang digunakan untuk memanggil object atau function dari dalam object/function tersebut.
