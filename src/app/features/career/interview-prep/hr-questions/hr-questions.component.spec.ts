import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrQuestionsComponent } from './hr-questions.component';

describe('HrQuestionsComponent', () => {
  let component: HrQuestionsComponent;
  let fixture: ComponentFixture<HrQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
