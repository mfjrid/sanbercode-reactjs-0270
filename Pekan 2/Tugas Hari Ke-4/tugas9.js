// soal 1
// mengubah object literal ES5 menjadi lebih sederhana di ES6
const newFunction = function literal(firstName, lastName) {
    return {
        firstName, lastName,
        fullName: function () {
            console.log(`${firstName} ${lastName}`)
            return
        }
    }
}
newFunction("William", "Imoh").fullName()


// soal 2
// membuat destructuring dengan ES6
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwats React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}
const { firstName, lastName, destination, occupation } = newObject;
console.log(firstName, lastName, destination, occupation)


// soal 3
// mengkombinasikan 2 array dengan array spreading ES6
const west = ["Will", "Chris", "Sam", "Holy"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
console.log(combined)