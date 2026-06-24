import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerResourcesComponent } from './career-resources.component';

describe('CareerResourcesComponent', () => {
  let component: CareerResourcesComponent;
  let fixture: ComponentFixture<CareerResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerResourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
