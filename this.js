"use strict"

// GLOBAL CONTEXT
const hargaKertas = 100




// CLASS CONTEXT

class Buku {
  constructor(judul, pengarang, halaman) {
    this.judul = judul
    this.pengarang = pengarang
    this.halaman = halaman || 0
  }

  biayaBuku(){
    return hargaKertas * this.halaman
  }
}


// RELEASE 1
  let myBuku = new Buku("Purpose Driven Life", "Rick Warren", 100);

  console.log(`Judul buku : ${myBuku.judul}`); //menuliskan judul myBuku di console
  console.log(`Pengarang : ${myBuku.pengarang}`); //menuliskan Pengarang myBuku di console
  console.log(`Halaman : ${myBuku.halaman} halaman`); //menuliskan Jumlah halaman myBuku di console
  console.log(`Biaya pembuatan buku : ${myBuku.biayaBuku()} Rupiah`); //menuliskan Jumlah halaman myBuku di console
