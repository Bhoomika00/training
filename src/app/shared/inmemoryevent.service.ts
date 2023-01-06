import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Ianimal } from 'src/app/animals/animal.service';
import { Ievent } from 'src/app/events/event-list/event';
import { Iproduct } from 'src/app/products/product';
import { ITodo } from '../todo/todo-interface';

@Injectable({
  providedIn: 'root'
})
export class InmemoryeventService implements InMemoryDbService{

  constructor() { }
  createDb(){
    const events : Ievent[] =
    [{
      "id":101,
      "name":"Angular",
      "date":"2022/12/20",
      "time":"10:00 AM",
      "price":1500,
      "imageUrl":"../../assets/images/angular.jpg",
      "location":{
          "address":"Grand Heritiage Hotel",
          "city":"Pune",
          "country":"India"
      },
      "sessions":[{
          "id":10120,
          "name":"Basics of Angular",
          "presenter":"Mr.Sharma",
          "duration":120 ,
          "voters":["Amit Kumar","Arya"]
      }]
  
  },
  {
  
      "id":102,
      "name":"Cyber security",
      "date":"2022/12/21",
      "time":"10:00 AM",
      "price":1500,
      "imageUrl":"../../assets/images/cs.jpg",
      "location":{
          "address":"IOIT COLLEGE Audotorium",
          "city":"Pune",
          "country":"India"
      },
      "sessions":[{
          "id":101299,
          "name":"Concepts Of cyber security",
          "presenter":"Mrs.Kumar",
          "duration":60 ,
          "voters":["Shruti Choure","Arya","Tejal Patil"]
      },
      {
          "id":101299,
          "name":"Cyber security hands-on",
          "presenter":"Mrs.Kumar",
          "duration":120 ,
          "voters":["Shruti Choure","Arya","Tejal Patil"]
  
      }]
  
  },
  {
      "id":103,
      "name":"Corporate security",
      "date":"2022/12/22",
      "time":"10:00 AM",
      "price":1500,
      "imageUrl":"../../assets/images/coporate.jpg",
      "location":{
          "address":"Town hall Cognizant",
          "city":"Pune",
          "country":"India"
      },
      "sessions":[{
          "id":10127,
          "name":"Essential steps of Corporate Security",
          "presenter":"Mr.Sharma",
          "duration":120 ,
          "voters":["Amit Kumar","Arya"]
      }]
  }]

    const products:Iproduct[]=
    [
      {
      "id": 101,
        "name":"Shirts",
        
        "category":"Clothing",
        "price": 500,
        "rating": 3.5,
        "imageurl":"../../assets/images/shirt.jpg",
        "qty": 0
      },
      {"id": 102,
      "name":"Pizza",
      
      "category":"Food",
      "price": 300,
      "rating": 5,
      "imageurl":"../../assets/images/pizza.jpg",
      "qty": 0
      },
      {
      "id": 501,
        "name": "Laptop",
        
        "category":"Electronics",
        "price": 50000,
        "rating": 4,
        "imageurl":"../../assets/images/laptop.jpg",
        "qty": 0
      },
      {
      "id": 504,
        "name":"Mobile",
        
        "category":"Electronics",
        "price": 10000,
        "rating": 4.5,
        "imageurl":"../../assets/images/mobile.jpg",
        "qty": 0
      }
  ]

  const animals:Ianimal[]=[

    {
            "id": 101,
            "name": "Peacock",
            "breifdesc": "This is the peacock",
            "age": 8,

            "imageUrl": "../../assets/images/p.jpg"

    },
    {
            "id": 102,
            "name": "Crocodile",
            "breifdesc": "This is crocodile",
            "age": 9,

            "imageUrl": "../../assets/images/crocodile.jpg"

    },
    {
            "id": 103,
            "name": "Turtle",
            "breifdesc": "This is the turtle",
            "age": 2,
            "imageUrl": "../../assets/images/t.jpg"

    }
];

const todos: ITodo[]=[
  {id:'111',content:'Gardening'},
  {id:'222',content:'Reading'}
];

    


    return {events,products,animals,todos}
    
  }
}
