// soal 1
// function yang mengembalikan nilai halo
function halo() {
    return '"Halo Sanbers!"';
}
console.log(halo());


// soal 2
// function perkalian
function kalikan(num1, num2) {
    return num1 * num2;
}
var num1 = 12;
var num2 = 4;
var hasilKali = kalikan(num1, num2);
console.log(hasilKali);


// soal 3
// function yang memproses parameter
function introduce(name, age, address, hobby) {
    return '"Nama saya ' + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + '!"';
}
var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming"
var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);