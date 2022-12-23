class Student{
    constructor(id,name,city,clearedExam){
        this.id=id;
        this.name=name;
        this.city=city;
        this.clearedExam=clearedExam;

    }
}

let aarya=new Student(111,'Aarya','Pune',true);
let bhoomika=new Student(112,'Bhoomika','mumbai',true);

const studentMap=new Map();
studentMap.set(aarya,[65]);
studentMap.set(bhoomika,[80]);
console.log(studentMap);

function addstudents(obj,...marks){

    for(let[key,value] of studentMap){
        if(key.id==obj.id){
            //studentMap.set(key,[...value,...marks]);
            value.push(marks);
            return;
            
        }
        
}
studentMap.set(obj,marks);
}


console.log(studentMap);

//update existing obj
addstudents(bhoomika,[10,90]);

//new student
let tia=new Student(113,'Tia','Mumbai',false);
addstudents(tia,[90,85]);
console.log(studentMap.values());

function sumarr(arr){
    let sum = 0; 


  arr.forEach(item => {
    sum += item;
  });
  return sum;
}

function totalmarks(){
    studentMap.forEach((value,key)=>{
        let total;
        if(typeof value=='object'){
            total=sumarr(value);
            console.log(total)
        }
        else{
            total+=sum;
        }
        console.log(`${key} ${total}`);
    });
}

totalmarks();