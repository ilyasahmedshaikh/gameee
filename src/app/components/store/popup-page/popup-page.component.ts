import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedEventsService } from 'src/core/services/shared-events/shared-events.service';
@Component({
  selector: 'app-popup-page',
  templateUrl: './popup-page.component.html',
  styleUrls: ['./popup-page.component.scss']
})
export class PopupPageComponent implements OnInit {

  isLoading: boolean = true;

  // for loader to hold page for sometime
  loading: boolean = false;

  constructor(
    private shareEvent: SharedEventsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.shareEvent.setPresentation('header', false);

    setTimeout(() => {
      this.loading = true;
    }, 1500);
  }

  back() {
    this.shareEvent.setPresentation('header', true);
    this.router.navigateByUrl('/store');
  }

  onReceiveDiamonds() {
    this.isLoading = !this.isLoading;
  }

}
