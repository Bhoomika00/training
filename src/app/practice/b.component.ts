import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent {
 @Input() msg:string='';

 @Output() buttonClickEvent:EventEmitter<string>=new EventEmitter<string>();

 buttonClick():void{
  let h1Msg =  document.querySelector('#h1msg')?.textContent ?? 'hello';
  this.buttonClickEvent.emit(h1Msg);

 }
}
