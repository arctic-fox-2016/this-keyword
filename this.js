"use strict"

// GLOBAL CONTEXT
let meja = {
  kaki : 4,
  tambahkaki: function() {
    this.kaki++
  }
}

console.log(meja.kaki)
meja['tambahkaki']()
console.log(meja.kaki)


// RELEASE 0
// Syntax:
// node -> this [enter]
// versi node yang terinstall adalah
// version: 'v6.3.1',


// CLASS CONTEXT


// RELEASE 1

//The value of this is dependent upon two things:
// 1. The type of code being executed (i.e., global, function, or eval)
// 2. the caller of that code.

//this refers to the global object in all global code.
