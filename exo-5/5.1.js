const readlineSync = require("readline-sync");

    
let nom = readlineSync.question ("quel est le nom de la série ?");
let annee =readlineSync.question ("quel est l'année de production ?");
let perso = readlineSync.question (" combien as tu de membres prefere? ");
let namesCastMembers = [];
    for (let i = 0; i < perso; i++) {
    namesCastMembers.push(readlineSync.question("donne moi les noms "));}

function askTvSerie(){ 
    
    let tvSerie = {
        "nom" : nom,
        "annee" : annee,
        "perso" : namesCastMembers,
    }

    
    return tvSerie;  
}

    //let tvSerie = JSON.stringify(askTvSerie(),null,4)
    tvSerie = askTvSerie()
    console.log(tvSerie);
