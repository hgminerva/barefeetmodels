import { Injectable,ViewContainerRef } from "@angular/core";

import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DashboardService {

    private headers = new Headers({
        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        'Content-Type': 'application/json'
    });
    private options = new RequestOptions({ headers: this.headers });

    public videosSource = new Subject<Array<Object>>();
    public videosObservable = this.videosSource.asObservable();

    public videoSource = new Subject<Object>();
    public videoObservable = this.videoSource.asObservable();

    constructor(
        private router: Router,
        private http: Http
    ) { 
    }

    public getVideos(skip: number) : void {
        // let url = "https://barefeetmodels-api.azurewebsites.net/api/MstVideo/List";
        let url = "http://localhost:10136/api/MstVideo/List/" + skip;
        let videos = new Array<Object>();
        this.http.get(url, this.options).subscribe(
            response => {
                var results = response.json();
                if (results.length > 0) {
                    for (var i = 0; i <= results.length - 1; i++) {
                        videos.push({
                            id: results[i]["Id"],
                            title: results[i]["Title"],
                            description: results[i]["Description"],
                            dateUploaded: results[i]["DateUploaded"],
                            modelId: results[i]["ModelId"],
                            model: results[i]["Model"],
                            fileName: results[i]["FileName"],
                            fileUrl: results[i]["FileUrl"],
                            fileSizeInKb: results[i]["FileSizeInKb"],
                            fileSizeInBytes: results[i]["FileSizeInBytes"],
                            file: results[i]["File"],
                            fileGifUrl: results[i]["FileGifUrl"]
                        });
                    }
                    this.videosSource.next(videos);
                }else{
                    this.videosSource.next(videos);
                }
            }
        );
    }

    public getVideo(id : number) : void {
        let video: Object;
        let url = "https://barefeetmodels-api.azurewebsites.net/api/MstVideo/Detail/" + id;
        this.http.get(url, this.options).subscribe(
            response => {
                var result = response.json();
                if (result != null) {
                    video = {
                        id: result["Id"],
                        title: result["Title"],
                        description: result["Description"],
                        dateUploaded: result["DateUploaded"],
                        modelId: result["ModelId"],
                        model: result["Model"],
                        fileName: result["FileName"],
                        fileUrl: result["FileUrl"],
                        fileSizeInKb: result["FileSizeInKb"],
                        fileSizeInBytes: result["FileSizeInBytes"],
                        file: result["File"],
                        fileGifUrl: result["FileGifUrl"]
                    };
                    this.videoSource.next(video);
                }else{
                    this.videoSource.next(video);
                }
            }
        );
    }
}