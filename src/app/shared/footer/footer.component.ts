import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    footerDate : Date = new Date();
    userName : string = "";

    constructor() { }

    ngOnInit() {}

    isLoggedIn() : boolean {
        if(localStorage.getItem("username")==null) {
            return false;
        } else {
            this.userName = localStorage.getItem("username");
            return true;
        } 
    }
}
