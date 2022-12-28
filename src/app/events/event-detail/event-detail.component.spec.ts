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
});
