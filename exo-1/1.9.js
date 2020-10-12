const readlineSync = require("readline-sync");

let animal =readlineSync.question ("quel est votre animal prefere ?");
let prenom= readlineSync.question ("quel est votre prenom ?");
let couleur= readlineSync.question ("quel est votre couleur prefere ?");
console.log('Desole, je ne peux rien faire pour ' + prenom + " surtout si vous aimez les " + animal + " et le ou la couleur " + couleur);