import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyGoalCardComponent } from './monthly-goal-card.component';

describe('MonthlyGoalCardComponent', () => {
  let component: MonthlyGoalCardComponent;
  let fixture: ComponentFixture<MonthlyGoalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyGoalCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyGoalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
