"use strict"

// GLOBAL CONTEXT
const pi = 3.14

class Meja {
  constructor(){
    this.kaki = 4;
  }
  tambahKaki(){
    this.kaki++
  }
  luasPenampangKaki(){
    return pi * this.kaki * this.kaki
  }
}

let mejaku = new Meja();
console.log(mejaku.kaki)
console.log(mejaku.luasPenampangKaki())
mejaku.tambahKaki()
console.log(mejaku.kaki)
console.log(mejaku.luasPenampangKaki())


// RELEASE 0
// Syntax:
// this.process.version
// versi node yang terinstall adalah
// version: 'v6.3.1',


// CLASS CONTEXT


// RELEASE 1

//The value of this is dependent upon two things:
// 1. The type of code being executed (i.e., global, function, or eval)
// 2. the caller of that code.

//this refers to the global object in all global code.
