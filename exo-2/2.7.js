const readlineSync = require("readline-sync");

let numb=0;
let somme= 0;
let i= 0;
let n= Number (readlineSync.question("entrez un nombre"));

while(i<n) {
numb=(readlineSync.question("entrez un nouveau chiffre"));
somme= (somme+ parseInt(numb));
i++;}
console.log("la somme est " + somme);
