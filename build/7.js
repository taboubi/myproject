webpackJsonp([7],{

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceletterPageModule", function() { return ReferenceletterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__referenceletter__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ReferenceletterPageModule = /** @class */ (function () {
    function ReferenceletterPageModule() {
    }
    ReferenceletterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__referenceletter__["a" /* ReferenceletterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__referenceletter__["a" /* ReferenceletterPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], ReferenceletterPageModule);
    return ReferenceletterPageModule;
}());

//# sourceMappingURL=referenceletter.module.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferenceletterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(59);
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
 * Generated class for the MyeventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReferenceletterPage = /** @class */ (function () {
    function ReferenceletterPage(api, navCtrl, items, menu, modalCtrl, user, loadingCtrl) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.items = items;
        this.menu = menu;
        this.modalCtrl = modalCtrl;
        this.user = user;
        this.loadingCtrl = loadingCtrl;
    }
    ReferenceletterPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        var seq = this.api.post('checktoken', []).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.error !== true) {
                return true;
            }
            else {
                _this.navCtrl.setRoot('LoginPage');
            }
        }, function (err) {
            _this.navCtrl.setRoot('LoginPage');
        });
    };
    ReferenceletterPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(true);
    };
    ReferenceletterPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/svg/bars.svg\" width=\"100%\"/>"
        });
        loading.present();
        return new Promise(function (resolve, reject) {
            var seq = _this.items.queryletter().share();
            seq.subscribe(function (res) {
                _this.currentItems = res;
                resolve(true);
            }, function (err) {
                resolve(false);
            }, function () { loading.dismiss(); });
        });
    };
    ReferenceletterPage.prototype.loadItems = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/svg/bars.svg\" width=\"100%\"/>"
        });
        loading.present();
        var seq = this.items.queryletter().share();
        seq.subscribe(function (res) {
            _this.currentItems = res;
        }, function (err) {
            console.log('error get list items');
        }, function () { loading.dismiss(); });
    };
    ReferenceletterPage.prototype.sendRequest = function () {
        var _this = this;
        var seq = this.api.post('api/rflrequest', {}).share();
        seq.subscribe(function (res) {
            _this.loadItems();
        }, function (err) {
            console.error('ERROR', err);
        });
    };
    ReferenceletterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-referenceletter',template:/*ion-inline-start:"C:\Users\Issam\superproject\src\pages\referenceletter\referenceletter.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'REFERENCELETTER\' | translate }}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="loadItems()">\n        <ion-icon name="sync"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-grid no-padding>\n        <ion-row *ngIf="currentItems != null">\n          <ion-col col-12 col-lg-4 *ngFor="let item of currentItems">\n            <ion-card text-left box-shadow margin-bottom class="cardevent">\n              <!--Card descriptiom-->\n              <ion-card-content>\n                <ion-card-title>\n                  <!--Card Subtitle-->\n                  <h1 card-subtitle >{{ \'LETTER_REFERENCE_REQUEST\' | translate }}</h1>\n\n                </ion-card-title>\n              </ion-card-content>\n \n              <ion-row>\n                  <ion-col col-12>\n                     <ion-icon name="calendar" color="light"></ion-icon> {{ \'CREATED_AT\' | translate }} : {{ item.createdAt | prettydate }}\n                  </ion-col>\n              </ion-row>\n              <ion-row>\n                 <ion-col  col-12 >\n                    <span *ngIf="item.processed == 1" class="badge-custom success-badge display-flex" float-right><ion-icon name="checkmark-circle" color="secondary"></ion-icon>{{ \'PROCESSED\' | translate }}</span>\n                    <span *ngIf="item.processed == 0" class="badge-custom waiting-badge display-flex" float-right><ion-icon name="ios-timer-outline"></ion-icon>{{ \'WAITING_FOR_PROCESS\' | translate }}</span>\n                 </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col  col-12 text-center>\n            <button (click)="sendRequest()" ion-button color="primary" small>{{ \'SEND_NEW_REQUEST\' | translate }}</button>\n          </ion-col>\n        </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\Issam\superproject\src\pages\referenceletter\referenceletter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* Items */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* User */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ReferenceletterPage);
    return ReferenceletterPage;
}());

//# sourceMappingURL=referenceletter.js.map

/***/ })

});
//# sourceMappingURL=7.js.map