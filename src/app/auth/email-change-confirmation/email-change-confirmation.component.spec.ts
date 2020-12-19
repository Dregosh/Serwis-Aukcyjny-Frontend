import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailChangeConfirmationComponent } from './email-change-confirmation.component';

describe('EmailChangeConfirmationComponent', () => {
  let component: EmailChangeConfirmationComponent;
  let fixture: ComponentFixture<EmailChangeConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailChangeConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailChangeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
