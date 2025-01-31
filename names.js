// - names.js

// 1. Crea una funzione che accetta due parametri: firstName, lastName. 
// La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
// 2. Esporta la funzione dal file.2 





// CREO LA FUNZIONE

function names(firstName, lastName){

    return  {
        firstName: firstName,
        lastName: lastName,
    };
};


module.exports = names;
