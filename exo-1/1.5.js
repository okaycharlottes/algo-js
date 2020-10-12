const readlineSync = require("readline-sync");

let firstname  = readlineSync.question("What's your first name?");
let name =readlineSync.question("What is your name ?");
let city =readlineSync.question("Where are you live ?");
let phrase= firstname + name + city;
console.log('Your name is' + firstname +("") + name + " and you lives in " + city );
