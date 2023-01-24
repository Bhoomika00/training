import { Component } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent {
    message:string='Hello from parent';

    eventmsg:string='';

    buttonEventClickHandler(str:string):void{
      this.eventmsg=str;
    }
}
