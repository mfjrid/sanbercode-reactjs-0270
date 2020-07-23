// soal 1
// melakukan looping while
console.log("LOOPING PERTAMA");
var pertama = 0;
while (pertama < 20) {
    pertama += 2;
    console.log(pertama + " - I love coding");
}
console.log("LOOPING KEDUA");
var pertama = 22;
while (pertama > 2) {
    pertama -= 2;
    console.log(pertama + " - I will become a frontend developer");
}

console.log("\n--------------------------\n")

// soal 2
// melakukan looping for
for (var angka = 1; angka <= 20; angka++) {
    // console.log(angka);
    if (angka % 2 == 1 && angka % 3 !== 0) {
        console.log(angka + " - Santai")
    } else if (angka % 2 == 0) {
        console.log(angka + " - Berkualitas")
    } else if (angka % 3 == 0 && angka % 2 == 1) {
        console.log(angka + " - I Love Coding")
    }
}

console.log("\n--------------------------\n")

// soal 3
// membuat segitiga dengan tanda pagar 7x7
var cetak = '';
for (var segitiga = 0; segitiga < 7; segitiga++) {
    for (var pagar = 0; pagar <= segitiga; pagar++) {
        cetak += "#";
    }
    cetak += "\n";
}
console.log(cetak)

console.log("\n--------------------------\n")

// soal 4
// membuat kalimat
var kalimat = "saya sangat senang belajar javascript";
var jadiArray = kalimat.split(" ");
console.log(jadiArray);

console.log("\n--------------------------\n")

// soal 5
// mengurutkan array
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var buah = daftarBuah.sort();
for (var i = 0; i < 5; i++) {
    console.log(buah[i])
}