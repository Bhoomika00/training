import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Iproduct } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  ngOnInit():void{
    this.filterList=this.products
  }
  _cat='0';
  imageMargin:number=5;
  imageWidth:number=100;
  showImg:boolean=false;
  filterList:Iproduct[]=[];
  title:string='';



  get cat():string{
    return  this._cat;
}

set cat(val:string){

 this._cat=val;
 
 console.log('in setter ',val);
 this.filterList=this.filterData(val);
 console.log('in setter',this.filterList);
 
}
products:Iproduct[]=[{
  id:101,
    name:'Shirts',
    
    category:'Clothing',
    price:500,
    rating:3.5,
    imageurl:'../../assets/images/shirt.jpg'
},
{id:102,
  name:'Pizza',
  
  category:'Food',
  price:300,
  rating:5,
  imageurl:'../../assets/images/pizza.jpg'
},
{
  id:501,
    name:"Laptop",
    
    category:'Electronics',
    price:50000,
    rating:4,
    imageurl:'../../assets/images/laptop.jpg',
},
{
  id:504,
    name:'Mobile',
    
    category:'Electronics',
    price:10000,
    rating:4.5,
    imageurl:'../../assets/images/mobile.jpg'
}
]

imageVisibility():void{
  this.showImg=!this.showImg
}
filterData(val:string):Iproduct[]{
  val=this.cat;
  return this.products.filter((p:Iproduct)=>p.category==val);
}

ratingHandler(msg:string):void{
  console.log('in handler');
  this.title=msg;
}

//Input() product:Iproduct[]=[];
@Output() addEvent:EventEmitter<Iproduct>=new EventEmitter<Iproduct>();

productAddEvent(p:Iproduct){
   this.addEvent.emit(p);
}

}
