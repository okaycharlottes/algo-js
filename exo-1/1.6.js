const readlineSync = require("readline-sync");

let decimal= readlineSync.question("give me a decimal number");
let decimal2 = readlineSync.question("give me a other decimal number");
console.log(Math.trunc(decimal) * decimal2);

