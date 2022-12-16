class employee{
    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }

}
let nisha=new employee(101,'Nisha',12000);
//console.log(nisha);
let Bhoomika=new employee(100,'Bhoomika',120009);
let Arya=new employee(303,'Arya',1000000);
let Shravan=new employee(120,'Shravan',190000);

const employees=[nisha,Bhoomika,Arya,Shravan];
console.log(employees);

const empcopy=[...employees];
let sortbynames=empcopy.sort(
    (a,b)=>(a.name >b.name) ?1 :(a.name<b.name)?-1:0);
console.log(sortbynames);

const empcopy1=[...employees];
let sortbysalary=empcopy1.sort(
    (a,b)=>(a.salary >b.salary) ?1 :(a.salary<b.salary)?-1:0);
console.log(sortbysalary);
