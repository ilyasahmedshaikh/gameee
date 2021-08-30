import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedEventsService } from 'src/core/services/shared-events/shared-events.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  loading: boolean = false;

  list: any = [
    { id: 1,
      count: "100"
    },
    { id: 2,
      count: "200"
    },
    { id: 3,
      count: "300"
    }
  ];

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
    this.router.navigateByUrl('/rewards');
  }

}
