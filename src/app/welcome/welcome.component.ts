import { Component } from '@angular/core';
import { LoggingService } from 'shared/logging.service';
import { ProductService } from 'shared/product-service.service';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  name:string='Bhoomika';
  num:number=0;

  constructor(private loggingService:LoggingService,private productService:ProductService){}

  msg:string=this.loggingService.getmsg();
  

  printProduct(){
    this.productService.getproducts().forEach(data=>{
      this.loggingService.displayProduct(JSON.stringify(data));
    })
  }
}
