const employee={
    employeeId:'34567',
    e_name:'Manisha sharma',
    department:{
        dept_id:100,
        dept_name:'Management',
        manager_id:8990
    },
    project:{
        p_id:19999,
        p_title:'AMC project',
        start_date:new Date('2022-08-19')
        },
    salary:30000,
    doj:new Date('2020-05-20'),
    getserviceyears:function(){

        return 2022-this.doj.getFullYear();
    }


};



//console.log(employee);

console.log(`No. of service years: ${employee.getserviceyears()}`);
for (let i in employee){

        
    if ((i === 'department')||(i==='project')){
     for(let j in employee[i]){
         console.log(`${j}: ${employee[i][j]}`);
     }
 }
 else{

     console.log(`${i} : ${employee[i]}`);
 }
}

/* const employee_array=[
    {id:102, name:'Bhoomika',msalary:30000},
    {id:105,name:'Shravan',msalary:40000},
    {id:109,name:'Arya',msalary:20000}


];
for(let i=0;i<employee_array.length;i++){
console.log(`${employee_array[i].id} ${employee_array[i].name} ${employee_array[i].msalary}`);
}
 */

//to print the elements in object
/*
for(let i in employee){
 console.log(`${i}:${employee[i]}`);
}*/