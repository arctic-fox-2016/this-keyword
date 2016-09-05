"use strict"

// GLOBAL CONTEXT
const repl = require('repl');

//var text = 'pesan'
//repl.start('> ').context.m = text;


// CLASS CONTEXT
class HP{
  constructor(tipe){
    this.color = tipe['color']
    this.engine = tipe['engine']
    this.OS = tipe['OS']
    this.harga = tipe['harga']
    console.log(this.color)
  }
}

let property = {
  "color":"blue",
  "engine":"turbo",
  "OS":"Android",
  "harga":1000000
}

let samsung = new HP(property);


// RELEASE 1
/*
  basically 'this' adalah suatu syntax yang berperan sebagai pointer yang membantu system untuk mengetahui suatu varibel object atau yang lainnya
*/

//Example below how 'this' works
$("#btn-signin").unbind().on("click", function(){
  $("#btn-signin").hide()
  $(this).hide()

  var pointer = $(this)
  setTimeout(function(){
    pointer.hide()
    $(this).hide() // ini pasti error, karena basically 'this' refer to its first parent
  }, 500)
});
