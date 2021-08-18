import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedEventsService } from 'src/core/services/shared-events/shared-events.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  list: any = [];

  constructor(
    private shareEvent: SharedEventsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.list = [
      { image: "assets/img/a.jpg" },
      { image: "assets/img/b.jpg" },
      { image: "assets/img/c.png" },
      { image: "assets/img/d.jpg" },
      { image: "assets/img/e.jpg" },
      { image: "assets/img/f.jpg" },
      { image: "assets/img/g.jpg" },
      { image: "assets/img/h.jpg" },
    ]

    this.shareEvent.setPresentation('header', true);
  }

  submit() {
    this.shareEvent.setPresentation('header', false);
    this.router.navigateByUrl('/store/popup');
  }

}
