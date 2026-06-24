import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtsCheckerComponent } from './ats-checker.component';

describe('AtsCheckerComponent', () => {
  let component: AtsCheckerComponent;
  let fixture: ComponentFixture<AtsCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtsCheckerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtsCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
