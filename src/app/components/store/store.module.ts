import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSimpleCountdownModule } from 'ngx-simple-countdown';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { PopupPageComponent } from './popup-page/popup-page.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [StoreComponent, PopupPageComponent, HomepageComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    NgxSimpleCountdownModule
  ]
})
export class StoreModule { }
