import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreComponent } from './store.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PopupPageComponent } from './popup-page/popup-page.component';

const routes: Routes = [
  {
    path: '',
    component: StoreComponent,
    children: [
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'homepage',
        component: HomepageComponent
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
export class StoreRoutingModule { }
