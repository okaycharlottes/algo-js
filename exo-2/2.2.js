const readlineSync = require("readline-sync");

let min=readlineSync.question("entrez un chiffre minimum");
let max=readlineSync.question ("entrez un chiffre maximum");
let current= readlineSync.question ("entrez un autre chiffre");

if  ( ( min >= max )  &&  ( max >= min ) )  { 
    console.log ( + current ) ; 
  }
 else { console.log( "Game over");}
  