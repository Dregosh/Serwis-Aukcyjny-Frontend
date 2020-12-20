import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionFilterComponent } from './auction-filter.component';

describe('AuctionFilterComponent', () => {
  let component: AuctionFilterComponent;
  let fixture: ComponentFixture<AuctionFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
