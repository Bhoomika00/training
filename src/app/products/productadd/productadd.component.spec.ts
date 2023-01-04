import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { ProductaddComponent } from './productadd.component';

describe('ProductaddComponent', () => {
  let component: ProductaddComponent;
  let fixture: ComponentFixture<ProductaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[FormsModule,ReactiveFormsModule,HttpClientTestingModule,AppRoutingModule],
      declarations: [ ProductaddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.product={
      id:801,
      name:'abc',
      category:'abc',
      price:1000,
      rating:3,
      imageurl:'/assests/images/p.jpg',
      qty:3


    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check Input attributes of name',()=>{
    
    const ip=fixture.debugElement.query(By.css('#name'));
    expect(ip).toBeTruthy();

    expect(ip.nativeElement.getAttribute('type')).toEqual('text');
    expect(ip.nativeElement.getAttribute('name')).toEqual('name');
    expect(ip.nativeElement.getAttribute('placeholder')).toEqual('Product name');
    
  });

  it('should check Input attributes of price',()=>{
    
    const ip=fixture.debugElement.query(By.css('#price'));
    expect(ip).toBeTruthy();

    expect(ip.nativeElement.getAttribute('type')).toEqual('number');
    expect(ip.nativeElement.getAttribute('name')).toEqual('price');
    expect(ip.nativeElement.getAttribute('placeholder')).toEqual('price');
    
  });

  it('should check Input attributes of category',()=>{
    
    const ip=fixture.debugElement.query(By.css('#category'));
    expect(ip).toBeTruthy();

    expect(ip.nativeElement.getAttribute('type')).toEqual('text');
    expect(ip.nativeElement.getAttribute('name')).toEqual('category');
    expect(ip.nativeElement.getAttribute('placeholder')).toEqual('Product category');
    
  });

  it('should check Input attributes of image',()=>{
    
    const ip=fixture.debugElement.query(By.css('#image'));
    expect(ip).toBeTruthy();

    expect(ip.nativeElement.getAttribute('type')).toEqual('text');
    expect(ip.nativeElement.getAttribute('name')).toEqual('image');
    expect(ip.nativeElement.getAttribute('placeholder')).toEqual('Product image');
    
  });

  it('should check Input attributes of rating',()=>{
    
    const ip=fixture.debugElement.query(By.css('#rating'));
    expect(ip).toBeTruthy();

    expect(ip.nativeElement.getAttribute('type')).toEqual('number');
    expect(ip.nativeElement.getAttribute('name')).toEqual('rating');
    expect(ip.nativeElement.getAttribute('placeholder')).toEqual('Product rating');
    
  });

  
  it('should check Input attributes of quantity',()=>{
    
    const ip=fixture.debugElement.query(By.css('#qty'));
    expect(ip).toBeTruthy();

    expect(ip.nativeElement.getAttribute('type')).toEqual('number');
    expect(ip.nativeElement.getAttribute('name')).toEqual('qty');
    expect(ip.nativeElement.getAttribute('placeholder')).toEqual('Product quantity');
    
  });

  it('should check whether the form is valid',()=>{
    component.addProduct.setValue({
      id:801,
      name:'abc',
      category:'abc',
      price:1000,
      rating:3,
      image:'/assests/images/p.jpg',
      qty:3

    });
    fixture.detectChanges();
    //expect(btn.nativeElement.disabled).toBeFalsy();
    expect(component.addProduct.valid).toEqual(true);
  });
  });
