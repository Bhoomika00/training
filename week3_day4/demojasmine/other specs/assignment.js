const helloWorld=function(){
    return 'Hello world';
}

const lengthstr=function(str){
    //let str='This is string';
    if((typeof str)!='string')
        throw new Error("Input should be string");
    return (str.length);
}

const upperCase=function(str1){
    //let s="this is";
    if((typeof str1)!='string')
        throw new Error("Input should be string");
    
    return(str1.toUpperCase());
}

const alternateCap=function(str2){
    var fstring = str2.toLowerCase().split("");
  for (var i = 0; i < fstring.length; i += 2) {
    fstring[i] = fstring[i].toUpperCase();
  }
  return fstring.join("");
}

const even=function(num){
    if(num%2==0)
      return true;
    else
      return false;
}

const prime=function(num1){
    for (let i = 2; i < num1; i++) {
        if (num1 % i == 0) {
            return  false;
        
        }
        else 
          return true;
    }
    
}


module.exports={helloWorld,lengthstr,upperCase,alternateCap,prime,even};
//module.exports=lengthstr;
//module.exports=upperCase;
