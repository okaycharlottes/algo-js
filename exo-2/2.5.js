const readlineSync = require("readline-sync");

let num=readlineSync.question("what is your favorite number ?");
//console.log("My fav number is " + num);
while ( num != 42) {
num =readlineSync.question('are your sure ?');}
