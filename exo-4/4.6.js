const readlineSync = require("readline-sync");

function factorial(a) 
{
  // Si nbr = 0 la factorielle retournera 1
  if (a === 0)
  {
     return 1;
  }
  
  return a * factorial(a-1);
}
console.log(factorial(5));