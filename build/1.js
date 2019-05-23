webpackJsonp([1],{

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMasterPageModule", function() { return ListMasterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_master__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__yellowspot_ng_truncate__ = __webpack_require__(484);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ListMasterPageModule = /** @class */ (function () {
    function ListMasterPageModule() {
    }
    ListMasterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_5__yellowspot_ng_truncate__["a" /* TruncateModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */]
            ]
        })
    ], ListMasterPageModule);
    return ListMasterPageModule;
}());

//# sourceMappingURL=list-master.module.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__truncate_module__ = __webpack_require__(485);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__truncate_module__["a"]; });
/* unused harmony reexport TRUNCATE_PIPES */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TRUNCATE_PIPES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncateModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__truncate_characters_pipe__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__truncate_words_pipe__ = __webpack_require__(487);



var TRUNCATE_PIPES = [__WEBPACK_IMPORTED_MODULE_1__truncate_characters_pipe__["a" /* TruncateCharactersPipe */], __WEBPACK_IMPORTED_MODULE_2__truncate_words_pipe__["a" /* TruncateWordsPipe */]];
var TruncateModule = (function () {
    function TruncateModule() {
    }
    TruncateModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */], args: [{
                    declarations: [TRUNCATE_PIPES],
                    exports: [TRUNCATE_PIPES]
                },] },
    ];
    /** @nocollapse */
    TruncateModule.ctorParameters = function () { return []; };
    return TruncateModule;
}());

//# sourceMappingURL=truncate.module.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncateCharactersPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var TruncateCharactersPipe = (function () {
    function TruncateCharactersPipe() {
    }
    TruncateCharactersPipe.prototype.transform = function (value, limit, trail) {
        if (limit === void 0) { limit = 40; }
        if (trail === void 0) { trail = '…'; }
        if (!value) {
            value = '';
        }
        if (limit < 0) {
            limit *= -1;
            return value.length > limit ? trail + value.substring(value.length - limit, value.length) : value;
        }
        else {
            return value.length > limit ? value.substring(0, limit) + trail : value;
        }
    };
    TruncateCharactersPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */], args: [{
                    name: 'truncate'
                },] },
    ];
    /** @nocollapse */
    TruncateCharactersPipe.ctorParameters = function () { return []; };
    return TruncateCharactersPipe;
}());

//# sourceMappingURL=truncate-characters.pipe.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncateWordsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var TruncateWordsPipe = (function () {
    function TruncateWordsPipe() {
    }
    TruncateWordsPipe.prototype.transform = function (value, limit, trail) {
        if (limit === void 0) { limit = 40; }
        if (trail === void 0) { trail = '…'; }
        var result = value || '';
        if (value) {
            var words = value.split(/\s+/);
            if (words.length > Math.abs(limit)) {
                if (limit < 0) {
                    limit *= -1;
                    result = trail + words.slice(words.length - limit, words.length).join(' ');
                }
                else {
                    result = words.slice(0, limit).join(' ') + trail;
                }
            }
        }
        return result;
    };
    TruncateWordsPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */], args: [{
                    name: 'words'
                },] },
    ];
    /** @nocollapse */
    TruncateWordsPipe.ctorParameters = function () { return []; };
    return TruncateWordsPipe;
}());

//# sourceMappingURL=truncate-words.pipe.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListMasterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListMasterPage = /** @class */ (function () {
    function ListMasterPage(navCtrl, alertCtrl, items, api, menu, modalCtrl, user, loadingCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.items = items;
        this.api = api;
        this.menu = menu;
        this.modalCtrl = modalCtrl;
        this.user = user;
        this.loadingCtrl = loadingCtrl;
        this.home = true;
        this.emptyevents = false;
        this.regular = false;
        this.special = false;
        this.senior = false;
        this.type = null;
        this.category = null;
        this.categories = [];
        this.hascategories = false;
        this.itemsshown = [];
        if (navParams.get('type')) {
            this.home = false;
            this.type = navParams.get('type');
            if (this.type === 1) {
                this.loadCategories();
            }
            this.loadItems();
        }
        else {
            this.loadInterests();
            this.home = true;
        }
    }
    ListMasterPage.prototype.ionViewCanEnter = function () {
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
    ListMasterPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(true);
    };
    /**
     * Prompt the user to add a new item. This shows our ItemCreatePage in a
     * modal and then adds the new item to our data source if the user created one.
     */
    ListMasterPage.prototype.addItem = function () {
        var _this = this;
        var addModal = this.modalCtrl.create('ItemCreatePage');
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.items.add(item);
            }
        });
        addModal.present();
    };
    /**
     * Delete an item from the list of items.
     */
    ListMasterPage.prototype.deleteItem = function (item) {
        this.items.delete(item);
    };
    /**
     * Navigate to the detail page for this item.
     */
    ListMasterPage.prototype.openItem = function (item) {
        this.navCtrl.push('ItemDetailPage', {
            item: item,
            'parentPage': this
        });
    };
    /**
     * Navigate to the detail page for this item.
     */
    ListMasterPage.prototype.openType = function (type) {
        console.log(type);
        this.navCtrl.push('ListMasterPage', {
            type: type
        });
    };
    ListMasterPage.prototype.loadItems = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/svg/bars.svg\" width=\"100%\"/>"
        });
        loading.present();
        var params = [];
        if (this.type) {
            params["type"] = this.type;
        }
        if (this.category) {
            params["category"] = this.category;
        }
        var seq = this.items.query(params).share();
        seq.subscribe(function (res) {
            _this.currentItems = res;
            if (res.length == 0) {
                _this.emptyevents = true;
            }
        }, function (err) {
        }, function () { loading.dismiss(); });
    };
    ListMasterPage.prototype.loadInterests = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/svg/bars.svg\" width=\"100%\"/>"
        });
        loading.present();
        var seq = this.items.queryinterests().share();
        seq.subscribe(function (res) {
            _this.regular = res.regular;
            _this.special = res.special;
            _this.senior = res.senior;
        }, function (err) {
            loading.dismiss();
        }, function () { loading.dismiss(); });
    };
    ListMasterPage.prototype.loadCategories = function () {
        var _this = this;
        var seq = this.items.querycategories().share();
        seq.subscribe(function (res) {
            console.log(res);
            _this.categories = res;
            if (res.length > 0) {
                _this.hascategories = true;
            }
        }, function (err) {
            console.log('error get list items');
        }, function () { });
    };
    ListMasterPage.prototype.isItemShown = function (id) {
        if (this.itemsshown.indexOf(id) !== -1) {
            return true;
        }
        return false;
    };
    ListMasterPage.prototype.toggleItem = function (id) {
        console.log('toggle');
        var position = this.itemsshown.indexOf(id);
        if (position !== -1) {
            this.itemsshown.splice(position, 1);
        }
        else {
            this.itemsshown.push(id);
        }
    };
    ListMasterPage.prototype.changeCategory = function () {
        this.loadItems();
    };
    ListMasterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-master',template:/*ion-inline-start:"C:\Users\Issam\superprojectv2\src\pages\list-master\list-master.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'EVENTS\' | translate }}</ion-title>\n\n    <ion-buttons  *ngIf="!home" end>\n      <button ion-button icon-only (click)="loadItems()">\n        <ion-icon name="sync"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-grid no-padding *ngIf="home">\n        <ion-row>\n          <ion-col col-12 no-padding no-margin>\n            <ion-list>\n              <ul no-margin no-padding class="collapsible">\n                <li margin *ngIf="regular" (click)="openType(1)">\n                  <!-- Expandable Full image with CTA Header-->\n                  <div class="collapsible-header">\n                    <ion-item no-margin no-padding no-lines background-size text-center\n                    [ngStyle]="{\'background-image\': \'url(../assets/images/background/partenaires.jpg)\'}">\n    \n                      <div title-block text-center>\n                        <!-- Title Card -->\n                        <h1 ion-text text-wrap text-uppercase header-title>{{ \'REGULAREVENTS\' | translate }}</h1>\n                      </div>\n                    </ion-item>\n                  </div>\n                </li>\n                <li margin *ngIf="senior" (click)="openType(2)">\n                    <!-- Expandable Full image with CTA Header-->\n                    <div class="collapsible-header">\n                      <ion-item no-margin no-padding no-lines background-size text-center\n                      [ngStyle]="{\'background-image\': \'url(../assets/images/background/services-aines.jpg)\'}">\n      \n                        <div title-block text-center>\n                          <!-- Title Card -->\n                          <h1 ion-text text-wrap text-uppercase header-title>{{ \'SENIOREVENTS\' | translate }}</h1>\n                        </div>\n                      </ion-item>\n                    </div>\n                  </li>\n                  <li margin *ngIf="special"  (click)="openType(3)">\n                      <!-- Expandable Full image with CTA Header-->\n                      <div class="collapsible-header">\n                        <ion-item no-margin no-padding no-lines background-size text-center\n                        [ngStyle]="{\'background-image\': \'url(../assets/images/background/devenir-benevole.jpg)\'}">\n        \n                          <div title-block text-center>\n                            <!-- Title Card -->\n                            <h1 ion-text text-wrap text-uppercase header-title>{{ \'SPECIALEVENTS\' | translate }}</h1>\n                          </div>\n                        </ion-item>\n                      </div>\n                    </li>\n              </ul>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n  </ion-grid>\n  <ion-grid no-padding>\n      <ion-list class="ios-category-event" *ngIf="hascategories">\n          <ion-item>\n            <ion-select  placeholder="{{ \'CHOOSECATEGORY\' | translate  }}" [(ngModel)]="category" (ionChange)="changeCategory()">\n                <ion-option value="0">{{ \'ALLCATEGORIES\' | translate  }}</ion-option>\n              <ion-option *ngFor="let category of categories" [value]="category.id">{{category.title}}</ion-option>\n           </ion-select>\n          </ion-item>\n        </ion-list>\n        <ion-row align-items-center *ngIf="emptyevents == true">\n            <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n                <h5 ion-text text-center color="light">{{ \'UNVAILABLEEVENT\' | translate }}</h5>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="currentItems != null">\n          <ion-col col-12 col-lg-6 col-xl-4 *ngFor="let item of currentItems">\n            <ion-card text-left box-shadow class="cardevent">\n                <span *ngIf="item.subscribers == item.limit_subscribe" class="stamp is-nope">{{ \'FULL\' | translate }}</span>\n              <!--Card descriptiom-->\n              <ion-card-content>\n\n                <ion-card-title>\n                  <!--Card Subtitle-->\n                  <h1 card-subtitle >{{item.title}}</h1>\n                  <!--Card Body Text-->\n                  <p card-body-text>{{item.description | truncate : 200 : "..."}}</p>\n                </ion-card-title>\n              </ion-card-content>\n              <ion-row>\n                <ion-col class="col">\n                    <span item-start span-medium><ion-icon name="people" color=\'light\' item-start></ion-icon>{{ \'SUBSCRIPTIONS\' | translate }}</span>\n                    <span item-end span-medium small>({{item.subscribers}}/{{item.limit_subscribe}})</span>\n                </ion-col>\n                \n              </ion-row>\n              <ion-row *ngIf="item.dates.length > 0" >\n                  <ion-col col-12>\n                     <ion-icon name="calendar" color="light"></ion-icon> {{ \'DATE_TIME\' | translate }} \n                     <ion-icon name="ios-remove-circle-outline" color="light"  *ngIf="isItemShown(item.id) == true" (click)="toggleItem(item.id)"></ion-icon>\n                     <ion-icon name="ios-add-circle-outline" color="light" *ngIf="isItemShown(item.id) == false" (click)="toggleItem(item.id)"></ion-icon>\n                  </ion-col>\n                  <div *ngIf="isItemShown(item.id) == true">\n                    <ion-row align-items-center   *ngFor="let date of item.dates" >\n                        \n                          \n                            <ion-col col-6 col-lg-4>\n                                <span class="date-event"> \n                                  <ion-icon name="time"></ion-icon>{{ date.start_date | prettydate }}\n                                </span>\n                            </ion-col>\n                            <ion-col col-1 col-lg-4>\n                                <ion-icon name="arrow-forward"></ion-icon>\n                            </ion-col>\n                            <ion-col col-5 col-lg-4>\n                                <span class="date-event"> \n                                {{ date.end_date | prettydate }}\n                              </span>\n                            </ion-col>\n                          \n                      \n                    </ion-row>\n                  </div>\n              </ion-row>\n              <ion-row>\n                <ion-col class="display-flex" col-6>\n                    <ion-icon name="pricetags" color="light"></ion-icon>\n                    <span *ngIf="item.typeid == 1" class="badge-custom success-badge">{{ item.type }}</span>\n                    <span *ngIf="item.typeid == 2" class="badge-custom blue-light-badge">{{ item.type }}</span>\n                    <span *ngIf="item.typeid == 3" class="badge-custom dark-badge">{{ item.type }}</span>\n                </ion-col>\n               <ion-col *ngIf="item.can_subscribe === true && item.subscribe_status === false" col-6><button (click)="openItem(item)" ion-button color="primary"   item-end icon-start small float-right>{{ \'SUBSCRIBE\' | translate }}</button></ion-col>\n               <ion-col *ngIf="item.subscribe_status !== false" col-6 class="display-flex">\n                  <span *ngIf="item.subscribe_status == 0" class="badge-custom danger-badge display-flex"><ion-icon name="close-circle"></ion-icon>{{  \'STATUS_REFUSED\' | translate }}</span>\n                  <span *ngIf="item.subscribe_status == 2" class="badge-custom success-badge display-flex"><ion-icon name="checkmark-circle" color="secondary"></ion-icon>{{  \'STATUS_APPROVED\' | translate }}</span>\n                  <span *ngIf="item.subscribe_status == 1" class="badge-custom waiting-badge display-flex"><ion-icon name="ios-timer-outline"></ion-icon>{{  \'STATUS_WAITING\' | translate }}</span>\n                  <a  *ngIf="item.can_modify === true" (click)="openItem(item)" small float-right class="link-edit-event"><ion-icon name="md-create"  color="light"></ion-icon></a>\n                  <a  *ngIf="item.can_modify === false" (click)="openItem(item)" small float-right class="link-edit-event" ><ion-icon name="ios-arrow-dropright"  color="light"></ion-icon></a>\n               </ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\Issam\superprojectv2\src\pages\list-master\list-master.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* Items */], __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* User */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ListMasterPage);
    return ListMasterPage;
}());

//# sourceMappingURL=list-master.js.map

/***/ })

});
//# sourceMappingURL=1.js.map