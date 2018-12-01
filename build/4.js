webpackJsonp([4],{

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup__ = __webpack_require__(494);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]
            ]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, user, toastCtrl, translateService, storage, settings, api, device) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.storage = storage;
        this.settings = settings;
        this.api = api;
        this.device = device;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            email: '',
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            phone: null,
            birthday: null,
            adress: '',
            city: '',
            zipcode: '',
            is_regular: true,
            is_special_event: true,
            is_senior_service: true
        };
        this.isEmailValid = true;
        this.alreadyvalidated = false;
        this.isUsernameValid = true;
        this.isPasswordValid = true;
        this.isCityValid = true;
        this.isZipcodeValid = true;
        this.isFirstnameValid = true;
        this.isLastnameValid = true;
        this.isPhoneValid = true;
        this.isAdressValid = true;
        this.isBirthdayValid = true;
        this.regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.lang = null;
        this.pushid = null;
        this.storage.get('pushid')
            .then(function (pushid) {
            if (pushid) {
                _this.pushid = pushid;
            }
        });
        this.storage.get('_settings')
            .then(function (settings) {
            if (settings == null) {
                _this.lang = 'fr';
            }
            else {
                _this.lang = settings.language;
            }
        });
        this.settings.load().then(function () {
        });
        this.translateService.get(['SIGNUP_ERROR', 'REQUIRED_FIELD', 'INVALIDEMAIL', 'EMAILEXIST', 'USERNAMEEXIST']).subscribe(function (res) {
            _this.signupErrorString = res.SIGNUP_ERROR;
            _this.mandatory = res.REQUIRED_FIELD;
            _this.emailFormatError = res.INVALIDEMAIL;
            _this.errorEmailexist = res.EMAILEXIST;
            _this.errorUsernameexist = res.USERNAMEEXIST;
        });
    }
    SignupPage.prototype.doSignup = function () {
        var _this = this;
        // Attempt to login in through our User service
        var valid = this.validate();
        if (valid) {
            var data = this.account;
            data.lang = this.lang;
            data.pushid = this.pushid;
            data.platform = this.device.platform;
            var seq = this.api.post('subscribe', data).share();
            seq.subscribe(function (res) {
                if (res.error == true) {
                    if (res.message == 'emailexist') {
                        _this.errorEmail = _this.errorEmailexist;
                        _this.isEmailValid = false;
                    }
                    if (res.message == 'usernameexist') {
                        _this.errorUsername = _this.errorUsernameexist;
                        _this.isUsernameValid = false;
                    }
                }
                else {
                }
            }, function (err) {
                console.error('ERROR', err);
            });
        }
    };
    SignupPage.prototype.validate = function () {
        this.isEmailValid = true;
        this.isLastnameValid = true;
        this.isFirstnameValid = true;
        this.isUsernameValid = true;
        this.isPasswordValid = true;
        this.isCityValid = true;
        this.isAdressValid = true;
        this.isZipcodeValid = true;
        this.isPhoneValid = true;
        this.isBirthdayValid = true;
        this.errorEmail = this.mandatory;
        this.errorUsername = this.mandatory;
        this.alreadyvalidated = true;
        if (!this.account.username || this.account.username.length == 0) {
            this.isUsernameValid = false;
        }
        if (!this.account.email || this.account.email.length == 0) {
            this.isEmailValid = false;
        }
        if (!this.account.firstname || this.account.firstname.length == 0) {
            this.isFirstnameValid = false;
        }
        if (!this.account.lastname || this.account.lastname.length == 0) {
            this.isLastnameValid = false;
        }
        if (!this.account.password || this.account.password.length == 0) {
            this.isPasswordValid = false;
        }
        if (!this.account.city || this.account.city.length == 0) {
            this.isCityValid = false;
        }
        if (!this.account.zipcode || this.account.zipcode.length == 0) {
            this.isZipcodeValid = false;
        }
        if (!this.account.adress || this.account.adress.length == 0) {
            this.isAdressValid = false;
        }
        if (!this.account.phone || this.account.phone.toString().length == 0) {
            this.isPhoneValid = false;
        }
        if (!this.account.birthday) {
            this.isBirthdayValid = false;
        }
        if (!this.account.email || this.account.email.length == 0) {
            this.isEmailValid = false;
        }
        else if (this.regex.test(this.account.email) == false) {
            this.isEmailValid = false;
            this.errorEmail = this.emailFormatError;
        }
        return this.isEmailValid &&
            this.isPasswordValid &&
            this.isUsernameValid &&
            this.isCityValid &&
            this.isZipcodeValid &&
            this.isAdressValid &&
            this.isFirstnameValid &&
            this.isLastnameValid &&
            this.isPhoneValid;
    };
    SignupPage.prototype.changeLanguage = function (lang) {
        var _this = this;
        this.settings.setValue('language', lang);
        this.translateService.use(lang);
        this.lang = lang;
        this.translateService.get(['SIGNUP_ERROR', 'REQUIRED_FIELD', 'INVALIDEMAIL', 'EMAILEXIST', 'USERNAMEEXIST']).subscribe(function (res) {
            _this.signupErrorString = res.SIGNUP_ERROR;
            _this.mandatory = res.REQUIRED_FIELD;
            _this.emailFormatError = res.INVALIDEMAIL;
            _this.errorEmail = res.EMAILEXIST;
            _this.errorUsername = res.USERNAMEEXIST;
        });
        if (this.alreadyvalidated) {
            this.validate();
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Issam\superproject\src\pages\signup\signup.html"*/'<!-- Themes Register + logo -->\n<ion-header>\n  <ion-navbar transparent>\n    <ion-title>{{ \'SIGNUP\' | translate }} \n      <button ion-button text-capitalize button-clear clear float-right no-padding *ngIf="lang == \'fr\'" (click)="changeLanguage(\'en\')">English</button>\n      <button ion-button text-capitalize button-clear clear float-right no-padding *ngIf="lang == \'en\'" (click)="changeLanguage(\'fr\')">Français</button>\n    </ion-title>\n    \n  </ion-navbar>\n</ion-header>\n<!--Content -->\n<ion-content background-size [ngStyle]="{\'background-image\': \'url(../assets/images/background/39.jpg)\'}">\n        <form padding-horizontal (submit)="doSignup()">\n          <!---Input field firstname-->\n          <ion-item transparent>\n              <ion-label stacked>{{ \'FIRSTNAME\' | translate }}</ion-label>\n              <ion-input required placeholder="{{ \'FIRSTNAME\' | translate }}" type="text" required [(ngModel)]="account.firstname" name="firstname"></ion-input>\n              <ion-label error-field no-margin *ngIf="!isFirstnameValid">{{ mandatory }}</ion-label>\n            </ion-item>\n          <!---Input field lastname-->\n          <ion-item transparent>\n              <ion-label stacked>{{ \'LASTNAME\' | translate }}</ion-label>\n              <ion-input required placeholder="{{ \'LASTNAME\' | translate }}" type="text"  required [(ngModel)]="account.lastname" name="lastname"></ion-input>\n              <ion-label error-field no-margin *ngIf="!isLastnameValid">{{ mandatory }}</ion-label>\n            </ion-item>\n          <!---Input field email-->\n          <ion-item transparent>\n              <ion-label stacked>{{ \'EMAIL\' | translate }}</ion-label>\n              <ion-input required placeholder="{{ \'EMAIL\' | translate }}" type="email" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" name="email" required [(ngModel)]="account.email" [ngModelOptions]="{standalone: true}"></ion-input>\n              <ion-label error-field no-margin *ngIf="!isEmailValid">{{ errorEmail }}</ion-label>\n            </ion-item>\n          <!---Input field username-->\n          <ion-item transparent>\n            <ion-label stacked>{{ \'USERNAME\' | translate }}</ion-label>\n            <ion-input required placeholder="{{ \'USERNAME\' | translate }}" type="text" [(ngModel)]="account.username" name="username" [ngModelOptions]="{standalone: true}"></ion-input>\n            <ion-label error-field no-margin *ngIf="!isUsernameValid">{{ errorUsername }}</ion-label>\n          </ion-item>\n          <!---Input field password-->\n          <ion-item transparent>\n            <ion-label stacked>{{ \'PASSWORD\' | translate }}</ion-label>\n            <ion-input required placeholder="{{ \'USERNAME\' | translate }}" type="password" [(ngModel)]="account.password" name="password" [ngModelOptions]="{standalone: true}"></ion-input>\n            <ion-label error-field no-margin *ngIf="!isPasswordValid">{{ mandatory }}</ion-label>\n          </ion-item>\n          <!---Input field phone-->\n          <ion-item transparent>\n            <ion-label stacked>{{ \'PHONE\' | translate }}</ion-label>\n            <ion-input required type="number"  required [(ngModel)]="account.phone" name="phone"></ion-input>\n            <ion-label error-field no-margin *ngIf="!isPhoneValid">{{ mandatory }}</ion-label>\n          </ion-item>\n          <!---Input field birthday-->\n          <ion-item transparent>\n            <ion-label stacked>{{ \'BIRTHDAY\' | translate }}</ion-label>\n            <ion-datetime required   [(ngModel)]="account.birthday" name="birthday"></ion-datetime>\n            <ion-label error-field no-margin *ngIf="!isBirthdayValid">{{ mandatory }}</ion-label>\n          </ion-item>\n          <!---Input field country-->\n          <ion-item transparent>\n            <ion-label stacked>{{ \'ADRESS\' | translate }}</ion-label>\n            <ion-input required placeholder="{{ \'ADRESS\' | translate }}" type="text" required [(ngModel)]="account.adress" name="adress" ></ion-input>\n            <ion-label error-field no-margin *ngIf="!isAdressValid">{{ mandatory }}</ion-label>\n          </ion-item>\n          <!---Input field city-->\n          <ion-item transparent>\n            <ion-input required placeholder="{{ \'CITY\' | translate }}" type="text"  required [(ngModel)]="account.city" name="city" ></ion-input>\n            <ion-input required placeholder="{{ \'ZIPCODE\' | translate }}" type="text"  required [(ngModel)]="account.zipcode" name="zipcode" ></ion-input>\n          </ion-item>\n          <ion-item transparent>\n            <ion-label>{{ \'REGULAREVENTS\' | translate }}</ion-label>\n            <ion-checkbox  checked="true" [(ngModel)]="account.is_regular" name="is_regular" ></ion-checkbox>\n          </ion-item>\n        \n          <ion-item transparent>\n            <ion-label>{{ \'SPECIALEVENTS\' | translate }}</ion-label>\n            <ion-checkbox  checked="true" [(ngModel)]="account.is_special_event" name="is_special_event" ></ion-checkbox>\n          </ion-item>\n        \n          <ion-item transparent>\n            <ion-label>{{ \'SENIOREVENTS\' | translate }}</ion-label>\n            <ion-checkbox checked="true" [(ngModel)]="account.is_senior_service" name="is_senior_service" ></ion-checkbox>\n          </ion-item>\n          <!---Register button-->\n          <div padding>\n            <button ion-button color="light" block>{{ \'SIGNUP_BUTTON\' | translate }}</button>\n          </div>\n        </form>\n</ion-content>'/*ion-inline-end:"C:\Users\Issam\superproject\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["d" /* User */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["c" /* Settings */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=4.js.map