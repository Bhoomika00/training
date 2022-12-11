class employee{
    constructor(id,ename,city){
        this.id=id;
        this.ename=ename;
        this.city=city;
    }

    get id(){
        return this._id; 
    }
    set id(val){
        this._id=val;
    }

    get ename(){
        return this._ename;
    }
    set ename(val){
        this._ename=val;
    }

    get city(){
        return this._city;
    }
    set city(val){
        this._city=val;
    }

     disp(){
        //console.log('---------------------');
        console.log(`${this.id} ${this.ename} ${this.city}`);
    }
}

let emp1=new employee(101,'Manisha','Pune');
//emp1.disp();

let emp2=new employee();
emp2.id=202;
emp2.ename='Bhoomika';
emp2.city='Mumbai';


emp1.disp();
emp2.disp();

class manager extends employee{
    
}