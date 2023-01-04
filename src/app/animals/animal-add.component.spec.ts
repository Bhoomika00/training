import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { AnimalAddComponent } from './animal-add.component';

describe('AnimalAddComponent', () => {
  let component: AnimalAddComponent;
  let fixture:ComponentFixture<AnimalAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[FormsModule,ReactiveFormsModule,HttpClientTestingModule],
      declarations: [ AnimalAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalAddComponent);
    component = fixture.componentInstance;
    /*
    component.animal={id:901,
      name:'Lion',
      breifdesc:"this is lion",
      age:9,
      imageUrl:'../assets/images/animal.jpg'
    }*/
    
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check attributes of animal brief Desc input',()=>{
    const desc=fixture.debugElement.query(By.css('#breifdesc'));
    expect(desc).toBeTruthy();
  });

  it('should check age input attribute',()=>{
    
      fixture.detectChanges();
      const a=fixture.debugElement.query(By.css('#age'));
      expect(a.nativeElement.getAttribute('type')).toEqual('number');
    
  });
});
