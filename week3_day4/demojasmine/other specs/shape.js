class Shape{
    constructor(noOfSides){
        this.noOfSides=noOfSides;
    }
}

class CreateShape{
    constructor(shape){
        this.shape=shape;
    }
    createShape(){
        //console.log(`${shape} is created`);
        return `${this.shape.noOfSides} are no. of sides `;
        //return null;
    }
}

class ColorShape{
    constructor(cs){
        this.cs=cs;
    }
    colorshape(){
        return this.cs.createShape();
    }
}

module.exports={Shape,CreateShape,ColorShape};