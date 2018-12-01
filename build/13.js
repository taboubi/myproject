webpackJsonp([13],{

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailPageModule", function() { return ItemDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_detail__ = __webpack_require__(484);
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

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailPage; });
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




var ItemDetailPage = /** @class */ (function () {
    function ItemDetailPage(api, navCtrl, navParams, items, loadingCtrl) {
        this.api = api;
        this.navCtrl = navCtrl;
        this.items = items;
        this.loadingCtrl = loadingCtrl;
        this.item = null;
        this.periods = [];
        this.periodsids = [];
        this.cansubscribe = false;
        this.disabledtg = false;
        this.disabledbtn = false;
        if (navParams.get('item')) {
            this.item = navParams.get('item');
            this.cansubscribe = this.item.can_subscribe || this.item.can_modify;
            this.disabledtg = !this.item.can_modify;
            this.disabledbtn = this.disabledtg;
            console.log(this.cansubscribe);
            this.loadPeriods();
        }
        else if (navParams.get('itemid')) {
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
                value.subscribed = true;
                _this.periodsids.push(value.id_period);
            }
            else {
                if (_this.periodsids.indexOf(value.id_period) !== -1) {
                    value.subscribed = true;
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
        console.log(this.periods);
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
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/svg/bars.svg\" width=\"100%\"/>"
        });
        loading.present();
        var seq = this.api.post('api/subscribeevent', data).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            _this.navCtrl.pop();
        }, function (err) {
            console.error('ERROR', err);
        }, function () { loading.dismiss(); });
    };
    ItemDetailPage.prototype.isDisabled = function () {
        return this.item.can_modify === false;
    };
    ItemDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-detail',template:/*ion-inline-start:"C:\Users\Issam\superproject\src\pages\item-detail\item-detail.html"*/'<ion-header>\n    \n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title  *ngIf="item != null">{{ item.title }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding *ngIf="item != null">\n    <ion-list>\n    <h3 class="example-h3">{{ item.title }}</h3>\n    <p>{{ item.description }}</p>\n    <h6 ><ion-icon name="information-circle" *ngIf="item.other_informations != null" ></ion-icon> {{ item.other_informations }}</h6>\n    <div class="title-components" text-center></div>\n    <ion-row>\n        <ion-col class="col">\n            <span item-start span-medium><ion-icon name="people" color=\'light\' item-start></ion-icon>{{ \'SUBSCRIPTIONS\' | translate }}</span>\n            <span item-end span-medium small>({{item.subscribers}}/{{item.limit_subscribe}})</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col class="col">\n              <span span-medium ><ion-icon name="pin" color=\'light\'></ion-icon>{{item.adress}}</span>\n          </ion-col>\n      </ion-row>\n      <ion-row *ngIf="item.subscribe_status == 2">\n          <ion-col class="col">\n              <span span-medium ><ion-icon name="md-person" color=\'light\'></ion-icon>{{item.fullname_responsible}}</span>\n          </ion-col>\n      </ion-row>\n      <ion-row *ngIf="item.subscribe_status == 2">\n          <ion-col class="col">\n              <span span-medium ><ion-icon name="mail" color=\'light\'></ion-icon>{{item.email}}</span>\n          </ion-col>\n      </ion-row>\n      <ion-row *ngIf="item.subscribe_status == 2">\n          <ion-col class="col">\n              <span span-medium ><ion-icon name="ios-phone-portrait" color=\'light\'></ion-icon>{{item.phone_responsible}} : {{item.phone_post_responsible}}</span>\n          </ion-col>\n      </ion-row>\n      <ion-row *ngIf="item.dates.length > 0" >\n          <ion-col col-12>\n             <ion-icon name="calendar" color="light"></ion-icon> {{ \'DATE_TIME\' | translate }} \n          </ion-col>\n          <div>\n            <ion-row align-items-center   *ngFor="let date of item.dates" >\n                    <ion-col col-6 col-lg-4>\n                        <span class="date-event"> \n                          <ion-icon name="time"></ion-icon>{{ date.start_date | prettydate }}\n                        </span>\n                    </ion-col>\n                    <ion-col col-1 col-lg-4>\n                        <ion-icon name="arrow-forward"></ion-icon>\n                    </ion-col>\n                    <ion-col col-5 col-lg-4>\n                        <span class="date-event"> \n                        {{ date.end_date | prettydate }}\n                      </span>\n                    </ion-col>\n            </ion-row>\n          </div>\n      </ion-row>\n      <ion-row>\n        <ion-col col-8>\n            <ion-icon name="pricetags" color="light"></ion-icon>\n            <span *ngIf="item.typeid == 1" class="badge-custom success-badge">{{ item.type }}</span>\n            <span *ngIf="item.typeid == 2" class="badge-custom blue-light-badge">{{ item.type }}</span>\n            <span *ngIf="item.typeid == 3" class="badge-custom dark-badge">{{ item.type }}</span>\n        </ion-col>\n      </ion-row>\n      <ion-grid no-padding>\n          <form padding-horizontal (submit)="sendSubscription()" >\n          <div class="title-components">{{ \'SUBSCRIPTION\' | translate }}\n              <span *ngIf="item.subscribe_status == 0 && item.subscribe_status !== false" class="badge-custom danger-badge display-flex subscribe-badge"><ion-icon name="close-circle"></ion-icon>{{  \'STATUS_REFUSED\' | translate }}</span>\n              <span *ngIf="item.subscribe_status == 2" class="badge-custom success-badge display-flex subscribe-badge"><ion-icon name="checkmark-circle" color="secondary"></ion-icon>{{  \'STATUS_APPROVED\' | translate }}</span>\n              <span *ngIf="item.subscribe_status == 1" class="badge-custom waiting-badge display-flex subscribe-badge"><ion-icon name="ios-timer-outline"></ion-icon>{{  \'STATUS_WAITING\' | translate }}</span>\n\n          </div>\n          <!-- List Section -->\n          <ion-list no-lines >\n            <ion-item border lines *ngFor="let date of periods">\n              <!-- Toggle -->\n              <ion-toggle color="secondary" item-start (ionChange)="togglePeriod(date.id_period)" checked="{{ date.subscribed }}" [disabled]="isDisabled()"></ion-toggle>\n              <!-- Item-subtitle -->\n              <ion-label item-subtitle>{{ date.label }}</ion-label>\n              <!-- Item-title -->\n              <ion-label item-title class="labelperiod">{{ date.start_date | prettydate }} <ion-icon name="arrow-forward"></ion-icon> {{ date.end_date | prettydate }}</ion-label>\n            </ion-item>\n            <ion-item  *ngIf="item.subscribe_status === false">\n              <button ion-button full text-uppercase box-shadow color="secondary"   [disabled]="isDisabled()" >{{ \'SUBSCRIBE\' | translate }}</button>\n            </ion-item>\n            <ion-item  *ngIf="item.subscribe_status !== false">\n              <button ion-button full text-uppercase box-shadow color="secondary"  [disabled]="isDisabled()" >{{ \'MODIFY\' | translate }}</button>\n            </ion-item>\n          </ion-list>\n        </form>\n      </ion-grid>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Issam\superproject\src\pages\item-detail\item-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* Items */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ItemDetailPage);
    return ItemDetailPage;
}());

//# sourceMappingURL=item-detail.js.map

/***/ })

});
//# sourceMappingURL=13.js.map