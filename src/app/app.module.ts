import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpModule } from '@angular/http';

// Videogular 2
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

// Toastr
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { ToastOptions } from 'ng2-toastr';
import { AppToastOptions } from './app.toast.options';

// my components
// import { SignupComponent } from './signup/signup.component';
// import { ProfileComponent } from './profile/profile.component';
// import { HomeComponent } from './home/home.component';

// pages
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardListComponent } from './dashboard/dashboard.list.component';
import { DashboardDetailComponent } from './dashboard/dashboard.detail.component';
import { AccountLoginComponent } from './account/account.login.component';
import { AccountLogoutComponent } from './account/account.logout.component';
import { PurchaseComponent } from './purchase/purchase.component';

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

// my modules
// import { HomeModule } from './home/home.module';

// my services
import { AccountService } from './account/account.service';
import { DashboardService } from './dashboard/dashboard.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AccountLoginComponent,
    AccountLogoutComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    DashboardListComponent,
    DashboardDetailComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    BrowserAnimationsModule,ToastModule.forRoot()
  ],
  providers: [
    AccountService,
    DashboardService,
    {provide:ToastOptions, useClass:AppToastOptions}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
