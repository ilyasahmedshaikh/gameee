import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paid-redeemcode',
  templateUrl: './paid-redeemcode.component.html',
  styleUrls: ['./paid-redeemcode.component.scss']
})
export class PaidRedeemcodeComponent implements OnInit {

  selectedMethod: string = "googleplay";

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedMethod(method) {
    this.selectedMethod = method;
    console.log(this.selectedMethod);
  }

}
