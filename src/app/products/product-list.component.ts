import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'shared/product-service.service';
import { Iproduct } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,OnDestroy{
  
  constructor(private productService:ProductService){}
  _cat='0';
  imageMargin:number=5;
  imageWidth:number=100;
  showImg:boolean=false;
  filterList:Iproduct[]=[];
  products:Iproduct[]=[];
  title:string='';
  errorMessage:string='';
  sub!:Subscription;
  
  
  ngOnInit():void{
    this.sub=this.productService.getproducts().subscribe((response)=>{
      console.log(response);
      this.products=response;
      this.filterList=this.products;
    },
    err=>{this.errorMessage=err;
      console.log(err);
    }
    );
  }
    
    ngOnDestroy(): void {
      this.sub.unsubscribe();
    }
  




  get cat():string{
    return  this._cat;
}

set cat(val:string){

 this._cat=val;
 
 console.log('in setter ',val);
 this.filterList=this.filterData(val);
 console.log('in setter',this.filterList);
 
}
//products:Iproduct[]=this.productService.getproducts()

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
