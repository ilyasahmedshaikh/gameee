import { Component, OnInit } from '@angular/core';
import { SharedEventsService } from 'src/core/services/shared-events/shared-events.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  show: boolean = true;

  constructor(
    private shareEvent: SharedEventsService
  ) { }

  ngOnInit(): void {
    this.shareEvent.header.subscribe(res => {
      this.show = res;
    })
  }

}
