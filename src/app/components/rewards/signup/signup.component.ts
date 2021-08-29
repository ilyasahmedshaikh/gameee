import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedEventsService } from 'src/core/services/shared-events/shared-events.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  list: any = [];
  diamondPlayed: number = 85410;

  constructor(
    private shareEvent: SharedEventsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.diamondPlayedCount();
    this.shareEvent.setPresentation('header', false);

    this.list = [
      {
        id: 1,
        icon: "far fa-credit-card",
        featureTitle: "Payment Option",
        featureText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        id: 2,
        icon: "fas fa-hotdog",
        featureTitle: "Your Headline",
        featureText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        id: 3,
        icon: "fab fa-staylinked",
        featureTitle: "Payment Option",
        featureText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        id: 4,
        icon: "fas fa-link",
        featureTitle: "Payment Option",
        featureText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        id: 5,
        icon: "fab fa-squarespace",
        featureTitle: "Your Headline",
        featureText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      },
      {
        id: 6,
        icon: "fab fa-unity",
        featureTitle: "Payment Option",
        featureText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      }
    ]
  }

  back() {
    this.shareEvent.setPresentation('header', true);
    this.router.navigateByUrl('/store');
  }

  diamondPlayedCount() {
    setInterval(() => {
      this.diamondPlayed = this.diamondPlayed+1;
    }, 500);
  }

}
