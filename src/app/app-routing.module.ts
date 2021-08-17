import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/store/store.module').then(m => m.StoreModule)
  },
  {
    path: 'store',
    loadChildren: () => import('./components/store/store.module').then(m => m.StoreModule)
  },
  {
    path: 'redeem-code',
    loadChildren: () => import('./components/redeem-code/redeem-code.module').then(m => m.RedeemCodeModule)
  },
  {
    path: 'rewards',
    loadChildren: () => import('./components/rewards/rewards.module').then(m => m.RewardsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
