import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationdetailComponent } from './donationdetail.component';

describe('DonationdetailComponent', () => {
  let component: DonationdetailComponent;
  let fixture: ComponentFixture<DonationdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
