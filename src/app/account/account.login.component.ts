import { Component, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { User } from '../model/sys.user';
import { AccountService } from './account.service';

@Component({
    selector: 'app-account-login',
    templateUrl: './account.login.component.html'
})
export class AccountLoginComponent {
    private loginDate: Date = new Date();
    private loginSub: any;

    private title: string = 'Account Login';

    private user: User = {
      username: "",
      password: "",
      token: ""
    };

    constructor(
        private accountService: AccountService,
        private router: Router,
        private toastr: ToastsManager,
        private viewContainer: ViewContainerRef) 
    {
      this.toastr.setRootViewContainerRef(viewContainer);
    }

    ngOnInit() {

    }
    ngOnDestroy() {
      if (this.loginSub != null) this.loginSub.unsubscribe();
    }
    
    btnLoginClick() : void {
        this.accountService.login(this.user.username, this.user.password);
        this.loginSub = this.accountService.loginObservable.subscribe(
          data => {
            if (data == 1) {
              this.toastr.success("Login successful.");
              setTimeout(() => {
                this.router.navigate(['/dashboard']);
              }, 1000);
            } else if (data == 0) {
              console.log("error");
              this.toastr.error("Login failed.");
            }
          }
        );
    }
}