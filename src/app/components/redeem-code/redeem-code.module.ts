import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedeemCodeRoutingModule } from './redeem-code-routing.module';
import { RedeemCodeComponent } from './redeem-code.component';
import { PopupPageComponent } from './popup-page/popup-page.component';
import { PaidRedeemcodeComponent } from './paid-redeemcode/paid-redeemcode.component';


@NgModule({
  declarations: [RedeemCodeComponent, PopupPageComponent, PaidRedeemcodeComponent],
  imports: [
    CommonModule,
    RedeemCodeRoutingModule
  ]
})
export class RedeemCodeModule { }
