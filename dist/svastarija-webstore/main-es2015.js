(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-div\">\n    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in lacinia erat. Phasellus in enim dui. Vestibulum augue sem, vulputate ut ex non, tempus ullamcorper sem. Phasellus id erat sit amet metus laoreet facilisis sollicitudin at ligula. Cras vel mauris dui. Nam mattis id eros in tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\n    Nullam sodales eget odio id venenatis. Proin consequat iaculis urna. Mauris porta ultricies dui, eget blandit tortor. Duis urna enim, maximus vitae hendrerit et, ullamcorper id erat. Nullam porttitor non purus at faucibus. Curabitur eleifend tortor vel felis consequat, nec mollis neque sagittis. Etiam lorem magna, vulputate ac dui ut, interdum gravida felis. Cras egestas diam sapien, vel placerat urna malesuada ac. Phasellus et lorem eleifend, pharetra ligula tincidunt, auctor nunc. Aliquam pharetra, ante eget malesuada sagittis, erat diam mattis nisl, et congue magna dui eget eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros magna, eleifend quis bibendum vitae, dictum eu leo. Nulla a nibh vel nisi malesuada mollis ut non ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    \n    Praesent ut augue rhoncus, lobortis nulla in, tempor nulla. Suspendisse potenti. Maecenas lacinia vestibulum congue. Donec tristique in arcu a hendrerit. Phasellus feugiat tellus sit amet posuere efficitur. Suspendisse mattis nisi vehicula nunc scelerisque, non commodo mi egestas. Maecenas dictum efficitur urna, sit amet vestibulum eros. Donec a volutpat purus. Phasellus feugiat sagittis dolor, id semper urna lobortis in. Phasellus faucibus a nulla in mattis. Suspendisse potenti. Morbi ut nibh porta nulla maximus venenatis vel quis nibh. Duis ultrices mauris condimentum erat vulputate facilisis.\n    \n    Curabitur sem sem, tempor eu tincidunt at, tincidunt et nisi. Aenean hendrerit sem nulla, vel pharetra nibh tincidunt eget. Ut facilisis maximus sapien, nec molestie eros gravida eget. Pellentesque rutrum et ex sit amet aliquet. Donec tincidunt enim quis turpis tempor, tincidunt sodales sem fermentum. In non consequat risus. Quisque nec dictum eros. Praesent iaculis lacus id dolor venenatis venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas consectetur placerat commodo. Integer non quam non felis ornare mollis. Etiam pellentesque tortor magna, a dapibus quam consectetur non. Aliquam placerat, diam et rhoncus lacinia, diam odio malesuada nisl, vel faucibus augue est sed magna. Nam consectetur sagittis libero. Vestibulum aliquet, nulla vel ultrices consectetur, turpis libero accumsan est, eget dictum felis quam quis massa.\n    \n        Suspendisse dictum tellus et orci tristique, eget faucibus tortor interdum. Donec iaculis tempor malesuada. Etiam tellus erat, fermentum eu quam nec, viverra efficitur ipsum. Donec non nulla facilisis, finibus risus eget, gravida sapien. Proin justo nisl, placerat ac tempus vitae, aliquet et sapien. Praesent finibus erat sit amet magna convallis, sit amet ultricies augue placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla hendrerit dapibus purus sed consequat. Maecenas quam ex, blandit in justo at, tincidunt suscipit massa. Maecenas ullamcorper felis id felis malesuada posuere. Etiam sodales turpis in mi </p>\n\n    <div class=\"image-div\">\n        <img src=\"../assets/images/1.svg\" alt=\"\" >\n    </div>\n    \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>Novi proizvod</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <form name=\"form\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <mat-form-field class=\"full-width\">\n              <input matInput placeholder=\"Naziv proizvoda\" name=\"name\" [(ngModel)]=\"productName\">\n            </mat-form-field>\n          </div>\n          <div class=\"col\">\n            <mat-form-field class=\"full-width\">\n              <input matInput placeholder=\"Cena\" name=\"price\" id=\"price\" [(ngModel)]=\"productPrice\" >\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <mat-form-field class=\"full-width\">\n              <input matInput placeholder=\"Količina\"[(ngModel)]=\"productAmount\" name =\"productAmount\">\n            </mat-form-field>\n          </div>\n          <div class=\"col\">\n            <mat-form-field class=\"full-width\">\n              <mat-label>Kategorija</mat-label>\n              <mat-select [(ngModel)]=\"productCategory\" name=\"select\">\n                <mat-option [value]=\"category\" *ngFor=\"let category of categories\" >{{category}}</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <mat-form-field class=\"full-width\">\n              <textarea matInput placeholder=\"Opis proizvoda\" name=\"description\" [(ngModel)]=\"productDescription\"></textarea>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\" style=\"height: 30rem; width: 50rem\">\n              <uploader></uploader>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n              <button mat-stroked-button color=\"primary\" (click) =\"createProduct()\">Dodaj proizvod</button>\n          </div>\n        </div>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-nav></app-main-nav>  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>contact works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-product/edit-product.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-product/edit-product.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>Izmeni proizvod</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <form name=\"form\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <mat-form-field class=\"full-width\">\n              <input matInput placeholder=\"Naziv proizvoda\" name=\"name\" [(ngModel)]=\"product.name\">\n            </mat-form-field>\n          </div>\n          <div class=\"col\">\n            <mat-form-field class=\"full-width\">\n              <input matInput placeholder=\"Cena\" name=\"price\" id=\"price\" [(ngModel)]=\"product.price\" >\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <mat-form-field class=\"full-width\">\n              <input matInput placeholder=\"Količina\"[(ngModel)]=\"product.amount\" name =\"productAmount\">\n            </mat-form-field>\n          </div>\n          <div class=\"col\">\n            <mat-form-field class=\"full-width\">\n        \n              <mat-label>Kategorija</mat-label>\n              <mat-select [(ngModel)]=\"product.category\" name=\"select\">  \n                <mat-option [value]=\"category\" *ngFor=\"let category of categories\" >{{category}}</mat-option>  \n              </mat-select>\n                \n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <mat-form-field class=\"full-width\">\n              <textarea matInput placeholder=\"Opis proizvoda\" name=\"description\" [(ngModel)]=\"product.description\"></textarea>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <uploader></uploader>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <button mat-stroked-button color=\"primary\" (click) =\"updateProduct()\">Izmeni proizvod</button>\n          </div>\n        </div>\n      </form>\n    </mat-card-content>\n  \n  </mat-card>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container home-page-main-div\">\n<ngb-carousel *ngIf=\"images\">\n    <ng-template ngbSlide>\n      <div class=\"picsum-img-wrapper\">\n        <img [src]=\"images[0]\" alt=\"Random first slide\">\n      </div>\n      <div class=\"carousel-caption\">\n        <h3>First slide label</h3>\n        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n      </div>\n    </ng-template>\n    <ng-template ngbSlide>\n      <div class=\"picsum-img-wrapper\">\n        <img [src]=\"images[1]\" alt=\"Random second slide\">\n      </div>\n      <div class=\"carousel-caption\">\n        <h3>Second slide label</h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </ng-template>\n    <ng-template ngbSlide>\n      <div class=\"picsum-img-wrapper\">\n        <img [src]=\"images[2]\" alt=\"Random third slide\">\n      </div>\n      <div class=\"carousel-caption\">\n        <h3>Third slide label</h3>\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n      </div>\n    </ng-template>\n  </ngb-carousel>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"padding-top: 10rem;\">\n  <mat-card> \n    <mat-card-header>\n        <!-- <mat-card-title>Prijavite se:</mat-card-title> -->\n    </mat-card-header>\n    <mat-card-content>\n      <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit(formGroup.value)\" class=\"form\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <mat-form-field>\n              <input type=\"text\" matInput placeholder=\"Username\" formControlName=\"username\">\n              <mat-error *ngIf=\"formGroup.controls['username'].invalid\">\n                {{getError('user')}}\n              </mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <mat-form-field>\n              <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\n              <mat-error *ngIf=\"!formGroup.controls['password'].valid\">\n                {{getError('pass')}}\n              </mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n              <button mat-raised-button color=\"primary\" type=\"submit\" class=\"button\" [disabled]=\"!formGroup.valid\">Prijava</button>\n          </div>\n        </div> \n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-nav/main-nav.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-nav/main-nav.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"(isHandset$ | async) === false\">\n    <mat-toolbar>Meni</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item  (click)=\"closeSideNavOnMobile()\" routerLink='' routerLinkActive='active'>Početna</a>\n      <a mat-list-item  (click)=\"closeSideNavOnMobile()\" routerLink='products' routerLinkActive='active'>Proizvodi</a>\n      <a mat-list-item  (click)=\"closeSideNavOnMobile()\" routerLink='about' routerLinkActive='active'>O nama</a>\n      <a mat-list-item  (click)=\"closeSideNavOnMobile()\" routerLink='contact' routerLinkActive='active'>Kontakt</a>\n      <a mat-list-item  (click)=\"closeSideNavOnMobile()\" routerLink='login' routerLinkActive='active' *ngIf=\"!userLogged()\">Prijavi se</a>\n      <a mat-list-item  (click)=\"closeSideNavOnMobile()\" routerLink='orders' routerLinkActive='active' *ngIf=\"userLogged()\">Lista porudžbina</a>\n      <a mat-list-item  (click)=\"closeSideNavOnMobile()\" routerLink='newProduct' routerLinkActive='active' *ngIf=\"userLogged()\">Dodaj novi proizvod</a>\n      <a mat-list-item  (click)=\"signOut();closeSideNavOnMobile();\" routerLinkActive='active' *ngIf=\"userLogged()\">Odjavi se</a>\n\n      \n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar class=\"box-shadow\" color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <a class=\"upperLinks\" mat-button routerLink=\"\" routerLinkActive=\"active\"><img class=\"main-logo\" src=\"../assets/images/LOGO 4.svg\" height=\"50px\" width=\"50px\"></a>\n      <div class=\"fill-space\"></div>\n      <a class=\"upperLinks\" mat-button routerLink='cart' routerLinkActive='active'><mat-icon class=\"example-tab-icon\" [matBadge]=\"returnNumber()\" matBadgeColor=\"accent\">shopping_cart</mat-icon></a>\n    </mat-toolbar>\n    <!-- Add Content Here -->\n    <div [@routeAnimations]=\"prepareRoute(outlet)\">\n      <router-outlet #outlet=\"outlet\"></router-outlet>\n    </div>\n    \n    \n  </mat-sidenav-content>\n</mat-sidenav-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let o of orders; let i = index\">\n    <h3>Order no {{i+1}}</h3>\n    <p>{{o.id}}</p>\n    <p>Ime i prezime kupca: {{o.customerFirstName}} {{o.customerLastName}}</p>\n\n    <p *ngFor=\"let prod of o.productsO; let j = index\">\n        Product no {{j+1}}: <span>{{prod.id}} --> {{prod.name}}</span>\n    </p>\n    <p>{{o.date.seconds * 1000 | date:'MM-dd-yyyy'}}</p>\n    <p>{{o.price}} RSD</p>\n    <h1 *ngIf=\"!o.delivered\">Za isporuku</h1>\n    <h1 *ngIf=\"o.delivered\">Isporučeno</h1>\n    <button (click)=\"delete(o.id)\">Ukloni</button>\n    <button *ngIf=\"!o.delivered\" (click)=\"setDelivered(o.id)\">Isporučeno</button>\n    <hr>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <h1>PAGE NOT FOUND!</h1>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tab-container\">\n  <nav mat-tab-nav-bar>\n    <a class=\"tab\" mat-tab-link *ngFor=\"let link of links\" (click)='activeLink = link;showByCat(link);' [active]=\"activeLink == link\">\n      {{link}}\n    </a>\n  </nav>\n</div>\n\n\n\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"space-evenly center\">\n  \n    <mat-card *ngFor=\"let product of filteredProducts\" class=\"example-card\">\n      \n      <mat-card-header>\n        <!-- <div mat-card-avatar class=\"example-header-image\"></div> -->\n        <mat-card-title>{{product.name}}</mat-card-title>\n        <mat-card-subtitle>{{product.price}} RSD <span *ngIf=\"product.amount==0\">(Nema na lageru)</span></mat-card-subtitle>\n      </mat-card-header>\n      <div class=\"image-container\">\n        <img mat-card-image src=\"{{product.pic}}\" alt=\"\" (click) = 'store(product.id);resetNumber();openDialog()'>\n      </div>\n      <div class=\"card-content-container\">\n        <mat-card-content>\n          \n        </mat-card-content>\n      </div>\n      <mat-card-actions>\n        <div class=\"card-actions\">\n          <mat-form-field>\n            <mat-label>Kolicina</mat-label>\n            <mat-select placeholder=\"kolicina\" [(ngModel)]=\"num\" name=\"{{product.name}}\">\n              <mat-option *ngFor=\"let i of arr\" [value]=\"i\">\n                {{i}}\n              </mat-option>\n            </mat-select>\n            <!-- <mat-select [(value)]='num'>\n              <div *ngFor=\"let i of arr\">\n                <mat-option value='{{i}}'>\n                  {{i}}\n                </mat-option>\n              </div>\n            </mat-select> -->\n          </mat-form-field>\n          <a [disabled]=\"(product.amount == 0)\" (click)='addToCart(product.id); openSnackBar(product.name, product.amount); resetNumber();' mat-button class=\"example-tab-icon\"><mat-icon>add_shopping_cart</mat-icon></a>\n          <a *ngIf=\"userLogged()\" (click)='store(product.id);resetNumber();' mat-button  class=\"example-tab-icon\" routerLink=\"edit\"><mat-icon>edit</mat-icon></a>\n          <a *ngIf=\"userLogged()\"  (click)='deleteProduct(product.id); openSnackBar2(product.name); resetNumber();' mat-button class=\"example-tab-icon\"><mat-icon>delete</mat-icon></a>\n          \n        </div>\n      </mat-card-actions>\n      \n    </mat-card>\n \n  </div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-modal/product-modal.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-modal/product-modal.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <h2 mat-dialog-title>{{product.name}} <span *ngIf=\"product.amount==0\" style=\"color:#e91e63\"> -> Nema na lageru!</span></h2>\n    <mat-dialog-content style=\"text-align: center;\">\n        <img mat-card-image src=\"{{product.picture}}\" alt=\"\">\n        <p>Cena: {{product.price}} RSD</p>\n        <p>{{product.description}}</p>\n    </mat-dialog-content>\n    <mat-dialog-actions>\n        <button mat-button mat-dialog-close>Izadji</button>\n\n    </mat-dialog-actions> \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("One product view\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-cart-form/shopping-cart-form.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-cart-form/shopping-cart-form.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card @myInsertRemoveTrigger class=\"shipping-card\">\n  <mat-card-header>\n    <mat-card-title>Unesite Vaše podatke:</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit(formGroup.value)\" class=\"form\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n              <mat-label>Ime </mat-label>\n              <input matInput name=\"firstName\" formControlName=\"firstName\">\n              <mat-error *ngIf=\"formGroup.controls['firstName'].invalid\">Ovo polje je obavezno!</mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"col\">\n            <mat-form-field class=\"full-width\">\n              <mat-label>Prezime </mat-label>\n              <input matInput name=\"lastName\" formControlName=\"lastName\">\n              <mat-error *ngIf=\"formGroup.controls['lastName'].invalid\">Ovo polje je obavezno!</mat-error>\n            </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <mat-label>Ulica i broj</mat-label>\n            <input matInput name=\"address\" formControlName=\"address\">\n            <mat-error *ngIf=\"formGroup.controls['address'].invalid\">Ovo polje je obavezno!</mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <mat-label>Grad</mat-label>\n            <input matInput name=\"city\" formControlName=\"city\">\n            <mat-error *ngIf=\"formGroup.controls['city'].invalid\">Ovo polje je obavezno!</mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <mat-label>Postanski kod</mat-label>\n            <input matInput name=\"postalCode\" minlength=\"5\" maxlength=\"5\" formControlName=\"postalCode\">\n            <mat-hint align=\"end\">{{getPostalCodeLen()}} / 5</mat-hint> \n            <mat-error *ngIf=\"formGroup.controls['postalCode'].hasError('required')\">Ovo polje je obavezno!</mat-error>\n            <mat-error *ngIf=\"formGroup.controls['postalCode'].hasError('pattern')\">Samo brojevi!</mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n              <mat-label>Drzava</mat-label>\n              <mat-select formControlName=\"state\">\n                  <mat-option *ngFor=\"let state of states\" [value]=\"state.abbreviation\">\n                    {{ state.name }}\n                  </mat-option>\n                </mat-select>\n                <mat-error *ngIf=\"formGroup.controls['state'].invalid\">Ovo polje je obavezno!</mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <mat-label>Telefon</mat-label>\n            <input matInput type=\"tel\" name=\"phone\" formControlName=\"phone\">\n            <mat-hint>primer: +38160111222</mat-hint>\n            <mat-error *ngIf=\"formGroup.controls['phone'].invalid\">Ovo polje je obavezno!</mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <mat-label>E-mail</mat-label>\n            <input matInput type=\"email\" name=\"email\" formControlName=\"email\">\n            <mat-hint>primer: example@mail.com</mat-hint>\n            <mat-error *ngIf=\"formGroup.controls['email'].hasError('required')\">Ovo polje je obavezno!</mat-error>\n            <mat-error *ngIf=\"formGroup.controls['email'].hasError('email')\">Neispravan format e-mail adrese!</mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"!showExtraContactInfoFormField\">\n        <div class=\"col\">\n          <button mat-button type=\"button\" (click)=\"showExtraContactInfoFormField = !showExtraContactInfoFormField\">\n            <mat-icon>add_circle_outline</mat-icon>\n          </button>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"showExtraContactInfoFormField\" @myInsertRemoveTrigger>\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <mat-label>Telefon 2</mat-label>\n            <input matInput type=\"tel\" name=\"phone\" formControlName=\"phone2\">\n          </mat-form-field>\n        </div>\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <mat-label>E-mail 2</mat-label>\n            <input matInput type=\"email\" name=\"email\" formControlName=\"email2\">\n            <mat-error *ngIf=\"formGroup.controls['email2'].hasError('email')\">Neispravan format e-mail adrese!</mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"showExtraContactInfoFormField\">\n        <div class=\"col\">\n          <button mat-button type=\"button\" (click)=\"showExtraContactInfoFormField = !showExtraContactInfoFormField\">\n            <mat-icon>remove_circle_outline</mat-icon>\n          </button>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <mat-label>Poruka</mat-label>\n            <textarea matInput placeholder=\"Poruka(opciono)\" formControlName=\"note\"></textarea>\n          </mat-form-field>\n        </div>\n      </div>\n      \n\n      <div class=\"row\">\n        <div class=\"col\">\n          <button *ngIf=\"products.length!=0\" style='float: right;' mat-button color=\"primary\" type=\"submit\" [disabled]=\"!formGroup.valid\">Poruči <mat-icon>arrow_forward_ios</mat-icon></button>\n          <button style=\"float: left;\" mat-button color=\"primary\" (click)=\"goBack();\"><mat-icon>arrow_back_ios</mat-icon>Nazad na korpu</button>\n        </div>\n      </div>\n    </form>\n  </mat-card-content>\n\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-cart/shopping-cart.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-cart/shopping-cart.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"productsWithPosition.length!=0\" class=\"table-container\" @myInsertRemoveTrigger>\n  <table mat-table [dataSource]=\"productsWithPosition\" multiTemplateDataRows>\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef> # </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.position}} </td>\n      <td mat-footer-cell *matFooterCellDef></td>\n    </ng-container>\n    <ng-container matColumnDef=\"column\">\n      <th mat-header-cell *matHeaderCellDef> Naziv </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n      <td mat-footer-cell *matFooterCellDef>Ukupno: {{getTotalCost() | currency:'RSD'}}</td>\n    </ng-container>\n    <ng-container matColumnDef=\"column3\">\n      <th mat-header-cell *matHeaderCellDef> Cena </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.price}} </td>   \n      <td mat-footer-cell *matFooterCellDef><button class='nastavi' mat-button color=\"primary\" [disabled]=\"getTotalCost()==0\" routerLink='form' routerLinkActive='active'>Nastavi</button></td> \n    </ng-container>\n    <ng-container matColumnDef=\"remove\">\n      <th mat-header-cell *matHeaderCellDef> Ukloni </th>\n      <td mat-cell *matCellDef=\"let row\"> <a class='icon' (click)='removeFromCartByPosition(row.position); openSnackBar(row.name);' mat-button><mat-icon class=\"example-tab-icon\">remove_shopping_cart</mat-icon></a> </td>\n      <td mat-footer-cell *matFooterCellDef></td>\n    </ng-container>\n\n\n    <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n    <ng-container matColumnDef=\"expandedDetail\">\n      <td mat-cell *matCellDef=\"let row\" [attr.colspan]=\"5\">\n        <div class=\"example-element-detail\"\n             [@detailExpand]=\"row == expandedElement ? 'expanded' : 'collapsed'\">\n          <!-- <div class=\"example-element-diagram\">\n            <div class=\"example-element-position\"> {{element.position}} </div>\n            <div class=\"example-element-symbol\"> {{element.symbol}} </div>\n            <div class=\"example-element-name\"> {{element.name}} </div>\n            <div class=\"example-element-weight\"> {{element.weight}} </div>\n          </div>\n          <div class=\"example-element-description\">\n            {{element.description}}\n            <span class=\"example-element-description-attribution\"> -- Wikipedia </span>aklfjaflafj\n          </div> -->\n          <img class=\"example-element-symbol\" src=\"{{row.pic}}\" height=\"100px\" width=\"100px\">\n          <div class=\"example-element-description\"> Kategorija: {{row.category}} </div>\n          <div class=\"example-element-description\">{{row.description}}</div>\n        </div>\n      </td>\n    </ng-container>\n\n\n    <tr mat-header-row *matHeaderRowDef=\"['position', 'column', 'column3', 'remove']\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: ['position', 'column', 'column3', 'remove'];\" class=\"example-element-row\"\n    [class.example-expanded-row]=\"expandedElement === row\"\n    (click)=\"expandedElement = expandedElement === row ? null : row\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n    <tr mat-footer-row *matFooterRowDef=\"['position', 'column', 'column3', 'remove']; sticky: true\"></tr>\n  </table>\n</div>\n\n<div class=\"empty-cart-warning\" *ngIf=\"productsWithPosition.length==0\">\n  <mat-divider></mat-divider>\n  <h3>Korpa je prazna!</h3>\n  <mat-divider></mat-divider>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-task/upload-task.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload-task/upload-task.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div *ngIf=\"percentag async as pct\">\n    <progress [value]=\"pct\" max=\"100\"></progress>\n    {{ pct | number }}%\n  </div> -->\n  \n  \n  \n  <div *ngIf=\"snapshot | async as snap\">\n  \n    {{ snap.bytesTransferred }} of {{ snap.totalBytes }} \n  \n    <div *ngIf=\"downloadURL as url\">\n      <h3>Slika je postavljena!</h3>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/uploader/uploader.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/uploader/uploader.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dropzone\" \n     dropzone\n     (hovered)=\"toggleHover($event)\"\n     (dropped)=\"onDrop($event)\"\n     [class.hovering]=\"isHovering\" >\n\n\n     <h3>Slika proizvoda</h3>\n     <p>Prevucite sliku ovde</p>\n</div>\n\n<div *ngFor=\"let file of files\">\n  <upload-task [file]=\"file\"></upload-task>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-list.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-list.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>user-list works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>user works!</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-us/about-us.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-div {\n    padding: 2rem;\n}\n\n.image-div {\n    text-align: center; \n    margin-top: 6rem;\n}\n\nimg {\n    max-width: 100%;\n    height: auto;\n    \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7O0FBRWhCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWRpdiB7XG4gICAgcGFkZGluZzogMnJlbTtcbn1cblxuLmltYWdlLWRpdiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICBtYXJnaW4tdG9wOiA2cmVtO1xufVxuXG5pbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgXG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutUsComponent = class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-us.component.css */ "./src/app/about-us/about-us.component.css")).default]
    })
], AboutUsComponent);



/***/ }),

/***/ "./src/app/add-product/add-product.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-product/add-product.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row {\n    display: flex;\n    flex-direction: row;\n  }\n  \n  .col {\n    flex: 1;\n    margin-right: 20px;\n    margin-top: 1rem;\n  }\n  \n  .col:last-child {\n    margin-right: 0;\n  }\n  \n  .row:last-child {\n    text-align: center;\n  }\n  \n  .full-width {\n    width: 100%;\n  }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXByb2R1Y3QvYWRkLXByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBR0E7SUFDRSxXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9hZGQtcHJvZHVjdC9hZGQtcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG4gIFxuICAuY29sIHtcbiAgICBmbGV4OiAxO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICB9XG4gIFxuICAuY29sOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuXG4gIC5yb3c6bGFzdC1jaGlsZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cblxuICAuZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuIl19 */");

/***/ }),

/***/ "./src/app/add-product/add-product.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-product/add-product.component.ts ***!
  \******************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AddProductComponent = class AddProductComponent {
    constructor(ps, _router) {
        this.ps = ps;
        this._router = _router;
        this.productName = "";
        this.productDescription = "";
        this.productCategory = "";
        this.productImage = "";
        this.productGallery = [];
        this.categories = ["Torbe", "Rančevi", "Novčanici"];
    }
    ngOnInit() {
    }
    onFileSelected() {
        const inputNode = document.querySelector('#file');
        if (typeof (FileReader) !== 'undefined') {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.file = e.target.result;
            };
            reader.readAsArrayBuffer(inputNode.files[0]);
        }
    }
    createProduct() {
        this.productGallery = JSON.parse(localStorage.getItem("imgURL"));
        this.productImage = this.productGallery[0];
        console.log(this.productImage.search("test%2F"));
        let record = {};
        record['pic'] = this.productImage.replace("/test%2F", "/test%2Fthumbnails%2F").replace(".jpg", "_400x400.jpg");
        record['name'] = this.productName;
        record['price'] = this.productPrice;
        record['category'] = this.productCategory;
        record['description'] = this.productDescription;
        record['amount'] = this.productAmount;
        record['gallery'] = this.productGallery;
        this.ps.createProduct(record).then(resp => {
            this.productName = "";
            this.productPrice = 0;
            this.productDescription = "";
            this.productCategory = "";
            this.productAmount = 0;
            this.productImage = "";
            this.productGallery = [];
            localStorage.setItem("imgURL", "[]");
            console.log(resp);
            this._router.navigate(['']);
        }).catch(error => {
            console.log(error);
        });
    }
};
AddProductComponent.ctorParameters = () => [
    { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AddProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-product.component.css */ "./src/app/add-product/add-product.component.css")).default]
    })
], AddProductComponent);



/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


const slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('HomePage <=> AboutPage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* <=> FilterPage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()),
    ])
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/user-list/user-list.component.ts");
/* harmony import */ var _uploader_uploader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uploader/uploader.component */ "./src/app/uploader/uploader.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _shopping_cart_form_shopping_cart_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shopping-cart-form/shopping-cart-form.component */ "./src/app/shopping-cart-form/shopping-cart-form.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/add-product/add-product.component.ts");
/* harmony import */ var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./edit-product/edit-product.component */ "./src/app/edit-product/edit-product.component.ts");


















const routes = [
    { path: '', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__["HomePageComponent"], data: { animation: 'HomePage' } },
    { path: 'users', component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"] },
    { path: 'products', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"], data: { animation: 'FilterPage' } },
    { path: 'upload', component: _uploader_uploader_component__WEBPACK_IMPORTED_MODULE_5__["UploaderComponent"] },
    { path: 'products/details', component: _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"] },
    { path: 'about', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"], data: { animation: 'AboutPage' } },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"] },
    { path: 'orders', component: _order_order_component__WEBPACK_IMPORTED_MODULE_9__["OrderComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"]] },
    { path: 'newProduct', component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_16__["AddProductComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"]] },
    { path: 'products/edit', component: _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_17__["EditProductComponent"], canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"]] },
    { path: 'cart', component: _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_11__["ShoppingCartComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
    { path: 'cart/form', component: _shopping_cart_form_shopping_cart_form_component__WEBPACK_IMPORTED_MODULE_12__["ShoppingCartFormComponent"] },
    { path: '404', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"] },
    { path: '**', redirectTo: '404' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-toolbar.mat-primary {\n    background: royalblue;\n    color: #fff;\n}\n\nmat-toolbar {\n    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n}\n\na {\n    background-color: transparent;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBO0lBQ0ksc0VBQXNFO0FBQzFFOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICAgIGJhY2tncm91bmQ6IHJveWFsYmx1ZTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxubWF0LXRvb2xiYXIge1xuICAgIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwwLDAsMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwwLDAsMC4yMik7XG59XG5cbmEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.categories = ["Torbe", "Rančevi", "Novčanici"];
        localStorage.setItem("user", "");
        localStorage.setItem("cart", "[]");
    }
    store(category) {
        localStorage.setItem('category', category);
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/user-list/user-list.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product.service */ "./src/app/product.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _dropzone_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dropzone.directive */ "./src/app/dropzone.directive.ts");
/* harmony import */ var _uploader_uploader_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./uploader/uploader.component */ "./src/app/uploader/uploader.component.ts");
/* harmony import */ var _upload_task_upload_task_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./upload-task/upload-task.component */ "./src/app/upload-task/upload-task.component.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./product-modal/product-modal.component */ "./src/app/product-modal/product-modal.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _shopping_cart_form_shopping_cart_form_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shopping-cart-form/shopping-cart-form.component */ "./src/app/shopping-cart-form/shopping-cart-form.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/add-product/add-product.component.ts");
/* harmony import */ var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./edit-product/edit-product.component */ "./src/app/edit-product/edit-product.component.ts");






































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _product_product_component__WEBPACK_IMPORTED_MODULE_10__["ProductComponent"],
            _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_11__["ProductListComponent"],
            _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_12__["UserListComponent"],
            _user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"],
            _dropzone_directive__WEBPACK_IMPORTED_MODULE_17__["DropzoneDirective"],
            _uploader_uploader_component__WEBPACK_IMPORTED_MODULE_18__["UploaderComponent"],
            _upload_task_upload_task_component__WEBPACK_IMPORTED_MODULE_19__["UploadTaskComponent"],
            _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_21__["AboutUsComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_22__["ContactComponent"],
            _order_order_component__WEBPACK_IMPORTED_MODULE_23__["OrderComponent"],
            _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_24__["MainNavComponent"],
            _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_26__["HomePageComponent"],
            _product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_28__["ProductModalComponent"],
            _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_29__["ShoppingCartComponent"],
            _shopping_cart_form_shopping_cart_form_component__WEBPACK_IMPORTED_MODULE_31__["ShoppingCartFormComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_32__["LoginComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_34__["PageNotFoundComponent"],
            _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_35__["AddProductComponent"],
            _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_36__["EditProductComponent"]
        ],
        imports: [
            _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_16__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_25__["LayoutModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_27__["NgbModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_30__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_33__["AngularFireAuthModule"]
        ],
        providers: [_product_service__WEBPACK_IMPORTED_MODULE_14__["ProductService"], _user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_20__["AngularFireStorage"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        entryComponents: [_product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_28__["ProductModalComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");




let AuthService = class AuthService {
    constructor(_router, us) {
        this._router = _router;
        this.us = us;
    }
    canActivate() {
        if (this.us.isLoggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['404']);
            return false;
        }
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/dropzone.directive.ts":
/*!***************************************!*\
  !*** ./src/app/dropzone.directive.ts ***!
  \***************************************/
/*! exports provided: DropzoneDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropzoneDirective", function() { return DropzoneDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DropzoneDirective = class DropzoneDirective {
    constructor() {
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hovered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onDrop($event) {
        $event.preventDefault();
        this.dropped.emit($event.dataTransfer.files);
        this.hovered.emit(false);
    }
    onDragOver($event) {
        $event.preventDefault();
        this.hovered.emit(true);
    }
    onDragLeave($event) {
        $event.preventDefault();
        this.hovered.emit(false);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DropzoneDirective.prototype, "dropped", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DropzoneDirective.prototype, "hovered", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event'])
], DropzoneDirective.prototype, "onDrop", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragover', ['$event'])
], DropzoneDirective.prototype, "onDragOver", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragleave', ['$event'])
], DropzoneDirective.prototype, "onDragLeave", null);
DropzoneDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[dropzone]'
    })
], DropzoneDirective);



/***/ }),

/***/ "./src/app/edit-product/edit-product.component.css":
/*!*********************************************************!*\
  !*** ./src/app/edit-product/edit-product.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row {\n    display: flex;\n    flex-direction: row;\n  }\n  \n  .col {\n    flex: 1;\n    margin-right: 20px;\n    margin-top: 1rem;\n  }\n  \n  .col:last-child {\n    margin-right: 0;\n  }\n  \n  .full-width {\n    width: 100%;\n  }\n  \n  .row:last-child {\n    text-align: center;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1wcm9kdWN0L2VkaXQtcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFHQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtcHJvZHVjdC9lZGl0LXByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICBcbiAgLmNvbCB7XG4gICAgZmxleDogMTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgfVxuICBcbiAgLmNvbDpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cblxuXG4gIC5mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5yb3c6bGFzdC1jaGlsZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4iXX0= */");

/***/ }),

/***/ "./src/app/edit-product/edit-product.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-product/edit-product.component.ts ***!
  \********************************************************/
/*! exports provided: EditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductComponent", function() { return EditProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product */ "./src/app/product.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let EditProductComponent = class EditProductComponent {
    constructor(ps, _router, _snackBar) {
        this.ps = ps;
        this._router = _router;
        this._snackBar = _snackBar;
        this.product = new _product__WEBPACK_IMPORTED_MODULE_3__["Product"];
        this.categories = ["Torbe", "Rančevi", "Novčanici"];
    }
    ngOnInit() {
        this.ps.getProductById(localStorage.getItem('productId')).subscribe(actionArray => {
            this.product.name = actionArray.payload.get('name');
            this.product.price = actionArray.payload.get('price');
            this.product.category = actionArray.payload.get('category');
            this.product.amount = actionArray.payload.get('amount');
            this.product.description = actionArray.payload.get('description');
            this.product.picture = actionArray.payload.get('pic');
        });
        console.log(this.product);
    }
    onFileSelected() {
        const inputNode = document.querySelector('#file');
        if (typeof (FileReader) !== 'undefined') {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.file = e.target.result;
            };
            reader.readAsArrayBuffer(inputNode.files[0]);
        }
    }
    updateProduct() {
        //this.product.picture = localStorage.getItem("imgURL");
        //console.log(this.product.picture.search("test%2F"));
        let record = {};
        //record['pic'] = this.product.picture.replace("/test%2F", "/test%2Fthumbnails%2F").replace(".jpg", "_400x400.jpg");
        record['pic'] = this.product.picture;
        record['name'] = this.product.name;
        record['price'] = this.product.price;
        record['category'] = this.product.category;
        record['description'] = this.product.description;
        record['amount'] = this.product.amount;
        this.ps.updateProduct(localStorage.getItem('productId'), record).then(resp => {
            this.product = new _product__WEBPACK_IMPORTED_MODULE_3__["Product"]();
            console.log(resp);
            this._router.navigate(['']);
            this._snackBar.open("Uspešno izmenjen proizvod!", '', { duration: 3000 });
        }).catch(error => {
            console.log(error);
        });
    }
};
EditProductComponent.ctorParameters = () => [
    { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
EditProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-product/edit-product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-product.component.css */ "./src/app/edit-product/edit-product.component.css")).default]
    })
], EditProductComponent);



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n    margin: 0 auto;\n}\n\n.home-page-main-div {\n    margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5ob21lLXBhZ2UtbWFpbi1kaXYge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomePageComponent = class HomePageComponent {
    constructor() {
        this.images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
    }
    ngOnInit() {
    }
};
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")).default]
    })
], HomePageComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row {\n  display: flex;\n  flex-direction: row;\n}\n\n.col {\n  flex: 1;\n  margin-right: 20px;\n  margin-top: 1rem;\n}\n\n.col:last-child {\n  margin-right: 0;\n}\n\n.row:last-child {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5jb2wge1xuICBmbGV4OiAxO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5jb2w6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLnJvdzpsYXN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");






let LoginComponent = class LoginComponent {
    constructor(formBuilder, us, _router, _snackBar) {
        this.formBuilder = formBuilder;
        this.us = us;
        this._router = _router;
        this._snackBar = _snackBar;
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.formGroup = this.formBuilder.group({
            'username': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    getError(el) {
        switch (el) {
            case 'user':
                if (this.formGroup.get('username').hasError('required')) {
                    return 'Username required';
                }
                break;
            case 'pass':
                if (this.formGroup.get('password').hasError('required')) {
                    return 'Password required';
                }
                break;
            default:
                return '';
        }
    }
    onSubmit(post) {
        this.us.logIn(post.username, post.password);
        this._router.navigate(['']);
        this.formGroup.reset();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'my-app',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/main-nav/main-nav.component.css":
/*!*************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidenav-container {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n\n  \n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.mat-toolbar.mat-primary {\n  /* background: #cc6600; */\n  color: #fff;\n}\n\n.upperLinks {\n  text-decoration: none;\n}\n\n.upperLinks:hover {\n  color: white;\n}\n\n.fill-space {\n  flex: 1 1 auto;\n}\n\n.box-shadow {\n  box-shadow: 0px 0px 8px #e91e63;\n  -webkit-box-shadow: 0px 0px 8px #e91e63;\n  -moz-box-shadow: 0px 0px 8px #e91e63;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1uYXYvbWFpbi1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCOzs7QUFHcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUlBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQix1Q0FBdUM7RUFDdkMsb0NBQW9DOztBQUV0QyIsImZpbGUiOiJzcmMvYXBwL21haW4tbmF2L21haW4tbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgXG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIC8qIGJhY2tncm91bmQ6ICNjYzY2MDA7ICovXG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udXBwZXJMaW5rcyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuXG5cbi51cHBlckxpbmtzOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufSBcblxuLmZpbGwtc3BhY2Uge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmJveC1zaGFkb3cge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAjZTkxZTYzO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggOHB4ICNlOTFlNjM7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA4cHggI2U5MWU2MztcblxufSJdfQ== */");

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");







let MainNavComponent = class MainNavComponent {
    constructor(breakpointObserver, us, _router) {
        this.breakpointObserver = breakpointObserver;
        this.us = us;
        this._router = _router;
        this.num = 0;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
    }
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
    userLogged() {
        return this.us.isLoggedIn();
    }
    signOut() {
        this.us.logOut();
        this._router.navigate([""]);
    }
    returnNumber() {
        let lista = JSON.parse(localStorage.getItem("cart"));
        if (lista != null) {
            return lista.length;
        }
        return this.num;
    }
    closeSideNavOnMobile() {
        if (this.drawer._mode == "over") {
            this.drawer.toggle();
        }
    }
};
MainNavComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('drawer', { static: false })
], MainNavComponent.prototype, "drawer", void 0);
MainNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-nav/main-nav.component.html")).default,
        animations: [
            _animations__WEBPACK_IMPORTED_MODULE_5__["slideInAnimation"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-nav.component.css */ "./src/app/main-nav/main-nav.component.css")).default]
    })
], MainNavComponent);



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



const MaterialComponents = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"]
];
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [MaterialComponents
        ],
        exports: [MaterialComponents
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/order.service.ts":
/*!**********************************!*\
  !*** ./src/app/order.service.ts ***!
  \**********************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let OrderService = class OrderService {
    constructor(fs) {
        this.fs = fs;
    }
    getOrders() {
        return this.fs.collection('orders').snapshotChanges();
    }
    getOrderById(id) {
        return this.fs.doc('orders/' + id).snapshotChanges();
    }
    getProductDoc(id) {
        return this.fs.doc('products' + id).get();
    }
    createOrder(record) {
        return this.fs.collection('orders').add(record);
    }
    setDelivered(recordId) {
        this.fs.doc('orders/' + recordId).set({ delivered: true }, { merge: true });
    }
    deleteOrder(recordId) {
        this.fs.doc('orders/' + recordId).delete();
    }
};
OrderService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrderService);



/***/ }),

/***/ "./src/app/order.ts":
/*!**************************!*\
  !*** ./src/app/order.ts ***!
  \**************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Order {
    constructor() {
        this.delivered = false;
    }
}


/***/ }),

/***/ "./src/app/order/order.component.css":
/*!*******************************************!*\
  !*** ./src/app/order/order.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL29yZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../order.service */ "./src/app/order.service.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");




let OrderComponent = class OrderComponent {
    constructor(os, ps) {
        this.os = os;
        this.ps = ps;
        this.products = [];
        this.np = [];
    }
    ngOnInit() {
        this.ps.getProducts().subscribe(actionArray => {
            this.products = actionArray.map(item => {
                return Object.assign({ id: item.payload.doc.id }, item.payload.doc.data());
            });
        });
        this.os.getOrders().subscribe(actionArray => {
            this.orders = actionArray.map(item => {
                return Object.assign({ id: item.payload.doc.id }, item.payload.doc.data());
            });
            this.orders.forEach(order => {
                order.products.forEach(product => {
                    this.products.forEach(p => {
                        if (p.id == product) {
                            this.np.push(p);
                        }
                    });
                });
                order.productsO = this.np;
                this.np = [];
            });
        });
    }
    delete(id) {
        this.os.deleteOrder(id);
    }
    setDelivered(id) {
        this.os.setDelivered(id);
    }
};
OrderComponent.ctorParameters = () => [
    { type: _order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"] },
    { type: _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
];
OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order.component.css */ "./src/app/order/order.component.css")).default]
    })
], OrderComponent);



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n    text-align: center;\n    margin-top: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")).default]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/product-list/product-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-list/product-list.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-header-image {\n    /* background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg'); */\n    background-size: cover;\n}\n\n.example-card {\n    /* max-width: 400px; */\n    margin-bottom: 50px;\n    background-color: transparent;\n    float: left;\n    border: 1px solid #e91e63;\n    box-shadow: 0 0px 8px 0 #e91e63;\n    -moz-box-shadow: 0 0px 8px 0 #e91e63;\n    -webkit-box-shadow: 0 0px 8px 0 #e91e63;\n    \n    \n}\n\n.example-card:hover {\n    box-shadow: 0 0px 24px 0 #e91e63;\n    -moz-box-shadow: 0 0px 24px 0 #e91e63;\n    -webkit-box-shadow: 0 0px 24px 0 #e91e63;\n\n}\n\nimg {\n    width: 325px; \n    height: 300px;\n    background: transparent;\n}\n\n.tab:hover {\n    text-decoration: none;\n    color: #e91e63;\n}\n\n.tab-container {\n    padding: 1rem;\n    margin-bottom: 2rem;\n}\n\n.image-container {\n    text-align: center;\n    \n}\n\n.card-actions {\n    text-align: center;\n}\n\nmat-form-field {\n    width: 5rem;\n}\n\n.card-content-container {\n    text-align: center;\n}\n\n.example-tab-icon:hover {\n    color: #e91e63;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUZBQXlGO0lBQ3pGLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsK0JBQStCO0lBQy9CLG9DQUFvQztJQUNwQyx1Q0FBdUM7OztBQUczQzs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxxQ0FBcUM7SUFDckMsd0NBQXdDOztBQUU1Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUdBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpOyAqL1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5leGFtcGxlLWNhcmQge1xuICAgIC8qIG1heC13aWR0aDogNDAwcHg7ICovXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTkxZTYzO1xuICAgIGJveC1zaGFkb3c6IDAgMHB4IDhweCAwICNlOTFlNjM7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDBweCA4cHggMCAjZTkxZTYzO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwcHggOHB4IDAgI2U5MWU2MztcbiAgICBcbiAgICBcbn1cblxuLmV4YW1wbGUtY2FyZDpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAwcHggMjRweCAwICNlOTFlNjM7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDBweCAyNHB4IDAgI2U5MWU2MztcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMHB4IDI0cHggMCAjZTkxZTYzO1xuXG59XG5cbmltZyB7XG4gICAgd2lkdGg6IDMyNXB4OyBcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5cbi50YWI6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI2U5MWU2Mztcbn1cblxuLnRhYi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxufSBcblxuLmNhcmQtYWN0aW9ucyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDVyZW07XG59XG5cbi5jYXJkLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5leGFtcGxlLXRhYi1pY29uOmhvdmVyIHtcbiAgICBjb2xvcjogI2U5MWU2Mztcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product-modal/product-modal.component */ "./src/app/product-modal/product-modal.component.ts");







let ProductListComponent = class ProductListComponent {
    // productName:string = "";
    // productDescription:string = "";
    // productPrice:number;
    // productAmount:number;
    // productCategory:string = "";
    // productImage:string = "";
    // file:File;
    constructor(ps, _snackBar, us, breakpointObserver, dialog) {
        this.ps = ps;
        this._snackBar = _snackBar;
        this.us = us;
        this.breakpointObserver = breakpointObserver;
        this.dialog = dialog;
        this.productsInCart = [];
        this.filteredProducts = this.products;
        this.num = 1;
        this.arr = new Array(50);
        this.links = ['Svi proizvodi', "Torbe", "Rančevi", "Novčanici"];
        this.activeLink = this.links[0];
        this.isExtraSmall = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["Breakpoints"].XSmall);
    }
    ngOnInit() {
        this.ps.getProducts().subscribe(actionArray => {
            this.products = actionArray.map(item => {
                return Object.assign({ id: item.payload.doc.id }, item.payload.doc.data());
            });
            this.filteredProducts = this.products;
        });
        this.fillArray();
    }
    fillArray() {
        for (let i = 0; i < 50; i++) {
            this.arr[i] = i + 1;
        }
    }
    // onFileSelected() {
    //   const inputNode: any = document.querySelector('#file');
    //   if (typeof (FileReader) !== 'undefined') {
    //     const reader = new FileReader();
    //     reader.onload = (e: any) => {
    //       this.file = e.target.result;
    //     };
    //     reader.readAsArrayBuffer(inputNode.files[0]);
    //   }
    // }
    addToCart(productId) {
        for (let i = 0; i < this.num; i++) {
            this.products.forEach(element => {
                if (element.id == productId) {
                    if (element.amount > 0)
                        this.productsInCart.push(element);
                    console.log(element.amount);
                }
            });
        }
        localStorage.setItem("cart", JSON.stringify(this.productsInCart));
    }
    showByCat(c) {
        if (c != 'Svi proizvodi') {
            this.filteredProducts = [];
            this.products.forEach(element => {
                if (element.category == c)
                    this.filteredProducts.push(element);
            });
        }
        else {
            this.showAll();
        }
    }
    showAll() {
        this.filteredProducts = this.products;
    }
    // createProduct()
    // {
    //   this.productImage = localStorage.getItem("imgURL");
    //   console.log(this.productImage.search("test%2F"));
    //   let record = {};
    //   record['pic'] = this.productImage.replace("/test%2F", "/test%2Fthumbnails%2F").replace(".jpg", "_400x400.jpg");
    //   record['name'] = this.productName;
    //   record['price'] = this.productPrice;
    //   record['category'] = this.productCategory;
    //   record['description'] = this.productDescription;
    //   record['amount'] = this.productAmount;
    //   this.ps.createProduct(record).then(resp =>{
    //     this.productName = "";
    //     this.productPrice = 0;
    //     this.productDescription = "";
    //     this.productCategory = "";
    //     this.productAmount = 0;
    //     this.productImage = "";
    //     console.log(resp);
    //   }).catch(error => {
    //     console.log(error);
    //   });
    // }
    deleteProduct(productId) {
        this.ps.deleteProduct(productId);
    }
    store(id) {
        localStorage.setItem('productId', id);
    }
    resetNumber() {
        this.num = 1;
    }
    openSnackBar(productName, amount) {
        if (amount > 0) {
            this._snackBar.open(productName + " je uspešno dodat u korpu. (" + this.num.toString() + "x)", '', {
                duration: 3000,
            });
        }
    }
    openSnackBar2(productName) {
        this._snackBar.open("Proizvod " + productName + "je uspešno obrisan!", '', {
            duration: 3000,
        });
    }
    userLogged() {
        return this.us.isLoggedIn();
    }
    openDialog() {
        const d = this.dialog.open(_product_modal_product_modal_component__WEBPACK_IMPORTED_MODULE_6__["ProductModalComponent"], {
            width: 'calc(100% - 250px)',
            maxWidth: '100vw'
        });
        const smallDialogSubscription = this.isExtraSmall.subscribe(size => {
            if (size.matches) {
                d.updateSize('100vw', '80vh');
            }
            else {
                d.updateSize('calc(100% - 250px)');
            }
        });
        d.afterClosed().subscribe(() => {
            smallDialogSubscription.unsubscribe();
        });
    }
};
ProductListComponent.ctorParameters = () => [
    { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-list.component.css */ "./src/app/product-list/product-list.component.css")).default]
    })
], ProductListComponent);



/***/ }),

/***/ "./src/app/product-modal/product-modal.component.css":
/*!***********************************************************!*\
  !*** ./src/app/product-modal/product-modal.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n    width: 325px; \n    height: 300px;\n    background: transparent;\n}\n\n.image-container {\n    text-align: center;\n    \n}\n\n.card-content-container {\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1tb2RhbC9wcm9kdWN0LW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LW1vZGFsL3Byb2R1Y3QtbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gICAgd2lkdGg6IDMyNXB4OyBcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG59IFxuXG4uY2FyZC1jb250ZW50LWNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/product-modal/product-modal.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/product-modal/product-modal.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModalComponent", function() { return ProductModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product */ "./src/app/product.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");





let ProductModalComponent = class ProductModalComponent {
    constructor(ps, us) {
        this.ps = ps;
        this.us = us;
        this.product = new _product__WEBPACK_IMPORTED_MODULE_2__["Product"];
        this.gotP = {};
        this.ps.getProductById(localStorage.getItem('productId')).subscribe(actionArray => {
            this.product.name = actionArray.payload.get('name');
            this.product.price = actionArray.payload.get('price');
            this.product.category = actionArray.payload.get('category');
            this.product.amount = actionArray.payload.get('amount');
            this.product.description = actionArray.payload.get('description');
            this.product.picture = actionArray.payload.get('pic');
        });
        console.log(this.product);
    }
    ngOnInit() {
    }
    userLogged() {
        return this.us.isLoggedIn();
    }
};
ProductModalComponent.ctorParameters = () => [
    { type: _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
ProductModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-modal/product-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-modal.component.css */ "./src/app/product-modal/product-modal.component.css")).default]
    })
], ProductModalComponent);



/***/ }),

/***/ "./src/app/product.service.ts":
/*!************************************!*\
  !*** ./src/app/product.service.ts ***!
  \************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ProductService = class ProductService {
    constructor(fs, storage) {
        this.fs = fs;
        this.storage = storage;
    }
    getProducts() {
        return this.fs.collection('products').snapshotChanges();
    }
    getProductById(id) {
        return this.fs.doc('products/' + id).snapshotChanges();
    }
    getProduct(id) {
        const productsDocuments = this.fs.doc('products/' + id);
        return productsDocuments.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(changes => {
            const data = changes.payload.data();
            const id = changes.payload.id;
            return Object.assign({ id }, data);
        }));
    }
    createProduct(record) {
        return this.fs.collection('products').add(record);
    }
    updateProduct(recordId, record) {
        return this.fs.doc('products/' + recordId).update(record);
    }
    deleteProduct(recordId) {
        this.fs.doc('products/' + recordId).delete();
    }
    getCategories() {
        return this.categories;
    }
    setCategories(categories) {
        this.categories = categories;
    }
    uploadPicture(file) {
        let retURL = "";
        const path = `test/${Date.now()}_${file.name}.jpg`;
        // Reference to storage bucket
        const ref = this.storage.ref(path);
        // The main task
        this.task = this.storage.upload(path, file);
        // Progress monitoring
        this.percentage = this.task.percentageChanges();
        this.snapshot = this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(console.log), 
        // The file's download URL
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.downloadURL = yield ref.getDownloadURL().toPromise();
            retURL = this.downloadURL;
            this.fs.collection('files').add({ downloadURL: this.downloadURL, path });
        })));
        return retURL;
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ "./src/app/product.ts":
/*!****************************!*\
  !*** ./src/app/product.ts ***!
  \****************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Product {
}


/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product */ "./src/app/product.ts");




let ProductComponent = class ProductComponent {
    constructor(ps) {
        this.ps = ps;
        this.product = new _product__WEBPACK_IMPORTED_MODULE_3__["Product"];
        this.gotP = {};
    }
    ngOnInit() {
        this.ps.getProductById(localStorage.getItem('productId')).subscribe(actionArray => {
            this.product.name = actionArray.payload.get('name');
            this.product.price = actionArray.payload.get('price');
            this.product.category = actionArray.payload.get('category');
            this.product.amount = actionArray.payload.get('amount');
            this.product.description = actionArray.payload.get('description');
            this.product.picture = actionArray.payload.get('pic');
        });
        console.log(this.product);
    }
};
ProductComponent.ctorParameters = () => [
    { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
];
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")).default]
    })
], ProductComponent);



/***/ }),

/***/ "./src/app/shopping-cart-form/shopping-cart-form.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/shopping-cart-form/shopping-cart-form.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row {\n    display: flex;\n    flex-direction: row;\n  }\n  \n  .col {\n    flex: 1;\n    margin-right: 20px;\n    margin-top: 1rem;\n  }\n  \n  .col:last-child {\n    margin-right: 0;\n  }\n  \n  .full-width {\n    width: 100%;\n  }\n  \n  .shipping-card {\n    min-width: 120px;\n    margin: 20px auto;\n  }\n  \n  .card-header {\n    text-align: center;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmctY2FydC1mb3JtL3Nob3BwaW5nLWNhcnQtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFHQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zaG9wcGluZy1jYXJ0LWZvcm0vc2hvcHBpbmctY2FydC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgXG4gIC5jb2wge1xuICAgIGZsZXg6IDE7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gIH1cbiAgXG4gIC5jb2w6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG5cblxuICAuZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5zaGlwcGluZy1jYXJkIHtcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICB9XG5cbiAgLmNhcmQtaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/shopping-cart-form/shopping-cart-form.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shopping-cart-form/shopping-cart-form.component.ts ***!
  \********************************************************************/
/*! exports provided: ShoppingCartFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartFormComponent", function() { return ShoppingCartFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../order */ "./src/app/order.ts");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../order.service */ "./src/app/order.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let ShoppingCartFormComponent = class ShoppingCartFormComponent {
    constructor(os, _location, _router, _formBuilder) {
        this.os = os;
        this._location = _location;
        this._router = _router;
        this._formBuilder = _formBuilder;
        this.products = [];
        this.orderToSend = new _order__WEBPACK_IMPORTED_MODULE_2__["Order"];
        this.totalCost = 0;
        this.showExtraContactInfoFormField = false;
        this.states = [
            { name: 'Srbija', abbreviation: 'SRB' },
            { name: 'Bosna i Hercegovina', abbreviation: 'BiH' }
        ];
    }
    createForm() {
        this.formGroup = this._formBuilder.group({
            "firstName": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            "lastName": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            "address": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            "city": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            "state": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            "postalCode": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern("^[0-9]*$")]],
            "phone": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            "email": ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].email]],
            "phone2": [null],
            "email2": [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].email],
            "note": [null]
        });
    }
    ngOnInit() {
        this.products = JSON.parse(localStorage.getItem("cart"));
        this.totalCost = this.getTotalCost();
        this.createForm();
    }
    purchase() {
        let record = {};
        record['customerFirstName'] = this.orderToSend.customerFirstName;
        record['customerLastName'] = this.orderToSend.customerLastName;
        record['customerAddress'] = this.orderToSend.customerAddress;
        record['customerCity'] = this.orderToSend.customerCity;
        record['customerPostalCode'] = this.orderToSend.customerPostalCode;
        record['customerState'] = this.orderToSend.customerState;
        record['customerEmail'] = this.orderToSend.customerEmail;
        record['customerPhone'] = this.orderToSend.customerPhone;
        record['customerEmail2'] = this.orderToSend.customerEmail2;
        record['customerPhone2'] = this.orderToSend.customerPhone2;
        record['customerNote'] = this.orderToSend.customerNote;
        record['date'] = this.orderToSend.date;
        record['price'] = this.orderToSend.price;
        let prs = [];
        this.products.forEach(element => {
            prs.push(element.id);
        });
        console.log(prs);
        record['products'] = prs;
        record['title'] = this.orderToSend.title;
        record['delivered'] = this.orderToSend.delivered;
        this.os.createOrder(record).then(resp => {
            this.orderToSend = new _order__WEBPACK_IMPORTED_MODULE_2__["Order"];
            localStorage.setItem("cart", "[]");
            this.formGroup.reset();
            this.totalCost = 0;
            this.ngOnInit();
            console.log(resp);
        })
            .catch(error => {
            console.log(error);
        });
    }
    getTotalCost() {
        if (this.products != null) {
            return this.products.map(p => p.price).reduce((acc, value) => acc + value, 0);
        }
        return 0;
    }
    notification() {
        alert('Hvala na saradnji!');
    }
    goBack() {
        this.formGroup.reset();
        this._router.navigate(['cart']);
    }
    homePage() {
        this._router.navigate(['']);
    }
    onSubmit(post) {
        this.orderToSend.customerFirstName = post.firstName;
        this.orderToSend.customerLastName = post.lastName;
        this.orderToSend.customerAddress = post.address;
        this.orderToSend.customerCity = post.city;
        this.orderToSend.customerPostalCode = post.postalCode;
        this.orderToSend.customerState = post.state;
        this.orderToSend.customerEmail = post.email;
        this.orderToSend.customerPhone = post.phone;
        this.orderToSend.customerEmail2 = post.email2;
        this.orderToSend.customerPhone2 = post.phone2;
        this.orderToSend.customerNote = post.note;
        this.orderToSend.date = new Date();
        this.orderToSend.price = this.totalCost;
        this.orderToSend.productsO = this.products;
        this.orderToSend.title = "newOrder " + post.firstName + " " + post.lastName;
        this.purchase();
        this.formGroup.reset();
        this.notification();
        this.homePage();
    }
    getPostalCodeLen() {
        let len = String(this.formGroup.get('postalCode').value).length;
        return len;
    }
};
ShoppingCartFormComponent.ctorParameters = () => [
    { type: _order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }
];
ShoppingCartFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping-cart-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shopping-cart-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-cart-form/shopping-cart-form.component.html")).default,
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('myInsertRemoveTrigger', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1 })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 }))
                ])
            ])],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shopping-cart-form.component.css */ "./src/app/shopping-cart-form/shopping-cart-form.component.css")).default]
    })
], ShoppingCartFormComponent);



/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table-container {\n  margin: 0.5rem;\n  overflow: auto;\n  height: 500px;\n\n}\ntable {\n    width: 100%;\n}\n.icon:hover {\n    color: white;\n}\ntd {\n    vertical-align: middle;\n    text-align: center;\n}\n.mat-header-cell {\n    text-align: center;\n}\ntr.mat-footer-row {\n  font-weight: bold;\n \n}\n.mat-table-sticky {\n  border-top: 1px solid #e0e0e0;\n}\ntr.example-detail-row {\n    height: 0;\n  }\ntr.example-element-row:not(.example-expanded-row):hover {\n    background: #777;\n  }\ntr.example-element-row:not(.example-expanded-row):active {\n    background: #e91e63;\n  }\n.example-element-row td {\n    border-bottom-width: 0;\n  }\n.example-element-detail {\n    overflow: hidden;\n    display: flex;\n  }\n.example-element-diagram {\n    min-width: 80px;\n    border: 2px solid black;\n    padding: 8px;\n    font-weight: lighter;\n    margin: 8px 0;\n    height: 104px;\n  }\n.example-element-symbol {\n    font-weight: bold;\n    font-size: 40px;\n    line-height: normal;\n  }\n.example-element-description {\n    padding: 16px;\n  }\n.example-element-description-attribution {\n    opacity: 0.5;\n  }\n.empty-cart-warning {\n    text-align: center;\n    margin: 2rem;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGFBQWE7O0FBRWY7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUlBO0lBQ0ksWUFBWTtBQUNoQjtBQUtBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBS0E7RUFDRSxpQkFBaUI7O0FBRW5CO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFRQTtJQUNJLFNBQVM7RUFDWDtBQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFFQTtJQUNFLHNCQUFzQjtFQUN4QjtBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjtBQUVBO0lBQ0UsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixhQUFhO0VBQ2Y7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCO0FBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFFQTtJQUNFLFlBQVk7RUFDZDtBQU9BO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWNhcnQvc2hvcHBpbmctY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMC41cmVtO1xuICBvdmVyZmxvdzogYXV0bztcbiAgaGVpZ2h0OiA1MDBweDtcblxufVxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5cblxuLmljb246aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG5cblxudGQge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cblxuXG50ci5tYXQtZm9vdGVyLXJvdyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuIFxufVxuLm1hdC10YWJsZS1zdGlja3kge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlMDtcbn1cblxuXG5cblxuXG5cblxudHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbiAgXG4gIHRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM3Nzc7XG4gIH1cbiAgXG4gIHRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTkxZTYzO1xuICB9XG4gIFxuICAuZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZWxlbWVudC1kaWFncmFtIHtcbiAgICBtaW4td2lkdGg6IDgwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgaGVpZ2h0OiAxMDRweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZWxlbWVudC1zeW1ib2wge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICB9XG4gIFxuICAuZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uLWF0dHJpYnV0aW9uIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cblxuXG5cbiAgXG5cblxuICAuZW1wdHktY2FydC13YXJuaW5nIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAycmVtO1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");




let ShoppingCartComponent = class ShoppingCartComponent {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.products = [];
        this.productsWithPosition = [];
        this.totalCost = 0;
    }
    ngOnInit() {
        this.products = JSON.parse(localStorage.getItem("cart"));
        this.appendPosition();
        this.totalCost = 0;
        this.totalCost = this.getTotalCost();
    }
    removeFromCartByPosition(pos) {
        for (let i = 0; i < this.productsWithPosition.length; i++) {
            if (this.productsWithPosition[i].position == pos) {
                this.products.splice(this.products.indexOf(this.productsWithPosition[i]), 1);
            }
        }
        localStorage.setItem("cart", JSON.stringify(this.products));
        this.ngOnInit();
    }
    appendPosition() {
        if (this.products != null) {
            this.productsWithPosition = this.products;
            for (let i = 0; i < this.productsWithPosition.length; i++) {
                this.productsWithPosition[i]['position'] = i + 1;
            }
        }
    }
    openSnackBar(productName) {
        this._snackBar.open(productName + " je uspešno uklonjen iz korpe.", '', {
            duration: 3000,
        });
    }
    getTotalCost() {
        if (this.products != null) {
            return this.products.map(p => p.price).reduce((acc, value) => acc + value, 0);
        }
        return 0;
    }
};
ShoppingCartComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shopping-cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-cart/shopping-cart.component.html")).default,
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('myInsertRemoveTrigger', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }))
                ])
            ]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/shopping-cart/shopping-cart.component.css")).default]
    })
], ShoppingCartComponent);



/***/ }),

/***/ "./src/app/upload-task/upload-task.component.css":
/*!*******************************************************!*\
  !*** ./src/app/upload-task/upload-task.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC10YXNrL3VwbG9hZC10YXNrLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/upload-task/upload-task.component.ts":
/*!******************************************************!*\
  !*** ./src/app/upload-task/upload-task.component.ts ***!
  \******************************************************/
/*! exports provided: UploadTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadTaskComponent", function() { return UploadTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let UploadTaskComponent = class UploadTaskComponent {
    constructor(storage, db) {
        this.storage = storage;
        this.db = db;
        this.downloadURL = JSON.parse(localStorage.getItem("imgURL"));
    }
    ngOnInit() {
        this.startUpload();
    }
    startUpload() {
        const path = `test/${Date.now()}_${this.file.name}`;
        const ref = this.storage.ref(path);
        this.task = this.storage.upload(path, this.file);
        this.snapshot = this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(console.log), 
        // The file's download URL
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.downloadURL.push(yield ref.getDownloadURL().toPromise());
            console.log(this.downloadURL);
            localStorage.setItem('imgURL', JSON.stringify(this.downloadURL));
            this.db.collection('files').add({ downloadURL: this.downloadURL, path });
        })));
    }
    isActive(snapshot) {
        return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
    }
};
UploadTaskComponent.ctorParameters = () => [
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UploadTaskComponent.prototype, "file", void 0);
UploadTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'upload-task',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload-task.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-task/upload-task.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload-task.component.css */ "./src/app/upload-task/upload-task.component.css")).default]
    })
], UploadTaskComponent);



/***/ }),

/***/ "./src/app/uploader/uploader.component.css":
/*!*************************************************!*\
  !*** ./src/app/uploader/uploader.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZGVyL3VwbG9hZGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/uploader/uploader.component.ts":
/*!************************************************!*\
  !*** ./src/app/uploader/uploader.component.ts ***!
  \************************************************/
/*! exports provided: UploaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploaderComponent", function() { return UploaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UploaderComponent = class UploaderComponent {
    constructor() {
        this.files = [];
    }
    toggleHover(event) {
        this.isHovering = event;
    }
    onDrop(files) {
        for (let i = 0; i < files.length; i++) {
            this.files.push(files.item(i));
        }
    }
};
UploaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'uploader',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./uploader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/uploader/uploader.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./uploader.component.css */ "./src/app/uploader/uploader.component.css")).default]
    })
], UploaderComponent);



/***/ }),

/***/ "./src/app/user-list/user-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-list/user-list.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/user-list/user-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-list/user-list.component.ts ***!
  \**************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserListComponent = class UserListComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-list.component.css */ "./src/app/user-list/user-list.component.css")).default]
    })
], UserListComponent);



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");



let UserService = class UserService {
    constructor(fs) {
        this.fs = fs;
    }
    signUp(email, password) {
        this.fs
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(value => {
            console.log('Success!', value);
        })
            .catch(err => {
            console.log('Something went wrong:', err.message);
        });
    }
    logIn(email, password) {
        this.fs
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(value => {
            console.log('Nice, it worked!');
            console.log(value.user.email);
        })
            .catch(err => {
            console.log('Something went wrong:', err.message);
        });
    }
    logOut() {
        this.fs.auth.signOut();
    }
    isLoggedIn() {
        let user = this.fs.auth.currentUser;
        if (user) {
            return true;
        }
        return false;
    }
};
UserService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");



let UserComponent = class UserComponent {
    constructor(us) {
        this.us = us;
    }
    ngOnInit() {
    }
};
UserComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")).default]
    })
], UserComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyA2PD7Xb7yWaf8eJmQLpuZSbjMsrnILqfM",
        authDomain: "unijashop-bbb70.firebaseapp.com",
        databaseURL: "https://unijashop-bbb70.firebaseio.com",
        projectId: "unijashop-bbb70",
        storageBucket: "unijashop-bbb70.appspot.com",
        messagingSenderId: "1004008271858",
        appId: "1:1004008271858:web:6adb17a0cefc0c6028056b",
        measurementId: "G-2S1R59GMLG"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/emil/projekti/webstore-svastarija/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map