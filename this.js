"use strict"

// GLOBAL CONTEXT
const repl = require('repl');
var pesan = 'Halo'

repl.start('==> ').context.m = pesan;



// RELEASE 1
//ini merupakan global subtitusi untuk deklarasi local scope variable, dibawah diberi contoh kelas binatang
// CLASS CONTEXT
class Animal {
  constructor (components) {
    this.name = components ['name']
    this.age = components ['age']
    this.foot = components ['foot']
  }


     cekNama(){
      this.name = name
      return this.name
    }

    cekUmur(){
      this.age = age
      return this.age
    }


    let hewan = new Animal ({name: 'kucing', age: '3'})
    console.log(hewan.name());
