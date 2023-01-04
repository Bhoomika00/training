import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }
  getmsg():string{
    return 'Log in successful';
  }
  displayProduct(data:any){
    console.log(`${data}`);
  }
}
