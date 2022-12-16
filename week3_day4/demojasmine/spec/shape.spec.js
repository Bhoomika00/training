const {Shape,CreateShape,ColorShape} =require('./shape');

describe('color shape testing',function(){
    it("spying",function(){

        let shape=new Shape(7);
        let cs=new CreateShape(shape);
        let colors=new ColorShape(cs);

        spyOn(cs,'createShape').and.returnValue("7");

        expect(colors.colorshape()).toEqual("7");
    })
})