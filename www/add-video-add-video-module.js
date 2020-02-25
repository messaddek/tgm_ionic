(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-video-add-video-module"],{

/***/ "./src/app/AccountComponent/add-video/add-video.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/AccountComponent/add-video/add-video.module.ts ***!
  \****************************************************************/
/*! exports provided: AddVideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVideoPageModule", function() { return AddVideoPageModule; });
/* harmony import */ var _progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../progress-bar/progress-bar.module */ "./src/app/progress-bar/progress-bar.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _add_video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-video.page */ "./src/app/AccountComponent/add-video/add-video.page.ts");
/* harmony import */ var src_app_LayoutSidemenu_LayoutSidemenu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/LayoutSidemenu/LayoutSidemenu.module */ "./src/app/LayoutSidemenu/LayoutSidemenu.module.ts");
/* harmony import */ var src_app_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/file-upload/file-upload.module */ "./src/app/file-upload/file-upload.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _add_video_page__WEBPACK_IMPORTED_MODULE_6__["AddVideoPage"]
    }
];
var AddVideoPageModule = /** @class */ (function () {
    function AddVideoPageModule() {
    }
    AddVideoPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                src_app_LayoutSidemenu_LayoutSidemenu_module__WEBPACK_IMPORTED_MODULE_7__["LayoutSidemenuModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"],
                _progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_0__["ProgressBarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_video_page__WEBPACK_IMPORTED_MODULE_6__["AddVideoPage"]]
        })
    ], AddVideoPageModule);
    return AddVideoPageModule;
}());



/***/ }),

/***/ "./src/app/AccountComponent/add-video/add-video.page.html":
/*!****************************************************************!*\
  !*** ./src/app/AccountComponent/add-video/add-video.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<layout-sidemenu>\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Add Video</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content padding>\n    <form [formGroup]=\"addVideo\" (ngSubmit)=\"logReport()\">\n      <ion-item>\n        <ion-label>Todo</ion-label>\n        <ion-input type=\"text\" formControlName=\"title\"></ion-input>\n      </ion-item>\n      <app-file-upload formControlName=\"image\" [progress]=\"progress\"></app-file-upload>\n      <button ion-button type=\"submit\" [disabled]=\"!addVideo.valid\">\n        Publish\n      </button>\n    </form>\n  </ion-content>\n</layout-sidemenu>"

/***/ }),

/***/ "./src/app/AccountComponent/add-video/add-video.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/AccountComponent/add-video/add-video.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FjY291bnRDb21wb25lbnQvYWRkLXZpZGVvL2FkZC12aWRlby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/AccountComponent/add-video/add-video.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/AccountComponent/add-video/add-video.page.ts ***!
  \**************************************************************/
/*! exports provided: AddVideoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVideoPage", function() { return AddVideoPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_validators_requiredFileType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/validators/requiredFileType */ "./src/app/validators/requiredFileType.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddVideoPage = /** @class */ (function () {
    function AddVideoPage(formBuilder) {
        this.formBuilder = formBuilder;
        this.addVideo = formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            subtitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(src_app_validators_requiredFileType__WEBPACK_IMPORTED_MODULE_2__["requiredFileType"])('mp4')]
        });
    }
    AddVideoPage.prototype.logReport = function () {
        alert('Published');
    };
    AddVideoPage.prototype.ngOnInit = function () { };
    AddVideoPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-video',
            template: __webpack_require__(/*! ./add-video.page.html */ "./src/app/AccountComponent/add-video/add-video.page.html"),
            styles: [__webpack_require__(/*! ./add-video.page.scss */ "./src/app/AccountComponent/add-video/add-video.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AddVideoPage);
    return AddVideoPage;
}());



/***/ }),

/***/ "./src/app/file-upload/file-upload.component.html":
/*!********************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <span>Choose file</span>\n  <span>{{file ? file.name : 'or drag and drop file here' }}</span>\n  <input class=\"file-input\" type=\"file\">\n</div>\n\n<progress-bar [progress]=\"progress\"></progress-bar>"

/***/ }),

/***/ "./src/app/file-upload/file-upload.component.scss":
/*!********************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/file-upload/file-upload.component.ts":
/*!******************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.ts ***!
  \******************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
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


var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent(host) {
        this.host = host;
        this.file = null;
    }
    FileUploadComponent_1 = FileUploadComponent;
    FileUploadComponent.prototype.emitFiles = function (event) {
        var file = event && event.item(0);
        this.onChange(file);
        this.file = file;
    };
    FileUploadComponent.prototype.writeValue = function (value) {
        // clear file input
        this.host.nativeElement.value = '';
        this.file = null;
    };
    FileUploadComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    FileUploadComponent.prototype.registerOnTouched = function (fn) { };
    var FileUploadComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileUploadComponent.prototype, "progress", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('change', ['$event.target.files']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [FileList]),
        __metadata("design:returntype", void 0)
    ], FileUploadComponent.prototype, "emitFiles", null);
    FileUploadComponent = FileUploadComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-file-upload',
            template: __webpack_require__(/*! ./file-upload.component.html */ "./src/app/file-upload/file-upload.component.html"),
            styles: [__webpack_require__(/*! ./file-upload.component.scss */ "./src/app/file-upload/file-upload.component.scss")],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: FileUploadComponent_1,
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], FileUploadComponent);
    return FileUploadComponent;
}());



/***/ }),

/***/ "./src/app/file-upload/file-upload.module.ts":
/*!***************************************************!*\
  !*** ./src/app/file-upload/file-upload.module.ts ***!
  \***************************************************/
/*! exports provided: FileUploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadModule", function() { return FileUploadModule; });
/* harmony import */ var _file_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-upload.component */ "./src/app/file-upload/file-upload.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FileUploadModule = /** @class */ (function () {
    function FileUploadModule() {
    }
    FileUploadModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_file_upload_component__WEBPACK_IMPORTED_MODULE_0__["FileUploadComponent"]],
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]],
            exports: [_file_upload_component__WEBPACK_IMPORTED_MODULE_0__["FileUploadComponent"]]
        })
    ], FileUploadModule);
    return FileUploadModule;
}());



/***/ }),

/***/ "./src/app/progress-bar/progress-bar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/progress-bar/progress-bar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress-outer\">\n  <div class=\"progress-inner\" [style.width]=\"progress + '%'\">\n    {{progress}}%\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/progress-bar/progress-bar.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/progress-bar/progress-bar.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "progress-bar .progress-outer {\n  width: 96%;\n  margin: 10px 2%;\n  padding: 3px;\n  text-align: center;\n  background-color: #f4f4f4;\n  border: 1px solid #dcdcdc;\n  color: #fff;\n  border-radius: 20px; }\n\nprogress-bar .progress-inner {\n  min-width: 15%;\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 5px;\n  border-radius: 20px;\n  background-color: green; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb2hhbW1lZC9Eb2N1bWVudHMvR2l0SHViL3RnbV9pb25pYy9zcmMvYXBwL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHUSxXQUFVO0VBQ1YsZ0JBQWU7RUFDZixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLDBCQUF5QjtFQUN6QiwwQkFBeUI7RUFDekIsWUFBVztFQUNYLG9CQUFtQixFQUN0Qjs7QUFYTDtFQWNRLGVBQWM7RUFDZCxvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWixvQkFBbUI7RUFDbkIsd0JBQXVCLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInByb2dyZXNzLWJhciB7XG5cbiAgICAucHJvZ3Jlc3Mtb3V0ZXIge1xuICAgICAgICB3aWR0aDogOTYlO1xuICAgICAgICBtYXJnaW46IDEwcHggMiU7XG4gICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB9XG5cbiAgICAucHJvZ3Jlc3MtaW5uZXIge1xuICAgICAgICBtaW4td2lkdGg6IDE1JTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICB9XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/progress-bar/progress-bar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/progress-bar/progress-bar.component.ts ***!
  \********************************************************/
/*! exports provided: ProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('progress'),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "progress", void 0);
    ProgressBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'progress-bar',
            template: __webpack_require__(/*! ./progress-bar.component.html */ "./src/app/progress-bar/progress-bar.component.html"),
            styles: [__webpack_require__(/*! ./progress-bar.component.scss */ "./src/app/progress-bar/progress-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());



/***/ }),

/***/ "./src/app/progress-bar/progress-bar.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/progress-bar/progress-bar.module.ts ***!
  \*****************************************************/
/*! exports provided: ProgressBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarModule", function() { return ProgressBarModule; });
/* harmony import */ var _progress_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress-bar.component */ "./src/app/progress-bar/progress-bar.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProgressBarModule = /** @class */ (function () {
    function ProgressBarModule() {
    }
    ProgressBarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_progress_bar_component__WEBPACK_IMPORTED_MODULE_0__["ProgressBarComponent"]],
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]],
            exports: [_progress_bar_component__WEBPACK_IMPORTED_MODULE_0__["ProgressBarComponent"]]
        })
    ], ProgressBarModule);
    return ProgressBarModule;
}());



/***/ }),

/***/ "./src/app/validators/requiredFileType.ts":
/*!************************************************!*\
  !*** ./src/app/validators/requiredFileType.ts ***!
  \************************************************/
/*! exports provided: requiredFileType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredFileType", function() { return requiredFileType; });
function requiredFileType(type) {
    return function (control) {
        var file = control.value;
        if (file) {
            var extension = file.name.split('.')[1].toLowerCase();
            if (type.toLowerCase() !== extension.toLowerCase()) {
                return {
                    requiredFileType: true
                };
            }
            return null;
        }
        return null;
    };
}


/***/ })

}]);
//# sourceMappingURL=add-video-add-video-module.js.map