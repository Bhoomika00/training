import { Component } from '@angular/core';
import { Iproduct } from './products/product';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoapp';
  products:Iproduct[]=[];
  quantity:number=0;

  addEventHandler(p:Iproduct){
    this.products=[...this.products,p];
    if(this.products.includes(p)){
       this.quantity++; //this quantity indicates that size of cart.
    }
  } 
}

