class Car{
  
    constructor(id,model,price){

        this.id=id;
        this.model=model;
        //this.dealer=dealer;
        this.price=price;
    }
}

class ElectricVehicle extends Car{

    constructor(id, brand,price,batteryLife){
         super(id,brand,price);
     this.batteryLife =batteryLife;
 
    }
} 

const carForm=document.getElementById("car_form");
const carList = document.getElementById("carList");
//creating carsarr array 
const carsarr=[];

//creating emp -- object  -- data members --id and empname
const car={
    id:0,
brand:'',
price:'',
batterylife:0

};

//calling / executing loadEventListeners --
loadEventListeners();

//on line 19 we are defining the function loadEventListeners
function loadEventListeners(){
    //whenever we refresh the page ,we want this eventhandler getEmps -this will load emps from localstorage
    document.addEventListener('DOMContentLoaded',getCars);

    carForm.addEventListener("submit",addCars);

}
//event handlers -- getting emps from the local storage 
function getCars(){
console.log('in get car')
    let carsarr;
    
    if(localStorage.getItem("carsarr")===null){
        carsarr=[];
    }
    else{

        carsarr=JSON.parse(localStorage.getItem("carsarr"));

    }
    carsarr.forEach(function(car){

     
        let li=document.createElement("li");
    
        li.appendChild(document.createTextNode(JSON.stringify(car)));

        const link = document.createElement('a');

        li.appendChild(link);
       
        carList.appendChild(li);
        console.log('carlist appended ..')  


    })
}

function addCars(e){
 console.log('in add form');
    let carId = document.forms[0]["car_id"];
    carId=carId.value;
    console.log(carId);

    let carBrand = document.forms[0]["car_brand"];
    carBrand=carBrand.value;
    console.log(carBrand);

    let carPrice = document.forms[0]["car_price"];
    carPrice=carPrice.value;
    console.log(carPrice);

    let carbl = document.forms[0]["car_blife"];
    carbl=carbl.value;
    console.log(carbl);
    
    
    

    //console.log(id);
    
    car.id=carId;
    car.brand=carBrand;
    car.price=carPrice;
    car.batterylife=carbl;

    
   //console.log(emp);

   storeEmpInLocalStorage(car);
   e.preventDefault();

}


function storeEmpInLocalStorage(car) {
    console.log('in store function')
    let carsarr;
    if (localStorage.getItem("carsarr") === null) {
        carsarr = [];
    } else {
        carsarr = JSON.parse(localStorage.getItem("carsarr"));
    }
    carsarr.push(car);
    localStorage.setItem("carsarr", JSON.stringify(carsarr));
    console.log('added carsarr to local storage')
}