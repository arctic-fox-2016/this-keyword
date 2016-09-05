"use strict"

// GLOBAL CONTEXT
/*
ketik 'node' di terminal untuk masuk ke node REPL
ketik this.process.version untuk mengecek version dari node
*/



// CLASS CONTEXT
class rumah{
  constructor(harga, jenis)
  {
      this.harga = harga
      this.jenis = jenis
  }
}

var accessRumah = new rumah(222,"small")
console.log(accessRumah.harga)

// RELEASE 1
//this adalah variabel global
//this jika digunakan oleh objek dapat digunakan untuk memanggil properties sebuah objek
