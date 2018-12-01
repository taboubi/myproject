webpackJsonp([11],{

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(486);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4____ = __webpack_require__(354);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, user, toastCtrl, translateService, menu, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.isUsernameValid = true;
        this.isPasswordValid = true;
        this.account = {
            username: null,
            password: null
        };
        this.translateService.get(['LOGIN_ERROR', 'NOTACTIVE']).subscribe(function (value) {
            _this.loginErrorString = value.LOGIN_ERROR;
            _this.loginNotActive = value.NOTACTIVE;
        });
    }
    // Attempt to login in through our User service
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        if (!this.validate()) {
            return;
        }
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/svg/bars.svg\" width=\"100%\"/>"
        });
        loading.present();
        this.user.login(this.account).subscribe(function (resp) {
            if (resp.enabled === true) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4____["b" /* MainPage */]);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: _this.loginNotActive,
                    duration: 8000,
                    position: 'bottom',
                    showCloseButton: true,
                    closeButtonText: "X"
                });
                toast.present();
            }
        }, function (err) {
            //this.navCtrl.push(MainPage);
            // Unable to log in
            loading.dismiss();
            var toast = _this.toastCtrl.create({
                message: _this.loginErrorString,
                duration: 6000,
                position: 'top'
            });
            toast.present();
        }, function () { loading.dismiss(); });
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    LoginPage.prototype.validate = function () {
        this.isUsernameValid = true;
        this.isPasswordValid = true;
        if (!this.account.username || this.account.username.length == 0) {
            this.isUsernameValid = false;
        }
        if (!this.account.password || this.account.password.length == 0) {
            this.isPasswordValid = false;
        }
        return this.isPasswordValid && this.isUsernameValid;
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push('SignupPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "events", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Issam\superproject\src\pages\login\login.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n      <ion-title>{{ \'LOGIN_TITLE\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n<ion-content  background-size [ngStyle]="{\'background-image\': \'url(../assets/images/background/39.jpg)\'}">\n\n    <ion-grid >\n\n      <ion-row align-items-center>\n\n        <ion-col padding-horizontal col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n          <button ion-button button-clear text-capitalize clear float-right no-padding (click)="onEvent(\'onForgot\')">{{\'FORGOTTEN_PASSWORD\' | translate}}</button>\n\n        </ion-col>\n\n        <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n          <ion-item transparent no-lines no-padding margin-top>\n\n            <!---Logo-->\n\n            <img box-shadow item-start margin src="assets/images/logo/1.png">\n\n            <!---Logo Subtitle-->\n\n            <h2 login-subtitle>Faire bouger la communauté!</h2>\n\n            <!---Logo Title-->\n\n            <h1 ion-text login-title no-margin text-wrap>Simple comme bonjour!</h1>\n\n          </ion-item>\n\n          <!---Form-->\n\n          <form padding-horizontal (submit)="doLogin()" >\n\n            <!---Input field username-->\n\n            <ion-item margin-top transparent>\n\n              <ion-label stacked>{{ \'Email\' | translate }}</ion-label>\n\n              <ion-input required type="text" placeholder="{{ \'Email\' | translate }}" [(ngModel)]="account.username" name="username" [ngModelOptions]="{standalone: true}"></ion-input>\n\n              <ion-label error-field no-margin  *ngIf="!isUsernameValid">{{\'REQUIRED_FIELD\' | translate}}</ion-label>\n\n            </ion-item>\n\n            <!---Input field password-->\n\n            <ion-item transparent>\n\n              <ion-label stacked>{{ \'PASSWORD\' | translate }}</ion-label>\n\n              <ion-input required type="password" placeholder="{{ \'PASSWORD\' | translate }}" [(ngModel)]="account.password" name="password" [ngModelOptions]="{standalone: true}"></ion-input>\n\n              <ion-label error-field no-margin *ngIf="!isPasswordValid">{{\'REQUIRED_FIELD\' | translate}}</ion-label>\n\n            </ion-item>\n\n            <!---Login button-->\n\n            <button ion-button default-button full text-uppercase box-shadow >{{ \'LOGIN_BUTTON\' | translate }}</button>\n\n\n\n            <!-- Button Register Now-->\n\n            <div description text-center>\n\n              <p>Don\'t have account? <a text-capitalize (click)="register()">data.register</a></p>\n\n            </div>\n\n          </form>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Issam\superproject\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* User */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=11.js.map