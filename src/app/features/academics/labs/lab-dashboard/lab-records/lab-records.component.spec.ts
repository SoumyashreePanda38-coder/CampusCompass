import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabRecordsComponent } from './lab-records.component';

describe('LabRecordsComponent', () => {
  let component: LabRecordsComponent;
  let fixture: ComponentFixture<LabRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabRecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
