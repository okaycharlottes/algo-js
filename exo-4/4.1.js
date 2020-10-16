const readlineSync = require("readline-sync");

function calcSurface(largeur, longueur){
    return largeur*longueur;

}

let x = readlineSync.question("donnez une largeur");
let y = readlineSync.question("donnez une longueur");
console.log("la surface est " +calcSurface(x,y)); 