import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'shared/product-service.service';
import { Iproduct } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,OnDestroy{
  selectedProduct!: Iproduct | null;
  
  constructor(private productService:ProductService,private router:Router){}
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
    });
    this.productService.selectedProductChanges$.
       subscribe(currentProduct=>{this.selectedProduct=currentProduct;
       });
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
  this.addEvent.emit(p); //this is for parent-child one
  this.productService.changeSelectedProduct(p);
   
}
addnewproduct(){
  console.log('in new product');

  this.productService.changeSelectedProduct(this.productService.newProduct());
  console.log('back to newProduct from service ');

   this.router.navigate(['/addProduct']);
    //console.log(this.productService.newProduct());
}

}  

