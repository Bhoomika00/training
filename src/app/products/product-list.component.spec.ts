import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  //it will execute before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent ]
    })
    .compileComponents();  //out component is not only .html,.css,.ts files -- it will look for template urls

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;  //creating a instance of class stored in fixture
    fixture.detectChanges();    //lifecycle callbacks
  });
  //basic test case ---to check whether the component is created or not
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
