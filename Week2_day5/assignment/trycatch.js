/// program to check whether the string contains $ or not using try catch


function checkString(str){
try {
    if(str.includes('$')) throw `Given string '${str}' includes $`;
    else throw `Given string '${str}' does not include $`;
} catch (error) {
    console.log(error);
}
}


let str="abcd @$ hill";
checkString(str);
checkString('helloo December');

