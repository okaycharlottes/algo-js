const readlineSync = require("readline-sync");

function calcSurface(largeur, longueur){
    return largeur*longueur;

}
let arr=[];
let howmany= parseInt(readlineSync.question ("combien de chiffre voulez vous ?"));
function rand10(){
    return Math.floor(Math.random()*11);

}

function multiRand(n){
    

    for (i=0; i<n; i++){
        let x =rand10();
        arr[i]=x;
    }
    return arr;
}

function average(arr){

let total=0;
 
for (i=0;i<arr.length; i++){
    total += arr[i];
}

return total/arr.length;
}
  
function min(arr){
    return Math.min(...arr);
      

  }

  function max(arr){
      return Math.max(...arr);
  }

  console.log(`tu as ${howmany} nombre dans ton tableau : ${multiRand(howmany)}. Average number : ${average(arr)}, Min number : ${min(arr)}, Max number ${max(arr)}`);