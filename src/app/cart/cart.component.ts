import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ObservedValueTupleFromArray } from 'rxjs';
import { Iproduct } from '../products/product';
import { ProductListComponent } from '../products/product-list.component';
import { Icart } from './cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,OnChanges {
  @Input() products:Iproduct[]=[];
  @Input() quantity:number=0;

  q:number=0;

  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.products.forEach((e)=>console.log(e.name));
    //let i=this.products
    //console.log(this.quantity);  //this quantity indicates size of cart

    
    
  }

  /* cart:Icart[]=[];

  calculate(i:products):Icart{

  }
 */

  

  
  }
  
    

  

