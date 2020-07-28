var readBooksPromise = require('./promise.js');
const readBooks = require('./callback.js');

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 }
]

let waktu = 10000;
let x = 0;

function readBook() {
    readBooksPromise(waktu, books[x])
        .then(waktuSisa => {
            waktu = waktuSisa;
            x++;
            if (x < books.length)
                readBook();
        })
        .catch(e => {
            console.log(e.message)
        })
};
readBook();