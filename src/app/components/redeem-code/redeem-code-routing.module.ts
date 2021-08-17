import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedeemCodeComponent } from './redeem-code.component';
import { PaidRedeemcodeComponent } from './paid-redeemcode/paid-redeemcode.component';
import { PopupPageComponent } from './popup-page/popup-page.component';

const routes: Routes = [
  {
    path: '',
    component: RedeemCodeComponent,
    children: [
      {
        path: '',
        component: PaidRedeemcodeComponent
      },
      {
        path: 'paid-redeem',
        component: PaidRedeemcodeComponent
      },
      {
        path: 'popup',
        component: PopupPageComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedeemCodeRoutingModule { }
