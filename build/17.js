webpackJsonp([17],{

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ContactPageModule = /** @class */ (function () {
    function ContactPageModule() {
    }
    ContactPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], ContactPageModule);
    return ContactPageModule;
}());

//# sourceMappingURL=contact.module.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(121);
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
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Issam\superprojectv2\src\pages\contact\contact.html"*/'<ion-header>\n    <ion-navbar transparent>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title >{{ \'CONTACT\' | translate }}</ion-title>\n    </ion-navbar>\n</ion-header>\n<!--Content -->\n<ion-content elastic-header>\n    <ion-grid no-padding>\n        <ion-row>\n            <ion-col col-12 map-header>\n                <ion-item border no-lines no-padding>\n                    <!--Maps Title-->\n                    <h1 padding-left maps-title margin-top margin-bottom text-wrap>Centre d’action bénévole et communautaire Saint-Laurent</h1>\n                </ion-item>\n            </ion-col>\n            <!---Content-->\n            <ion-col col-12 map-content transparent>\n                <ion-item-group>\n                    <ion-item-divider no-lines>\n                        <h6  text-wrap margin-bottom><ion-icon name="map"></ion-icon>  910, avenue Sainte-Croix<br>\n                          Saint-Laurent, Québec<br>\n                          H4L 3Y6\n                          <a href=\'https://www.google.ca/maps/place/910+Avenue+Sainte-Croix,+Saint-Laurent,+QC+H4L+3Y6/@45.516031,-73.672814,15z/data=!4m5!3m4!1s0x4cc91841d25d2245:0xc0de0e045a32c4!8m2!3d45.5149408!4d-73.6781764?hl=fr\'>\n                            Voir sur la carte\n                        </a>\n                        </h6>\n\n                        <h6  text-wrap margin-bottom><ion-icon name="call"></ion-icon>  Tél. :\n  \n                          <a href=\'tel:+1-514-744-5511\'>\n                            514-744-5511\n                        </a>\n                        </h6>\n\n                        <h6  text-wrap margin-bottom><ion-icon name="call"></ion-icon>  Fax. :\n  \n                          <a href=\'tel:+1-514-744-1206\'>\n                              514-744-1206\n                        </a>\n                        </h6>\n\n\n                        \n\n\n<ion-item no-lines>\n    <p>Directrice générale<br>\n      <span color="light" maps-title>Henriette Konté</span> poste 223</p> \n</ion-item>\n\n                        <ion-item no-lines>\n                            <p>Responsable des communications<br>\n                              <span color="light" maps-title>Laurence Bouchard</span> poste 224 </p> \n    </ion-item> \n         \n    <ion-item no-lines>\n    <p  text-wrap>\n    Reponsable des bénévoles<br>\n    <span color="light" maps-title>Mélanie Massicotte</span> poste 222\n    </p>\n    </ion-item>\n    <ion-item no-lines>\n    <p  text-wrap> \n    Coordonnatrice des services aux bénévoles et aux bénéficiaires <br>\n    <span color="light" maps-title>Koné Djakaridja</span> poste 226 \n    </p> \n    </ion-item>\n    \n         \n    <ion-item no-lines>\n    <p  text-wrap> \n    Heures d\'ouverture:<br>\n    Lundi, Mardi, Mercredi, et Vendredi: de 8h à 17h30<br>\n    Jeudi: de 8h à 20h<br>\n    </p> \n    </ion-item>  \n                    </ion-item-divider>\n                    \n                </ion-item-group>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Issam\superprojectv2\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ })

});
//# sourceMappingURL=17.js.map