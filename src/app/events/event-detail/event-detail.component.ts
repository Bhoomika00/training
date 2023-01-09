import { state, style, trigger } from '@angular/animations';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { EventService } from 'src/app/shared/event.service';
import { Ievent, Isession } from '../event-list/event';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
  animations:[
    trigger('enlarge',[

      state('start',style({
       width:'200px' , height:'200px'
      })),

    state('end',style({
      height:'400px',width:'400px'
    })),
  ])
]
})
export class EventDetailComponent implements OnInit,OnChanges {
  @Input() events:Ievent[]=[];
  @Input() msg:string='';
  sessions:Isession[]=[];

  isHovering:boolean= false;
  

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.events);
    this.events.forEach((e)=>
    {
      this.sessions=e.sessions;
    });
    console.log(this.sessions);
    
  }
  ngOnInit(): void {
    
  }
 
  showEvent(e:Ievent){
    alert(`${e.name} event was clicked`) ;
    console.log(e);
  }

  applyAnimation($event: any){
    this.isHovering=!this.isHovering;

 }
}
