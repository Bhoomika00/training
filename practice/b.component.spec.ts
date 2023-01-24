import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BComponent } from './b.component';

describe('BComponent', () => {
  let component: BComponent;
  let fixture: ComponentFixture<BComponent>;
  let element:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BComponent ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BComponent);
    component = fixture.componentInstance;
    element= fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the @Input msg',()=>{
    let newmsg='Hello from parent';
    component.msg=newmsg;
    fixture.detectChanges();

    let msgEle=fixture.nativeElement.querySelector('#msg').textContent;

    expect(msgEle).toContain(newmsg);
  });

  it('should check @output',()=>{
    spyOn(component.buttonClickEvent,'emit');

    const btn=fixture.nativeElement.querySelector('#btn');

    fixture.nativeElement.querySelector('#h1msg').textContent='Output send by child to parent';
    const iptext=fixture.nativeElement.querySelector('#h1msg').textContent;
    fixture.detectChanges();

    btn.click();

    expect(component.buttonClickEvent.emit).toHaveBeenCalledWith(iptext);
  });

});




