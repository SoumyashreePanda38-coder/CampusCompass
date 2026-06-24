import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabVivaComponent } from './lab-viva.component';

describe('LabVivaComponent', () => {
  let component: LabVivaComponent;
  let fixture: ComponentFixture<LabVivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabVivaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabVivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
