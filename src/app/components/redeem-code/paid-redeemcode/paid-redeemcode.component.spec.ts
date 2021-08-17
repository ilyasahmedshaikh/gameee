import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidRedeemcodeComponent } from './paid-redeemcode.component';

describe('PaidRedeemcodeComponent', () => {
  let component: PaidRedeemcodeComponent;
  let fixture: ComponentFixture<PaidRedeemcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidRedeemcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidRedeemcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
