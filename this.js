"use strict"

// // GLOBAL CONTEXT
const repl = require('repl');
var msg = 'message';

//cara akses versions node.js
//pada console ketik 'node'
//selanjutnya ketik process.versions untuk akses ke version lengkap
//untuk spesifik memilih version, gunakan process.version (tanpa s)

repl.start('> ').context.m = msg;



// // CLASS CONTEXT
class motor {
  constructor (tipe){
    this.color = tipe['color']
    this.engine = tipe['engine']
    this.shock = tipe['shock']
    this.price = tipe['harga'] || 9000

  }
  cekHarga(){
    let x = this.price
    return x
  }

  angsuran(bulan=12){
    let ang = this.price/bulan
    return ang

  }
}

let honda = new motor({color:'red', engine:125, shock:'dual'})


console.log(honda.cekHarga())
console.log(honda.angsuran())
console.log(honda.angsuran(24))

// RELEASE 1
// This adalah global subtitution untuk deklarasi local scope variable.
// 
