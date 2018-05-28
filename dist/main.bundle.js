webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/account/account.login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header\" style=\"background-image: url('../assets/img/bg1.jpg');\">\n        <div class=\"filter\"></div>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-4 col-sm-6 mr-auto ml-auto\">\n                        <div class=\"card card-register\">\n                            <h3 class=\"title\">Welcome</h3>\n                            \n                            <label>Username</label>\n                            <input type=\"text\" [(ngModel)]=\"user.username\" class=\"form-control\">\n\n                            <label>Password</label>\n                            <input type=\"password\" [(ngModel)]=\"user.password\" class=\"form-control\">\n                            <button class=\"btn btn-danger btn-block btn-round\" (click)=\"btnLoginClick()\">Login</button>\n                        \n                            <div class=\"forgot\">\n                                <a href=\"#\" class=\"btn btn-link btn-danger\">Forgot password?</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"footer register-footer text-center\">\n                    <h6>&copy;{{loginDate | date: 'yyyy'}} Barefeetmodels.com</h6>\n                </div>\n            </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/account/account.login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_service__ = __webpack_require__("../../../../../src/app/account/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountLoginComponent = /** @class */ (function () {
    function AccountLoginComponent(accountService, router, toastr, viewContainer) {
        this.accountService = accountService;
        this.router = router;
        this.toastr = toastr;
        this.viewContainer = viewContainer;
        this.loginDate = new Date();
        this.title = 'Account Login';
        this.user = {
            username: "",
            password: "",
            token: ""
        };
        this.toastr.setRootViewContainerRef(viewContainer);
    }
    AccountLoginComponent.prototype.ngOnInit = function () {
    };
    AccountLoginComponent.prototype.ngOnDestroy = function () {
        if (this.loginSub != null)
            this.loginSub.unsubscribe();
    };
    AccountLoginComponent.prototype.btnLoginClick = function () {
        var _this = this;
        this.accountService.login(this.user.username, this.user.password);
        this.loginSub = this.accountService.loginObservable.subscribe(function (data) {
            if (data == 1) {
                _this.toastr.success("Login successful.");
                setTimeout(function () {
                    _this.router.navigate(['/dashboard']);
                }, 1000);
            }
            else if (data == 0) {
                console.log("error");
                _this.toastr.error("Login failed.");
            }
        });
    };
    AccountLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account-login',
            template: __webpack_require__("../../../../../src/app/account/account.login.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__account_service__["a" /* AccountService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object])
    ], AccountLoginComponent);
    return AccountLoginComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=account.login.component.js.map

/***/ }),

/***/ "../../../../../src/app/account/account.logout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header\" style=\"background-image: url('../assets/img/bg1.jpg');\">\n        <div class=\"filter\"></div>\n            <div class=\"container\">\n            </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/account/account.logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountLogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountLogoutComponent = /** @class */ (function () {
    function AccountLogoutComponent(router, toastr, viewContainer) {
        this.router = router;
        this.toastr = toastr;
        this.viewContainer = viewContainer;
        this.toastr.setRootViewContainerRef(viewContainer);
    }
    AccountLogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.removeItem('access_token');
        localStorage.removeItem('expires_in');
        localStorage.removeItem('token_type');
        localStorage.removeItem('username');
        this.toastr.success("Logout successful.");
        setTimeout(function () { _this.router.navigate(['/']); }, 1000);
    };
    AccountLogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account-logout',
            template: __webpack_require__("../../../../../src/app/account/account.logout.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _c || Object])
    ], AccountLogoutComponent);
    return AccountLogoutComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=account.logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/account/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountService = /** @class */ (function () {
    function AccountService(router, http) {
        this.router = router;
        this.http = http;
        this.loginSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.loginObservable = this.loginSource.asObservable();
        this.user = {
            username: "",
            password: "",
            token: ""
        };
    }
    AccountService.prototype.login = function (username, password) {
        var _this = this;
        var url = 'https://barefeetmodels-api.azurewebsites.net/token';
        var body = "username=" + username + "&password=" + password + "&grant_type=password";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(url, body, options).subscribe(function (response) {
            localStorage.setItem('access_token', response.json().access_token);
            localStorage.setItem('expires_in', response.json().expires_in);
            localStorage.setItem('token_type', response.json().token_type);
            localStorage.setItem('username', response.json().userName);
            _this.loginSource.next(1);
        }, function (error) {
            _this.loginSource.next(0);
        });
    };
    AccountService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
    ], AccountService);
    return AccountService;
    var _a, _b;
}());

//# sourceMappingURL=account.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer *ngIf=\"removeFooter()\"></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
        });
        this.renderer.listenGlobal('window', 'scroll', function (event) {
            var number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.remove('navbar-transparent');
            }
            else {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');
        }
    };
    AppComponent.prototype.removeFooter = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'signup' || titlee === 'nucleoicons') {
            return false;
        }
        else {
            return true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__["a" /* NavbarComponent */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__["a" /* NavbarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__["a" /* NavbarComponent */]) === "function" && _a || Object)
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["DOCUMENT"])),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === "function" && _e || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_videogular2_core__ = __webpack_require__("../../../../videogular2/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_videogular2_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_videogular2_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_videogular2_controls__ = __webpack_require__("../../../../videogular2/controls.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_videogular2_controls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_videogular2_controls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_videogular2_overlay_play__ = __webpack_require__("../../../../videogular2/overlay-play.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_videogular2_overlay_play___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_videogular2_overlay_play__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_videogular2_buffering__ = __webpack_require__("../../../../videogular2/buffering.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_videogular2_buffering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_videogular2_buffering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_toast_options__ = __webpack_require__("../../../../../src/app/app.toast.options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dashboard_dashboard_list_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dashboard_dashboard_detail_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__account_account_login_component__ = __webpack_require__("../../../../../src/app/account/account.login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__account_account_logout_component__ = __webpack_require__("../../../../../src/app/account/account.logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__purchase_purchase_component__ = __webpack_require__("../../../../../src/app/purchase/purchase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__account_account_service__ = __webpack_require__("../../../../../src/app/account/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__dashboard_dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Videogular 2




// Toastr




// my components
// import { SignupComponent } from './signup/signup.component';
// import { ProfileComponent } from './profile/profile.component';
// import { HomeComponent } from './home/home.component';
// pages







// components



// my modules
// import { HomeModule } from './home/home.module';
// my services


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_15__landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_19__account_account_login_component__["a" /* AccountLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_20__account_account_logout_component__["a" /* AccountLogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_23__shared_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_24__shared_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_17__dashboard_dashboard_list_component__["a" /* DashboardListComponent */],
                __WEBPACK_IMPORTED_MODULE_18__dashboard_dashboard_detail_component__["a" /* DashboardDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_21__purchase_purchase_component__["a" /* PurchaseComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7_videogular2_core__["VgCoreModule"],
                __WEBPACK_IMPORTED_MODULE_8_videogular2_controls__["VgControlsModule"],
                __WEBPACK_IMPORTED_MODULE_9_videogular2_overlay_play__["VgOverlayPlayModule"],
                __WEBPACK_IMPORTED_MODULE_10_videogular2_buffering__["VgBufferingModule"],
                __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_12_ng2_toastr_ng2_toastr__["ToastModule"].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_25__account_account_service__["a" /* AccountService */],
                __WEBPACK_IMPORTED_MODULE_26__dashboard_dashboard_service__["a" /* DashboardService */],
                { provide: __WEBPACK_IMPORTED_MODULE_13_ng2_toastr__["ToastOptions"], useClass: __WEBPACK_IMPORTED_MODULE_14__app_toast_options__["a" /* AppToastOptions */] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_list_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_detail_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__account_account_login_component__ = __webpack_require__("../../../../../src/app/account/account.login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__account_account_logout_component__ = __webpack_require__("../../../../../src/app/account/account.logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__purchase_purchase_component__ = __webpack_require__("../../../../../src/app/purchase/purchase.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { HomeComponent } from './home/home.component';
// import { ProfileComponent } from './profile/profile.component';
// import { SignupComponent } from './signup/signup.component';
// import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__landing_landing_component__["a" /* LandingComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_list_component__["a" /* DashboardListComponent */] },
    { path: 'dashboardDetail/:id', component: __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_detail_component__["a" /* DashboardDetailComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__account_account_login_component__["a" /* AccountLoginComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_8__account_account_logout_component__["a" /* AccountLogoutComponent */] },
    { path: 'purchase', component: __WEBPACK_IMPORTED_MODULE_9__purchase_purchase_component__["a" /* PurchaseComponent */] }
    // { path: 'home',             component: HomeComponent },
    // { path: 'user-profile',     component: ProfileComponent },
    // { path: 'signup',           component: SignupComponent },
    // { path: 'landing',          component: LandingComponent },
    // { path: 'nucleoicons',      component: NucleoiconsComponent },
    // { path: '',                 redirectTo: 'landing', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/app.toast.options.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppToastOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AppToastOptions = /** @class */ (function (_super) {
    __extends(AppToastOptions, _super);
    function AppToastOptions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maxShown = 1;
        return _this;
    }
    return AppToastOptions;
}(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__["ToastOptions"]));

//# sourceMappingURL=app.toast.options.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <div class=\"section section-dark\">\n        <div class=\"container\">\n            <h1>&nbsp;</h1>\n            <div class=\"row\">\n                <div class=\"col-lg-8\" style=\"vertical-align: top;\">\n                    <h5>{{videoTitle}}</h5>\n                    <video width=\"100%\" height=\"350\" controls #videoPlayer id=\"videoPlayer\" poster=\"../assets/img/loading1.gif\">\n                        <source type='video/mp4; codecs=\"avc1.42e01e, mp4a.40.2\"'>\n                    </video>\n                    <p><small>{{videoDescription}}</small></p>\n                </div>\n                <div class=\"col-lg-4\">\n                    <ul class=\"list-unstyled\">\n                        <li class=\"media\" *ngFor=\"let video of videos\">\n                            <img class=\"d-flex mr-3\" (click)=\"viewVideo(video.id)\" src={{video.fileGifUrl}} style=\"width:100px;height:60px;\">\n                            <div class=\"media-body\">\n                                <a (click)=\"viewVideo(video.id)\"><h5 class=\"mt-0 mb-1\">{{video.title}}</h5></a>\n                                <p><small>{{video.description.substring(0, 50)+\"...\"}}</small></p>\n                                <p><small>&nbsp;</small></p>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n  padding: 0;\n  width: 1200px;\n  margin: 20px auto; }\n\nli {\n  display: inline; }\n\n.tn {\n  margin: 6px;\n  border: 1px solid #555; }\n\n.img-custom {\n  border-radius: 0%;\n  width: 100%;\n  height: 200px; }\n\n@media screen and (max-width: 991px) {\n  .img-custom {\n    width: 100%;\n    height: auto;\n    margin-bottom: 20px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, dashboardService) {
        this.router = router;
        this.dashboardService = dashboardService;
        this.videos = new Array();
        this.videoTitle = "";
        this.videoDescription = "";
    }
    DashboardComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("username") == null) {
            this.router.navigate(['login']);
        }
        else {
            this.getVideos();
        }
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        if (this.videosSub != null)
            this.videosSub.unsubscribe();
    };
    DashboardComponent.prototype.getVideos = function () {
        var _this = this;
        this.dashboardService.getVideos(0);
        this.videosSub = this.dashboardService.videosObservable.subscribe(function (data) {
            if (data.length > 0) {
                _this.videos = data;
                _this.viewVideo(_this.videos[0]["id"]);
            }
        });
    };
    DashboardComponent.prototype.viewVideo = function (id) {
        for (var i = 0; i <= this.videos.length - 1; i++) {
            if (this.videos[i]["id"] == id) {
                var videoPlayer = document.getElementById("videoPlayer");
                videoPlayer.src = this.videos[i]["fileUrl"];
                videoPlayer.load();
                videoPlayer.play();
                this.videoTitle = this.videos[i]["title"];
                this.videoDescription = this.videos[i]["description"];
            }
        }
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dashboard_service__["a" /* DashboardService */]) === "function" && _b || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n        <div class=\"section section-dark\">\n            <div class=\"container\">\n                <br>\n                <br>\n                <vg-player *ngIf=\"video.fileUrl\">\n                    <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" autoplay=\"true\" controls>\n                        <source [src]=video.fileUrl type=\"video/mp4\">\n                    </video>\n                </vg-player>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardDetailComponent = /** @class */ (function () {
    function DashboardDetailComponent(router, route, dashboardService) {
        this.router = router;
        this.route = route;
        this.dashboardService = dashboardService;
        this.video = Object();
    }
    DashboardDetailComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("username") == null) {
            this.router.navigate(['login']);
        }
        else {
            this.getVideo(+this.route.snapshot.params['id']);
        }
    };
    DashboardDetailComponent.prototype.getVideo = function (id) {
        var _this = this;
        this.dashboardService.getVideo(id);
        this.videoSub = this.dashboardService.videoObservable.subscribe(function (data) {
            if (data != null) {
                _this.video = data;
            }
        });
    };
    DashboardDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dashboard_service__["a" /* DashboardService */]) === "function" && _c || Object])
    ], DashboardDetailComponent);
    return DashboardDetailComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=dashboard.detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <div class=\"section section-dark\">\n        <div class=\"container\">\n            <br>\n            <br>\n            <ng-container *ngFor=\"let video of videos; let i = index\" [attr.data-index]=\"i\">\n                <ng-container *ngIf=\"(i + 1) % 4 == 0\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-3\">\n                            <a [routerLink]=\"['/dashboardDetail',video.id]\">\n                                <img src=\"{{ videos[i - 3].fileGifUrl }}\" class=\"img-rounded img-custom\">\n                            </a>\n                        </div>\n                        <div class=\"col-lg-3\">\n                            <a [routerLink]=\"['/dashboardDetail',video.id]\">\n                                <img src=\"{{ videos[i - 2].fileGifUrl }}\" class=\"img-rounded img-custom\">\n                            </a>\n                        </div>\n                        <div class=\"col-lg-3\">\n                            <a [routerLink]=\"['/dashboardDetail',video.id]\">\n                                <img src=\"{{ videos[i - 1].fileGifUrl }}\" class=\"img-rounded img-custom\">\n                            </a>\n                        </div>\n                        <div class=\"col-lg-3\">\n                            <a [routerLink]=\"['/dashboardDetail',video.id]\">\n                                <img src=\"{{ videos[i].fileGifUrl }}\" class=\"img-rounded img-custom\">\n                            </a>\n                        </div>\n                    </div>\n                    <br>\n                </ng-container>\n            </ng-container>\n            <div class=\"text-center\">\n                <button class=\"btn btn-success btn-round\" id=\"btnLoadMoreVideos\" (click)=\"btnLoadMoreVideosClick()\">Load more videos...</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeWhile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardListComponent = /** @class */ (function () {
    function DashboardListComponent(router, dashboardService) {
        this.router = router;
        this.dashboardService = dashboardService;
        this.videos = new Array();
        this.videoTitle = "";
        this.videoDescription = "";
        this.skipNumber = 0;
    }
    DashboardListComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("username") == null) {
            this.router.navigate(['login']);
        }
        else {
            this.getVideos();
        }
    };
    DashboardListComponent.prototype.ngOnDestroy = function () {
        if (this.videosSub != null)
            this.videosSub.unsubscribe();
    };
    DashboardListComponent.prototype.getVideos = function () {
        var _this = this;
        this.dashboardService.getVideos(this.skipNumber);
        this.videosSub = this.dashboardService.videosObservable.subscribe(function (data) {
            if (data.length > 0) {
                for (var i = 0; i <= data.length - 1; i++) {
                    _this.videos.push({
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
        });
    };
    DashboardListComponent.prototype.btnLoadMoreVideosClick = function () {
        var _this = this;
        this.videosSub.unsubscribe();
        var loadMoreVideos = document.getElementById("btnLoadMoreVideos");
        loadMoreVideos.disabled = true;
        loadMoreVideos.innerHTML = "Loading...";
        this.skipNumber += 20;
        this.dashboardService.getVideos(this.skipNumber);
        this.videosSub = this.dashboardService.videosObservable.subscribe(function (data) {
            if (data.length > 0) {
                for (var i = 0; i <= data.length - 1; i++) {
                    _this.videos.push({
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
                    }
                    else {
                        loadMoreVideos.disabled = false;
                        loadMoreVideos.innerHTML = "Load more videos...";
                    }
                }
            }
            else {
                loadMoreVideos.hidden = true;
            }
        });
    };
    DashboardListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__dashboard_service__["a" /* DashboardService */]) === "function" && _b || Object])
    ], DashboardListComponent);
    return DashboardListComponent;
    var _a, _b;
}());

//# sourceMappingURL=dashboard.list.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardService = /** @class */ (function () {
    function DashboardService(router, http) {
        this.router = router;
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'application/json'
        });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        this.videosSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.videosObservable = this.videosSource.asObservable();
        this.videoSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.videoObservable = this.videoSource.asObservable();
    }
    DashboardService.prototype.getVideos = function (skip) {
        var _this = this;
        // let url = "https://barefeetmodels-api.azurewebsites.net/api/MstVideo/List";
        // let url = "http://localhost:10136/api/MstVideo/List/" + skip;
        var url = "https://barefeetmodels-api.azurewebsites.net/api/MstVideo/List/" + skip;
        var videos = new Array();
        this.http.get(url, this.options).subscribe(function (response) {
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
                _this.videosSource.next(videos);
            }
            else {
                _this.videosSource.next(videos);
            }
        });
    };
    DashboardService.prototype.getVideo = function (id) {
        var _this = this;
        var video;
        var url = "https://barefeetmodels-api.azurewebsites.net/api/MstVideo/Detail/" + id;
        this.http.get(url, this.options).subscribe(function (response) {
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
                _this.videoSource.next(video);
            }
            else {
                _this.videoSource.next(video);
            }
        });
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
    ], DashboardService);
    return DashboardService;
    var _a, _b;
}());

//# sourceMappingURL=dashboard.service.js.map

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<video autoplay muted loop id=\"myVideo\">\n    <source src=\"../../assets/videos/bg-video-2.mp4\" type=\"video/mp4\"> Your browser does not support HTML5 video.\n</video>\n<div class=\"content\">\n    <div class=\"container\">\n        <h2>Welcome to Barefeetmodels.com</h2>\n        <h4>The premier feet fetish website! Featuring exclusive videos in high definition!</h4>\n        <br /><br />\n        <a [routerLink]=\"['/dashboard']\" class=\"btn btn-outline-neutral btn-round\">\n            <i class=\"fa fa-play\"></i> Watch video\n        </a>\n    </div>\n</div>\n<div class=\"col-md-12 text-center\" routerLinkActive=\"active\">\n    <img src=\"../../assets/img/sample.png\" class=\"img-responsive\" style=\"width: 100%\">\n</div>\n\n\n<!-- <div class=\"page-header\" data-parallax=\"true\" style=\"background-image: url('../assets/img/bg1.jpg');\">\n    <div class=\"filter\"></div>\n    \n</div> -->\n<!-- \n<div class=\"main\">\n    <div class=\"section section-dark\">\n        <div class=\"container\">\n            <div class=\"row example-page\">\n                <div class=\"col-md-6 text-center\" routerLinkActive=\"active\">\n                    <a [routerLink]=\"['/login']\">\n                        <img src=\"../../assets/img/examples/e1.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\" style=\"width: 100%\">\n                        <p>Haylie was a ballerina and gymnast ! Her feet are breath taking she’s a 19 year old college girl and model ! It’s like a Barbie doll came to life and took off her shoes ! In this video I pour baby oil gel all over her feet as she shows off her incredible toe spread and tight scrunches </p>\n                    </a>\n                </div>\n\n                <div class=\"col-md-6 text-center\" routerLinkActive=\"active\">\n                    <a [routerLink]=\"['/login']\">\n                        <img src=\"../../assets/img/examples/e2.jpg\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\" style=\"width: 100%\">\n                        <p>This is Nicole from the video “ super sole show “ I shot this so her fans can get the full effect of how amazing here feet are . She’s a 19 ur old babe with size 9 soles !</p>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0; }\n\n#myVideo {\n  min-width: 100%;\n  min-height: 100%;\n  background: #4e4e4e;\n  opacity: 0.2; }\n\n.content {\n  padding: 250px;\n  position: absolute;\n  bottom: 0;\n  color: #f1f1f1;\n  width: 100%;\n  padding-bottom: 230px;\n  text-align: center; }\n\n@media screen and (max-width: 992px) {\n  .content {\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0;\n    padding-bottom: 300px; }\n  .content > .container > h2 {\n    margin-left: 30px;\n    margin-right: 30px;\n    font-size: 25px !important;\n    margin-bottom: -20px; }\n  .content > .container > h4 {\n    margin-left: 30px;\n    margin-right: 30px;\n    font-size: 20px !important; } }\n\n@media screen and (max-width: 600px) {\n  .content {\n    padding-bottom: 300px; } }\n\n@media screen and (max-width: 500px) {\n  .content {\n    padding-bottom: 320px; } }\n\n@media screen and (max-width: 450px) {\n  .content {\n    padding-bottom: 320px; } }\n\n@media screen and (max-width: 400px) {\n  .content {\n    padding-bottom: 350px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () { };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());

//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/purchase/purchase.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header\" style=\"background-image: url('../assets/img/bg1.jpg');\">\n        <div class=\"filter\"></div>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-4 col-sm-6 mr-auto ml-auto\">\n                        <div class=\"card card-register\">\n\n                            <label style=\"text-align: center\"><b>$24.95 / Month</b></label>\n\n                            <button class=\"btn btn-danger btn-block btn-round\" (click)=\"btnPurchaseClick()\">Purchase Now!</button>\n                            <br>\n                            <br>\n                            <img src=\"../assets/img/authfoot.png\" />\n                        </div>\n                    </div>\n                </div>\n                <div class=\"footer register-footer text-center\">\n                    <h6>&copy;{{loginDate | date: 'yyyy'}} Barefeetmodels.com</h6>\n                </div>\n            </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/purchase/purchase.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PurchaseComponent = /** @class */ (function () {
    function PurchaseComponent() {
    }
    PurchaseComponent.prototype.ngOnInit = function () { };
    PurchaseComponent.prototype.btnPurchaseClick = function () {
        window.location.href = 'https://www.magentatrader.com/purchase/autoredirect';
    };
    PurchaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-purchase',
            template: __webpack_require__("../../../../../src/app/purchase/purchase.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PurchaseComponent);
    return PurchaseComponent;
}());

//# sourceMappingURL=purchase.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer section-true-black\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <nav class=\"footer-nav\">\n                <ul>\n                    <li><a [routerLink]=\"['/']\">Home</a></li>\n                    <li><a [routerLink]=\"['/purchase']\">Purchase</a></li>\n                    <li class=\"nav-item\" *ngIf=\"!isLoggedIn()\">\n                        <a [routerLink]=\"['/login']\" class=\"nav-link\">Login</a>\n                    </li>\n                    <li class=\"nav-item\" *ngIf=\"isLoggedIn()\">\n                        <a [routerLink]=\"['/logout']\" class=\"nav-link\">Logout - {{ userName }}</a>\n                    </li>\n                </ul>\n            </nav>\n            <div class=\"credits ml-auto\">\n                <span class=\"copyright\">\n                    © {{footerDate | date: 'yyyy'}}, Barefeetmodels.com\n                </span>\n            </div>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.footerDate = new Date();
        this.userName = "";
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent.prototype.isLoggedIn = function () {
        if (localStorage.getItem("username") == null) {
            return false;
        }
        else {
            this.userName = localStorage.getItem("username");
            return true;
        }
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"500\">\n    <div class=\"container\">\n        <div class=\"navbar-translate\">\n            <a class=\"navbar-brand\" [routerLink]=\"['/']\">Barefeetmodels.com</a>\n            <button class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n            </button>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"navbarToggler\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item\" *ngIf=\"!isLoggedIn()\">\n                    <a [routerLink]=\"['/login']\" class=\"nav-link\">Login</a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"isLoggedIn()\">\n                    <a [routerLink]=\"['/logout']\" class=\"nav-link\">Logout - {{ userName }}</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a [routerLink]=\"['/purchase']\" class=\"nav-link\">Purchase</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/home') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isLanding = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/landing') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isLoggedIn = function () {
        if (localStorage.getItem("username") == null) {
            return false;
        }
        else {
            this.userName = localStorage.getItem("username");
            return true;
        }
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b;
}());

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map