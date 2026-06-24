import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterSelectorComponent } from './semester-selector.component';

describe('SemesterSelectorComponent', () => {
  let component: SemesterSelectorComponent;
  let fixture: ComponentFixture<SemesterSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemesterSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemesterSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
