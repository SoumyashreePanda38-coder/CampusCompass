import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticePlatformsComponent } from './practice-platforms.component';

describe('PracticePlatformsComponent', () => {
  let component: PracticePlatformsComponent;
  let fixture: ComponentFixture<PracticePlatformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticePlatformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticePlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
