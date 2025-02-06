// 1 - names.js
// 1. Crea una funzione che accetta due parametri: firstName, lastName. La funzione 
// dovrebbe restituire un oggetto con le proprietà firstName e lastName.
// 2. Esporta la funzione dal file.

function fullName(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    }
}

// console.log(fullName("Danilo", "Portelli"))

module.exports = fullName;



