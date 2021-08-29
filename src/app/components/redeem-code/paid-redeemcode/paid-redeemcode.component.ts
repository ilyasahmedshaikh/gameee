import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedEventsService } from 'src/core/services/shared-events/shared-events.service';

@Component({
  selector: 'app-paid-redeemcode',
  templateUrl: './paid-redeemcode.component.html',
  styleUrls: ['./paid-redeemcode.component.scss']
})
export class PaidRedeemcodeComponent implements OnInit {

  selectedMethod: string = "googleplay";

  constructor(
    private shareEvent: SharedEventsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.shareEvent.setPresentation('header', false);
  }

  back() {
    this.shareEvent.setPresentation('header', true);
    this.router.navigateByUrl('/store');
  }

  onSelectedMethod(method) {
    this.selectedMethod = method;
    console.log(this.selectedMethod);
  }

}
