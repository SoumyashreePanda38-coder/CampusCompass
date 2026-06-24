import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWeeklyGoalComponent } from './add-weekly-goal.component';

describe('AddWeeklyGoalComponent', () => {
  let component: AddWeeklyGoalComponent;
  let fixture: ComponentFixture<AddWeeklyGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWeeklyGoalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWeeklyGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
