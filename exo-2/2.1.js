const readlineSync = require("readline-sync");

let age= readlineSync.question("quel est votre age ?");
if ((age >= 18) && (age < 18)) {
    console.log("You probably are a child");
  } else {
    console.log("You probably an adult");
  }