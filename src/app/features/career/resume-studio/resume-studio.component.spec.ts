import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeStudioComponent } from './resume-studio.component';

describe('ResumeStudioComponent', () => {
  let component: ResumeStudioComponent;
  let fixture: ComponentFixture<ResumeStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeStudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
