import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyGoalsComponent } from './daily-goals.component';

describe('DailyGoalsComponent', () => {
  let component: DailyGoalsComponent;
  let fixture: ComponentFixture<DailyGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyGoalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
