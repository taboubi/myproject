webpackJsonp([7],{

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__(501);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */]
            ]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(34);
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
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, settings, formBuilder, navParams, translate, storage, api, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.translate = translate;
        this.storage = storage;
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.settingsReady = false;
        this.profileSettings = {
            page: 'profile',
            pageTitleKey: 'EDIT_PROFILE'
        };
        this.passwordChange = {
            page: 'password',
            pageTitleKey: 'UPDATEPASSWORD'
        };
        this.page = 'main';
        this.pageTitleKey = 'SETTINGS_TITLE';
        this.account = {
            email: '',
            firstname: '',
            lastname: '',
            phone: null,
            birthday: null,
            adress: '',
            city: '',
            zipcode: '',
        };
        this.subSettings = SettingsPage_1;
        this.storage.get('pushid')
            .then(function (pushid) {
            if (pushid) {
                _this.pushid = pushid;
            }
            else {
                _this.pushid = 'undefined';
            }
        });
        var seq = this.api.get('api/infouser').share();
        seq.subscribe(function (res) {
            _this.account = res;
        }, function (err) {
        });
    }
    SettingsPage_1 = SettingsPage;
    SettingsPage.prototype._buildForm = function () {
        var _this = this;
        var group = {
            language: [this.options.language]
        };
        switch (this.page) {
            case 'main':
                break;
            case 'profile':
                group = {
                    option4: [this.options.option4]
                };
                break;
        }
        this.form = this.formBuilder.group(group);
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.settings.merge(_this.form.value);
            console.log(_this.form.value);
            console.log(_this.pushid);
            return _this.updateLang(_this.form.value);
        });
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        // Build an empty form for the template to render
        this.form = this.formBuilder.group({});
    };
    SettingsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // Build an empty form for the template to render
        this.form = this.formBuilder.group({});
        this.page = this.navParams.get('page') || this.page;
        this.pageTitleKey = this.navParams.get('pageTitleKey') || this.pageTitleKey;
        this.translate.get(this.pageTitleKey).subscribe(function (res) {
            _this.pageTitle = res;
        });
        this.settings.load().then(function () {
            _this.settingsReady = true;
            _this.options = _this.settings.allSettings;
            _this._buildForm();
        });
    };
    SettingsPage.prototype.ngOnChanges = function () {
    };
    /**
     * Capture the selected language from the  component
     *
     * @public
     * @method changeLanguage
     * @return {none}
     */
    SettingsPage.prototype.changeLanguage = function () {
        this._translateLanguage();
    };
    /**
     * Implement the selected language via the Translate service
     *
     * @private
     * @method _translateLanguage
     * @return {none}
     */
    SettingsPage.prototype._translateLanguage = function () {
        this.translate.use(this.options.language);
    };
    SettingsPage.prototype.updateLang = function (lang) {
        if (this.pushid !== null) {
            console.log(this.pushid);
            var data = {
                lang: lang.language,
                pushid: this.pushid,
            };
            var seq = this.api.post('api/updatelangue', data).share();
            seq.subscribe(function (res) {
            }, function (err) {
                console.error('ERROR', err);
            });
            return seq;
        }
    };
    SettingsPage.prototype.updateProfile = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/svg/bars.svg\" width=\"100%\"/>"
        });
        loading.present();
        var seq = this.api.post('api/updateprofile', this.account).share();
        seq.subscribe(function (res) {
            _this.navCtrl.pop();
            loading.dismiss();
        }, function (err) {
            loading.dismiss();
        });
    };
    SettingsPage.prototype.updatePassword = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/svg/bars.svg\" width=\"100%\"/>"
        });
        loading.present();
        var seq = this.api.post('api/updatepwd', { password: this.password }).share();
        seq.subscribe(function (res) {
            _this.navCtrl.pop();
            loading.dismiss();
        }, function (err) {
            loading.dismiss();
        });
    };
    SettingsPage = SettingsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Issam\superprojectV2\src\pages\settings\settings.html"*/'<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>{{ pageTitleKey | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n<ion-grid >\n    <ion-row align-items-center>\n    <ion-col no-padding col-12 col-sm-12 col-md-12 col-lg-12 offset-xl-2 col-xl-8>\n  <form [formGroup]="form" *ngIf="settingsReady">\n    <ion-list *ngIf="page == \'main\'">\n      <ion-item>\n        <ion-label>{{ \'SETTINGS_LANGUAGE\' | translate }}</ion-label>\n        <ion-select formControlName="language" (ionChange)="changeLanguage()">\n          <ion-option value="en" selected="true">English</ion-option>\n          <ion-option value="fr">French</ion-option>\n       </ion-select>\n      </ion-item>\n      \n\n      <button ion-item [navPush]="subSettings" [navParams]="profileSettings">\n        {{ \'EDIT_PROFILE\' | translate }}\n      </button>\n      <button ion-item [navPush]="subSettings" [navParams]="passwordChange">\n          {{ \'UPDATEPASSWORD\' | translate }}\n      </button>\n    </ion-list>\n  </form>\n  <form  *ngIf="page == \'profile\'" (submit)="updateProfile()">\n     <!---Input field firstname-->\n     <ion-item transparent>\n        <ion-label stacked>{{ \'FIRSTNAME\' | translate }}</ion-label>\n        <ion-input required placeholder="{{ \'FIRSTNAME\' | translate }}" type="text" required [(ngModel)]="account.firstname" name="firstname"></ion-input>\n\n      </ion-item>\n    <!---Input field lastname-->\n    <ion-item transparent>\n        <ion-label stacked>{{ \'LASTNAME\' | translate }}</ion-label>\n        <ion-input required placeholder="{{ \'LASTNAME\' | translate }}" type="text"  required [(ngModel)]="account.lastname" name="lastname"></ion-input>\n\n      </ion-item>\n    <!---Input field email-->\n    <ion-item transparent>\n        <ion-label stacked>{{ \'EMAIL\' | translate }}</ion-label>\n        <ion-input required placeholder="{{ \'EMAIL\' | translate }}" type="email" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" name="email" required [(ngModel)]="account.email" [ngModelOptions]="{standalone: true}"></ion-input>\n\n      </ion-item>\n    <!---Input field phone-->\n    <ion-item transparent>\n      <ion-label stacked>{{ \'PHONE\' | translate }}</ion-label>\n      <ion-input required type="number"  required [(ngModel)]="account.phone" name="phone"></ion-input>\n    </ion-item>\n    <!---Input field birthday-->\n    <ion-item transparent>\n      <ion-label stacked>{{ \'BIRTHDAY\' | translate }}</ion-label>\n      <ion-datetime required placeholder="{{ \'BIRTHDAY\' | translate }}"  [(ngModel)]="account.birthday" name="birthday"></ion-datetime>\n\n    </ion-item>\n    <!---Input field country-->\n    <ion-item transparent>\n      <ion-label stacked>{{ \'ADRESS\' | translate }}</ion-label>\n      <ion-input required placeholder="{{ \'ADRESS\' | translate }}" type="text" required [(ngModel)]="account.adress" name="adress" ></ion-input>\n    </ion-item>\n    <!---Input field city-->\n    <ion-item transparent>\n      <ion-input required placeholder="{{ \'CITY\' | translate }}" type="text"  required [(ngModel)]="account.city" name="city" ></ion-input>\n      <ion-input required placeholder="{{ \'ZIPCODE\' | translate }}" type="text"  required [(ngModel)]="account.zipcode" name="zipcode" ></ion-input>\n    </ion-item>\n    <!---Register button-->\n    <div padding>\n      <button ion-button color="light" block>{{ \'SAVE\' | translate }}</button>\n    </div>\n  </form>\n\n  <form  *ngIf="page == \'password\'" (submit)="updatePassword()">\n\n          <ion-item>\n              <ion-label stacked>{{ \'PASSWORD\' | translate }}</ion-label>\n              <ion-input required placeholder="{{ \'PASSWORD\' | translate }}" type="password" [(ngModel)]="password" name="password" [ngModelOptions]="{standalone: true}"></ion-input>\n          </ion-item>\n\n        <div padding>\n            <button ion-button color="light" block>{{ \'SAVE\' | translate }}</button>\n          </div>\n  </form>\n</ion-col>\n</ion-row>\n</ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\Issam\superprojectV2\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["c" /* Settings */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */]])
    ], SettingsPage);
    return SettingsPage;
    var SettingsPage_1;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=7.js.map