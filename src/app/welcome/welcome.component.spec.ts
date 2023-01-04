import { HttpClient } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LoggingService } from 'src/app/shared/logging.service';
import { ProductService } from 'src/app/shared/product-service.service';
import { ProductListComponent } from '../products/product-list.component';
import { RepeatDataPipe } from '../repeat-data.pipe';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeComponent,RepeatDataPipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeComponent);  //fixture is wrapper of component class and html template
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check the welcome msg',()=>{

    const rootEle:DebugElement = fixture.debugElement;
    const h2 =rootEle.query(By.css('h2'));

    const h2Element:HTMLElement= h2.nativeElement; //html reference to test

    expect(h2Element.textContent).toEqual('Welcome to Angular app');
  });

  
});
