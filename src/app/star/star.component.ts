import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges {
  @Input() rating:number=0;
  @Input() msg:string=''; //this msg is for testing purpose
  cropWidth:number=75;

  
  ngOnInit(): void {
    
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth=this.rating *75/5;
  }
  
  @Output() ratingClicked:EventEmitter<string>=new EventEmitter<string>();

  starclicked():void{
    let msg =  document.querySelector('#h1')?.textContent ?? 'hello';
    this.ratingClicked.emit(msg);
    /*console.log('in the star');
    this.ratingClicked.emit(`Product has rating of ${this.rating}`);*/
  }

}
