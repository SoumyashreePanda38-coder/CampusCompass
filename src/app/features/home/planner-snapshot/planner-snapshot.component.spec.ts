import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerSnapshotComponent } from './planner-snapshot.component';

describe('PlannerSnapshotComponent', () => {
  let component: PlannerSnapshotComponent;
  let fixture: ComponentFixture<PlannerSnapshotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannerSnapshotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannerSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
