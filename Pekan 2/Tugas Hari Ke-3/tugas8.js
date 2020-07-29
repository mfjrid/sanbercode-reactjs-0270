// soal 1
// membuat fungsi luas dan keliling lingkaran dengan arrow function
const phi = 3.14;
hitungLuasLingkaran = (r) => {
    let luas = phi * r * r;
    return luas;
}
hitungKelilingLingkaran = (r) => {
    let keliling = 2 * phi * r;
    let pembulatan = Math.round(keliling * 100) / 100
    return pembulatan;
}
console.log("Luas Lingkaran adalah : " + hitungLuasLingkaran(10))
console.log("Keliling Lingkaran adalah : " + hitungKelilingLingkaran(8))


// soal 2
// menambahkan kalimat dengan template literal
let pertama = "saya"
let kedua = "adalah"
let ketiga = "seorang"
let keempat = "frontend"
let kelima = "developer"
let kalimat = `${pertama} Muhammad Fajar, dan saya ${kedua} ${ketiga} ${keempat} ${kelima}.`
console.log(kalimat);


// soal 3
// membuat class yang extends dengan class sebelumnya
class Book {
    constructor(name, totalPage, price) {
        this.name = name;
        this.totalPage = totalPage;
        this.price = price;
    }
}

class Komik extends Book {
    constructor(name, totalPage, price, isColorful) {
        super(name, totalPage, price);
        this.isColorful = isColorful;
    }
}

let buku = new Book("Algoritma Pemrograman", 340, 87000)
// console.log(buku) //menampilkan keseluruhan isi buku
console.log(`Judul buku : ${buku.name}, Jumlah Halaman : ${buku.totalPage}, Harga : ${buku.price}`)

let komik = new Komik("Crayon Shinchan", 76, 25000, true)
// console.log(komik) //menampilkan keseluruhan isi komik
console.log(`Judul komik : ${komik.name}, Jumlah Halaman : ${komik.totalPage}, Harga : ${komik.price}, Berwarna : ${komik.isColorful}`)