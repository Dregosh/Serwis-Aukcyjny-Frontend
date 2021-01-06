import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuctionsContainerComponent } from './user-auctions-container.component';

describe('UserAuctionsContainerComponent', () => {
  let component: UserAuctionsContainerComponent;
  let fixture: ComponentFixture<UserAuctionsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAuctionsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAuctionsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
