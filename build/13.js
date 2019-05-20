webpackJsonp([13],{

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailPageModule", function() { return ItemDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_detail__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ItemDetailPageModule = /** @class */ (function () {
    function ItemDetailPageModule() {
    }
    ItemDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__item_detail__["a" /* ItemDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__item_detail__["a" /* ItemDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__item_detail__["a" /* ItemDetailPage */]
            ]
        })
    ], ItemDetailPageModule);
    return ItemDetailPageModule;
}());

//# sourceMappingURL=item-detail.module.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ItemDetailPage = /** @class */ (function () {
    function ItemDetailPage(api, navCtrl, navParams, items, loadingCtrl, alertCtrl, translate) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.items = items;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.parentPage = null;
        this.item = null;
        this.periods = [];
        this.periodsids = [];
        this.cansubscribe = false;
        this.disabledtg = false;
        this.disabledbtn = false;
        this.classloading = false;
        this.nb_hours = null;
        if (navParams.get('parentPage')) {
            this.parentPage = navParams.get('parentPage');
        }
        if (navParams.get('item')) {
            this.item = navParams.get('item');
            this.cansubscribe = this.item.can_subscribe || this.item.can_modify;
            this.disabledtg = !this.item.can_modify;
            this.disabledbtn = this.disabledtg;
            if (this.item.nb_hours) {
                this.nb_hours = this.item.nb_hours;
            }
            this.loadPeriods();
        }
        else if (navParams.get('itemid')) {
            this.classloading = true;
            this.loadItem(navParams.get('itemid'));
        }
    }
    ItemDetailPage.prototype.ionViewCanEnter = function () {
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
    ItemDetailPage.prototype.loadPeriods = function () {
        var _this = this;
        var datessubscription = this.item.dates_subscriptions;
        datessubscription.forEach(function (value) {
            _this.periodsids.push(value.id_period);
        });
        this.item.dates.forEach(function (value) {
            if (_this.item.dates_subscriptions.length == 0) {
                value.subscribed = false;
            }
            else {
                if (_this.periodsids.indexOf(value.id_period) !== -1) {
                    value.subscribed = true;
                    value.disabled = false;
                }
                else {
                    value.subscribed = false;
                }
            }
            value.disabledtoggle = '';
            if (_this.item.can_modify === false) {
                value.disabledtoggle = 'disabled';
            }
            _this.periods.push(value);
        });
    };
    ItemDetailPage.prototype.loadItem = function (itemid) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/svg/bars.svg\" width=\"100%\"/>",
        });
        loading.present();
        var seq = this.items.querydetail({ id: itemid }).share();
        seq.subscribe(function (res) {
            _this.item = res;
            _this.cansubscribe = _this.item.can_subscribe || _this.item.can_modify;
            _this.disabledtg = !_this.item.can_modify;
            _this.disabledbtn = _this.disabledtg;
            if (_this.item.nb_hours) {
                _this.nb_hours = _this.item.nb_hours;
            }
            _this.loadPeriods();
        }, function (err) {
        }, function () { loading.dismiss(); });
    };
    ItemDetailPage.prototype.togglePeriod = function (periodid) {
        var position = this.periodsids.indexOf(periodid);
        if (position == -1) {
            this.periodsids.push(periodid);
        }
        else {
            this.periodsids.splice(position, 1);
        }
    };
    ItemDetailPage.prototype.sendSubscription = function () {
        var _this = this;
        var data = { 'eventid': this.item.id, 'periods': this.periodsids };
        if (this.periodsids.length == 0) {
            var confirmAlert = this.alertCtrl.create({
                message: this.translate.instant('WARNINGPERIOD'),
                buttons: [{
                        text: this.translate.instant('CLOSE'),
                        role: 'cancel'
                    }]
            });
            confirmAlert.present();
            return;
        }
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/svg/bars.svg\" width=\"100%\"/>"
        });
        loading.present();
        var seq = this.api.post('api/subscribeevent', data).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (_this.parentPage) {
                _this.parentPage.loadItems();
            }
            _this.navCtrl.pop();
        }, function (err) {
            console.error('ERROR', err);
        }, function () { loading.dismiss(); });
    };
    ItemDetailPage.prototype.isDisabled = function () {
        return this.item.can_modify === false;
    };
    ItemDetailPage.prototype.sendHours = function () {
        var _this = this;
        if (this.nb_hours) {
            var data = { 'eventid': this.item.id, 'nb_hours': this.nb_hours };
            var loading_1 = this.loadingCtrl.create({
                spinner: 'hide',
                content: "<img src=\"assets/svg/bars.svg\" width=\"100%\"/>"
            });
            loading_1.present();
            var seq = this.api.post('api/nbhours', data).share();
            seq.subscribe(function (res) {
                // If the API returned a successful response, mark the user as logged in
                if (_this.parentPage) {
                    _this.parentPage.loadItems();
                }
                _this.navCtrl.pop();
            }, function (err) {
                console.error('ERROR', err);
            }, function () { loading_1.dismiss(); });
        }
    };
    ItemDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-detail',template:/*ion-inline-start:"C:\Users\Issam\superprojectv2\src\pages\item-detail\item-detail.html"*/'<ion-header>\n    \n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title  *ngIf="item != null">{{ item.title }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding *ngIf="item != null" [class.margin-detail]="classloading">\n<ion-grid >\n    <ion-row align-items-center>\n    <ion-col no-padding col-12 col-sm-12 col-md-12 col-lg-12 offset-xl-2 col-xl-8>\n    <ion-list>\n    <h3 class="example-h3">{{ item.title }}</h3>\n    <p>{{ item.description }}</p>\n    <h6 ><ion-icon name="information-circle" *ngIf="item.other_informations != null" ></ion-icon> {{ item.other_informations }}</h6>\n    <div class="title-components" text-center></div>\n    <ion-row>\n        <ion-col class="col">\n            <span item-start span-medium><ion-icon name="people" color=\'light\' item-start></ion-icon>{{ \'SUBSCRIPTIONS\' | translate }}</span>\n            <span item-end span-medium small>({{item.subscribers}}/{{item.limit_subscribe}})</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col class="col">\n              <span span-medium ><ion-icon name="pin" color=\'light\'></ion-icon>{{item.adress}}</span>\n          </ion-col>\n      </ion-row>\n      <ion-row *ngIf="item.subscribe_status == 2">\n          <ion-col class="col">\n              <span span-medium ><ion-icon name="md-person" color=\'light\'></ion-icon>{{item.fullname_responsible}}</span>\n          </ion-col>\n      </ion-row>\n      <ion-row *ngIf="item.subscribe_status == 2">\n          <ion-col class="col">\n              <span span-medium ><ion-icon name="mail" color=\'light\'></ion-icon>{{item.email}}</span>\n          </ion-col>\n      </ion-row>\n      <ion-row *ngIf="item.subscribe_status == 2">\n          <ion-col class="col">\n              <span span-medium ><ion-icon name="ios-phone-portrait" color=\'light\'></ion-icon>{{item.phone_responsible}} : {{item.phone_post_responsible}}</span>\n          </ion-col>\n      </ion-row>\n      <ion-row *ngIf="item.dates.length > 0" >\n          <ion-col col-12>\n             <ion-icon name="calendar" color="light"></ion-icon> {{ \'DATE_TIME\' | translate }} \n          </ion-col>\n          <div class="col" col-12>\n            <ion-row align-items-center   *ngFor="let date of item.dates" >\n                    <ion-col col-6 col-lg-4>\n                        <span class="date-event"> \n                          <ion-icon name="time"></ion-icon>{{ date.start_date | prettydate }}\n                        </span>\n                    </ion-col>\n                    <ion-col col-1 col-lg-4>\n                        <ion-icon name="arrow-forward"></ion-icon>\n                    </ion-col>\n                    <ion-col col-5 col-lg-4>\n                        <span class="date-event"> \n                        {{ date.end_date | prettydate }}\n                      </span>\n                    </ion-col>\n            </ion-row>\n          </div>\n      </ion-row>\n      <ion-row>\n        <ion-col col-8>\n            <ion-icon name="pricetags" color="light"></ion-icon>\n            <span *ngIf="item.typeid == 1" class="badge-custom success-badge">{{ item.type }}</span>\n            <span *ngIf="item.typeid == 2" class="badge-custom blue-light-badge">{{ item.type }}</span>\n            <span *ngIf="item.typeid == 3" class="badge-custom dark-badge">{{ item.type }}</span>\n        </ion-col>\n      </ion-row>\n      <ion-grid no-padding>\n            <form padding-horizontal (submit)="sendHours()" *ngIf="item.can_enter_hours !== false">\n                    <div class="title-components">{{ \'NBHOURS\' | translate }}\n                    </div>\n                    <!-- List Section -->\n                    <ion-list>\n                    <ion-item>\n                            <ion-input placeholder="{{ \'NBHOURS_PLACEHOLDER\' | translate }}"  type="text"  [(ngModel)]="nb_hours" name="nb_hours"></ion-input>\n                    </ion-item>\n                    <ion-item  >\n                            <button ion-button full text-uppercase box-shadow color="primary" >{{ \'SAVE\' | translate }}</button>\n                    </ion-item>\n                </ion-list>\n            </form>\n\n          <form  (submit)="sendSubscription()" >\n          <div class="title-components">{{ \'SUBSCRIPTION\' | translate }}\n              <span *ngIf="item.subscribe_status == 0 && item.subscribe_status !== false" class="badge-custom danger-badge display-flex subscribe-badge"><ion-icon name="close-circle"></ion-icon>{{  \'STATUS_REFUSED\' | translate }}</span>\n              <span *ngIf="item.subscribe_status == 2" class="badge-custom success-badge display-flex subscribe-badge"><ion-icon name="checkmark-circle" color="secondary"></ion-icon>{{  \'STATUS_APPROVED\' | translate }}</span>\n              <span *ngIf="item.subscribe_status == 1" class="badge-custom waiting-badge display-flex subscribe-badge"><ion-icon name="ios-timer-outline"></ion-icon>{{  \'STATUS_WAITING\' | translate }}</span>\n\n          </div>\n          <!-- List Section -->\n          <ion-list no-lines *ngIf="isDisabled() == false" >\n            <ion-item class="item-period" lines *ngFor="let date of periods">\n              <!-- Toggle -->\n              <ion-checkbox color="secondary" disabled="{{ date.disabled }}" item-start (ionChange)="togglePeriod(date.id_period)" checked="{{ date.subscribed }}"></ion-checkbox>\n              <!-- Item-subtitle -->\n              <ion-label class="label-subtitle" item-subtitle>{{ date.label }}</ion-label>\n              <!-- Item-title -->\n              <ion-label item-title class="labelperiod">{{ date.start_date | prettydate }} <ion-icon name="arrow-forward"></ion-icon> {{ date.end_date | prettydate }}</ion-label>\n              <ion-label item-title class="labelperiod">\n\n                  <span *ngIf="date.limit_subscribe" class="sub-period" item-start span-medium><ion-icon name="people" color=\'light\' item-start></ion-icon>{{ \'SUBSCRIPTIONS\' | translate }}</span>\n                  <span *ngIf="date.limit_subscribe" class="sub-period" item-end span-medium small>({{date.subscribers}}/{{date.limit_subscribe}})</span>\n                  <span *ngIf="date.subscribers == date.limit_subscribe" class="sub-period period-full">{{ \'FULL\' | translate }}</span>\n              </ion-label>\n            </ion-item>\n            <ion-item  *ngIf="item.subscribe_status === false">\n              <button ion-button full text-uppercase box-shadow color="secondary"   [disabled]="isDisabled()" >{{ \'SUBSCRIBE\' | translate }}</button>\n            </ion-item>\n            <ion-item  *ngIf="item.subscribe_status !== false">\n              <button ion-button full text-uppercase box-shadow color="secondary"  [disabled]="isDisabled()" >{{ \'MODIFY\' | translate }}</button>\n            </ion-item>\n          </ion-list>\n          <ion-list no-lines  *ngIf="isDisabled() == true" >\n            <ion-item class="item-period" lines *ngFor="let date of periods">\n              <!-- Item-subtitle -->\n              <ion-label class="label-subtitle" item-subtitle  *ngIf="date.subscribed == true"><ion-icon name="calendar"></ion-icon> {{ date.label }}</ion-label> \n              <!-- Item-title -->\n              <ion-label item-title class="labelperiod" *ngIf="date.subscribed == true">{{ date.start_date | prettydate }} <ion-icon name="arrow-forward"></ion-icon> {{ date.end_date | prettydate }}</ion-label>\n              <ion-label item-title class="labelperiod">\n\n                  <span  *ngIf="date.limit_subscribe" class="sub-period" item-start span-medium><ion-icon name="people" color=\'light\' item-start></ion-icon>{{ \'SUBSCRIPTIONS\' | translate }}</span>\n                  <span *ngIf="date.limit_subscribe" class="sub-period" item-end span-medium small>({{date.subscribers}}/{{date.limit_subscribe}})</span>\n                  <span *ngIf="date.subscribers == date.limit_subscribe" class="sub-period period-full">{{ \'FULL\' | translate }}</span>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n        </form>\n        \n      </ion-grid>\n    </ion-list>\n</ion-col>\n</ion-row>\n</ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\Issam\superprojectv2\src\pages\item-detail\item-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers__["b" /* Items */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], ItemDetailPage);
    return ItemDetailPage;
}());

//# sourceMappingURL=item-detail.js.map

/***/ })

});
//# sourceMappingURL=13.js.map