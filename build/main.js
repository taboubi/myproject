webpackJsonp([18],{

/***/ 134:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 134;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cards/cards.module": [
		465,
		17
	],
	"../pages/contact/contact.module": [
		466,
		16
	],
	"../pages/content/content.module": [
		467,
		15
	],
	"../pages/item-create/item-create.module": [
		468,
		14
	],
	"../pages/item-detail/item-detail.module": [
		469,
		13
	],
	"../pages/list-master/list-master.module": [
		470,
		1
	],
	"../pages/login/login.module": [
		471,
		12
	],
	"../pages/logout/logout.module": [
		472,
		11
	],
	"../pages/menu/menu.module": [
		473,
		10
	],
	"../pages/myevents/myevents.module": [
		474,
		0
	],
	"../pages/referenceletter/referenceletter.module": [
		475,
		9
	],
	"../pages/search/search.module": [
		476,
		8
	],
	"../pages/settings/settings.module": [
		477,
		7
	],
	"../pages/signup/signup.module": [
		478,
		6
	],
	"../pages/tabs/tabs.module": [
		479,
		5
	],
	"../pages/trainings/trainings.module": [
		481,
		4
	],
	"../pages/tutorial/tutorial.module": [
		480,
		3
	],
	"../pages/welcome/welcome.module": [
		482,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 188;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Items = /** @class */ (function () {
    function Items(api) {
        this.api = api;
        this.items = [];
        this.defaultItem = {
            "name": "Burt Bear",
            "profilePic": "assets/img/speakers/bear.jpg",
            "about": "Burt is a Bear.",
        };
        var items = [
            {
                "name": "Burt Bear",
                "profilePic": "assets/img/speakers/bear.jpg",
                "about": "Burt is a Bear."
            },
            {
                "name": "Charlie Cheetah",
                "profilePic": "assets/img/speakers/cheetah.jpg",
                "about": "Charlie is a Cheetah."
            },
            {
                "name": "Donald Duck",
                "profilePic": "assets/img/speakers/duck.jpg",
                "about": "Donald is a Duck."
            },
            {
                "name": "Eva Eagle",
                "profilePic": "assets/img/speakers/eagle.jpg",
                "about": "Eva is an Eagle."
            },
            {
                "name": "Ellie Elephant",
                "profilePic": "assets/img/speakers/elephant.jpg",
                "about": "Ellie is an Elephant."
            },
            {
                "name": "Molly Mouse",
                "profilePic": "assets/img/speakers/mouse.jpg",
                "about": "Molly is a Mouse."
            },
            {
                "name": "Paul Puppy",
                "profilePic": "assets/img/speakers/puppy.jpg",
                "about": "Paul is a Puppy."
            }
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */](item));
        }
    }
    Items.prototype.query = function (params) {
        var req = this.api.get('api/event', params);
        return req;
    };
    Items.prototype.querymylist = function (params) {
        var req = this.api.get('api/myevent', params);
        return req;
    };
    Items.prototype.querydetail = function (params) {
        var req = this.api.get('api/eventdetail', params);
        return req;
    };
    Items.prototype.querytraining = function (params) {
        var req = this.api.get('api/training', params);
        return req;
    };
    Items.prototype.queryletter = function (params) {
        var req = this.api.get('api/myrf', params);
        return req;
    };
    Items.prototype.add = function (item) {
        this.items.push(item);
    };
    Items.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    Items = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* Api */]])
    ], Items);
    return Items;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__prettydate_prettydate__ = __webpack_require__(433);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__prettydate_prettydate__["a" /* PrettydatePipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__prettydate_prettydate__["a" /* PrettydatePipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstRunPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MainPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Tab1Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Tab2Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Tab3Root; });
// The page the user lands on after opening the app and without a session
var FirstRunPage = 'ListMasterPage';
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
var MainPage = 'ListMasterPage';
// The initial root pages for our tabs (remove if not using tabs)
var Tab1Root = 'TutorialPage';
var Tab2Root = 'SearchPage';
var Tab3Root = 'SettingsPage';
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(369);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mocks_providers_items__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_push__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_device__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_pipes_module__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_11__providers__["c" /* Settings */](storage, {
        language: 'fr',
        grant_type: 'password',
        client_id: '1_3bcbxd9e24g0gk5plj0kwgcwg4o8k8g4g123kwc44gcc0gwwk4',
        client_secret: '4ok2x70rlhlnj8g0wws8c8kwcokw80l56lg48goc0ok4w0so0k'
    });
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'CardsPage', segment: 'cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/content/content.module#ContentPageModule', name: 'ContentPage', segment: 'content', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-create/item-create.module#ItemCreatePageModule', name: 'ItemCreatePage', segment: 'item-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-master/list-master.module#ListMasterPageModule', name: 'ListMasterPage', segment: 'list-master', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/logout/logout.module#LogoutPageModule', name: 'LogoutPage', segment: 'logout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myevents/myevents.module#MyeventsPageModule', name: 'MyeventsPage', segment: 'myevents', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/referenceletter/referenceletter.module#ReferenceletterPageModule', name: 'ReferenceletterPage', segment: 'referenceletter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trainings/trainings.module#TrainingsPageModule', name: 'TrainingsPage', segment: 'trainings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__centreabc',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_10__mocks_providers_items__["a" /* Items */],
                __WEBPACK_IMPORTED_MODULE_11__providers__["d" /* User */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_device__["a" /* Device */],
                { provide: __WEBPACK_IMPORTED_MODULE_11__providers__["c" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]] },
                // Keep this to enable Ionic's runtime error handling during development
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrettydatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Generated class for the PrettydatePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var PrettydatePipe = /** @class */ (function () {
    function PrettydatePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    PrettydatePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var date = __WEBPACK_IMPORTED_MODULE_1_moment__(value);
        date.locale('fr');
        return date.format('lll');
    };
    PrettydatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'prettydate',
        })
    ], PrettydatePipe);
    return PrettydatePipe;
}());

//# sourceMappingURL=prettydate.js.map

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 189,
	"./af.js": 189,
	"./ar": 190,
	"./ar-dz": 191,
	"./ar-dz.js": 191,
	"./ar-kw": 192,
	"./ar-kw.js": 192,
	"./ar-ly": 193,
	"./ar-ly.js": 193,
	"./ar-ma": 194,
	"./ar-ma.js": 194,
	"./ar-sa": 195,
	"./ar-sa.js": 195,
	"./ar-tn": 196,
	"./ar-tn.js": 196,
	"./ar.js": 190,
	"./az": 197,
	"./az.js": 197,
	"./be": 198,
	"./be.js": 198,
	"./bg": 199,
	"./bg.js": 199,
	"./bm": 200,
	"./bm.js": 200,
	"./bn": 201,
	"./bn.js": 201,
	"./bo": 202,
	"./bo.js": 202,
	"./br": 203,
	"./br.js": 203,
	"./bs": 204,
	"./bs.js": 204,
	"./ca": 205,
	"./ca.js": 205,
	"./cs": 206,
	"./cs.js": 206,
	"./cv": 207,
	"./cv.js": 207,
	"./cy": 208,
	"./cy.js": 208,
	"./da": 209,
	"./da.js": 209,
	"./de": 210,
	"./de-at": 211,
	"./de-at.js": 211,
	"./de-ch": 212,
	"./de-ch.js": 212,
	"./de.js": 210,
	"./dv": 213,
	"./dv.js": 213,
	"./el": 214,
	"./el.js": 214,
	"./en-au": 215,
	"./en-au.js": 215,
	"./en-ca": 216,
	"./en-ca.js": 216,
	"./en-gb": 217,
	"./en-gb.js": 217,
	"./en-ie": 218,
	"./en-ie.js": 218,
	"./en-il": 219,
	"./en-il.js": 219,
	"./en-nz": 220,
	"./en-nz.js": 220,
	"./eo": 221,
	"./eo.js": 221,
	"./es": 222,
	"./es-do": 223,
	"./es-do.js": 223,
	"./es-us": 224,
	"./es-us.js": 224,
	"./es.js": 222,
	"./et": 225,
	"./et.js": 225,
	"./eu": 226,
	"./eu.js": 226,
	"./fa": 227,
	"./fa.js": 227,
	"./fi": 228,
	"./fi.js": 228,
	"./fo": 229,
	"./fo.js": 229,
	"./fr": 230,
	"./fr-ca": 231,
	"./fr-ca.js": 231,
	"./fr-ch": 232,
	"./fr-ch.js": 232,
	"./fr.js": 230,
	"./fy": 233,
	"./fy.js": 233,
	"./gd": 234,
	"./gd.js": 234,
	"./gl": 235,
	"./gl.js": 235,
	"./gom-latn": 236,
	"./gom-latn.js": 236,
	"./gu": 237,
	"./gu.js": 237,
	"./he": 238,
	"./he.js": 238,
	"./hi": 239,
	"./hi.js": 239,
	"./hr": 240,
	"./hr.js": 240,
	"./hu": 241,
	"./hu.js": 241,
	"./hy-am": 242,
	"./hy-am.js": 242,
	"./id": 243,
	"./id.js": 243,
	"./is": 244,
	"./is.js": 244,
	"./it": 245,
	"./it.js": 245,
	"./ja": 246,
	"./ja.js": 246,
	"./jv": 247,
	"./jv.js": 247,
	"./ka": 248,
	"./ka.js": 248,
	"./kk": 249,
	"./kk.js": 249,
	"./km": 250,
	"./km.js": 250,
	"./kn": 251,
	"./kn.js": 251,
	"./ko": 252,
	"./ko.js": 252,
	"./ky": 253,
	"./ky.js": 253,
	"./lb": 254,
	"./lb.js": 254,
	"./lo": 255,
	"./lo.js": 255,
	"./lt": 256,
	"./lt.js": 256,
	"./lv": 257,
	"./lv.js": 257,
	"./me": 258,
	"./me.js": 258,
	"./mi": 259,
	"./mi.js": 259,
	"./mk": 260,
	"./mk.js": 260,
	"./ml": 261,
	"./ml.js": 261,
	"./mn": 262,
	"./mn.js": 262,
	"./mr": 263,
	"./mr.js": 263,
	"./ms": 264,
	"./ms-my": 265,
	"./ms-my.js": 265,
	"./ms.js": 264,
	"./mt": 266,
	"./mt.js": 266,
	"./my": 267,
	"./my.js": 267,
	"./nb": 268,
	"./nb.js": 268,
	"./ne": 269,
	"./ne.js": 269,
	"./nl": 270,
	"./nl-be": 271,
	"./nl-be.js": 271,
	"./nl.js": 270,
	"./nn": 272,
	"./nn.js": 272,
	"./pa-in": 273,
	"./pa-in.js": 273,
	"./pl": 274,
	"./pl.js": 274,
	"./pt": 275,
	"./pt-br": 276,
	"./pt-br.js": 276,
	"./pt.js": 275,
	"./ro": 277,
	"./ro.js": 277,
	"./ru": 278,
	"./ru.js": 278,
	"./sd": 279,
	"./sd.js": 279,
	"./se": 280,
	"./se.js": 280,
	"./si": 281,
	"./si.js": 281,
	"./sk": 282,
	"./sk.js": 282,
	"./sl": 283,
	"./sl.js": 283,
	"./sq": 284,
	"./sq.js": 284,
	"./sr": 285,
	"./sr-cyrl": 286,
	"./sr-cyrl.js": 286,
	"./sr.js": 285,
	"./ss": 287,
	"./ss.js": 287,
	"./sv": 288,
	"./sv.js": 288,
	"./sw": 289,
	"./sw.js": 289,
	"./ta": 290,
	"./ta.js": 290,
	"./te": 291,
	"./te.js": 291,
	"./tet": 292,
	"./tet.js": 292,
	"./tg": 293,
	"./tg.js": 293,
	"./th": 294,
	"./th.js": 294,
	"./tl-ph": 295,
	"./tl-ph.js": 295,
	"./tlh": 296,
	"./tlh.js": 296,
	"./tr": 297,
	"./tr.js": 297,
	"./tzl": 298,
	"./tzl.js": 298,
	"./tzm": 299,
	"./tzm-latn": 300,
	"./tzm-latn.js": 300,
	"./tzm.js": 299,
	"./ug-cn": 301,
	"./ug-cn.js": 301,
	"./uk": 302,
	"./uk.js": 302,
	"./ur": 303,
	"./ur.js": 303,
	"./uz": 304,
	"./uz-latn": 305,
	"./uz-latn.js": 305,
	"./uz.js": 304,
	"./vi": 306,
	"./vi.js": 306,
	"./x-pseudo": 307,
	"./x-pseudo.js": 307,
	"./yo": 308,
	"./yo.js": 308,
	"./zh-cn": 309,
	"./zh-cn.js": 309,
	"./zh-hk": 310,
	"./zh-hk.js": 310,
	"./zh-tw": 311,
	"./zh-tw.js": 311
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 435;

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or an "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = /** @class */ (function () {
    function Item(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(34);
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
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = /** @class */ (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_api__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(123);
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
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var User = /** @class */ (function () {
    function User(api, storage, device) {
        this.api = api;
        this.storage = storage;
        this.device = device;
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    User.prototype.login = function (accountInfo) {
        var _this = this;
        this.storage.set('token', null);
        var seq = this.api.post('oauth/v2/token', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.access_token !== '' && res.enabled == true) {
                _this.storage.set('token', res.access_token);
                _this.registerdevice();
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    User.prototype.signup = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('signup', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        this._user = false;
    };
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp;
    };
    /**
     * Is logged In
     */
    User.prototype.isLoggedIn = function () {
        var seq = this.api.post('checktoken', []).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.error !== true) {
                return true;
            }
            else {
                return false;
            }
        }, function (err) {
            return false;
        });
        return seq;
    };
    User.prototype.registerdevice = function () {
        var _this = this;
        return this.storage.get('pushid')
            .then(function (pushid) {
            if (pushid !== null) {
                var data = {
                    name: _this.device.manufacturer || '',
                    model: _this.device.model,
                    platform: _this.device.platform,
                    pushid: pushid,
                    uuid: _this.device.uuid
                };
                var seq = _this.api.post('api/device', data).share();
                seq.subscribe(function (res) {
                    // If the API returned a successful response, mark the user as logged in
                    if (res.status == 'success') {
                        _this._loggedIn(res);
                    }
                }, function (err) {
                    console.error('ERROR', err);
                });
                return seq;
            }
        });
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__api_api__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__["a" /* Device */]])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_push__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(translate, platform, settings, config, statusBar, storage, splashScreen, user, push, loadingCtrl, alertCtrl) {
        var _this = this;
        this.translate = translate;
        this.platform = platform;
        this.config = config;
        this.statusBar = statusBar;
        this.storage = storage;
        this.splashScreen = splashScreen;
        this.user = user;
        this.push = push;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages__["a" /* FirstRunPage */];
        this.pages = [
            { title: 'Events', component: 'ListMasterPage', icon: 'md-calendar', id_title: 'EVENTS' },
            { title: 'MyEvents', component: 'MyeventsPage', icon: 'md-paper', id_title: 'MYEVENTS' },
            { title: 'Trainings', component: 'TrainingsPage', icon: 'school', id_title: 'TRAININGS' },
            { title: 'TraiReferenceletternings', component: 'ReferenceletterPage', icon: 'mail', id_title: 'REFERENCELETTER' },
            { title: 'Settings', component: 'SettingsPage', icon: 'settings', id_title: 'SETTINGS_TITLE' },
            { title: 'Contact', component: 'ContactPage', icon: 'information-circle', id_title: 'CONTACT' },
            { title: 'Logout', component: 'LogoutPage', icon: 'exit', id_title: 'LOGOUT' },
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.initPushNotification();
            _this.storage.get('_settings')
                .then(function (settings) {
                if (settings == null) {
                    _this.initTranslate();
                }
                else {
                    var lang = 'en';
                    if (settings.language == 'en') {
                        lang = 'fr';
                    }
                    _this.translate.setDefaultLang(lang);
                    _this.translate.use(settings.language);
                }
            });
        });
    }
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        if (browserLang) {
            if (browserLang === 'zh') {
                var browserCultureLang = this.translate.getBrowserCultureLang();
                if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
                    this.translate.use('zh-cmn-Hans');
                }
                else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
                    this.translate.use('zh-cmn-Hant');
                }
            }
            else {
                this.translate.use(this.translate.getBrowserLang());
            }
        }
        else {
            this.translate.use('en'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.initPushNotification = function () {
        var _this = this;
        if (!this.platform.is('cordova')) {
            console.warn('Push notifications not initialized. Cordova is not available - Run in physical device');
            return;
        }
        var options = {
            android: {
                senderID: '554741126490',
                icon: 'icon',
                iconColor: "#A40046"
            },
            ios: {
                alert: 'true',
                badge: false,
                sound: 'true'
            },
            windows: {}
        };
        var pushObject = this.push.init(options);
        pushObject.on('registration').subscribe(function (data) {
            console.log('device token -> ' + data.registrationId);
            //TODO - send device token to server
            _this.storage.set('pushid', data.registrationId);
        });
        pushObject.on('notification').subscribe(function (data) {
            console.log('message -> ' + data.message);
            //if user using app and push notification comes
            if (data.additionalData.foreground) {
                // if application open, show popup
                if (data.additionalData.page == 'birthday') {
                    var confirmAlert = _this.alertCtrl.create({
                        title: _this.translate.instant('NEW_NOTIFICATION'),
                        message: data.message,
                        buttons: [{
                                text: _this.translate.instant('CLOSE'),
                                role: 'cancel'
                            }]
                    });
                    confirmAlert.present();
                }
                else {
                    var buttonhandler = {
                        text: _this.translate.instant('VIEW'),
                        handler: function () {
                            //TODO: Your logic here
                            if (data.additionalData.page && data.additionalData.id) {
                                _this.nav.push(data.additionalData.page, { itemid: data.additionalData.id });
                            }
                            else if (data.additionalData.page) {
                                _this.nav.push(data.additionalData.page);
                            }
                            else {
                            }
                        }
                    };
                    var confirmAlert = _this.alertCtrl.create({
                        title: _this.translate.instant('NEW_NOTIFICATION'),
                        message: data.message,
                        buttons: [{
                                text: _this.translate.instant('IGNORE'),
                                role: 'cancel'
                            }, buttonhandler]
                    });
                    confirmAlert.present();
                }
            }
            else {
                //if user NOT using app and push notification comes
                //TODO: Your logic on click of push notification directly
                //this.nav.push(DetailsPage, { message: data.message });
                if (data.additionalData.page && data.additionalData.id) {
                    _this.nav.push(data.additionalData.page, { itemid: data.additionalData.id });
                }
                else if (data.additionalData.page) {
                    _this.nav.push(data.additionalData.page);
                }
                else {
                    _this.nav.setRoot('ListMasterPage');
                }
            }
        });
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin' + error); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Issam\superproject\src\app\app.html"*/'<ion-menu [content]="content">\n\n    <ion-content>\n\n      <div class="menu-bg" header-background-image padding [ngStyle]="{\'background-image\': \'url(../assets/images/background/39.jpg)\'}">\n\n        <img src="assets/images/logo/1.png" class="avatar">\n\n        <p class="logo-description"><span>Faire bouger la communauté!</span><br><span>Simple comme l\'ABC!</span></p>\n\n      </div>\n\n      <ion-list no-margin>\n\n        <button menuClose ion-item item-title main-menu no-lines border *ngFor="let p of pages" (click)="openPage(p)">\n\n          <ion-icon icon-small item-left>\n\n            <ion-icon name="{{p.icon}}" color="light"></ion-icon>\n\n          </ion-icon>\n\n          {{ p.id_title | translate }}\n\n        </button>\n\n      </ion-list>\n\n    </ion-content>\n\n  \n\n    </ion-menu>\n\n    <ion-nav #content [root]="rootPage">\n\n      ldkfgdlfkgd\n\n    </ion-nav>'/*ion-inline-end:"C:\Users\Issam\superproject\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__providers__["c" /* Settings */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Config */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["d" /* User */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__ = __webpack_require__(312);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(444);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(445);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap__);
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
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = /** @class */ (function () {
    function Api(http, storage) {
        this.http = http;
        this.storage = storage;
        this.url = 'https://admin.centrebenevoleabc.org';
        //url: string = 'http://localhost/cabc/public/index.php';
        this.oauth = {
            grant_type: 'password',
            client_id: '1_3bcbxd9e24g0gk5plj0kwgcwg4o8k8g4g123kwc44gcc0gwwk4',
            client_secret: '4ok2x70rlhlnj8g0wws8c8kwcokw80l56lg48goc0ok4w0so0k'
        };
    }
    Api.prototype.get = function (endpoint, params, reqOpts) {
        var _this = this;
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].fromPromise(this.storage.get('token')).mergeMap(function (token) {
            if (token) {
                reqOpts.headers = {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + token
                };
            }
            // make request 
            return _this.http.get(_this.url + '/' + endpoint, reqOpts);
        });
        //return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].fromPromise(this.storage.get('token')).mergeMap(function (token) {
            if (endpoint == 'oauth/v2/token' || endpoint == 'updatepassword' || endpoint == 'forgottenpassword' || endpoint == 'subscribe') {
                token = null;
            }
            if (token) {
                if (endpoint != 'checktoken') {
                    if (!reqOpts) {
                        reqOpts = {
                            params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
                        };
                    }
                    reqOpts.headers = {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + token
                    };
                }
                else {
                    return _this.http.post(_this.url + '/' + endpoint, { 'token': token }, reqOpts);
                }
            }
            // make request 
            return _this.http.post(_this.url + '/' + endpoint, Object.assign(body, _this.oauth), reqOpts);
        });
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ })

},[356]);
//# sourceMappingURL=main.js.map