import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningGoalsComponent } from './learning-goals.component';

describe('LearningGoalsComponent', () => {
  let component: LearningGoalsComponent;
  let fixture: ComponentFixture<LearningGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningGoalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
