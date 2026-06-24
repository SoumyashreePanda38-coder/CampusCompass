import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysMissionComponent } from './todays-mission.component';

describe('TodaysMissionComponent', () => {
  let component: TodaysMissionComponent;
  let fixture: ComponentFixture<TodaysMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaysMissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaysMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
