let {helloWorld,lengthstr,upperCase,alternateCap,prime,even}= require('./assignment');
//const lengthstr= require('./assignment');
//const upperCase= require('./assignment');

describe("Assignment",function(){

    
    it("should return Hello World",function(){
        expect(helloWorld()).toEqual('Hello world');
    });

    it("should return length of string",function(){
        //expect(lengthstr(12345)).toEqual(5);
        expect(lengthstr('Bhoomika')).toEqual(8);
    });
    
    it("should return length of string",function(){
        expect(upperCase('bhoomika')).toEqual('BHOOMIKA');
        //expect(upperCase(12345)).toEqual(12345);
    });

    it("function alternateCap() should return uppercase",function(){
        expect(alternateCap('bhoomika')).toMatch('BhOoMiKa');
    });

    it("function prime() should return true or false",function(){
        expect(prime(13)).toBeTruthy();
    });

    it("function prime() should return true or false",function(){
        expect(prime(4)).toBeFalsy();
    });


    it("function even() should return true or false",function(){
        expect(even(10)).toBeTruthy();
    });



});