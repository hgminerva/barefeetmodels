import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { DashboardService} from './dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.list.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardListComponent implements OnInit {
    private videosSub: any;
    private videos =  new Array<Object>();
    private videoTitle: string = ""; 
    private videoDescription: string = ""; 
  
    constructor(
      private router: Router,
      private dashboardService: DashboardService,) { 
    }
  
    ngOnInit() {
      if(localStorage.getItem("username")==null) {
        this.router.navigate(['/']);
      } else {
        this.getVideos();
      }
    }
    ngOnDestroy() {
      if( this.videosSub != null) this.videosSub.unsubscribe();
    }

    getVideos() : void {
        this.dashboardService.getVideos();
    
        this.videosSub = this.dashboardService.videosObservable.subscribe(
          data => {
            if(data.length > 0) {
              this.videos = data;
            }
          }
        );
      }
}