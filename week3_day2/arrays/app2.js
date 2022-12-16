class Employee{
    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }

}
let nisha=new Employee(801,'Nisha',12000);
const employees=[nisha];

let add_btn=document.getElementById('add');
 add_btn.addEventListener('click',addfunc);

function addfunc(e){
    e.preventDefault();
    const id=document.getElementById("eid").value;
    const name=document.getElementById("ename").value;
    const salary=document.getElementById("esalary").value;
    
    const newe=new Employee(id,name,salary);
    employees.push(newe);

    console.log('new employee added');


}

