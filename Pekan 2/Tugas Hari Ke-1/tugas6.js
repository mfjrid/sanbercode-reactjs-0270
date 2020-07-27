// soal 1
// mengubah array menjadi object
var arrayDaftarPeserta = ["Asep", "Laki-laki", "baca buku", 1992];
var objectDaftarPeserta = {
    nama: arrayDaftarPeserta[0],
    "jenis kelamin": arrayDaftarPeserta[1],
    hobi: arrayDaftarPeserta[2],
    "tahun lahir": arrayDaftarPeserta[3]
}
console.log(objectDaftarPeserta);


// soal 2
// menguraikan array of object
var buah = [{ nama: "strawberry", warna: "merah", "ada bijinya": "tidak", harga: 9000 },
{ nama: "jeruk", warna: "oranye", "ada bijinya": "ada", harga: 8000 },
{ nama: "semangka", warna: "hijau & merah", "ada bijinya": "ada", harga: 10000 },
{ nama: "pisang", warna: "kuning", "ada bijinya": "tidak", harga: 5000 }]
buah.forEach(function (item) {
    console.log("Nama buah : " + item.nama)
})


// soal 3
// membuat fungsi menambahkan dataFilm
var dataFilm = []
var x = 0;
function isiDataFilm(nama, kategori, genre, tahun) {
    dataFilm[x] = {
        nama: nama,
        kategori: kategori,
        genre: genre,
        tahun: tahun
    };
    x++;
}
isiDataFilm("Milea: Suara dari Dilan", "1 jam 42 menit", "Roman/Drama", "2020");
isiDataFilm("Dolittle", "1 jam 41 menit", "Keluarga/Petualangan", "2020");
isiDataFilm("Birds of Prey", "1 jam 49 menit", "Laga/Film pahlawan super", "2019");
console.log(dataFilm)


// soal 4
// membuat class animal dan isinya

// release 0
class Animal {
    constructor(name) {
        this.nama = name
        this.legs = 4
        this.cold_blooded = false
    }
    get name() {
        return this.nama;
    }
    set name(x) {
        this.nama = x;
    }
}

var sheep = new Animal("Shaun");
console.log(sheep.name)
console.log(sheep.legs)
console.log(sheep.cold_blooded)

// release 1
class Frog extends Animal {
    constructor(name) {
        super(name);
    }
    jump() {
        return console.log("hop hop");
    }
}

class Ape extends Animal {
    constructor(name) {
        super(name);
        this.legs = 2
    }
    yell() {
        return console.log("Auooo");
    }
}

var sungokong = new Ape("kera sakti")
console.log(sungokong.name)
console.log(sungokong.legs)
console.log(sungokong.cold_blooded)
sungokong.yell()

var kodok = new Frog("buduk")
console.log(kodok.name)
console.log(kodok.legs)
console.log(kodok.cold_blooded)
kodok.jump()


// soal 5
// mengubah struktur function Clock
class Clock {
    constructor({ template }) {
        this.template = template
    }
    render() {
        var date = new Date();
        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
        var output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
        console.log(output);
    }
    stop() {
        clearInterval(timer);
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
        // this.timer = setInterval(function () { this.render() }, 1000);
    }
}

var clock = new Clock({ template: 'h:m:s' });
clock.start();