import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
//import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MaterialModule } from '../material UI module/material-module.module';

import { AnimalAddComponent } from './animal-add.component';

describe('AnimalAddComponent', () => {
  let component: AnimalAddComponent;
  let fixture:ComponentFixture<AnimalAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[FormsModule,ReactiveFormsModule,HttpClientTestingModule,
        StoreModule.forRoot({}),MaterialModule,BrowserAnimationsModule],
      declarations: [ AnimalAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    component.animal={id:901,
      name:'Lion',
      breifdesc:"this is lion",
      age:9,
      imageUrl:'../assets/images/animal.jpg'
    }
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check attributes of animal brief Desc input',()=>{
    const ip=fixture.debugElement.query(By.css('#breifdesc'));
    expect(ip).toBeTruthy();

    expect(ip.nativeElement.getAttribute('type')).toEqual('text');
    expect(ip.nativeElement.getAttribute('name')).toEqual('breifdesc');
    expect(ip.nativeElement.getAttribute('formControlName')).toEqual('breifdesc');
  });

  it('should check age input attribute',()=>{
    
      
      const ip=fixture.debugElement.query(By.css('#age'));
      expect(ip).toBeTruthy();
      expect(ip.nativeElement.getAttribute('type')).toEqual('number');
      expect(ip.nativeElement.getAttribute('name')).toEqual('age');
      expect(ip.nativeElement.getAttribute('formControlName')).toEqual('age');

    
  });

  it('should check attributes of animal name  input',()=>{
    const ip=fixture.debugElement.query(By.css('#name'));
    expect(ip).toBeTruthy();

    expect(ip.nativeElement.getAttribute('type')).toEqual('text');
    expect(ip.nativeElement.getAttribute('name')).toEqual('name');
    expect(ip.nativeElement.getAttribute('formControlName')).toEqual('name');
  });

  it('should check attributes of animal brief Desc input',()=>{
    const ip=fixture.debugElement.query(By.css('#imageUrl'));
    expect(ip).toBeTruthy();

    expect(ip.nativeElement.getAttribute('type')).toEqual('text');
    expect(ip.nativeElement.getAttribute('name')).toEqual('imageUrl');
    expect(ip.nativeElement.getAttribute('formControlName')).toEqual('imageUrl');
  });

  it('should submit button is disabled or not',()=>{
    component.addanimal.setValue({
      id:901,
      name:'Lion',
      breifdesc:"this is lion",
      age:9,
      imageUrl:'../assets/images/animal.jpg'
    });
    fixture.detectChanges();
    expect(component.addanimal.valid).toEqual(true);
    const ip=fixture.debugElement.query(By.css('#btn'));
    expect(ip.nativeElement.disable).toBeFalsy();
    
  })

  
});
