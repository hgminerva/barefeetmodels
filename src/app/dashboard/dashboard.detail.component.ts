import { Component, OnInit, ViewChild } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { DashboardService} from './dashboard.service';
import { identifierName } from '@angular/compiler';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.detail.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardDetailComponent implements OnInit {
    videoSub: any;
    video =  Object();
  
    constructor(
      private router: Router,
      private route: ActivatedRoute,
      private dashboardService: DashboardService,) { 
    }
  
    ngOnInit() {
      if(localStorage.getItem("username")==null) {
        this.router.navigate(['/']);
      } else {
        this.getVideo(+this.route.snapshot.params['id']);
      }
    }

    getVideo(id : number) : void {
      this.dashboardService.getVideo(id);
      this.videoSub = this.dashboardService.videoObservable.subscribe(
        data => {
          if(data != null) {
            this.video = data;
          }
        }
      );
    }
}