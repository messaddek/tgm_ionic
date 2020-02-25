(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ReportsComponent-reports-module"],{

/***/ "./src/app/ReportsComponent/ReportsIndex.page.html":
/*!*********************************************************!*\
  !*** ./src/app/ReportsComponent/ReportsIndex.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1>There is no reports-index</h1>\n"

/***/ }),

/***/ "./src/app/ReportsComponent/ReportsIndex.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/ReportsComponent/ReportsIndex.page.ts ***!
  \*******************************************************/
/*! exports provided: ReportsIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsIndexPage", function() { return ReportsIndexPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-service */ "./src/app/app-service.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../const */ "./src/app/const.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportsIndexPage = /** @class */ (function () {
    function ReportsIndexPage(nativeStorage, appService, route, router, httpClient) {
        this.nativeStorage = nativeStorage;
        this.appService = appService;
        this.route = route;
        this.router = router;
        this.httpClient = httpClient;
        this.reports = [];
        Object(_const__WEBPACK_IMPORTED_MODULE_5__["logg"])('reportsIndex#constructor');
    }
    ReportsIndexPage.prototype.ngOnInit = function () {
    };
    ReportsIndexPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports-index',
            template: __webpack_require__(/*! ./ReportsIndex.page.html */ "./src/app/ReportsComponent/ReportsIndex.page.html"),
        }),
        __metadata("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"],
            _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ReportsIndexPage);
    return ReportsIndexPage;
}());



/***/ }),

/***/ "./src/app/ReportsComponent/ReportsShow.page.html":
/*!********************************************************!*\
  !*** ./src/app/ReportsComponent/ReportsShow.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<layout-sidemenu>\n  <ion-content>\n\n  <div class='reports-show'>\n    <ion-grid>\n      <ion-row>\n        <ion-col size-md=\"6\" push-md=\"3\" size-sm=\"12\" >\n          <ion-card padding >\n            <h1>{{ report.name }}</h1>\n            <p><i>{{ report.subtitle }}</i></p>\n            <div [innerHTML]=report.description ></div>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <br /><br /><br />\n  <br /><br /><br />\n\n  </ion-content>\n</layout-sidemenu>\n"

/***/ }),

/***/ "./src/app/ReportsComponent/ReportsShow.page.scss":
/*!********************************************************!*\
  !*** ./src/app/ReportsComponent/ReportsShow.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".red {\n  border: 1px solid red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb2hhbW1lZC9Eb2N1bWVudHMvR2l0SHViL3RnbV9pb25pYy9zcmMvYXBwL1JlcG9ydHNDb21wb25lbnQvUmVwb3J0c1Nob3cucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usc0JBQXFCLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvUmVwb3J0c0NvbXBvbmVudC9SZXBvcnRzU2hvdy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5yZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbi5yZXBvcnRzLXNob3cgaW9uLWNhcmQge1xuICBcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/ReportsComponent/ReportsShow.page.ts":
/*!******************************************************!*\
  !*** ./src/app/ReportsComponent/ReportsShow.page.ts ***!
  \******************************************************/
/*! exports provided: ReportsShowPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsShowPage", function() { return ReportsShowPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-router */ "./src/app/app-router.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-service */ "./src/app/app-service.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../const */ "./src/app/const.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var ReportsShowPage = /** @class */ (function () {
    function ReportsShowPage(nativeStorage, appService, route, router, httpClient) {
        var _this = this;
        this.nativeStorage = nativeStorage;
        this.appService = appService;
        this.route = route;
        this.router = router;
        this.httpClient = httpClient;
        this.report = {};
        Object(_const__WEBPACK_IMPORTED_MODULE_6__["logg"])('reportsShow#constructor');
        Object(_const__WEBPACK_IMPORTED_MODULE_6__["logg"])(this.route.snapshot, 'route.snapshot');
        var reportname = this.route.snapshot.params.reportname;
        this.nativeStorage.getItem('current_user').then(function (r) { return JSON.parse(r); }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var p2, answer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        p2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('accessToken', data.longTermToken);
                        return [4 /*yield*/, this.httpClient.get(_app_router__WEBPACK_IMPORTED_MODULE_4__["ApiRouter"].report({ reportname: reportname }), { params: p2 }).toPromise()];
                    case 1:
                        answer = _a.sent();
                        // logg(answer, 'answer');
                        this.report = answer['report'];
                        return [2 /*return*/];
                }
            });
        }); }).catch(function (e) { return __awaiter(_this, void 0, void 0, function () {
            var answer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.get(_app_router__WEBPACK_IMPORTED_MODULE_4__["ApiRouter"].report({ reportname: reportname })).toPromise()];
                    case 1:
                        answer = _a.sent();
                        this.report = answer['report'];
                        return [2 /*return*/];
                }
            });
        }); });
    }
    ReportsShowPage.prototype.ngOnInit = function () {
    };
    ReportsShowPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports-show',
            styles: [__webpack_require__(/*! ./ReportsShow.page.scss */ "./src/app/ReportsComponent/ReportsShow.page.scss")],
            template: __webpack_require__(/*! ./ReportsShow.page.html */ "./src/app/ReportsComponent/ReportsShow.page.html"),
        }),
        __metadata("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"],
            _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ReportsShowPage);
    return ReportsShowPage;
}());



/***/ }),

/***/ "./src/app/ReportsComponent/reports.module.ts":
/*!****************************************************!*\
  !*** ./src/app/ReportsComponent/reports.module.ts ***!
  \****************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ReportsIndex_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ReportsIndex.page */ "./src/app/ReportsComponent/ReportsIndex.page.ts");
/* harmony import */ var _ReportsShow_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ReportsShow.page */ "./src/app/ReportsComponent/ReportsShow.page.ts");
/* harmony import */ var _LayoutSidemenu_LayoutSidemenu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../LayoutSidemenu/LayoutSidemenu.module */ "./src/app/LayoutSidemenu/LayoutSidemenu.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _ReportsIndex_page__WEBPACK_IMPORTED_MODULE_5__["ReportsIndexPage"], },
    { path: 'show/:reportname', component: _ReportsShow_page__WEBPACK_IMPORTED_MODULE_6__["ReportsShowPage"], },
];
var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                // AppModule,
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _LayoutSidemenu_LayoutSidemenu_module__WEBPACK_IMPORTED_MODULE_7__["LayoutSidemenuModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_ReportsIndex_page__WEBPACK_IMPORTED_MODULE_5__["ReportsIndexPage"], _ReportsShow_page__WEBPACK_IMPORTED_MODULE_6__["ReportsShowPage"]]
        })
    ], ReportsModule);
    return ReportsModule;
}());



/***/ })

}]);
//# sourceMappingURL=ReportsComponent-reports-module.js.map