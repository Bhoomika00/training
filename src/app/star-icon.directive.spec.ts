import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarIconDirective } from './star-icon.directive';


@Component({
  template: `<div appStarIcon>Heloo</div>`,
})
class HostComponent {}

@NgModule({
  declarations: [HostComponent, StarIconDirective],
  exports: [HostComponent],
})
class HostModule {}


describe('StarIconDirective', () => {
  let component: HostComponent;
  let element: HTMLElement;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, HostModule],
      declarations:[StarIconDirective] // * we import the host module
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;

    fixture.detectChanges(); // * so the directive gets appilied
  });

  it('should create an instance', () => {
    
    expect(component).toBeTruthy();
  });
  it('should add star to text', () => {
    // * arrange
    const el = element.querySelector('div')?.textContent;

    // * assert
    expect(el).toEqual('Heloo⭐'); // * we check if the directive worked correctly
  });

});
