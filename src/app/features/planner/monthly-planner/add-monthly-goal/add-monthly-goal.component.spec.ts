import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMonthlyGoalComponent } from './add-monthly-goal.component';

describe('AddMonthlyGoalComponent', () => {
  let component: AddMonthlyGoalComponent;
  let fixture: ComponentFixture<AddMonthlyGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMonthlyGoalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMonthlyGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
