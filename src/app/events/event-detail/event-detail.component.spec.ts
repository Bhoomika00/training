import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { EventDetailComponent } from './event-detail.component';

describe('EventDetailComponent', () => {
  let component: EventDetailComponent;
  let fixture: ComponentFixture<EventDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check the msg recieved',()=>{
    let msgparent='hello from parent';
    component.msg=msgparent;

    fixture.detectChanges();
    let msgEle=fixture.nativeElement.querySelector('#msg').textContent;

    expect(msgEle).toContain(msgparent);
  });

  it('should check the @input json data',()=>{
    component.events=
    [{
      "id":101,
      "name":"Angular",
      "date":"2022/12/20",
      "time":"10:00 AM",
      "price":1500,
      "imageUrl":"../../assets/images/angular.jpg",
      "location":{
          "address":"Grand Heritiage Hotel",
          "city":"Pune",
          "country":"India"
      },
      "sessions":[{
          "id":10120,
          "name":"Basics of Angular",
          "presenter":"Mr.Sharma",
          "duration":120 ,
          "voters":["Amit Kumar","Arya"]
      }]
  
  
  }];
let event1=component.events;
fixture.detectChanges();

let ele=fixture.nativeElement.querySelector('#event').textContent;

expect(JSON.parse(ele)).toEqual(JSON.parse(JSON.stringify(event1)));

  });
});
