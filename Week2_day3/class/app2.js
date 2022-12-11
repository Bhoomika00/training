class Car{
  
    constructor(id,model,dealer,price){

        this.id=id;
        this.model=model;
        this.dealer=dealer;
        this.price=price;
    }
    get id(){
        return this._id;
    }
    set id(val){
     this._id =val;

    }
   
    get brand(){
      return this._brand;
    }
    set brand(val){

     this._brand =val;
    }
    disp(){
        console.log(`${this.id} ${this.price}`);
    }

}

class ElectricVehicle extends Car{

   constructor(id, brand,dealer,price,batteryLife){
        super(id,brand,dealer,price);
    this.batteryLife =batteryLife;

   }

   disp(){
    
    super.disp();
    console.log(this.batteryLife);
   }
}

let tataNexon = new ElectricVehicle(111,'nexon','tata',1500000,400);
let swift=new ElectricVehicle(123,'swiftdesire','tata',100000,50);

let mahindra=new ElectricVehicle(1000,'mahindra','tata',800000,100);
//tataNexon.disp();

let car_arr=[
    tataNexon,swift
];

car_arr.push(mahindra);
//console.log(car_arr);

let abc=new ElectricVehicle(800,'duster','tata',1000000,100);
car_arr.unshift(abc);
//console.log(car_arr);


let indica=new ElectricVehicle(90,'indica','tata',900000,100);
car_arr.splice(3,0,indica)
//console.log(car_arr);


car_arr.splice(3,1);
car_arr.pop();

//console.log('-----------------');
//console.log(car_arr);

let button=document.getElementById('submit');
button.addEventListener('submit',submitfunc);

function submitfunc(e){
    e.preventDefault();
    let id=document.getElementById('car_id');

    let ev=new ElectricVehicle(id,brand,dealer,price,blife);
    alert(ev);
    print(ev);

}

