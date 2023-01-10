import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangerHomeComponent } from './manger-home.component';

describe('MangerHomeComponent', () => {
  let component: MangerHomeComponent;
  let fixture: ComponentFixture<MangerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangerHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
