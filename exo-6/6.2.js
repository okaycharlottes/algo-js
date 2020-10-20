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

let nouveauRectangle = new Rectangle (2, 1, 2, 1);
let otherRect = new Rectangle (5, 1, 2,1);
console.log(nouveauRectangle)
console.log(nouveauRectangle.collides(otherRect));