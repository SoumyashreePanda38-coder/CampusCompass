import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementReadinessCardComponent } from './placement-readiness-card.component';

describe('PlacementReadinessCardComponent', () => {
  let component: PlacementReadinessCardComponent;
  let fixture: ComponentFixture<PlacementReadinessCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementReadinessCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementReadinessCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
