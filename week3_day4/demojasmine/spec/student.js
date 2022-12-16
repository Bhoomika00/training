class Student{
    constructor(id,name,email){
        this.id=id;
        this.name=name;
        this.emai=email;
    }
}

class StudentDAO{
    
    findAll(){
        return this.student;
    }

    deleteById(id){
        //console.log('not implemented');
        return null;
    }
}

class StudentService{
    constructor(dao){
        this.dao=dao;
    }

    findAll(){
        return this.dao.findAll();

    }

    deleteById(id){
        return this.dao.deleteById(id);
    }

}

module.exports={Student,StudentDAO,StudentService}