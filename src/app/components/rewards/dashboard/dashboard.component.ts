import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  list: any = [
    { id: 1,
      count: "100"
    },
    { id: 2,
      count: "200"
    },
    { id: 3,
      count: "300"
    },
    { id: 4,
      count: "400"
    },
    { id: 5,
      count: "500"
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
