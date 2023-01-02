import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarComponent } from './star.component';

describe('StarComponent', () => {
  let component: StarComponent;
  let fixture: ComponentFixture<StarComponent>;
  let element = HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StarComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render @output msg correctly', () => {
    spyOn(component.ratingClicked, 'emit');


    const div = fixture.nativeElement.querySelector('.star-crop');


    fixture.nativeElement.querySelector('#h1').textContent =
      'child sending hello to parent';


    const inputText = fixture.nativeElement.querySelector('#h1').textContent;
    fixture.detectChanges();

    
    div.click();
    //fixture.detectChanges();
    expect(component.ratingClicked.emit).
      toHaveBeenCalledWith(inputText);
  });

  it('should check @input rating on detect changes', () => {
    let newrating = 5;
    component.rating = newrating;
    fixture.detectChanges();

    const rateEle = fixture.nativeElement.querySelector('#rating')?.textContent;
    expect(rateEle).toContain(newrating);
  });
  

});







