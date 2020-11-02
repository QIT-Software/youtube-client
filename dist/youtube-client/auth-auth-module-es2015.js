(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/auth/pages/login-page/login-page.component.ts");





const routes = [
    { path: '', component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"] }
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/auth/pages/login-page/login-page.component.ts");
/* harmony import */ var _authService_user_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @authService/user-login.service */ "./src/app/auth/services/user-login.service.ts");






class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, providers: [
        _authService_user_login_service__WEBPACK_IMPORTED_MODULE_4__["UserLoginService"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"]
                ],
                providers: [
                    _authService_user_login_service__WEBPACK_IMPORTED_MODULE_4__["UserLoginService"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/pages/login-page/login-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/auth/pages/login-page/login-page.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _coreService_user_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreService/user-token.service */ "./src/app/core/services/user-token.service.ts");
/* harmony import */ var _authService_user_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @authService/user-login.service */ "./src/app/auth/services/user-login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = ["name"];
const _c1 = ["pass"];
class LoginPageComponent {
    constructor(userToken, userLogin, router) {
        this.userToken = userToken;
        this.userLogin = userLogin;
        this.router = router;
        this.logged = this.userToken.isLogged();
    }
    ngOnInit() {
        this.userToken.logged.subscribe((val) => {
            this.logged = val;
        });
    }
    ngAfterViewInit() {
        this.name.nativeElement.focus();
    }
    login() {
        if (this.logged) {
            this.userLogin.deleteLogin();
        }
        else {
            this.userLogin.setLogin(this.name.nativeElement.value, this.pass.nativeElement.value);
        }
    }
    escape($event) {
        if ($event.code === 'Escape') {
            this.router.navigate(['/']);
        }
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_coreService_user_token_service__WEBPACK_IMPORTED_MODULE_1__["UserTokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authService_user_login_service__WEBPACK_IMPORTED_MODULE_2__["UserLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], viewQuery: function LoginPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.name = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pass = _t.first);
    } }, decls: 17, vars: 1, consts: [[1, "login", 3, "keyup"], [1, "wrapper"], [1, "login__username"], ["for", "username"], ["id", "username", "type", "text"], ["name", ""], [1, "login__pass"], ["for", "pass"], ["id", "pass", "type", "password"], ["pass", ""], [1, "login__buttons"], [1, "btn", 3, "click"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function LoginPageComponent_Template_div_keyup_0_listener($event) { return ctx.escape($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_15_listener($event) { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.logged ? "Logout" : "Login");
    } }, styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 250px;\n  margin: 45px auto;\n  background: #f2f2f2;\n  padding: 26px 22px;\n  border-radius: 5px;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 21px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: #000000;\n}\n\nlabel[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  display: block;\n}\n\nlabel[_ngcontent-%COMP%] {\n  margin: 5px;\n  font-size: 10px;\n  line-height: 12px;\n  color: #828282;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 37px;\n  padding: 9px;\n  background: #e0e0e0;\n  font-size: 10px;\n  line-height: 12px;\n}\n\n.login__buttons[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 124px;\n  height: 30px;\n  font-size: 12px;\n  line-height: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9wYWdlcy9sb2dpbi1wYWdlL0M6XFxyc3NjaG9vbFxceW91dHViZS1jbGllbnQvc3JjXFxhcHBcXGF1dGhcXHBhZ2VzXFxsb2dpbi1wYWdlXFxsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRoL3BhZ2VzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBRUEsY0FBQTtBQ0NGOztBRENBOztFQUVFLGNBQUE7QUNFRjs7QURBQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDR0Y7O0FEQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0dGOztBRERBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDSUY7O0FERkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0tGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9wYWdlcy9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgbWFyZ2luOiA0NXB4IGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICBwYWRkaW5nOiAyNnB4IDIycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbmgxIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMjFweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbmxhYmVsLFxyXG5pbnB1dCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxubGFiZWwge1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBsaW5lLWhlaWdodDogMTJweDtcclxuICBjb2xvcjogIzgyODI4MjtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzdweDtcclxuICBwYWRkaW5nOiA5cHg7XHJcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbn1cclxuLmxvZ2luX19idXR0b25zIHtcclxuICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5idXR0b24ge1xyXG4gIHdpZHRoOiAxMjRweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG59XHJcbiIsIi53cmFwcGVyIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBtYXJnaW46IDQ1cHggYXV0bztcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgcGFkZGluZzogMjZweCAyMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG5sYWJlbCxcbmlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmxhYmVsIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM3cHg7XG4gIHBhZGRpbmc6IDlweDtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbn1cblxuLmxvZ2luX19idXR0b25zIHtcbiAgbWFyZ2luLXRvcDogMjJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDEyNHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-page',
                templateUrl: './login-page.component.html',
                styleUrls: ['./login-page.component.scss']
            }]
    }], function () { return [{ type: _coreService_user_token_service__WEBPACK_IMPORTED_MODULE_1__["UserTokenService"] }, { type: _authService_user_login_service__WEBPACK_IMPORTED_MODULE_2__["UserLoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['name']
        }], pass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['pass']
        }] }); })();


/***/ }),

/***/ "./src/app/auth/services/user-login.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/services/user-login.service.ts ***!
  \*****************************************************/
/*! exports provided: UserLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginService", function() { return UserLoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _coreService_user_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreService/user-token.service */ "./src/app/core/services/user-token.service.ts");
/* harmony import */ var _coreService_search_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreService/search-data.service */ "./src/app/core/services/search-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _coreService_request_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreService/request-http.service */ "./src/app/core/services/request-http.service.ts");
/* harmony import */ var _coreService_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @coreService/message.service */ "./src/app/core/services/message.service.ts");







class UserLoginService {
    constructor(userToken, searchData, router, reqHttp, mess) {
        this.userToken = userToken;
        this.searchData = searchData;
        this.router = router;
        this.reqHttp = reqHttp;
        this.mess = mess;
    }
    confirm(name, pass) {
        this.mess.showUp('Loading...');
        this.reqHttp.getToken(name, pass)
            .subscribe((val) => {
            if (val.length) {
                this.userToken.set({ name: name, token: val });
            }
            else {
                this.userToken.delete();
            }
            this.router.navigate(['/']);
            this.mess.hide();
        }, () => { this.mess.showTimer('User is not exist'); });
    }
    setLogin(name, pass) {
        this.confirm(name, pass);
        this.router.navigate(['/']);
    }
    deleteLogin() {
        this.userToken.delete();
        this.searchData.clear();
        this.router.navigate(['/']);
    }
}
UserLoginService.ɵfac = function UserLoginService_Factory(t) { return new (t || UserLoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_coreService_user_token_service__WEBPACK_IMPORTED_MODULE_1__["UserTokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_coreService_search_data_service__WEBPACK_IMPORTED_MODULE_2__["SearchDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_coreService_request_http_service__WEBPACK_IMPORTED_MODULE_4__["RequestHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_coreService_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"])); };
UserLoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserLoginService, factory: UserLoginService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserLoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _coreService_user_token_service__WEBPACK_IMPORTED_MODULE_1__["UserTokenService"] }, { type: _coreService_search_data_service__WEBPACK_IMPORTED_MODULE_2__["SearchDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _coreService_request_http_service__WEBPACK_IMPORTED_MODULE_4__["RequestHttpService"] }, { type: _coreService_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=auth-auth-module-es2015.js.map
