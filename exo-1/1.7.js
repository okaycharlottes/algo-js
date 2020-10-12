const readlineSync = require("readline-sync");

let num= readlineSync.question("give me a decimal number");
let num2 = readlineSync.question("give me a other decimal number");
console.log(num/num2);