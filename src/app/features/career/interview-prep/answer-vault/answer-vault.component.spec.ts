import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerVaultComponent } from './answer-vault.component';

describe('AnswerVaultComponent', () => {
  let component: AnswerVaultComponent;
  let fixture: ComponentFixture<AnswerVaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerVaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerVaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
