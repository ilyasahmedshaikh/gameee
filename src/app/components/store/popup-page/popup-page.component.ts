import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedEventsService } from 'src/core/services/shared-events/shared-events.service';
@Component({
  selector: 'app-popup-page',
  templateUrl: './popup-page.component.html',
  styleUrls: ['./popup-page.component.scss']
})
export class PopupPageComponent implements OnInit {

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

}
