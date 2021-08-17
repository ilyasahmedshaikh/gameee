import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RewardsRoutingModule } from './rewards-routing.module';
import { RewardsComponent } from './rewards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [RewardsComponent, DashboardComponent, SignupComponent],
  imports: [
    CommonModule,
    RewardsRoutingModule
  ]
})
export class RewardsModule { }
