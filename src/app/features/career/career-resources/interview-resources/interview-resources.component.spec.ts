import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewResourcesComponent } from './interview-resources.component';

describe('InterviewResourcesComponent', () => {
  let component: InterviewResourcesComponent;
  let fixture: ComponentFixture<InterviewResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewResourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
