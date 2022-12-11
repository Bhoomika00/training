//program to remove all charcters that appear more than once.
let str="heloo hiii there";
let arr=[...str];

const map=new Map();

for(let j=0;j<arr.length;j++){
    let i= arr[j];

    if(map.has(i)){
        map.set(i,map.get(i)+1);
        map.delete(i);
    
    }else{
        map.set(i,1);
    }
}

//map.forEach(e)=> console.log

console.log(map.keys());