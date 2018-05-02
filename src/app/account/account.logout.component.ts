import { Component, ViewContainerRef } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'app-account-logout',
    templateUrl: './account.logout.component.html'
})
export class AccountLogoutComponent {
    constructor(
        private router: Router,
        private toastr: ToastsManager,
        private viewContainer: ViewContainerRef) 
    {
        this.toastr.setRootViewContainerRef(viewContainer);
    }

    ngOnInit() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('expires_in');
        localStorage.removeItem('token_type');
        localStorage.removeItem('username');
  
        this.toastr.success("Logout successful.");   
        setTimeout(() => { this.router.navigate(['/']); }, 1000);
    }
}