webpackJsonp([15],{

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralPageModule", function() { return GeneralPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__general__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GeneralPageModule = /** @class */ (function () {
    function GeneralPageModule() {
    }
    GeneralPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__general__["a" /* GeneralPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__general__["a" /* GeneralPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
        })
    ], GeneralPageModule);
    return GeneralPageModule;
}());

//# sourceMappingURL=general.module.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the GeneralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GeneralPage = /** @class */ (function () {
    function GeneralPage(navCtrl, navParams, menu, toast, api, translateService, alertCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.toast = toast;
        this.api = api;
        this.translateService = translateService;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.semail = null;
        this.emailerror = null;
        this.passwordupdatedtitle = null;
        this.invalidcode = null;
        this.passwordtext = null;
        this.step = 1;
        this.code = null;
        this.newpassword = null;
        this.lang = null;
        this.storage.get('_settings')
            .then(function (settings) {
            if (settings == null) {
                _this.lang = 'fr';
            }
            else {
                _this.lang = settings.language;
            }
        });
        this.translateService.get(['EMAILNOTFOUND', 'NEWPASSWORD', 'INVALIDCODE', 'PASSWORDTEXT']).subscribe(function (res) {
            _this.emailerror = res.EMAILNOTFOUND;
            _this.passwordupdatedtitle = res.NEWPASSWORD;
            _this.invalidcode = res.INVALIDCODE;
            _this.passwordtext = res.PASSWORDTEXT;
        });
    }
    GeneralPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GeneralPage');
    };
    GeneralPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    GeneralPage.prototype.doCheckEmail = function () {
        var _this = this;
        var data = { email: this.semail, lang: this.lang };
        var seq = this.api.post('forgottenpassword', data).share();
        seq.subscribe(function (res) {
            if (res.error == true) {
                var toast = _this.toast.create({
                    message: _this.emailerror,
                    position: 'top',
                    showCloseButton: true
                });
                toast.present();
            }
            else {
                _this.step = 2;
            }
        }, function (err) {
            //this.navCtrl.push(MainPage);
            // Unable to log in
        }, function () { });
    };
    GeneralPage.prototype.doUpdatePassword = function () {
        var _this = this;
        var data = { code: this.code, password: this.newpassword };
        var seq = this.api.post('updatepassword', data).share();
        seq.subscribe(function (res) {
            if (res.error == true) {
                var toast = _this.toast.create({
                    message: _this.invalidcode,
                    position: 'top',
                    showCloseButton: true
                });
                toast.present();
            }
            else {
                var buttonhandler = {
                    text: 'OK',
                    handler: function () {
                        _this.navCtrl.setRoot('LoginPage');
                    }
                };
                var confirmAlert = _this.alertCtrl.create({
                    title: _this.passwordupdatedtitle,
                    message: _this.passwordtext,
                    buttons: [buttonhandler]
                });
                confirmAlert.present();
            }
        }, function (err) {
            //this.navCtrl.push(MainPage);
            // Unable to log in
        }, function () { });
    };
    GeneralPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-general',template:/*ion-inline-start:"C:\Users\Issam\superprojectV2\src\pages\general\general.html"*/'<!--\n  Generated template for the GeneralPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{\'FORGOTTEN_PASSWORD\' | translate}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <ion-grid no-padding>\n      <ion-row  *ngIf="step == 1">\n        <ion-col col-sm-12 col-md-6 col-lg-4 col-xl-3 no-padding no-margin>\n          <form padding-horizontal (submit)="doCheckEmail()">\n            <!---Input field username-->\n            <ion-item margin-top transparent>\n              <ion-input required type="text" placeholder="{{ \'Email\' | translate }}" [(ngModel)]="semail" name="semail" ></ion-input>\n            </ion-item>\n            <!---Login button-->\n            <button ion-button default-button full small >{{ \'RESETPASSWORD\' | translate }}</button>\n          </form>\n        </ion-col>\n      </ion-row>\n      <ion-row  *ngIf="step == 2">\n        <ion-col col-sm-12 col-md-6 col-lg-4 col-xl-3 no-padding no-margin>\n          <p>{{ \'MAILSENT\' | translate }}</p>\n          <form padding-horizontal (submit)="doUpdatePassword()">\n            <!---Input field username-->\n            <ion-item margin-top transparent>\n              <ion-input required type="text" placeholder="Code" [(ngModel)]="code" name="code" ></ion-input>\n            </ion-item>\n            <ion-item margin-top transparent>\n                <ion-input required type="password" placeholder="{{ \'NEWPASSWORD\' | translate }}" [(ngModel)]="newpassword" name="newpassword" ></ion-input>\n            </ion-item>\n            <!---Login button-->\n            <button ion-button default-button full small >{{ \'SAVE\' | translate }}</button>\n          </form>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n'/*ion-inline-end:"C:\Users\Issam\superprojectV2\src\pages\general\general.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], GeneralPage);
    return GeneralPage;
}());

//# sourceMappingURL=general.js.map

/***/ })

});
//# sourceMappingURL=15.js.map