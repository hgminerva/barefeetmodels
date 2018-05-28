import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { DashboardService} from './dashboard.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

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
      this.router.navigate(['login']);
    } else {
      this.getVideos();
    }
  }
  ngOnDestroy() {
    if( this.videosSub != null) this.videosSub.unsubscribe();
  }

  getVideos() : void {
    this.dashboardService.getVideos(0);

    this.videosSub = this.dashboardService.videosObservable.subscribe(
      data => {
        if(data.length > 0) {
          this.videos = data;

          this.viewVideo(this.videos[0]["id"]);
        }
      }
    );
  }

  viewVideo(id: number) : void {
    for (var i = 0; i <= this.videos.length - 1; i++) {
      if(this.videos[i]["id"] == id) {
        let videoPlayer: HTMLVideoElement = <HTMLVideoElement>document.getElementById("videoPlayer");
        videoPlayer.src = this.videos[i]["fileUrl"];
        videoPlayer.load();
        videoPlayer.play();

        this.videoTitle = this.videos[i]["title"];
        this.videoDescription = this.videos[i]["description"];
      }
    }
  }

}