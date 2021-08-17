import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  list: any = [];

  constructor() { }

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
  }

}
