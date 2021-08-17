import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedeemCodeRoutingModule } from './redeem-code-routing.module';
import { RedeemCodeComponent } from './redeem-code.component';


@NgModule({
  declarations: [RedeemCodeComponent],
  imports: [
    CommonModule,
    RedeemCodeRoutingModule
  ]
})
export class RedeemCodeModule { }
