const {Student,StudentDAO,StudentService} =require('./student');
let studentArr;
let dao;
let service;
beforeAll(function(){
    let amit=new Student(101,'Amit','amit@gmail.com');
    let bhoomika=new Student(102,'Bhoomika','bb@gmail.com');
    let charu=new Student(103,'Charu','charu@gmail.com');
    let manish=new Student(108,'Manish','manish@gmail.com');
    
    studentArr=[amit,bhoomika,charu,manish];
    dao=new StudentDAO();
    service=new StudentService(dao);

    
});

describe("Student testing",function(){

    it("should return array of all students" ,function(){
        
        spyOn(dao,'findAll').and.returnValue(studentArr);
        expect(service.findAll()).toEqual(studentArr);
    });

    it("should delete student by id",function(){
        let size=studentArr.length;

        spyOn(dao,'deleteById').and.callFake(function(id){

            for(let i=0;i<studentArr.length;i++){
                if(studentArr[i].id===id)
                    studentArr.splice(i,1);
            }
            console.log(studentArr);
            return studentArr.length;

            
        });
        expect(service.deleteById(108)).toEqual(size-1);
    });

});

