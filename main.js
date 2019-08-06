(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/AppRoutes.ts":
/*!******************************!*\
  !*** ./src/app/AppRoutes.ts ***!
  \******************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _my_account_component_my_account_component_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-account-component/my-account-component.component */ "./src/app/my-account-component/my-account-component.component.ts");
/* harmony import */ var _contact_us_component_contact_us_component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-us-component/contact-us-component.component */ "./src/app/contact-us-component/contact-us-component.component.ts");
/* harmony import */ var _create_account_component_create_account_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-account-component/create-account-component.component */ "./src/app/create-account-component/create-account-component.component.ts");
/* harmony import */ var _home_page_component_home_page_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page-component/home-page-component.component */ "./src/app/home-page-component/home-page-component.component.ts");
/* harmony import */ var _more_stuff_component_more_stuff_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./more-stuff-component/more-stuff-component.component */ "./src/app/more-stuff-component/more-stuff-component.component.ts");
/* harmony import */ var _demo_page_component_demo_page_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo-page-component/demo-page-component.component */ "./src/app/demo-page-component/demo-page-component.component.ts");
/* harmony import */ var _detail_page_component_detail_page_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-page-component/detail-page-component.component */ "./src/app/detail-page-component/detail-page-component.component.ts");
/* harmony import */ var _cart_compoent_cart_compoent_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cart-compoent/cart-compoent.component */ "./src/app/cart-compoent/cart-compoent.component.ts");








var AppRoutes = [
    { path: 'HomePage', component: _home_page_component_home_page_component_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponentComponent"] },
    { path: 'DetailPage/:id', component: _detail_page_component_detail_page_component_component__WEBPACK_IMPORTED_MODULE_6__["DetailPageComponentComponent"] },
    { path: 'MyAccount', component: _my_account_component_my_account_component_component__WEBPACK_IMPORTED_MODULE_0__["MyAccountComponentComponent"] },
    { path: 'DemoPage', component: _demo_page_component_demo_page_component_component__WEBPACK_IMPORTED_MODULE_5__["DemoPageComponentComponent"] },
    { path: 'ContactUs', component: _contact_us_component_contact_us_component_component__WEBPACK_IMPORTED_MODULE_1__["ContactUsComponentComponent"] },
    { path: 'CreateAccount', component: _create_account_component_create_account_component_component__WEBPACK_IMPORTED_MODULE_2__["CreateAccountComponentComponent"] },
    { path: 'MoreStuffComingSoon', component: _more_stuff_component_more_stuff_component_component__WEBPACK_IMPORTED_MODULE_4__["MoreStuffComponentComponent"] },
    { path: 'CheckOut', component: _cart_compoent_cart_compoent_component__WEBPACK_IMPORTED_MODULE_7__["CartCompoentComponent"] },
    { path: '', redirectTo: 'HomePage', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>\n<app-footer-component></app-footer-component>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/firebase.service */ "./src/app/service/firebase.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _footer_component_footer_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer-component/footer-component.component */ "./src/app/footer-component/footer-component.component.ts");
/* harmony import */ var _my_account_component_my_account_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-account-component/my-account-component.component */ "./src/app/my-account-component/my-account-component.component.ts");
/* harmony import */ var _contact_us_component_contact_us_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact-us-component/contact-us-component.component */ "./src/app/contact-us-component/contact-us-component.component.ts");
/* harmony import */ var _AppRoutes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AppRoutes */ "./src/app/AppRoutes.ts");
/* harmony import */ var _create_account_component_create_account_component_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-account-component/create-account-component.component */ "./src/app/create-account-component/create-account-component.component.ts");
/* harmony import */ var _home_page_component_home_page_component_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home-page-component/home-page-component.component */ "./src/app/home-page-component/home-page-component.component.ts");
/* harmony import */ var _more_stuff_component_more_stuff_component_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./more-stuff-component/more-stuff-component.component */ "./src/app/more-stuff-component/more-stuff-component.component.ts");
/* harmony import */ var _demo_page_component_demo_page_component_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./demo-page-component/demo-page-component.component */ "./src/app/demo-page-component/demo-page-component.component.ts");
/* harmony import */ var _detail_page_component_detail_page_component_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./detail-page-component/detail-page-component.component */ "./src/app/detail-page-component/detail-page-component.component.ts");
/* harmony import */ var _cart_compoent_cart_compoent_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cart-compoent/cart-compoent.component */ "./src/app/cart-compoent/cart-compoent.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
                _footer_component_footer_component_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponentComponent"],
                _my_account_component_my_account_component_component__WEBPACK_IMPORTED_MODULE_8__["MyAccountComponentComponent"],
                _contact_us_component_contact_us_component_component__WEBPACK_IMPORTED_MODULE_9__["ContactUsComponentComponent"],
                _create_account_component_create_account_component_component__WEBPACK_IMPORTED_MODULE_11__["CreateAccountComponentComponent"],
                _home_page_component_home_page_component_component__WEBPACK_IMPORTED_MODULE_12__["HomePageComponentComponent"],
                _more_stuff_component_more_stuff_component_component__WEBPACK_IMPORTED_MODULE_13__["MoreStuffComponentComponent"],
                _demo_page_component_demo_page_component_component__WEBPACK_IMPORTED_MODULE_14__["DemoPageComponentComponent"],
                _detail_page_component_detail_page_component_component__WEBPACK_IMPORTED_MODULE_15__["DetailPageComponentComponent"],
                _cart_compoent_cart_compoent_component__WEBPACK_IMPORTED_MODULE_16__["CartCompoentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_AppRoutes__WEBPACK_IMPORTED_MODULE_10__["AppRoutes"]),
                angularfire2__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].firebaseConfig),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_18__["AngularFireDatabaseModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"]
            ],
            providers: [
                _service_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__["AngularFireAuth"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart-compoent/cart-compoent.component.css":
/*!***********************************************************!*\
  !*** ./src/app/cart-compoent/cart-compoent.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cart-compoent/cart-compoent.component.html":
/*!************************************************************!*\
  !*** ./src/app/cart-compoent/cart-compoent.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-content\" class=\"single-page\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <ul class=\"breadcrumb\">\n                    <li><a href=\"index.html\">Home</a></li>\n                    <li><a href=\"cart.html\">Cart</a></li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"product well\" *ngFor=\"let product of cartProductArray\">\n\n                <div class=\"col-md-3\">\n                    <div class=\"image\">\n                        <img [src]=\"product.productimgUrl\" />\n                    </div>\n                </div>\n                <div class=\"col-md-9\">\n                    <div class=\"caption\">\n                        <div class=\"name\">\n                            <h3><a [routerLink]=\"['/DemoPage']\">Aliquam erat volutpat</a></h3>\n                        </div>\n                        <div class=\"info\">\n                            <ul>\n                                <li>Brand: {{product.brandName}}</li>\n                                <li>ID: {{product.productId}}</li>\n                            </ul>\n                        </div>\n                        <div class=\"price\">{{product.productActulaPrice}}<span>{{product.productDiscountPrice}}</span></div>\n                        <label>Qty: </label> <input class=\"form-inline quantity\" type=\"text\" value=\"1\"><a class=\"btn btn-2 \">Update</a>\n                        <hr>\n                        <a class=\"btn btn-default pull-right\" (click)='removeProduct(product)'>REMOVE</a>\n                    </div>\n                </div>\n                <div class=\"clear\"></div>\n            </div>\n        </div>\n        <div class=\"row\" *ngIf=\" this.firebaseService.getcartproductLenth() == 0 \">\n            <div class=\"jumbotron\">\n                <h1>Khali he </h1>\n            </div>\n\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4 col-md-offset-8 \">\n                <a class=\"btn btn-1\">Continue To Shopping</a>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"pricedetails\">\n                <div class=\"col-md-4 col-md-offset-8\">\n                    <table>\n                        <h6>Price Details</h6>\n                        <tr>\n                            <td>Total</td>\n                            <td>350.00</td>\n                        </tr>\n                        <tr>\n                            <td>Discount</td>\n                            <td>-----</td>\n                        </tr>\n                        <tr>\n                            <td>Delivery Charges</td>\n                            <td>100.00</td>\n                        </tr>\n                        <tr style=\"border-top: 1px solid #333\">\n                            <td>\n                                <h5>TOTAL</h5>\n                            </td>\n                            <td>400.00</td>\n                        </tr>\n                    </table>\n                    <a class=\"btn btn-1\">Checkout</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/cart-compoent/cart-compoent.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/cart-compoent/cart-compoent.component.ts ***!
  \**********************************************************/
/*! exports provided: CartCompoentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartCompoentComponent", function() { return CartCompoentComponent; });
/* harmony import */ var _service_firebase_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../service/firebase.service */ "./src/app/service/firebase.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartCompoentComponent = /** @class */ (function () {
    function CartCompoentComponent(firebaseService) {
        this.firebaseService = firebaseService;
    }
    CartCompoentComponent.prototype.removeProduct = function (product) {
        this.firebaseService.deleteCartProduct(product);
    };
    CartCompoentComponent.prototype.ngOnInit = function () {
        this.cartProductArray = this.firebaseService.getCartProductArray();
    };
    CartCompoentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart-compoent',
            template: __webpack_require__(/*! ./cart-compoent.component.html */ "./src/app/cart-compoent/cart-compoent.component.html"),
            styles: [__webpack_require__(/*! ./cart-compoent.component.css */ "./src/app/cart-compoent/cart-compoent.component.css")]
        }),
        __metadata("design:paramtypes", [_service_firebase_service__WEBPACK_IMPORTED_MODULE_0__["FirebaseService"]])
    ], CartCompoentComponent);
    return CartCompoentComponent;
}());



/***/ }),

/***/ "./src/app/contact-us-component/contact-us-component.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/contact-us-component/contact-us-component.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact-us-component/contact-us-component.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/contact-us-component/contact-us-component.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-content\" class=\"single-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <ul class=\"breadcrumb\">\n          <li><a href=\"index.html\">Home</a></li>\n          <li><a href=\"contact.html\">Contact Us</a></li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"heading\"><h1>CONTACT US</h1></div>\n      </div>\n      <div class=\"col-md-6\" style=\"margin-bottom: 30px;\">\n        <form name=\"form1\" id=\"ff\" method=\"post\" action=\"contact.php\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Your Name *\" name=\"name\" id=\"name\" required data-validation-required-message=\"Please enter your name.\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"email\" class=\"form-control\" placeholder=\"Your Email *\" name=\"email\" id=\"email\" required data-validation-required-message=\"Please enter your email address.\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"tel\" class=\"form-control\" placeholder=\"Your Phone *\" name=\"phone\" id=\"phone\" required data-validation-required-message=\"Please enter your phone number.\">\n          </div>\n          <div class=\"form-group\">\n            <textarea class=\"form-control\" placeholder=\"Your Message *\" name=\"message\" id=\"message\" required data-validation-required-message=\"Please enter a message.\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"btn btn-1\">Send Message</button>\n        </form>\n      </div>\n      <div class=\"col-md-6\">\n        <p><span class=\"glyphicon glyphicon-home\"></span> California, United States 3000009</p>\n        <p><span class=\"glyphicon glyphicon-earphone\"></span> +6221 888 888 90 , +6221 888 88891</p>\n        <p><span class=\"glyphicon glyphicon-envelope\"></span> info@yourdomain.com</p>\n        <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.289259162295!2d-120.7989351!3d37.5246781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8091042b3386acd7%3A0x3b4a4cedc60363dd!2sMain+St%2C+Denair%2C+CA+95316%2C+Hoa+K%E1%BB%B3!5e0!3m2!1svi!2s!4v1434016649434\" width=\"95%\" height=\"230\" frameborder=\"0\" style=\"border:0\"></iframe>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact-us-component/contact-us-component.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/contact-us-component/contact-us-component.component.ts ***!
  \************************************************************************/
/*! exports provided: ContactUsComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponentComponent", function() { return ContactUsComponentComponent; });
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

var ContactUsComponentComponent = /** @class */ (function () {
    function ContactUsComponentComponent() {
    }
    ContactUsComponentComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us-component',
            template: __webpack_require__(/*! ./contact-us-component.component.html */ "./src/app/contact-us-component/contact-us-component.component.html"),
            styles: [__webpack_require__(/*! ./contact-us-component.component.css */ "./src/app/contact-us-component/contact-us-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponentComponent);
    return ContactUsComponentComponent;
}());



/***/ }),

/***/ "./src/app/create-account-component/create-account-component.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/create-account-component/create-account-component.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/create-account-component/create-account-component.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/create-account-component/create-account-component.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-content\" class=\"single-page\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <ul class=\"breadcrumb\">\n                    <li><a href=\"index.html\">Home</a></li>\n                    <li><a>Create Account</a></li>\n                </ul>\n            </div>\n        </div>\n\n\n        <div class=\"row\">\n            <div class=\"col-md-5\">\n                <form #f='ngForm' [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n                    <input type=\"hidden\" formControlName=\"$key\">\n                    <div class=\"form-group\">\n                        <label>Full Name</label>\n                        <input formControlName=\"fullName\" class=\"form-control\">\n                        <div *ngIf=\"fullName.touched && fullName.invalid\" class=\"alert alert-danger\">\n                            <div *ngIf=\"fullName.errors.required\">Full Name is required.</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Email</label>\n                        <input formControlName=\"email\" class=\"form-control\">\n                        <div *ngIf=\"email.touched && email.invalid\" class=\"alert alert-danger\">\n                            <div *ngIf=\"email.errors.email\">Email format is incorrect</div>\n                        </div>\n\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Mobile</label>\n                        <input type=\"number\" formControlName=\"mobile\" class=\"form-control\">\n                        <div *ngIf=\"mobile.touched && mobile.invalid\" class=\"alert alert-danger\">\n                            <div *ngIf=\"mobile.errors.required\">Mobile number is required.</div>\n                            <div *ngIf=\"mobile.errors.minLength\">Atleast 5 charachter required</div>\n\n                        </div>\n\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label>Location</label>\n                        <input formControlName=\"location\" class=\"form-control\">\n                        <div *ngIf=\"location.touched && location.invalid\" class=\"alert alert-danger\">\n                            <div *ngIf=\"location.errors.required\">Location is required.</div>\n                        </div>\n\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"\">Password</label>\n                        <input formControlName=\"newPassword\" type=\"password\" class=\"form-control\">\n                        <div *ngIf=\"newPassword.touched && newPassword.invalid\" class=\"alert alert-danger\">\n                            <div *ngIf=\"newPassword.errors.required\">password is required.</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"\">Confirm Password</label>\n                        <input formControlName=\"confirmPassword\" type=\"password\" class=\"form-control\">\n                        <div *ngIf=\"confirmPassword.touched && confirmPassword.invalid\" class=\"alert alert-danger\">\n                            <div *ngIf=\"confirmPassword.errors.required\">Confirm password is required.</div>\n                        </div>\n                        <div *ngIf=\"confirmPassword.valid && form.invalid && form.errors?.passwordsShouldMatch\" class=\"alert alert-danger\">\n                            Passwords do not match.\n                        </div>\n\n                    </div>\n                    <div class=\"form-group\">\n                        <input name=\"agree\" id=\"agree\" type=\"checkbox\"> I agree to your website.\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"submit\" [disabled]=\"!f.valid\" class=\"btn btn-primary\" value=\"Submit\">\n                    </div>\n                </form>\n                <div class=\"alert alert-info\" *ngIf=\"showSuccessMessage\">\n                    Submitted <strong>successfully.</strong>\n                </div>\n\n            </div>\n            <!-- <div class=\"col-md-7\">\n                <app-customer-list></app-customer-list>\n            </div>-->\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/create-account-component/create-account-component.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/create-account-component/create-account-component.component.ts ***!
  \********************************************************************************/
/*! exports provided: CreateAccountComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountComponentComponent", function() { return CreateAccountComponentComponent; });
/* harmony import */ var _service_firebase_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../service/firebase.service */ "./src/app/service/firebase.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _password_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password.validators */ "./src/app/create-account-component/password.validators.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateAccountComponentComponent = /** @class */ (function () {
    function CreateAccountComponentComponent(router, firebaseService, fb) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.form = fb.group({
            $key: [null],
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
            location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            //  gender: new FormControl('', [Validators.required]),
            newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
            validator: _password_validators__WEBPACK_IMPORTED_MODULE_3__["PasswordValidators"].passwordsShouldMatch,
        });
    }
    Object.defineProperty(CreateAccountComponentComponent.prototype, "fullName", {
        // formControls = this.form.controls;
        get: function () { return this.form.get('fullName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateAccountComponentComponent.prototype, "email", {
        get: function () { return this.form.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateAccountComponentComponent.prototype, "mobile", {
        get: function () { return this.form.get('mobile'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateAccountComponentComponent.prototype, "location", {
        get: function () { return this.form.get('location'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateAccountComponentComponent.prototype, "newPassword", {
        get: function () { return this.form.get('newPassword'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateAccountComponentComponent.prototype, "confirmPassword", {
        get: function () { return this.form.get('confirmPassword'); },
        enumerable: true,
        configurable: true
    });
    CreateAccountComponentComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.valid) {
            if (this.form.get('$key').value == null) {
                this.firebaseService.insertCustomer(this.form.value);
            }
            else {
                this.firebaseService.updateCustomer(this.form.value);
            }
            this.showSuccessMessage = true;
            this.result = true;
            setTimeout(function () { return _this.showSuccessMessage = false; }, 3000);
            this.submitted = false;
            this.form.reset();
            //this is to be done for proper reset operation
            this.form.setValue({
                $key: null,
                fullName: '',
                email: '',
                mobile: '',
                location: '',
                newPassword: '',
                confirmPassword: ''
            });
        }
        if (this.result) {
            setTimeout(function () { return _this.router.navigate(['/']); }, 3000);
        }
    };
    CreateAccountComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-account-component',
            template: __webpack_require__(/*! ./create-account-component.component.html */ "./src/app/create-account-component/create-account-component.component.html"),
            styles: [__webpack_require__(/*! ./create-account-component.component.css */ "./src/app/create-account-component/create-account-component.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _service_firebase_service__WEBPACK_IMPORTED_MODULE_0__["FirebaseService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CreateAccountComponentComponent);
    return CreateAccountComponentComponent;
}());



/***/ }),

/***/ "./src/app/create-account-component/password.validators.ts":
/*!*****************************************************************!*\
  !*** ./src/app/create-account-component/password.validators.ts ***!
  \*****************************************************************/
/*! exports provided: PasswordValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidators", function() { return PasswordValidators; });
var PasswordValidators = /** @class */ (function () {
    function PasswordValidators() {
    }
    PasswordValidators.validOldPassword = function (control) {
        return new Promise(function (resolve) {
            if (control.value !== '1234')
                resolve({ invalidOldPassword: true });
            else
                resolve(null);
        });
    };
    PasswordValidators.passwordsShouldMatch = function (control) {
        var newPassword = control.get('newPassword');
        var confirmPassword = control.get('confirmPassword');
        if (newPassword.value !== confirmPassword.value)
            return { passwordsShouldMatch: true };
        return null;
    };
    PasswordValidators.cannotContainSpace = function (control) {
        if (control.value.indexOf(' ') >= 0)
            return { cannotContainSpace: true };
        return null;
    };
    return PasswordValidators;
}());



/***/ }),

/***/ "./src/app/demo-page-component/demo-page-component.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/demo-page-component/demo-page-component.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgSize{\r\n  width: 153px;\r\n  height: 300px;\r\n}\r\n\r\n.widget .content {\r\n  padding: 15px 20px;\r\n}\r\n\r\n.widget.wid-discouts {\r\n  padding: 15px 20px;\r\n}\r\n\r\n.widget.wid-brand {\r\n  padding: 15px 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/demo-page-component/demo-page-component.component.html":
/*!************************************************************************!*\
  !*** ./src/app/demo-page-component/demo-page-component.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-content\" class=\"single-page\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t<ul class=\"breadcrumb\">\n\t\t\t\t\t\t<li><a href=\"index.html\">Home</a></li>\n\t\t\t\t\t\t<li><a href=\"category.html\">DEMO PAGE :</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div id=\"main-content\" class=\"col-md-8\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"products\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"product\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"image\"><a href=\"product.html\"><img src=\"../../assets/images/iphone.png\" /></a></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"buttons\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn cart\" ><span class=\"glyphicon glyphicon-shopping-cart\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn wishlist\" ><span class=\"glyphicon glyphicon-heart\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn compare\" ><span class=\"glyphicon glyphicon-transfer\"></span></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"name\"><h3><a href=\"product.html\">Aliquam erat volutpat</a></h3></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"price\">$122<span>$98</span></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating\"><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star-empty\"></span></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"product\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"image\"><a href=\"product.html\"><img src=\"../../assets/images/galaxy-s4.jpg\" /></a></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"buttons\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn cart\" ><span class=\"glyphicon glyphicon-shopping-cart\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn wishlist\" ><span class=\"glyphicon glyphicon-heart\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn compare\" ><span class=\"glyphicon glyphicon-transfer\"></span></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"name\"><h3><a href=\"product.html\">Aliquam erat volutpat</a></h3></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"price\">$122<span>$98</span></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating\"><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star-empty\"></span><span class=\"glyphicon glyphicon-star-empty\"></span></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"product\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"image\"><a href=\"product.html\"><img src=\"../../assets/images/galaxy-note.jpg\" /></a></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"buttons\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn cart\" ><span class=\"glyphicon glyphicon-shopping-cart\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn wishlist\" ><span class=\"glyphicon glyphicon-heart\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn compare\" ><span class=\"glyphicon glyphicon-transfer\"></span></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"name\"><h3><a href=\"product.html\">Aliquam erat volutpat</a></h3></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"price\">$122<span>$98</span></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating\"><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star-empty\"></span><span class=\"glyphicon glyphicon-star-empty\"></span><span class=\"glyphicon glyphicon-star-empty\"></span></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"products\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"product\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"image\"><a href=\"product.html\"><img src=\"../../assets/images/iphone.png\" /></a></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"buttons\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn cart\" ><span class=\"glyphicon glyphicon-shopping-cart\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn wishlist\" ><span class=\"glyphicon glyphicon-heart\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn compare\" ><span class=\"glyphicon glyphicon-transfer\"></span></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"name\"><h3><a href=\"product.html\">Aliquam erat volutpat</a></h3></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"price\">$122<span>$98</span></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating\"><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star-empty\"></span></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"product\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"image\"><a href=\"product.html\"><img src=\"../../assets/images/galaxy-s4.jpg\" /></a></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"buttons\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn cart\" ><span class=\"glyphicon glyphicon-shopping-cart\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn wishlist\" ><span class=\"glyphicon glyphicon-heart\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn compare\" ><span class=\"glyphicon glyphicon-transfer\"></span></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"name\"><h3><a href=\"product.html\">Aliquam erat volutpat</a></h3></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"price\">$122<span>$98</span></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating\"><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star-empty\"></span><span class=\"glyphicon glyphicon-star-empty\"></span></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"product\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"image\"><a href=\"product.html\"><img src=\"../../assets/images/galaxy-note.jpg\" /></a></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"buttons\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn cart\" ><span class=\"glyphicon glyphicon-shopping-cart\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn wishlist\" ><span class=\"glyphicon glyphicon-heart\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn compare\" ><span class=\"glyphicon glyphicon-transfer\"></span></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"name\"><h3><a href=\"product.html\">Aliquam erat volutpat</a></h3></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"price\">$122<span>$98</span></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating\"><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star-empty\"></span><span class=\"glyphicon glyphicon-star-empty\"></span><span class=\"glyphicon glyphicon-star-empty\"></span></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t<div class=\"products\">\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"product\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"image\"><a href=\"product.html\"><img src=\"../../assets/images/iphone.png\" /></a></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"buttons\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn cart\" ><span class=\"glyphicon glyphicon-shopping-cart\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn wishlist\" ><span class=\"glyphicon glyphicon-heart\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn compare\" ><span class=\"glyphicon glyphicon-transfer\"></span></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"name\"><h3><a href=\"product.html\">Aliquam erat volutpat</a></h3></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"price\">$122<span>$98</span></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating\"><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star-empty\"></span></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"product\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"image\"><a href=\"product.html\"><img src=\"../../assets/images/galaxy-s4.jpg\" /></a></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"buttons\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn cart\" ><span class=\"glyphicon glyphicon-shopping-cart\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn wishlist\" ><span class=\"glyphicon glyphicon-heart\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn compare\" ><span class=\"glyphicon glyphicon-transfer\"></span></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"name\"><h3><a href=\"product.html\">Aliquam erat volutpat</a></h3></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"price\">$122<span>$98</span></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating\"><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star-empty\"></span><span class=\"glyphicon glyphicon-star-empty\"></span></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-xs-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"product\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"image\"><a href=\"product.html\"><img src=\"../../assets/images/galaxy-note.jpg\" /></a></div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"buttons\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn cart\" ><span class=\"glyphicon glyphicon-shopping-cart\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn wishlist\" ><span class=\"glyphicon glyphicon-heart\"></span></a>\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn compare\" ><span class=\"glyphicon glyphicon-transfer\"></span></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"caption\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"name\"><h3><a >Aliquam erat volutpat</a></h3></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"price\">$122<span>$98</span></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating\"><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star-empty\"></span><span class=\"glyphicon glyphicon-star-empty\"></span><span class=\"glyphicon glyphicon-star-empty\"></span></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row text-center\">\n\t\t\t\t\t\t<ul class=\"pagination\">\n\t\t\t\t\t\t  <li class=\"active\"><a >1</a></li>\n\t\t\t\t\t\t  <li><a >2</a></li>\n\t\t\t\t\t\t  <li><a >3</a></li>\n\t\t\t\t\t\t  <li><a >4</a></li>\n\t\t\t\t\t\t  <li><a >5</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"sidebar\" class=\"col-md-4\">\n\t\t\t\t\t<div class=\"widget wid-categories\">\n\t\t\t\t\t\t<div class=\"heading\"><h4>CATEGORIES</h4></div>\n\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li><a >PC Computers</a></li>\n\t\t\t\t\t\t\t\t<li><a >Laptops & Notebooks</a></li>\n\t\t\t\t\t\t\t\t<li><a >Mobiles & Tablet</a></li>\n\t\t\t\t\t\t\t\t<li><a >Software</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"widget wid-type\">\n\t\t\t\t\t\t<div class=\"heading\"><h4>TYPE</h4></div>\n\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t<select>\n\t\t\t\t\t\t\t\t<option value=\"EL\" selected>Electronics</option>\n\t\t\t\t\t\t\t\t<option value=\"MT\">Mice and Trackballs</option>\n\t\t\t\t\t\t\t\t<option value=\"WC\">Web Cameras</option>\n\t\t\t\t\t\t\t\t<option value=\"TA\">Tablates</option>\n\t\t\t\t\t\t\t\t<option value=\"AP\">Audio Parts</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"widget wid-discouts\">\n\t\t\t\t\t\t<div class=\"heading\"><h4>DISCOUNTS</h4></div>\n\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t<label class=\"checkbox\"><input type=\"checkbox\" name=\"discount\" checked=\"\">Upto - 10% (20)</label>\n\t\t\t\t\t\t\t<label class=\"checkbox\"><input type=\"checkbox\" name=\"discount\">40% - 50% (5)</label>\n\t\t\t\t\t\t\t<label class=\"checkbox\"><input type=\"checkbox\" name=\"discount\">30% - 20% (7)</label>\n\t\t\t\t\t\t\t<label class=\"checkbox\"><input type=\"checkbox\" name=\"discount\">10% - 5% (2)</label>\n\t\t\t\t\t\t\t<label class=\"checkbox\"><input type=\"checkbox\" name=\"discount\">Other(50)</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"widget wid-brand\">\n\t\t\t\t\t\t<div class=\"heading\"><h4>BRAND</h4></div>\n\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t<label class=\"checkbox\"><input type=\"checkbox\" name=\"brand\">Nokia</label>\n\t\t\t\t\t\t\t<label class=\"checkbox\"><input type=\"checkbox\" name=\"brand\">Samsung</label>\n\t\t\t\t\t\t\t<label class=\"checkbox\"><input type=\"checkbox\" name=\"brand\">Iphone</label>\n\t\t\t\t\t\t\t<label class=\"checkbox\"><input type=\"checkbox\" name=\"brand\">HTC</label>\n\t\t\t\t\t\t\t<label class=\"checkbox\"><input type=\"checkbox\" name=\"brand\">Oppo</label>\n\t\t\t\t\t\t\t<label class=\"checkbox\"><input type=\"checkbox\" name=\"brand\">Kings</label>\n\t\t\t\t\t\t\t<label class=\"checkbox\"><input type=\"checkbox\" name=\"brand\">Zumba</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"widget wid-product\">\n\t\t\t\t\t\t<div class=\"heading\"><h4>LATEST</h4></div>\n\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t<div class=\"product\">\n\t\t\t\t\t\t\t\t<a ><img src=\"../../assets/images//galaxy-note.jpg\" /></a>\n\t\t\t\t\t\t\t\t<div class=\"wrapper\">\n\t\t\t\t\t\t\t\t\t<h5><a >Samsung Galaxy Tab</a></h5>\n\t\t\t\t\t\t\t\t\t<div class=\"price\">$122</div>\n\t\t\t\t\t\t\t\t\t<div class=\"rating\"><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star-empty\"></span></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"product\">\n\t\t\t\t\t\t\t\t<a ><img src=\"../../assets/images/galaxy-s4.jpg\" /></a>\n\t\t\t\t\t\t\t\t<div class=\"wrapper\">\n\t\t\t\t\t\t\t\t\t<h5><a >Samsung Galaxy Tab</a></h5>\n\t\t\t\t\t\t\t\t\t<div class=\"price\">$122</div>\n\t\t\t\t\t\t\t\t\t<div class=\"rating\"><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star-empty\"></span></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"product\">\n\t\t\t\t\t\t\t\t<a ><img src=\"../../assets/images/Z1.png\" /></a>\n\t\t\t\t\t\t\t\t<div class=\"wrapper\">\n\t\t\t\t\t\t\t\t\t<h5><a >Samsung Galaxy Tab</a></h5>\n\t\t\t\t\t\t\t\t\t<div class=\"price\">$122</div>\n\t\t\t\t\t\t\t\t\t<div class=\"rating\"><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star-empty\"></span></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n"

/***/ }),

/***/ "./src/app/demo-page-component/demo-page-component.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/demo-page-component/demo-page-component.component.ts ***!
  \**********************************************************************/
/*! exports provided: DemoPageComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoPageComponentComponent", function() { return DemoPageComponentComponent; });
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

var DemoPageComponentComponent = /** @class */ (function () {
    function DemoPageComponentComponent() {
    }
    DemoPageComponentComponent.prototype.ngOnInit = function () {
    };
    DemoPageComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demo-page-component',
            template: __webpack_require__(/*! ./demo-page-component.component.html */ "./src/app/demo-page-component/demo-page-component.component.html"),
            styles: [__webpack_require__(/*! ./demo-page-component.component.css */ "./src/app/demo-page-component/demo-page-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DemoPageComponentComponent);
    return DemoPageComponentComponent;
}());



/***/ }),

/***/ "./src/app/detail-page-component/detail-page-component.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/detail-page-component/detail-page-component.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgSize{\r\n  width: 153px;\r\n  height: 300px;\r\n}\r\n\r\n.widget .content {\r\n  padding: 15px 20px;\r\n}\r\n\r\n.widget.wid-discouts {\r\n  padding: 15px 20px;\r\n}\r\n\r\n.widget.wid-brand {\r\n  padding: 15px 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/detail-page-component/detail-page-component.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/detail-page-component/detail-page-component.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-content\" class=\"single-page\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <ul class=\"breadcrumb\">\n                    <li><a href=\"index.html\">Home</a></li>\n                    <li><a>Category (DEMO)</a></li>\n                    <li><a [routerLink]=\"['/MoreStuffComingSoon']\">{{product$.productId}}</a></li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div id=\"main-content\" class=\"col-md-8\">\n                <div class=\"product\">\n                    <div class=\"col-md-6\">\n                        <div class=\"image\">\n                            <img [src]=\"product$.productimgUrl\" />\n                            <div class=\"image-more\">\n                                <ul class=\"row\">\n                                    <li class=\"col-lg-3 col-sm-3 col-xs-4\">\n                                        <a [routerLink]=\"['/MoreStuffComingSoon']\"><img class=\"img-responsive\" src=\"../../assets/images/galaxy-note.jpg\"></a>\n                                    </li>\n                                    <li class=\"col-lg-3 col-sm-3 col-xs-4\">\n                                        <a [routerLink]=\"['/MoreStuffComingSoon']\"><img class=\"img-responsive\" src=\"../../assets/images/galaxy-note-2.jpg\"></a>\n                                    </li>\n                                    <li class=\"col-lg-3 col-sm-3 col-xs-4\">\n                                        <a [routerLink]=\"['/MoreStuffComingSoon']\"><img class=\"img-responsive\" src=\"../../assets/images/galaxy-note-3.jpg\"></a>\n                                    </li>\n                                    <li class=\"col-lg-3 col-sm-3 col-xs-4\">\n                                        <a [routerLink]=\"['/MoreStuffComingSoon']\"><img class=\"img-responsive\" src=\"../../assets/images/galaxy-note-4.jpg\"></a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"caption\">\n                            <div class=\"name\">\n                                <h3>{{product$.productName}}</h3>\n                            </div>\n                            <div class=\"info\">\n                                <ul>\n                                    <li>Brand: {{product$.brandName}}</li>\n                                    <li>ID: {{product$.productId}}</li>\n                                </ul>\n                            </div>\n                            <div class=\"price\">{{product$.productActulaPrice}}<span>{{product$.productDiscountPrice}}</span></div>\n                            <div class=\"options\">\n                                AVAILABLE OPTIONS\n                                <select>\n                  <option value=\"\" selected>----Please Select----</option>\n                  <option value=\"red\">RED</option>\n                  <option value=\"black\">BLACK</option>\n                </select>\n                            </div>\n                            <div class=\"rating\"><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star-empty\"></span></div>\n                            <div class=\"well\"><label>Qty: </label> <input class=\"form-inline quantity\" type=\"text\" value=\"1\"><a [routerLink]=\"['/MoreStuffComingSoon']\" class=\"btn btn-2 \">ADD</a></div>\n                            <div class=\"share well\">\n                                <strong style=\"margin-right: 13px;\">Share :</strong>\n                                <a [routerLink]=\"['/MoreStuffComingSoon']\" class=\"share-btn\" target=\"_blank\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                </a>\n                                <a [routerLink]=\"['/MoreStuffComingSoon']\" class=\"share-btn\" target=\"_blank\">\n                                    <i class=\"fa fa-facebook\"></i>\n                                </a>\n                                <a [routerLink]=\"['/MoreStuffComingSoon']\" class=\"share-btn\" target=\"_blank\">\n                                    <i class=\"fa fa-linkedin\"></i>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"product-desc\">\n                    <ul class=\"nav nav-tabs\">\n                        <li class=\"active\"><a href=\"#description\">Description of {{ product$.productName}}</a></li>\n\n                    </ul>\n                    <div class=\"tab-content\">\n                        <div id=\"description\" class=\"tab-pane fade in active\">\n                            <h4>Sample Lorem Ipsum Text</h4>\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam\n                                vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis risus feugiat viverra. Pellentesque\n                                augue justo, sagittis et, lacinia at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus. Etiam tristique nisl a</p>\n                            <h4>Sample Lorem Ipsum Text</h4>\n                            <p>Sed eget turpis a pede tempor malesuada. Vivamus quis mi at leo pulvinar hendrerit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque aliquet lacus vitae pede. Nullam mollis\n                                dolor ac nisi. Phasellus sit amet urna. Praesent pellentesque sapien sed lacus. Donec lacinia odio in odio. In sit amet elit. Maecenas gravida interdum urna. Integer pretium, arcu vitae imperdiet facilisis, elit tellus\n                                tempor nisi, vel feugiat ante velit sit amet mauris. Vivamus arcu. Integer pharetra magna ac lacus. Aliquam vitae sapien in nibh vehicula auctor. Suspendisse leo mauris, pulvinar sed, tempor et, consequat ac, lacus. Proin\n                                velit. Nulla semper lobortis mauris. Duis urna erat, ornare et, imperdiet eu, suscipit sit amet, massa. Nulla nulla nisi, pellentesque at, egestas quis, fringilla eu, diam.</p>\n                        </div>\n\n                    </div>\n                </div>\n                <div class=\"product-related\">\n                    <div class=\"heading\">\n                        <h2>RELATED PRODUCTS</h2>\n                    </div>\n                    <div class=\"products\">\n                        <div class=\"col-lg-4 col-md-4 col-xs-12\">\n                            <div class=\"product\">\n                                <div class=\"image\">\n                                    <a [routerLink]=\"['/DetailPage', product$.productId ]\"><img src=\"../../assets/images/iphone.png\" /></a>\n                                </div>\n                                <div class=\"buttons\">\n                                    <a class=\"btn cart\" [routerLink]=\"['/DetailPage']\"><span\n                      class=\"glyphicon glyphicon-shopping-cart\"></span></a>\n                                    <a class=\"btn wishlist\" [routerLink]=\"['/DetailPage']\"><span\n                      class=\"glyphicon glyphicon-heart\"></span></a>\n                                    <a class=\"btn compare\" [routerLink]=\"['/DetailPage']\"><span\n                      class=\"glyphicon glyphicon-transfer\"></span></a>\n                                </div>\n                                <div class=\"caption\">\n                                    <div class=\"name\">\n                                        <h3><a [routerLink]=\"['/DetailPage']\">Aliquam erat volutpat</a></h3>\n                                    </div>\n                                    <div class=\"price\">$122<span>$98</span></div>\n                                    <div class=\"rating\"><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star-empty\"></span></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-4 col-md-4 col-xs-12\">\n                            <div class=\"product\">\n                                <div class=\"image\">\n                                    <a [routerLink]=\"['/DetailPage' , 2 ]\"><img src=\"../../assets/images/galaxy-s4.jpg\" /></a>\n                                </div>\n                                <div class=\"buttons\">\n                                    <a class=\"btn cart\" [routerLink]=\"['/DetailPage']\"><span\n                      class=\"glyphicon glyphicon-shopping-cart\"></span></a>\n                                    <a class=\"btn wishlist\" [routerLink]=\"['/DetailPage']\"><span\n                      class=\"glyphicon glyphicon-heart\"></span></a>\n                                    <a class=\"btn compare\" [routerLink]=\"['/DetailPage']\"><span\n                      class=\"glyphicon glyphicon-transfer\"></span></a>\n                                </div>\n                                <div class=\"caption\">\n                                    <div class=\"name\">\n                                        <h3><a [routerLink]=\"['/DetailPage']\">Aliquam erat volutpat</a></h3>\n                                    </div>\n                                    <div class=\"price\">$122<span>$98</span></div>\n                                    <div class=\"rating\"><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star-empty\"></span></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-4 col-md-4 col-xs-12\">\n                            <div class=\"product\">\n                                <div class=\"image\">\n                                    <a [routerLink]=\"['/DetailPage']\"><img src=\"../../assets/images/galaxy-note-1.jpg\" /></a>\n                                </div>\n                                <div class=\"buttons\">\n                                    <a class=\"btn cart\" [routerLink]=\"['/DetailPage']\"><span\n                      class=\"glyphicon glyphicon-shopping-cart\"></span></a>\n                                    <a class=\"btn wishlist\" [routerLink]=\"['/DetailPage']\"><span\n                      class=\"glyphicon glyphicon-heart\"></span></a>\n                                    <a class=\"btn compare\" [routerLink]=\"['/DetailPage']\"><span\n                      class=\"glyphicon glyphicon-transfer\"></span></a>\n                                </div>\n                                <div class=\"caption\">\n                                    <div class=\"name\">\n                                        <h3><a [routerLink]=\"['/DetailPage']\">Aliquam erat volutpat</a></h3>\n                                    </div>\n                                    <div class=\"price\">$122<span>$98</span></div>\n                                    <div class=\"rating\"><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star-empty\"></span></div>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n\n\n\n\n            </div>\n            <div id=\"sidebar\" class=\"col-md-4\">\n                <div class=\"widget wid-categories\">\n                    <div class=\"heading\">\n                        <h4>CATEGORIES</h4>\n                    </div>\n                    <div class=\"content\">\n                        <ul>\n                            <li><a [routerLink]=\"['/MoreStuffComingSoon']\">PC Computers</a></li>\n                            <li><a [routerLink]=\"['/MoreStuffComingSoon']\">Laptops & Notebooks</a></li>\n                            <li><a [routerLink]=\"['/MoreStuffComingSoon']\">Mobiles & Tablet</a></li>\n                            <li><a [routerLink]=\"['/MoreStuffComingSoon']\">Software</a></li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"widget wid-type\">\n                    <div class=\"heading\">\n                        <h4>TYPE</h4>\n                    </div>\n                    <div class=\"content\">\n                        <select>\n              <option value=\"EL\" selected>Electronics</option>\n              <option value=\"MT\">Mice and Trackballs</option>\n              <option value=\"WC\">Web Cameras</option>\n              <option value=\"TA\">Tablates</option>\n              <option value=\"AP\">Audio Parts</option>\n            </select>\n                    </div>\n                </div>\n                <div class=\"widget wid-discouts\">\n                    <div class=\"heading\">\n                        <h4>DISCOUNTS</h4>\n                    </div>\n                    <div class=\"content\">\n                        <label class=\"checkbox\"><input type=\"checkbox\" name=\"discount\" checked=\"\">Upto - 10% (20)</label>\n                        <label class=\"checkbox\"><input type=\"checkbox\" name=\"discount\">40% - 50% (5)</label>\n                        <label class=\"checkbox\"><input type=\"checkbox\" name=\"discount\">30% - 20% (7)</label>\n                        <label class=\"checkbox\"><input type=\"checkbox\" name=\"discount\">10% - 5% (2)</label>\n                        <label class=\"checkbox\"><input type=\"checkbox\" name=\"discount\">Other(50)</label>\n                    </div>\n                </div>\n                <div class=\"widget wid-brand\">\n                    <div class=\"heading\">\n                        <h4>BRAND</h4>\n                    </div>\n                    <div class=\"content\">\n                        <label class=\"checkbox\"><input type=\"checkbox\" name=\"brand\">Nokia</label>\n                        <label class=\"checkbox\"><input type=\"checkbox\" name=\"brand\">Samsung</label>\n                        <label class=\"checkbox\"><input type=\"checkbox\" name=\"brand\">Iphone</label>\n                        <label class=\"checkbox\"><input type=\"checkbox\" name=\"brand\">HTC</label>\n                        <label class=\"checkbox\"><input type=\"checkbox\" name=\"brand\">Oppo</label>\n                        <label class=\"checkbox\"><input type=\"checkbox\" name=\"brand\">Kings</label>\n                        <label class=\"checkbox\"><input type=\"checkbox\" name=\"brand\">Zumba</label>\n                    </div>\n                </div>\n                <div class=\"widget wid-product\">\n                    <div class=\"heading\">\n                        <h4>LATEST</h4>\n                    </div>\n                    <div class=\"content\">\n                        <div class=\"product\">\n                            <a [routerLink]=\"['/MoreStuffComingSoon']\"><img src=\"../../assets/images/galaxy-note.jpg\" /></a>\n                            <div class=\"wrapper\">\n                                <h5><a [routerLink]=\"['/MoreStuffComingSoon']\">Samsung Galaxy Tab</a></h5>\n                                <div class=\"price\">$122</div>\n                                <div class=\"rating\"><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star-empty\"></span></div>\n                            </div>\n                        </div>\n                        <div class=\"product\">\n                            <a [routerLink]=\"['/MoreStuffComingSoon']\"><img src=\"../../assets/images/galaxy-s4.jpg\" /></a>\n                            <div class=\"wrapper\">\n                                <h5><a [routerLink]=\"['/MoreStuffComingSoon']\">Samsung Galaxy Tab</a></h5>\n                                <div class=\"price\">$122</div>\n                                <div class=\"rating\"><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star-empty\"></span></div>\n                            </div>\n                        </div>\n                        <div class=\"product\">\n                            <a [routerLink]=\"['/MoreStuffComingSoon']\"><img src=\"../../assets/images/Z1.png\" /></a>\n                            <div class=\"wrapper\">\n                                <h5><a [routerLink]=\"['/MoreStuffComingSoon']\">Samsung Galaxy Tab</a></h5>\n                                <div class=\"price\">$122</div>\n                                <div class=\"rating\"><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star-empty\"></span></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/detail-page-component/detail-page-component.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/detail-page-component/detail-page-component.component.ts ***!
  \**************************************************************************/
/*! exports provided: DetailPageComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageComponentComponent", function() { return DetailPageComponentComponent; });
/* harmony import */ var _service_firebase_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../service/firebase.service */ "./src/app/service/firebase.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailPageComponentComponent = /** @class */ (function () {
    function DetailPageComponentComponent(activatedRoute, firebaseService) {
        this.activatedRoute = activatedRoute;
        this.firebaseService = firebaseService;
    }
    DetailPageComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.activatedRoute.snapshot.params['id'];
        this.firebaseService.getSingleProduct(id)
            .subscribe(function (result) {
            _this.product$ = result;
            //console.log(result);
            console.log(_this.product$);
        });
        //console.log(this.product);
        // console.log(this.name);
        // console.log("fssdfds");
    };
    DetailPageComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-page-component',
            template: __webpack_require__(/*! ./detail-page-component.component.html */ "./src/app/detail-page-component/detail-page-component.component.html"),
            styles: [__webpack_require__(/*! ./detail-page-component.component.css */ "./src/app/detail-page-component/detail-page-component.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service_firebase_service__WEBPACK_IMPORTED_MODULE_0__["FirebaseService"]])
    ], DetailPageComponentComponent);
    return DetailPageComponentComponent;
}());



/***/ }),

/***/ "./src/app/footer-component/footer-component.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/footer-component/footer-component.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:hover{\r\n  color: white;\r\n  text-decoration: underline;\r\n}\r\n"

/***/ }),

/***/ "./src/app/footer-component/footer-component.component.html":
/*!******************************************************************!*\
  !*** ./src/app/footer-component/footer-component.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"container\">\n        <div class=\"wrap-footer\">\n            <div class=\"row\">\n                <div class=\"col-md-3 col-footer footer-1\">\n                    <img src=\"../../assets/images/logofooter.png\" />\n                    <p>Mobile Phone Prices price list is updated daily from local Mobile shops & Mobile dealers in Pakistan but we can't guarantee that mobile prices </p>\n                </div>\n                <div class=\"col-md-3 col-footer footer-2\">\n                    <div class=\"heading\">\n                        <h4>Customer Service</h4>\n                    </div>\n                    <ul>\n                        <li><a [routerLink]=\"['/MoreStuffComingSoon']\">About Us</a></li>\n                        <li><a [routerLink]=\"['/MoreStuffComingSoon']\">Delivery Information</a></li>\n                        <li><a [routerLink]=\"['/MoreStuffComingSoon']\">Privacy Policy</a></li>\n                        <li><a [routerLink]=\"['/MoreStuffComingSoon']\">Terms & Conditions</a></li>\n                        <li><a [routerLink]=\"['/MoreStuffComingSoon']\">Contact Us</a></li>\n                    </ul>\n                </div>\n                <div class=\"col-md-3 col-footer footer-3\">\n                    <div class=\"heading\">\n                        <h4>My Account</h4>\n                    </div>\n                    <ul>\n                        <li><a [routerLink]=\"['/MoreStuffComingSoon']\">My Account</a></li>\n                        <li><a [routerLink]=\"['/MoreStuffComingSoon']\">Brands</a></li>\n                        <li><a [routerLink]=\"['/MoreStuffComingSoon']\">Gift Vouchers</a></li>\n                        <li><a [routerLink]=\"['/MoreStuffComingSoon']\">Specials</a></li>\n                        <li><a [routerLink]=\"['/MoreStuffComingSoon']\">Site Map</a></li>\n                    </ul>\n                </div>\n                <div class=\"col-md-3 col-footer footer-4\">\n                    <div class=\"heading\">\n                        <h4>Contact Us</h4>\n                    </div>\n                    <ul>\n                        <li><span class=\"glyphicon glyphicon-home\"></span>Karachi, Pakistan 3000009</li>\n                        <li><span class=\"glyphicon glyphicon-earphone\"></span>+91 8866888111</li>\n                        <li><span class=\"glyphicon glyphicon-envelope\"></span>infor@yoursite.com</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"copyright\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    All rights reserved @2019 - Designed by Osama ishaq\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"pull-right\">\n                        <ul>\n                            <li><img src=\"../../assets/images/visa-curved-32px.png\" /></li>\n                            <li><img src=\"../../assets/images/paypal-curved-32px.png\" /></li>\n                            <li><img src=\"../../assets/images/discover-curved-32px.png\" /></li>\n                            <li><img src=\"../../assets/images/maestro-curved-32px.png\" /></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer-component/footer-component.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/footer-component/footer-component.component.ts ***!
  \****************************************************************/
/*! exports provided: FooterComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponentComponent", function() { return FooterComponentComponent; });
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

var FooterComponentComponent = /** @class */ (function () {
    function FooterComponentComponent() {
    }
    FooterComponentComponent.prototype.ngOnInit = function () {
    };
    FooterComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer-component',
            template: __webpack_require__(/*! ./footer-component.component.html */ "./src/app/footer-component/footer-component.component.html"),
            styles: [__webpack_require__(/*! ./footer-component.component.css */ "./src/app/footer-component/footer-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponentComponent);
    return FooterComponentComponent;
}());



/***/ }),

/***/ "./src/app/home-page-component/home-page-component.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/home-page-component/home-page-component.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgSize{\r\n  width: 153px;\r\n  height: 300px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home-page-component/home-page-component.component.html":
/*!************************************************************************!*\
  !*** ./src/app/home-page-component/home-page-component.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-content\" class=\"home-page\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <!-- Carousel -->\n                <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n                    <!-- Indicators -->\n                    <ol class=\"carousel-indicators hidden-xs\">\n                        <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n                        <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n                        <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n                    </ol>\n                    <!-- Wrapper for slides -->\n                    <div class=\"carousel-inner\">\n                        <div class=\"item active\">\n                            <img src=\"../../assets/images/main-banner1-1903x600.jpg\" alt=\"First slide\">\n                            <!-- Static Header -->\n                            <div class=\"header-text hidden-xs\">\n                                <div class=\"col-md-12 text-center\">\n                                </div>\n                            </div>\n                            <!-- /header-text -->\n                        </div>\n                        <div class=\"item\">\n                            <img src=\"../../assets/images/main-banner2-1903x600.jpg\" alt=\"Second slide\">\n                            <!-- Static Header -->\n                            <div class=\"header-text hidden-xs\">\n                                <div class=\"col-md-12 text-center\">\n                                </div>\n                            </div>\n                            <!-- /header-text -->\n                        </div>\n                        <div class=\"item\">\n                            <img src=\"../../assets/images/main-banner3-1903x600.jpg\" alt=\"Third slide\">\n                            <!-- Static Header -->\n                            <div class=\"header-text hidden-xs\">\n                                <div class=\"col-md-12 text-center\">\n                                </div>\n                            </div>\n                            <!-- /header-text -->\n                        </div>\n                    </div>\n                    <!-- Controls -->\n                    <a class=\"left carousel-control\" href=\"#carousel-example-generic\" data-slide=\"prev\">\n                        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n                    </a>\n                    <a class=\"right carousel-control\" href=\"#carousel-example-generic\" data-slide=\"next\">\n                        <span class=\"glyphicon glyphicon-chevron-right\"></span>\n                    </a>\n                </div>\n                <!-- /carousel -->\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"banner\">\n                <div class=\"col-sm-4\">\n                    <img src=\"../../assets/images/sub-banner1.png\" />\n                </div>\n                <div class=\"col-sm-4\">\n                    <img src=\"../../assets/images/sub-banner2.png\" />\n                </div>\n                <div class=\"col-sm-4\">\n                    <img src=\"../../assets/images/sub-banner3.png\" />\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"heading\">\n                    <h2>SPECIAL PRODUCTS</h2>\n                </div>\n                <div class=\"products\">\n                    <!-- !ng for yaha khola-->\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\" *ngFor=\"let product of productArray\">\n                        <div class=\"product\">\n                            <div class=\"image\">\n                                <a [routerLink]=\"['/DetailPage', product.productId ]\"><img class=\"imgSize\" [src]='product.productimgUrl' /></a>\n                            </div>\n                            <div class=\"buttons\">\n                                <a class=\"btn cart\" (click)='productOfCard(product)'><span\n                    class=\"glyphicon glyphicon-shopping-cart\"></span></a>\n                                <a class=\"btn wishlist\"><span class=\"glyphicon glyphicon-heart\"></span></a>\n                                <a class=\"btn compare\"><span class=\"glyphicon glyphicon-transfer\"></span></a>\n                            </div>\n                            <div class=\"caption\">\n                                <div class=\"name\">\n                                    <h3><a [routerLink]=\"['/DetailPage']\">{{ product.productName }}</a></h3>\n                                </div>\n                                <div class=\"price\">{{product.productActulaPrice}}<span>{{product.productDiscountPrice}}</span></div>\n                                <div class=\"rating\"><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star-empty\"></span></div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"banner\">\n                <div class=\"col-sm-6\">\n                    <img src=\"../../assets/images/sub-banner4.jpg\" />\n                </div>\n                <div class=\"col-sm-6\">\n                    <img src=\"../../assets/images/sub-banner5.png\" />\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"heading\">\n                    <h2>FEATURED PRODUCTS</h2>\n                </div>\n                <div class=\"products\">\n                    <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\" *ngFor=\"let product of productsAray\">\n                        <div class=\"product\">\n                            <div class=\"image\">\n                                <a [routerLink]=\"['/DetailPage']\"><img class=\"imgSize\" [src]='product.productimgUrl' /></a>\n                            </div>\n                            <div class=\"buttons\">\n                                <a class=\"btn cart\"><span class=\"glyphicon glyphicon-shopping-cart\"></span></a>\n                                <a class=\"btn wishlist\"><span class=\"glyphicon glyphicon-heart\"></span></a>\n                                <a class=\"btn compare\"><span class=\"glyphicon glyphicon-transfer\"></span></a>\n                            </div>\n                            <div class=\"caption\">\n                                <div class=\"name\">\n                                    <h3><a [routerLink]=\"['/DetailPage']\">{{ product.productName }}</a></h3>\n                                </div>\n                                <div class=\"price\">{{product.productActulaPrice}}<span>{{product.productDiscountPrice}}</span></div>\n                                <div class=\"rating\"><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star\"></span><span class=\"glyphicon glyphicon-star-empty\"></span></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/home-page-component/home-page-component.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home-page-component/home-page-component.component.ts ***!
  \**********************************************************************/
/*! exports provided: HomePageComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponentComponent", function() { return HomePageComponentComponent; });
/* harmony import */ var _service_firebase_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../service/firebase.service */ "./src/app/service/firebase.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePageComponentComponent = /** @class */ (function () {
    /*productsAray;
    private cartProduct;
    constructor(private productService: ProductService) {
      this.productsAray = productService.getProductArray();
      //console.log(this.productsAray);
    }
    productOfCard(prodcut) {
      this.cartProduct = prodcut;
      this.productService.saveCartProduct(this.cartProduct);
      // console.log(this.cartProduct);
    }
  
  
  
    ngOnInit() {
    }*/
    function HomePageComponentComponent(firebaseService) {
        this.firebaseService = firebaseService;
        this.productArray = [];
        this.searchText = "";
    }
    HomePageComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebaseService.getPrdoucts().subscribe(function (list) {
            _this.productArray = list.map(function (item) {
                return __assign({ $key: item.key }, item.payload.val());
            });
        });
    };
    HomePageComponentComponent.prototype.productOfCard = function (prodcut) {
        this.cartProduct = prodcut;
        this.firebaseService.saveCartProduct(this.cartProduct);
        // console.log(this.cartProduct);
    };
    HomePageComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page-component',
            template: __webpack_require__(/*! ./home-page-component.component.html */ "./src/app/home-page-component/home-page-component.component.html"),
            styles: [__webpack_require__(/*! ./home-page-component.component.css */ "./src/app/home-page-component/home-page-component.component.css")]
        }),
        __metadata("design:paramtypes", [_service_firebase_service__WEBPACK_IMPORTED_MODULE_0__["FirebaseService"]])
    ], HomePageComponentComponent);
    return HomePageComponentComponent;
}());



/***/ }),

/***/ "./src/app/more-stuff-component/more-stuff-component.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/more-stuff-component/more-stuff-component.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/more-stuff-component/more-stuff-component.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/more-stuff-component/more-stuff-component.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div id=\"page-content\" class=\"single-page\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <ul class=\"breadcrumb\">\n          <li><a [routerLink]=\"['/HomePage']\">Home</a></li>\n          <li><a>More Stuff Coming Soon</a></li>\n\n        </ul>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div id=\"main-content\" class=\"col-md-12\">\n          <div class=\"product-desc\">\n              <ul class=\"nav nav-tabs\">\n                <li class=\"active\"><a href=\"#description\">More Stuff Coming Soon</a></li>\n              </ul>\n              <div class=\"tab-content\">\n                <div id=\"description\" class=\"tab-pane fade in active\">\n                  <h4>Mobile Shop Like To Tell You That:</h4>\n                  <p>Areas would drive its subsequent growth. Following Lee's death in 1987, Samsung was separated into four business groups – Samsung Group, Shinsegae Group, CJ Group and Hansol Group. Since 1990, Samsung has increasingly globalised its activities and electronics;  Other notable subsidiaries include Samsung Life Insurance (the world's 14th largest life insurance company),[10] Samsung Everland (operator of Everland Resort, After Lee, the founder's death in 1987, Samsung Group was separated into four business groups—Samsung Group, Shinsegae Group, CJ Group and the Hansol Group.[24] Shinsegae (discount store, department store) was originally part of Samsung Group, separated in the 1990s from the Samsung Group along with CJ Group (Food/Chemicals/Entertainment/logistics), and the Hansol Group (Paper/Telecom). Today these separated groups are independent and they are not part of or connected to the Samsung Group</p>\n                  <hr>\n                  <h4>Also We Are Working On:</h4>\n                  <p>Hanguk Jeonja Tongsin and entered telecommunications hardware. Its early products were switchboards. The facility was developed into the telephone and fax manufacturing systems and became the center of Samsung's mobile phone manufacturing. They have produced over 800 million mobile phones to date.[23] The company grouped them together under Samsung Electronics in the 1980s. nine American jurors ruled that Samsung Electronics had to pay Apple $1.05 billion in damages for violating six of its patents on smartphone technology. The award was still less than the $2.5 billion requested by Apple. The decision also ruled that Apple did not violate five Samsung patents cited in the case.[36] Samsung decried the decision saying that the move could harm innovation in the sector.[37] It also followed a South Korean ruling</p>\n                </div>\n\n              </div>\n            </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/more-stuff-component/more-stuff-component.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/more-stuff-component/more-stuff-component.component.ts ***!
  \************************************************************************/
/*! exports provided: MoreStuffComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreStuffComponentComponent", function() { return MoreStuffComponentComponent; });
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

var MoreStuffComponentComponent = /** @class */ (function () {
    function MoreStuffComponentComponent() {
    }
    MoreStuffComponentComponent.prototype.ngOnInit = function () {
    };
    MoreStuffComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-more-stuff-component',
            template: __webpack_require__(/*! ./more-stuff-component.component.html */ "./src/app/more-stuff-component/more-stuff-component.component.html"),
            styles: [__webpack_require__(/*! ./more-stuff-component.component.css */ "./src/app/more-stuff-component/more-stuff-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MoreStuffComponentComponent);
    return MoreStuffComponentComponent;
}());



/***/ }),

/***/ "./src/app/my-account-component/my-account-component.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/my-account-component/my-account-component.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mystle{\r\n  background-color: #222;\r\n    color: #fff;\r\n    font-size: 25px;\r\n    padding: 10px 12px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/my-account-component/my-account-component.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/my-account-component/my-account-component.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-content\" class=\"single-page\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <ul class=\"breadcrumb\">\n                    <li><a href=\"index.html\">Home</a></li>\n                    <li><a href=\"account.html\">Account Login</a></li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"heading\">\n                    <h2>Login</h2>\n                </div>\n                <form name=\"form1\" id=\"ff1\" method=\"post\" #f=\"ngForm\" (ngSubmit)=\"signIn(f.value)\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" ngModel class=\"form-control\" placeholder=\"Username :\" name=\"username\" id=\"username\" required>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" ngModel class=\"form-control\" placeholder=\"Password :\" name=\"password\" id=\"password\" required>\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-1 mystle \" name=\"login\" id=\"login\">Login</button>\n                    <a> Forgot Your Password ?</a>\n                </form>\n            </div>\n            <div class=\"alert alert-success\" *ngIf=\"showSuccessMessage\">\n                <strong> Successfully</strong> Loggedin.\n                <div class=\"alert alert-info\">\n                    <strong>Welcome!</strong> {{ fullName}}\n                </div>\n            </div>\n\n            <div class=\"alert alert-danger\" *ngIf=\"showFailureMessage\">\n                <strong>Invalid!</strong> login.\n            </div>\n\n\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/my-account-component/my-account-component.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/my-account-component/my-account-component.component.ts ***!
  \************************************************************************/
/*! exports provided: MyAccountComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountComponentComponent", function() { return MyAccountComponentComponent; });
/* harmony import */ var _service_firebase_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../service/firebase.service */ "./src/app/service/firebase.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyAccountComponentComponent = /** @class */ (function () {
    function MyAccountComponentComponent(router, firebaseService) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.showSuccessMessage = false;
        this.showFailureMessage = false;
        this.allCustomerArray = [];
    }
    MyAccountComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebaseService.getCustomers().subscribe(function (list) {
            _this.allCustomerArray = list.map(function (item) {
                return __assign({ $key: item.key }, item.payload.val());
            });
        });
    };
    MyAccountComponentComponent.prototype.signIn = function (f) {
        var _this = this;
        //console.log(f.username);
        //console.log(f.password);
        //console.log(this.customerArray);
        this.allCustomerArray.forEach(function (value) {
            if (value.fullName === f.username && value.confirmPassword === f.password) {
                _this.key = value.$key;
                _this.confirmPassword = value.confirmPassword;
                _this.email = value.email;
                _this.fullName = value.fullName;
                _this.location = value.location;
                _this.mobile = value.mobile;
                _this.showSuccessMessage = true;
                _this.result = true;
                setTimeout(function () { return _this.showSuccessMessage = false; }, 3000);
                //  console.log(value.fullName);
                //  cartProduct.push(value);
            }
        });
        if (this.result) {
            this.firebaseService.setCurrentUserLoginInfo(this.fullName, true);
            setTimeout(function () { return _this.router.navigate(['/']); }, 3000);
            // this.router.navigate(['/']);
            //    this.showFailureMessage = true;
            //    setTimeout(() => this.showFailureMessage = false, 3000);
        }
        else {
            this.showFailureMessage = true;
            setTimeout(function () { return _this.showFailureMessage = false; }, 3000);
        }
        console.log(this.key);
        console.log(this.confirmPassword);
        console.log(this.fullName);
        console.log(this.email);
    };
    MyAccountComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-account-component',
            template: __webpack_require__(/*! ./my-account-component.component.html */ "./src/app/my-account-component/my-account-component.component.html"),
            styles: [__webpack_require__(/*! ./my-account-component.component.css */ "./src/app/my-account-component/my-account-component.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_firebase_service__WEBPACK_IMPORTED_MODULE_0__["FirebaseService"]])
    ], MyAccountComponentComponent);
    return MyAccountComponentComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".linkStyle{\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"top\">\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"col-xs-12\">\n                <ul class=\"top-link\">\n                    <li *ngIf=\"!this.firebaseService.getCurrentUserLoginBoolean()\"><a [routerLink]=\"['/CreateAccount']\"><span\n                class=\"glyphicon glyphicon-user\"></span>Create Account</a></li>\n                    <li *ngIf=\"!this.firebaseService.getCurrentUserLoginBoolean()\"><a [routerLink]=\"['/MyAccount']\"><span\n                class=\"glyphicon glyphicon-user\"></span>My Account/LogIn</a></li>\n\n                    <li><a [routerLink]=\"['/ContactUs']\"><span class=\"glyphicon glyphicon-envelope\"></span>Contact</a></li>\n\n                </ul>\n                <button *ngIf=\"this.firebaseService.getCurrentUserLoginBoolean()\" type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"myClickFunction($event)\">\n          <span class=\"glyphicon glyphicon-log-out\"></span> Log out\n        </button>\n\n            </div>\n        </div>\n    </div>\n</nav>\n<header class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <h1 *ngIf=\"this.firebaseService.getCurrentUserLoginBoolean()\">\n                <strong>Wellcome! </strong>{{ this.firebaseService.getCurrentUserLoginName()}}</h1>\n            <div id=\"logo\"><img [routerLink]=\"['/HomePage']\" src=\"../../assets/images/logo.png\" /></div>\n        </div>\n        <div class=\"col-md-4\">\n            <form class=\"form-search\">\n                <input type=\"text\" class=\"input-medium search-query\">\n                <button type=\"button\" class=\"btn\"><span class=\"glyphicon glyphicon-search\"></span></button>\n            </form>\n        </div>\n        <div class=\"col-md-4\">\n            <div id=\"cart\"><a class=\"btn btn-1\" [routerLink]=\"['/CheckOut']\"><span\n            class=\"glyphicon glyphicon-shopping-cart\"></span>CART : {{ this.firebaseService.getcartproductLenth() }}\n          ITEM</a></div>\n        </div>\n    </div>\n</header>\n<!--Navigation-->\n<nav id=\"menu\" class=\"navbar\">\n    <div class=\"container\">\n        <div class=\"navbar-header\"><span id=\"heading\" class=\"visible-xs\">Categories</span>\n            <button type=\"button\" class=\"btn btn-navbar navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\"><i class=\"glyphicon glyphicon-align-justify\"></i></button>\n        </div>\n        <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li><a [routerLink]=\"['/HomePage']\">Home</a></li>\n                <li class=\"dropdown\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">PC Computers <span\n              class=\"glyphicon glyphicon-menu-down\"></span></a>\n                    <div class=\"dropdown-menu\">\n                        <div class=\"dropdown-inner\">\n                            <ul class=\"list-unstyled\">\n                                <li><a [routerLink]=\"['/DemoPage']\">Window</a></li>\n                                <li><a [routerLink]=\"['/DemoPage']\">MacBook</a></li>\n                            </ul>\n                        </div>\n                    </div>\n                </li>\n                <li class=\"dropdown\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Laptops &amp; Notebooks <span\n              class=\"glyphicon glyphicon-menu-down\"></span></a>\n                    <div class=\"dropdown-menu\">\n                        <div class=\"dropdown-inner\">\n                            <ul class=\"list-unstyled\">\n                                <li><a [routerLink]=\"['/DemoPage']\">Dell</a></li>\n                                <li><a [routerLink]=\"['/DemoPage']\">Asus</a></li>\n                                <li><a [routerLink]=\"['/DemoPage']\">Samsung</a></li>\n                                <li><a [routerLink]=\"['/DemoPage']\">Lenovo</a></li>\n                                <li><a [routerLink]=\"['/DemoPage']\">Acer</a></li>\n                            </ul>\n                        </div>\n                    </div>\n                </li>\n                <li class=\"dropdown\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Mobiles &amp; Tablet <span\n              class=\"glyphicon glyphicon-menu-down\"></span></a>\n                    <div class=\"dropdown-menu\" style=\"margin-left: -203.625px;\">\n                        <div class=\"dropdown-inner\">\n                            <ul class=\"list-unstyled\">\n                                <li><a [routerLink]=\"['/DemoPage']\">Iphone</a></li>\n                                <li><a [routerLink]=\"['/DemoPage']\">Samsung</a></li>\n                                <li><a [routerLink]=\"['/DemoPage']\">Nokia</a></li>\n                                <li><a [routerLink]=\"['/DemoPage']\">Lenovo</a></li>\n                                <li><a [routerLink]=\"['/DemoPage']\">Google</a></li>\n                            </ul>\n                            <ul class=\"list-unstyled\">\n                                <li><a [routerLink]=\"['/DemoPage']\">Nexus</a></li>\n                                <li><a [routerLink]=\"['/DemoPage']\">Dell</a></li>\n                                <li><a [routerLink]=\"['/DemoPage']\">Oppo</a></li>\n                                <li><a [routerLink]=\"['/DemoPage']\">Blackberry</a></li>\n                                <li><a [routerLink]=\"['/DemoPage']\">HTC</a></li>\n                            </ul>\n                            <ul class=\"list-unstyled\">\n                                <li><a [routerLink]=\"['/DemoPage']\">LG</a></li>\n                                <li><a [routerLink]=\"['/DemoPage']\">Q-Mobiles</a></li>\n                                <li><a [routerLink]=\"['/DemoPage']\">Sony</a></li>\n                                <li><a [routerLink]=\"['/DemoPage']\">Wiko</a></li>\n                                <li><a [routerLink]=\"['/DemoPage']\">T&T</a></li>\n                            </ul>\n                        </div>\n                    </div>\n                </li>\n                <li><a [routerLink]=\"['/MoreStuffComingSoon']\">More Stuff</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _service_firebase_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../service/firebase.service */ "./src/app/service/firebase.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(router, firebaseService) {
        this.router = router;
        this.firebaseService = firebaseService;
        this.fullName = '';
    }
    NavBarComponent.prototype.myClickFunction = function (event) {
        alert("Are you sure you want loggeout");
        console.log(event);
        this.router.navigate(['MyAccount']);
    };
    NavBarComponent.prototype.ngOnInit = function () {
        //this.isLoggedIn = this.firebaseService.getCurrentUserLoginBoolean();
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_firebase_service__WEBPACK_IMPORTED_MODULE_0__["FirebaseService"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/service/firebase.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/firebase.service.ts ***!
  \*********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var cartProduct = [];
var FirebaseService = /** @class */ (function () {
    function FirebaseService(firebase) {
        this.firebase = firebase;
        this.fullName = '';
    }
    FirebaseService.prototype.setCurrentUserLoginInfo = function (fullName, isLoggedIn) {
        this.fullName = fullName;
        this.isLoggedIn = isLoggedIn;
    };
    FirebaseService.prototype.getCurrentUserLoginName = function () {
        return this.fullName;
    };
    FirebaseService.prototype.getCurrentUserLoginBoolean = function () {
        return this.isLoggedIn;
    };
    FirebaseService.prototype.getPrdoucts = function () {
        this.productList = this.firebase.list('Products');
        return this.productList.snapshotChanges();
    };
    FirebaseService.prototype.getSingleProduct = function (id) {
        return this.firebase.object('/Products/obj' + id).valueChanges();
    };
    FirebaseService.prototype.saveCartProduct = function (product) {
        cartProduct.push(product);
    };
    FirebaseService.prototype.getCartProductArray = function () {
        return cartProduct;
    };
    FirebaseService.prototype.getcartproductLenth = function () {
        return cartProduct.length;
    };
    FirebaseService.prototype.deleteCartProduct = function (product) {
        var index = cartProduct.indexOf(product);
        cartProduct.splice(index, 1);
    };
    //Customers ka data
    FirebaseService.prototype.getCustomers = function () {
        this.customerList = this.firebase.list('Customers');
        return this.customerList.snapshotChanges();
    };
    FirebaseService.prototype.insertCustomer = function (customer) {
        this.customerList = this.firebase.list('Customers');
        this.customerList.push({
            fullName: customer.fullName,
            email: customer.email,
            mobile: customer.mobile,
            location: customer.location,
            confirmPassword: customer.confirmPassword
        });
    };
    //populateForm(customer) {
    //   this.form.setValue(customer);
    // }
    FirebaseService.prototype.updateCustomer = function (customer) {
        this.customerList.update(customer.$key, {
            fullName: customer.fullName,
            email: customer.email,
            mobile: customer.mobile,
            location: customer.location
        });
    };
    FirebaseService.prototype.deleteCustomer = function ($key) {
        this.customerList.remove($key);
    };
    FirebaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDvs8potVsuvZRmZ5ihJctgnNrM3hWuPog",
        authDomain: "firsebasedemo-df341.firebaseapp.com",
        databaseURL: "https://firsebasedemo-df341.firebaseio.com",
        projectId: "firsebasedemo-df341",
        storageBucket: "firsebasedemo-df341.appspot.com",
        messagingSenderId: "83966838987",
        appId: "1:83966838987:web:da4a6444fd0f1f3c"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Osama\Desktop\ShopCart 0.0.2\ShopCart 0.0.2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map