class Rectangle {

    constructor(topLeftXPos,topLeftYPos, width,lenght){

        this.topLeftXPos= topLeftXPos
        this.topLeftYPos=topLeftYPos
        this.width= width
        this.lenght=lenght
    }

    collides(otherRectangle){
        if(this.topLeftXPos+this.width >= otherRectangle.topLeftXPos &&
            this.topLeftXPos <= otherRectangle.topLeftXPos + otherRectangle.width &&
            this.topLeftYPos+this.lenght >= otherRectangle.topLeftYPos &&
            this.topLeftYPos <= otherRectangle.topLeftYPos + otherRectangle.lenght){
                    return true;}
                
                else{ return false;}


    }
}

let nouveauRectangle = new Rectangle (200, 100, 20, 10);

let randomXPos;
let randomYPos;
let randomWidth;
let randomLenght;
let newRect;
let otherRect = [];

const RandomRectangles = (nbRectangles) =>{
    for(let x=0; x < nbRectangles ; x++){
        randomXPos=(Math.floor(Math.random() *99)+1);
        randomYPos=(Math.floor(Math.random() *99)+1);
        randomWidth=(Math.floor(Math.random() *49)+1);
        randomLenght=(Math.floor(Math.random() *49)+1);

        newRect= new Rectangle (randomXPos, randomYPos, randomWidth, randomLenght);
        otherRect.push(newRect);  
    }

}
RandomRectangles(1000);

const Verification = () => {
    for(i=0;i<=nbRectangles; i++){
        
    }

}
console.log(otherRect.length)
