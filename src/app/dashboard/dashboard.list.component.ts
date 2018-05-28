import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import "rxjs/add/operator/takeUntil";
import "rxjs/add/operator/takeWhile";

import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.list.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardListComponent implements OnInit {
  private videosSub: any;
  private videos = new Array<object>();
  private videoTitle: string = "";
  private videoDescription: string = "";
  private skipNumber: number = 0;

  constructor(
    private router: Router,
    private dashboardService: DashboardService, ) {
  }

  ngOnInit() {
    if (localStorage.getItem("username") == null) {
      this.router.navigate(['login']);
    } else {
      this.getVideos();
    }
  }
  ngOnDestroy() {
    if (this.videosSub != null) this.videosSub.unsubscribe();
  }

  getVideos(): void {
    this.dashboardService.getVideos(this.skipNumber);
    this.videosSub = this.dashboardService.videosObservable.subscribe(
      data => {
        if (data.length > 0) {
          for (var i = 0; i <= data.length - 1; i++) {
            this.videos.push({
              id: data[i]["id"],
              title: data[i]["title"],
              description: data[i]["description"],
              dateUploaded: data[i]["dateUploaded"],
              modelId: data[i]["modelId"],
              model: data[i]["model"],
              fileName: data[i]["fileName"],
              fileUrl: data[i]["fileUrl"],
              fileSizeInKb: data[i]["fileSizeInKb"],
              fileSizeInBytes: data[i]["fileSizeInBytes"],
              file: data[i]["file"],
              fileGifUrl: data[i]["fileGifUrl"]
            });
          }
        }
      }
    );
  }

  btnLoadMoreVideosClick(): void {
    this.videosSub.unsubscribe();

    let loadMoreVideos: HTMLButtonElement = <HTMLButtonElement>document.getElementById("btnLoadMoreVideos");
    loadMoreVideos.disabled = true;
    loadMoreVideos.innerHTML = "Loading...";

    this.skipNumber += 20;
    this.dashboardService.getVideos(this.skipNumber);
    this.videosSub = this.dashboardService.videosObservable.subscribe(
      data => {
        if (data.length > 0) {
          for (var i = 0; i <= data.length - 1; i++) {
            this.videos.push({
              id: data[i]["id"],
              title: data[i]["title"],
              description: data[i]["description"],
              dateUploaded: data[i]["dateUploaded"],
              modelId: data[i]["modelId"],
              model: data[i]["model"],
              fileName: data[i]["fileName"],
              fileUrl: data[i]["fileUrl"],
              fileSizeInKb: data[i]["fileSizeInKb"],
              fileSizeInBytes: data[i]["fileSizeInBytes"],
              file: data[i]["file"],
              fileGifUrl: data[i]["fileGifUrl"]
            });

            if (data.length < 20) {
              loadMoreVideos.hidden = true;
            } else {
              loadMoreVideos.disabled = false;
              loadMoreVideos.innerHTML = "Load more videos...";
            }
          }
        } else {
          loadMoreVideos.hidden = true;
        }
      }
    );
  }
}