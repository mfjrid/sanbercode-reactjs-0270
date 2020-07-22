// soal 1
// hasilkan output "saya Senang belajar JAVASCRIPT"
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

console.log(kataPertama + " " + (kataKedua.charAt(0).toUpperCase() + kataKedua.substr(1)) + " " + kataKetiga + " " + kataKeempat.toUpperCase());

//////////////////////////////////////////////////////////////////////////

// soal 2
// ubah variabel ke integer dan jumlahkan semuanya
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

console.log(parseInt(kataPertama) + parseInt(kataKedua) + parseInt(kataKetiga) + parseInt(kataKeempat));

//////////////////////////////////////////////////////////////////////////

// soal 3
// memisahkan kata-kata dari kalimat
var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);

console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima);

//////////////////////////////////////////////////////////////////////////

// soal 4
// membuat pengkondisian
var nilai = 49;
if (nilai >= 80) {
    console.log("Index A")
} else if (nilai >= 70 && nilai < 80) {
    console.log("Index B")
} else if (nilai >= 60 && nilai < 70) {
    console.log("Index C")
} else if (nilai >= 50 && nilai < 60) {
    console.log("Index D")
} else {
    console.log("Index E")
}

//////////////////////////////////////////////////////////////////////////

// soal 5
// membuat tanggal lahir
var tanggal = 29;
var bulan = 1;
var tahun = 2020;

switch (bulan) {
    case 1: { bulan = 'Januari'; break; }
    case 2: { bulan = 'Februari'; break; }
    case 3: { bulan = 'Maret'; break; }
    case 4: { bulan = 'April'; break; }
    case 5: { bulan = 'Mei'; break; }
    case 6: { bulan = 'Juni'; break; }
    case 7: { bulan = 'Juli'; break; }
    case 8: { bulan = 'Agustus'; break; }
    case 9: { bulan = 'September'; break; }
    case 10: { bulan = 'Oktober'; break; }
    case 11: { bulan = 'Nopember'; break; }
    case 12: { bulan = 'Desember'; break; }
    default: { bulan = '(Bulan lahir tidak ditemukan)' }
}
console.log(tanggal + " " + bulan + " " + tahun);