import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerGoalComponent } from './career-goal.component';

describe('CareerGoalComponent', () => {
  let component: CareerGoalComponent;
  let fixture: ComponentFixture<CareerGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerGoalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
