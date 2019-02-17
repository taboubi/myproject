webpackJsonp([4],{

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingsPageModule", function() { return TrainingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trainings__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TrainingsPageModule = /** @class */ (function () {
    function TrainingsPageModule() {
    }
    TrainingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__trainings__["a" /* TrainingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__trainings__["a" /* TrainingsPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], TrainingsPageModule);
    return TrainingsPageModule;
}());

//# sourceMappingURL=trainings.module.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingsPage; });
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
var TrainingsPage = /** @class */ (function () {
    function TrainingsPage(api, navCtrl, items, menu, modalCtrl, user, loadingCtrl) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.items = items;
        this.menu = menu;
        this.modalCtrl = modalCtrl;
        this.user = user;
        this.loadingCtrl = loadingCtrl;
        this.emptytrainings = false;
    }
    TrainingsPage.prototype.ionViewCanEnter = function () {
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
    TrainingsPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(true);
    };
    TrainingsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/svg/bars.svg\" width=\"100%\"/>"
        });
        loading.present();
        return new Promise(function (resolve, reject) {
            var seq = _this.items.querytraining().share();
            seq.subscribe(function (res) {
                _this.currentItems = res;
                resolve(true);
                if (res.length == 0) {
                    _this.emptytrainings = true;
                }
                else {
                    _this.emptytrainings = false;
                }
            }, function (err) {
                resolve(false);
            }, function () { loading.dismiss(); });
        });
    };
    TrainingsPage.prototype.loadItems = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/svg/bars.svg\" width=\"100%\"/>"
        });
        loading.present();
        var seq = this.items.querytraining().share();
        seq.subscribe(function (res) {
            _this.currentItems = res;
        }, function (err) {
            console.log('error get list items');
        }, function () { loading.dismiss(); });
    };
    TrainingsPage.prototype.subscribe = function (itemid) {
        var _this = this;
        var data = { 'trainingid': itemid };
        var seq = this.api.post('api/subscribetraining', data).share();
        seq.subscribe(function (res) {
            _this.loadItems();
        }, function (err) {
            console.error('ERROR', err);
        });
    };
    TrainingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trainings',template:/*ion-inline-start:"C:\Users\Issam\superproject\src\pages\trainings\trainings.html"*/'<ion-header>\n\n    <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>{{ \'TRAININGS\' | translate }}</ion-title>\n  \n      <ion-buttons end>\n        <button ion-button icon-only (click)="loadItems()">\n          <ion-icon name="sync"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content>\n    <ion-grid no-padding>\n        <ion-row align-items-center *ngIf="emptytrainings == true">\n            <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n                <h5 ion-text text-center color="light">{{ \'UNVAILABLETRAINING\' | translate }}</h5>\n            </ion-col>\n        </ion-row>\n          <ion-row *ngIf="currentItems != null">\n            <ion-col col-12 col-lg-6 col-xl-6 *ngFor="let item of currentItems">\n              <ion-card text-left box-shadow  class="cardevent">\n                <span *ngIf="item.subscribers == item.limit_subscribe" class="stamp is-nope">{{ \'FULL\' | translate }}</span>\n                <!--Card descriptiom-->\n                <ion-card-content>\n                  <ion-card-title>\n                    <!--Card Subtitle-->\n                    <h1 card-subtitle >{{item.title}}</h1>\n                    <!--Card Body Text-->\n                    <p card-body-text>{{item.description}}</p>\n                  </ion-card-title>\n                </ion-card-content>\n                <ion-row>\n                  <ion-col class="col">\n                      <span item-start span-medium><ion-icon name="people" color=\'light\' item-start></ion-icon>{{ \'SUBSCRIPTIONS\' | translate }}</span>\n                      <span item-end span-medium small>({{item.subscribers}}/{{item.limit_subscribe}})</span>\n                  </ion-col>\n                  \n                </ion-row>\n   \n                <ion-row>\n                    <ion-col col-12>\n                       <ion-icon name="calendar" color="light"></ion-icon> {{ \'DATE_TIME\' | translate }} \n                    </ion-col>\n                    <ion-row align-items-center>\n                              <ion-col col-6 col-lg-4>\n                                  <span class="date-event"> \n                                    <ion-icon name="time"></ion-icon>{{ item.start_date | prettydate }}\n                                  </span>\n                              </ion-col>\n                              <ion-col col-1 col-lg-4>\n                                  <ion-icon name="arrow-forward"></ion-icon>\n                              </ion-col>\n                              <ion-col col-5 col-lg-4>\n                                  <span class="date-event"> \n                                  {{ item.end_date | prettydate }}\n                                </span>\n                              </ion-col>\n                    </ion-row>\n                </ion-row>\n                <ion-row>\n                   <ion-col *ngIf="item.can_subscribe === true && item.subscribe_status === false" col-12 text-center><button (click)="subscribe(item.id)" ion-button color="primary"   item-end icon-start small float-right>{{ \'SUBSCRIBE\' | translate }}</button></ion-col>\n                   <ion-col *ngIf="item.subscribe_status !== false" col-12 >\n                      <span *ngIf="item.subscribe_status == 0" class="badge-custom danger-badge display-flex" float-right><ion-icon name="close-circle"></ion-icon>{{  \'STATUS_REFUSED\' | translate }}</span>\n                      <span *ngIf="item.subscribe_status == 2" class="badge-custom success-badge display-flex" float-right><ion-icon name="checkmark-circle" color="secondary"></ion-icon>{{  \'STATUS_APPROVED\' | translate }}</span>\n                      <span *ngIf="item.subscribe_status == 1" class="badge-custom waiting-badge display-flex" float-right><ion-icon name="ios-timer-outline"></ion-icon>{{  \'STATUS_WAITING\' | translate }}</span>\n                   </ion-col>\n                </ion-row>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n    </ion-grid>\n  </ion-content>'/*ion-inline-end:"C:\Users\Issam\superproject\src\pages\trainings\trainings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* Items */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* User */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], TrainingsPage);
    return TrainingsPage;
}());

//# sourceMappingURL=trainings.js.map

/***/ })

});
//# sourceMappingURL=4.js.map