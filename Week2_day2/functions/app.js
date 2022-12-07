 function product(x,y){
return x*y;
 }

 function subtract(x,y){
     return (Math.abs(x-y));
 }

 console.log(product(4,5));
 console.log(subtract(6,7));


 console.log('-------function expression----');
 let p=function(x,y){
     return x*y;
 }

 let minus=function(x,y){
    return (Math.abs(x-y)); 
 }

 console.log(p(6,5));
 console.log(minus(9,1));

/*
 //immediately 
 (function(){

 })();*/

 const cart={
     addItem:function(){
         console.log("added the item");
     },

     removeItem:function(){
         console.log('Item has been deleted');
     }

 }

 cart.checkout=function(){
     console.log('checkout done');
 }

 cart.addItem();
 cart.removeItem();
 cart.checkout();