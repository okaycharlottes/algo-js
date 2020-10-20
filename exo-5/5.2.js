const readlineSync = require("readline-sync");

let namesCastMembers = [];
tvSerie = {
}




function askTvSerie(){ 
    let nom = readlineSync.question ("quel est le nom de la série ?");
    tvSerie.nom=nom;
    let annee =readlineSync.question ("quel est l'année de production ?");
    tvSerie.anne = annee;
    let perso = readlineSync.question (" combien as tu de membres prefere? ");
    
    
    for (let i = 0; i < perso; i++) {
        let more= readlineSync.question("donne moi les noms ");
        namesCastMembers.push(more)
    }
    tvSerie.casting=namesCastMembers
    return tvSerie;  
}
askTvSerie();


function randomizeCast(arr){
    for (let x=arr.length-1 ; x>0 ; x--){
    let random = Math.floor(Math.random()* x );

    let temp = arr[x];
    arr[x]=arr[random];
    arr[random]=temp;}

}
console.log(typeof(namesCastMembers))
randomizeCast(namesCastMembers);

// console.log(x);
// console.log(tvSerie);


// let nameSerie;
// let yearSerie;
// let numbCast;
// let castSerie = [];
// let objectSerie = { };


// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// // F O N C T I O N S - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// function randomizeCast(arr){
//     for(let i = arr.length-1; i > 0; i--) {
//         let randomPosition = Math.floor(Math.random() * i);
//         let temp = arr[i];
//         arr[i] = arr[randomPosition];
//         arr[randomPosition] = temp;
//     }
// }
// function askTvSerie() {
//     nameSerie = readlineSync.question("Give me the name of your favorite serie: ");
//     objectSerie.title=nameSerie;
//     yearSerie = readlineSync.question("Give me the production's years of it: ");
//     objectSerie.production=yearSerie;
//     numbCast = Number(readlineSync.question("How many actors can you resist? "));


//     for(x=0;x<numbCast;x++){
//         let more=readlineSync.question(`${x+1}/${numbCast} > `);
//         castSerie.push(more);        
//     }
    
//     objectSerie.casting=castSerie;

// }




// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// askTvSerie();
// randomizeCast(castSerie);
// console.log(JSON.stringify(objectSerie));
// console.log(`Now, I know that "${objectSerie.title}" is your favorite series.`);
// console.log(`This serie is product since ${objectSerie.production} and the actors are ${objectSerie.casting}`)