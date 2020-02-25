(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-report-add-report-module"],{

/***/ "./src/app/AccountComponent/add-report/add-report.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/AccountComponent/add-report/add-report.module.ts ***!
  \******************************************************************/
/*! exports provided: AddReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReportPageModule", function() { return AddReportPageModule; });
/* harmony import */ var _LayoutSidemenu_LayoutSidemenu_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../LayoutSidemenu/LayoutSidemenu.module */ "./src/app/LayoutSidemenu/LayoutSidemenu.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _add_report_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-report.page */ "./src/app/AccountComponent/add-report/add-report.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _add_report_page__WEBPACK_IMPORTED_MODULE_6__["AddReportPage"]
    }
];
var AddReportPageModule = /** @class */ (function () {
    function AddReportPageModule() {
    }
    AddReportPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _LayoutSidemenu_LayoutSidemenu_module__WEBPACK_IMPORTED_MODULE_0__["LayoutSidemenuModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_report_page__WEBPACK_IMPORTED_MODULE_6__["AddReportPage"]]
        })
    ], AddReportPageModule);
    return AddReportPageModule;
}());



/***/ }),

/***/ "./src/app/AccountComponent/add-report/add-report.page.html":
/*!******************************************************************!*\
  !*** ./src/app/AccountComponent/add-report/add-report.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<layout-sidemenu>\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Add Report</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content padding>\n    <form [formGroup]=\"addRepprt\" (ngSubmit)=\"logReport()\">\n      <ion-item>\n        <ion-label>Todo</ion-label>\n        <ion-input type=\"text\" formControlName=\"title\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Subtitle</ion-label>\n        <ion-textarea formControlName=\"subtitle\"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label>Body</ion-label>\n        <ion-textarea formControlName=\"body\"></ion-textarea>\n      </ion-item>\n      <button ion-button type=\"submit\" [disabled]=\"!addReport.valid\">\n        Publish\n      </button>\n    </form>\n  </ion-content>\n</layout-sidemenu>"

/***/ }),

/***/ "./src/app/AccountComponent/add-report/add-report.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/AccountComponent/add-report/add-report.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FjY291bnRDb21wb25lbnQvYWRkLXJlcG9ydC9hZGQtcmVwb3J0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/AccountComponent/add-report/add-report.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/AccountComponent/add-report/add-report.page.ts ***!
  \****************************************************************/
/*! exports provided: AddReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReportPage", function() { return AddReportPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddReportPage = /** @class */ (function () {
    function AddReportPage(formBuilder) {
        this.formBuilder = formBuilder;
        this.addReport = formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            subtitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            body: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    AddReportPage.prototype.logReport = function () {
        alert('Published');
    };
    AddReportPage.prototype.ngOnInit = function () { };
    AddReportPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-report',
            template: __webpack_require__(/*! ./add-report.page.html */ "./src/app/AccountComponent/add-report/add-report.page.html"),
            styles: [__webpack_require__(/*! ./add-report.page.scss */ "./src/app/AccountComponent/add-report/add-report.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AddReportPage);
    return AddReportPage;
}());



/***/ })

}]);
//# sourceMappingURL=add-report-add-report-module.js.map