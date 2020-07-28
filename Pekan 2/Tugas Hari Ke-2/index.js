var readBooks = require('./callback.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 },
    { name: 'Komik', timeSpent: 1000 }
]

let waktu = 10000;
let x = 0;

function readBook() {
    readBooks(waktu, books[x], function (waktuSisa) {
        waktu = waktuSisa;
        x++;
        if (x < books.length) {
            readBook();
        };
    });
};
readBook();