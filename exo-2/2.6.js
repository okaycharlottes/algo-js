const readlineSync = require("readline-sync");

let number= new Number(readlineSync.question("entrez un chiffre entre 1 et 7"));
console.log(+number);

if (number==1) {
console.log("c'est lundi")

}
else if 
     ( number ==2) {
    console.log("cest mardi");
}
else if 
     ( number ==3) {
    console.log("cest mercredi");
}
else if 
     ( number ==4) {
    console.log("cest jeudi");
}
else if 
     ( number ==5) {
    console.log("cest vendredi");
}
else if 
     ( number ==6) {
    console.log("cest samedi");
}
else if 
     ( number ==7) {
    console.log("cest dimanche");
}
