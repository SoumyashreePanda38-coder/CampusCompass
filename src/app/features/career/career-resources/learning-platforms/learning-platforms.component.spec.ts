import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningPlatformsComponent } from './learning-platforms.component';

describe('LearningPlatformsComponent', () => {
  let component: LearningPlatformsComponent;
  let fixture: ComponentFixture<LearningPlatformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningPlatformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningPlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
