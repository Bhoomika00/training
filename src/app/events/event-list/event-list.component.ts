import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from 'src/app/shared/event.service';
import { Ievent } from './event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
 events:Ievent[]=[];
sub!:Subscription;
errorMsg:string="";
msg:string='hello from parent';

constructor(private service:EventService){}

ngOnInit(): void {
  this.sub=this.service.getevents().subscribe((response)=>{
    console.log(response);
    this.events=response;
  },
  err=>{
    this.errorMsg=err;
    console.log(err)
  }
  );
}


  


}
    
  

