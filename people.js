// 3 - people.js
// 1. Importa la tua funzione da names.js
// 2. Importa la tua funzione da hobbies.js
// 3. Crea una funzione che non ha parametri. 
// La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies.
// All’interno della tua funzione,
// usa le tue due funzioni precedenti per costruire l’oggetto.


// IMPORTO FUNZIONE DA NAMES.JS

const names = require("./names.js");

// IMPORTO FUNZIONE DA HOBBIES.JS

const hobbies = require("./hobbies.js");


// CREO UNA FUNZIONE CHE NON HA PARAMETRI

function Together(){
    let fullName = names("Luca", "Belardinelli")
    let interests = hobbies("Manga", "Anime", "Rugby")
    return {
        fullName,
        hobbies : interests,
    }

};

console.log(Together());