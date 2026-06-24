import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusScoreCardComponent } from './campus-score-card.component';

describe('CampusScoreCardComponent', () => {
  let component: CampusScoreCardComponent;
  let fixture: ComponentFixture<CampusScoreCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampusScoreCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampusScoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
