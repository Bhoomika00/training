import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

//import { AppComponent } from './product-list.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  //it will execute before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();  //out component is not only .html,.css,.ts files -- it will look for template urls

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;  //creating a instance of class stored in fixture
    fixture.detectChanges();    //lifecycle callbacks
  });
  //basic test case ---to check whether the component is created or not
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check title',()=>{
    const rootEle:DebugElement = fixture.debugElement;
    const h2 =rootEle.query(By.css('h2'));

    const h2Element:HTMLElement= h2.nativeElement; //html reference to test

    expect(h2Element.textContent).toEqual('Demoapp');
  });

  it('should change quantity',()=>{
     
    const rootEle:DebugElement = fixture.debugElement;
    const qty =rootEle.query(By.css('#quantity'));
    const h2Element:HTMLElement=qty.nativeElement;
    component.quantity=10;
      fixture.detectChanges();
    expect(h2Element.textContent).toEqual('10');
      
  });
});
