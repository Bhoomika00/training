import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[FormsModule,ReactiveFormsModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check the userName element',()=>{

    const ip=fixture.debugElement.query(By.css('#userName'));
    expect(ip).toBeTruthy();
   
  });

  it('should check the name attritubute of userName',()=>{
    const ip=fixture.debugElement.query(By.css('#userName'));
    expect(ip.nativeElement.getAttribute('name')).toEqual('userName');
  });

  it('should check the type attritubute of userName',()=>{
    const ip=fixture.debugElement.query(By.css('#userName'));
    expect(ip.nativeElement.getAttribute('type')).toEqual('text');
  });

  it('should check the Password element',()=>{

    const ip=fixture.debugElement.query(By.css('#password'));
    expect(ip).toBeTruthy();
   
  });

  it('should check the name attritubute of password',()=>{
    const ip=fixture.debugElement.query(By.css('#password'));
    expect(ip.nativeElement.getAttribute('name')).toEqual('password');
  });

  it('should check the type attritubute of password',()=>{
    const ip=fixture.debugElement.query(By.css('#password'));
    expect(ip.nativeElement.getAttribute('type')).toEqual('password');
  });

  it('should check the log in button is disabled',()=>{
    fixture.detectChanges();
    const btn=fixture.debugElement.query(By.css('#logIn'));
    
    expect(btn.nativeElement.disabled).toBeTruthy();

  })
});
