import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
//import { LoggingService } from 'shared/logging.service';
//import { ProductService } from 'shared/product-service.service';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations: [
    trigger('animateText', [
      state('true', style({
        left: '400px',
        top: '200px'
      })),
      state('false', style({
        left: '0',
        top: '200px'
      })),
      transition('false => true', animate('1000ms linear', keyframes([
        style({ left: '0',     top: '200px', offset: 0 }),
        style({ left: '200px', top: '100px', offset: 0.50 }),
        style({ left: '400px', top: '200px', offset: 1 })
      ]))),
      transition('true => false', animate('1000ms linear', keyframes([
        style({ left: '400px', top: '200px', offset: 0 }),
        style({ left: '200px', top: '100px', offset: 0.50 }),
        style({ left: '0',     top: '200px', offset: 1 })
      ])))
    ])
  ]
})
export class WelcomeComponent {
  name:string='Bhoomika';
  num:number=0;

  text: string = 'false';

  toggleBounce(){
    this.text = this.text === 'false' ? 'true' : 'false';
  }

  
  //msg:string=this.loggingService.getmsg();
  welcomeMsg:string='Welcome to Angular app';
  
  /*
  constructor(private loggingService:LoggingService,private productService:ProductService){}
  printProduct(){
    this.productService.getproducts().forEach(data=>{
      this.loggingService.displayProduct(JSON.stringify(data));
    })
  }
  */
}
