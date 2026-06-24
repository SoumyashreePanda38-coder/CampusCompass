import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTestsComponent } from './class-tests.component';

describe('ClassTestsComponent', () => {
  let component: ClassTestsComponent;
  let fixture: ComponentFixture<ClassTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassTestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
