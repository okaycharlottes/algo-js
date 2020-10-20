class Circle {

    constructor(xPos, yPos, radius){
        this.xPos=xPos
        this.yPos=yPos
        this.radius=radius
    }

    get Surface(){
        return Math.sqrt(this.radius)*Math.PI;
    }

    move (xOffset, yOffset) {
        this.xPos=xOffset;
        this.yPos=yOffset;
    }
}

let nouveauCircle = new Circle (20, 30, 15);
;
console.log(nouveauCircle);
nouveauCircle.move(10,15);
console.log(`Mon cercle se déplace et est en X: ${nouveauCircle.xPos} et Y: ${nouveauCircle.yPos}`);
console.log(nouveauCircle.Surface);



// class Humain {

//     constructor(nom, prenom, age){
//     this.nom=nom
//     this.prenom=prenom
//     this.age=age
//     }

//     rajeunir(annee){
//         this.age=this.age-annee;
//         return this.age;
//     }

//     bonjour(){
//         console.log(`Hello petit humain qui s'apelle ${this.prenom}!`)
//     }

    
// }

// class Chat extends {
//     constructor(couleur){
//         this.couleur=couleur;
//     }

// }

// let nouvelHumain= new Humain("Dupont","Charlotte",25);
// let nouveauchat= new Chat("noire")
// console.log(nouveauchat);