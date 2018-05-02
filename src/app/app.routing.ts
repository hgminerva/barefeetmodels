import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardListComponent } from './dashboard/dashboard.list.component';
import { DashboardDetailComponent } from './dashboard/dashboard.detail.component';
import { AccountLoginComponent } from './account/account.login.component';
import { AccountLogoutComponent } from './account/account.logout.component';
import { PurchaseComponent } from './purchase/purchase.component';

// import { HomeComponent } from './home/home.component';
// import { ProfileComponent } from './profile/profile.component';
// import { SignupComponent } from './signup/signup.component';
// import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

const routes: Routes =[
    { path: '',                     component: LandingComponent },
    { path: 'dashboard',            component: DashboardListComponent },
    { path: 'dashboardDetail/:id',  component: DashboardDetailComponent },
    { path: 'login',                component: AccountLoginComponent },
    { path: 'logout',               component: AccountLogoutComponent },
    { path: 'purchase',             component: PurchaseComponent }
    // { path: 'home',             component: HomeComponent },
    // { path: 'user-profile',     component: ProfileComponent },
    // { path: 'signup',           component: SignupComponent },
    // { path: 'landing',          component: LandingComponent },
    // { path: 'nucleoicons',      component: NucleoiconsComponent },
    // { path: '',                 redirectTo: 'landing', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
