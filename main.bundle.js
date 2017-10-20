webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_app_routing_module__ = __webpack_require__("../../../../../src/app/modules/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_app_app_component__ = __webpack_require__("../../../../../src/app/components/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_material_module__ = __webpack_require__("../../../../../src/app/modules/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navigation_navigation_component__ = __webpack_require__("../../../../../src/app/components/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_editor_editor_component__ = __webpack_require__("../../../../../src/app/components/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_editor2_editor2_component__ = __webpack_require__("../../../../../src/app/components/editor2/editor2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_document_editor_document_editor_component__ = __webpack_require__("../../../../../src/app/components/document-editor/document-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_document_list_document_list_component__ = __webpack_require__("../../../../../src/app/components/document-list/document-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_level_editor_level_editor_component__ = __webpack_require__("../../../../../src/app/components/level-editor/level-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_color_picker_color_picker_component__ = __webpack_require__("../../../../../src/app/components/color-picker/color-picker.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__components_app_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_editor_editor_component__["a" /* EditorComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_editor2_editor2_component__["a" /* Editor2Component */],
            __WEBPACK_IMPORTED_MODULE_11__components_document_editor_document_editor_component__["a" /* DocumentEditorComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_document_list_document_list_component__["a" /* DocumentListComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_level_editor_level_editor_component__["a" /* LevelEditorComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_color_picker_color_picker_component__["a" /* ColorPickerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__modules_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__modules_material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_forms__["h" /* ReactiveFormsModule */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_9__services_data_service__["a" /* DataService */], useClass: __WEBPACK_IMPORTED_MODULE_9__services_data_service__["a" /* DataService */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__components_app_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_dataService) {
        this._dataService = _dataService;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/components/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/color-picker/color-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ColorPickerComponent = ColorPickerComponent_1 = (function () {
    function ColorPickerComponent(_ngZone, _cdr) {
        this._ngZone = _ngZone;
        this._cdr = _cdr;
        // Value accessors
        this.onChange = function () { return null; };
        this.hexPattern = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
        this.extraColorsInner = [];
        this.color = [0, 100, 50];
        this.barHeight = 200;
        this.barClicked = false;
        this.barPickerTopPosition = 0;
        this.satWidth = 270;
        this.satHeight = 200;
        this.satCliked = false;
        this.dropDownOpen = false;
    }
    ColorPickerComponent.prototype.onMouseMove = function (event) {
        if (this.barClicked) {
            this.setBarPickerValue(event);
        }
        else if (this.satCliked) {
            this.setSatPickerValue(event);
        }
    };
    ColorPickerComponent.prototype.onMouseUp = function (event) {
        if (this.barClicked || this.satCliked) {
            this.barClicked = false;
            this.satCliked = false;
        }
    };
    ColorPickerComponent.prototype.handleBlurClick = function (e) {
        if (!this.dropDownOpen)
            return;
        var target = e.srcElement || e.target;
        if (Array.prototype.slice.call(target.classList).map(function (x) { return x.indexOf('jaspero') > -1; }).filter(function (x) { return x; }).length != 0)
            return;
        if (!this.satEl.nativeElement.contains(e.target) && target !== this.satEl.nativeElement) {
            this.dropDownOpen = false;
        }
    };
    Object.defineProperty(ColorPickerComponent.prototype, "extraColors", {
        // TODO: Add logic for formating color types
        set: function (colors) {
            var _this = this;
            var final = [];
            colors.forEach(function (color) {
                var col = _this._validHex(color);
                if (col) {
                    final.push(col);
                }
            });
            this.extraColorsInner = final;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ColorPickerComponent.prototype, "barPickerStyle", {
        get: function () {
            var toReturn = {
                background: this.hslBackgroundColor
            };
            if (this.barPickerTopPosition) {
                toReturn.top = this.barPickerTopPosition + "%";
            }
            return toReturn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorPickerComponent.prototype, "satPickerStyle", {
        get: function () {
            var toReturn = {
                background: this.hslFullColor
            };
            if (this.satPickerTopPosition) {
                toReturn.top = this.satPickerTopPosition;
            }
            if (this.satPickerLeftPosition) {
                toReturn.left = this.satPickerLeftPosition;
            }
            return toReturn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorPickerComponent.prototype, "hslBackgroundColor", {
        get: function () {
            return "hsl(" + this.color[0] + ", 100%, 50%)";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorPickerComponent.prototype, "hslFullColor", {
        get: function () {
            return "hsl(" + this.color[0] + ", " + this.color[1] + "%, " + this.color[2] + "%)";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorPickerComponent.prototype, "hexColor", {
        get: function () {
            var rgbColor = this._hslToRgb(this.color[0], this.color[1], this.color[2]);
            return Math.floor(((1 << 24) + (rgbColor[0] << 16) + (rgbColor[1] << 8) + rgbColor[2])).toString(16).slice(1).toUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    ColorPickerComponent.prototype.ngAfterViewInit = function () {
        this.inputEl.nativeElement.value = this.hexColor;
        this._registerInputListener();
    };
    ColorPickerComponent.prototype.toggle = function () {
        this.dropDownOpen = !this.dropDownOpen;
    };
    ColorPickerComponent.prototype.barClick = function (event) {
        this.barClicked = true;
        this.setBarPickerValue(event);
    };
    ColorPickerComponent.prototype.satClick = function (event) {
        this.satCliked = true;
        this.setSatPickerValue(event);
    };
    ColorPickerComponent.prototype.setBarPickerValue = function (event) {
        var barPosition = this._offset(this.barEl.nativeElement).top;
        this.barPickerTopPosition = this._segmentNumber(((event.pageY - barPosition) / this.barHeight) * 100, 0, this.barHeight / 2);
        this.color[0] = this._segmentNumber(Math.floor((((event.pageY - barPosition) / this.barHeight) * 360)), 0, 360);
        this.inputEl.nativeElement.value = this.hexColor;
        this.onChange('#' + this.inputEl.nativeElement.value);
    };
    ColorPickerComponent.prototype.setSatPickerValue = function (event) {
        var satPosition = this._offset(this.satEl.nativeElement);
        var leftPosition = this._segmentNumber(event.pageX - satPosition.left, 0, this.satWidth);
        this.satPickerLeftPosition = leftPosition + 'px';
        this.satPickerTopPosition = this._segmentNumber(event.pageY - satPosition.top, 0, this.satHeight) + 'px';
        this.color[1] = Math.floor((leftPosition / this.satWidth) * 100);
        var x = event.pageX - satPosition.left;
        var y = event.pageY - satPosition.top;
        if (x > this.satWidth) {
            x = this.satWidth;
        }
        else if (x < 0) {
            x = 0;
        }
        if (y > this.satHeight) {
            y = this.satHeight;
        }
        else if (y < 0) {
            y = 0;
        }
        // convert between hsv and hsl
        var xRatio = x / this.satWidth * 100;
        var yRatio = y / this.satHeight * 100;
        var hsvValue = 1 - (yRatio / 100);
        var hsvSaturation = xRatio / 100;
        var lightness = (hsvValue / 2) * (2 - hsvSaturation);
        this.color[2] = Math.floor(lightness * 100);
        this.inputEl.nativeElement.value = this.hexColor;
        this.onChange('#' + this.inputEl.nativeElement.value);
    };
    ColorPickerComponent.prototype.hexChange = function (color, change) {
        if (change === void 0) { change = true; }
        var result = this.hexPattern.exec(color);
        if (result) {
            this.inputEl.nativeElement.value = color;
            var r = parseInt(result[1], 16);
            var g = parseInt(result[2], 16);
            var b = parseInt(result[3], 16);
            var hsl = this._rgbToHsl(r, g, b);
            var hsv = this._rgbToHsv(r, g, b);
            this.barPickerTopPosition = hsl[0] / 360 * 100;
            this.satPickerLeftPosition = hsl[1] + '%';
            this.satPickerTopPosition = 100 - (hsv[2] * 100) + '%';
            this.color[0] = hsl[0];
            this.color[1] = hsl[1];
            this.color[2] = hsl[2];
            if (change) {
                this.onChange('#' + this.inputEl.nativeElement.value);
            }
            this._cdr.detectChanges();
        }
    };
    ColorPickerComponent.prototype._registerInputListener = function () {
        var _this = this;
        this._ngZone.runOutsideAngular(function () {
            __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(_this.inputEl.nativeElement, 'input')
                .debounceTime(300)
                .subscribe(function (_) {
                _this.inputEl.nativeElement.value = _this.inputEl.nativeElement.value.toUpperCase();
                if (_this.inputEl.nativeElement.value.length > 6) {
                    _this.inputEl.nativeElement.value = _this.inputEl.nativeElement.value.slice(0, 6);
                    _this.hexChange(_this.inputEl.nativeElement.value);
                }
                else if (_this.inputEl.nativeElement.value.length === 6) {
                    _this.hexChange(_this.inputEl.nativeElement.value);
                }
            });
        });
    };
    // TODO: Add logic for formating color types
    ColorPickerComponent.prototype.writeValue = function (value) {
        var val = this._validHex(value);
        if (val) {
            this.hexChange(val, false);
        }
        else {
            this.hexChange('000000', false);
        }
    };
    ColorPickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ColorPickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    // Helpers
    ColorPickerComponent.prototype._isWindow = function (obj) {
        return obj !== null && obj === obj.window;
    };
    ColorPickerComponent.prototype._getWindow = function (element) {
        return this._isWindow(element) ? element : element.nodeType === 9 && element.defaultView;
    };
    ColorPickerComponent.prototype._offset = function (element) {
        var doc = element && element.ownerDocument;
        var docElem = doc.documentElement;
        var win = this._getWindow(doc);
        var box = {
            top: 0,
            left: 0
        };
        if (typeof element.getBoundingClientRect !== typeof undefined) {
            box = element.getBoundingClientRect();
        }
        return {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
        };
    };
    // Color Helpers
    ColorPickerComponent.prototype._validHex = function (color) {
        if (typeof color !== 'string') {
            return;
        }
        if (color[0] === '#') {
            color = color.slice(1);
        }
        if (this.hexPattern.test(color)) {
            return color.toUpperCase();
        }
        return;
    };
    ColorPickerComponent.prototype._segmentNumber = function (num, min, max) {
        return Math.max(min, Math.min(num, max));
    };
    ColorPickerComponent.prototype._isPercentage = function (n) {
        return typeof n === 'string' && n.indexOf('%') !== -1;
    };
    ColorPickerComponent.prototype._isOnePointZero = function (n) {
        return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
    };
    ColorPickerComponent.prototype._bound01 = function (n, max) {
        if (this._isOnePointZero(n)) {
            n = '100%';
        }
        var processPercent = this._isPercentage(n);
        n = Math.min(max, Math.max(0, parseFloat(n)));
        // Automatically convert percentage into number
        if (processPercent) {
            n = (n * max) / 100;
        }
        // Handle floating point rounding errors
        if ((Math.abs(n - max) < 0.000001)) {
            return 1;
        }
        // Convert into [0, 1] range if it isn't already
        return (n % max) / parseFloat(max);
    };
    ColorPickerComponent.prototype._hslToRgb = function (h, s, l) {
        var r, g, b;
        h = this._bound01(h, 360);
        s = this._bound01(s, 100);
        l = this._bound01(l, 100);
        function hue2rgb(p, q, t) {
            if (t < 0) {
                t += 1;
            }
            else if (t > 1) {
                t -= 1;
            }
            else if (t < 1 / 6) {
                return p + (q - p) * 6 * t;
            }
            else if (t < 1 / 2) {
                return q;
            }
            else if (t < 2 / 3) {
                return p + (q - p) * (2 / 3 - t) * 6;
            }
            return p;
        }
        if (s === 0) {
            r = g = b = l; // achromatic
        }
        else {
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }
        return [r * 255, g * 255, b * 255];
    };
    ColorPickerComponent.prototype._rgbToHsv = function (r, g, b) {
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var d = max - min;
        var s = (max === 0 ? 0 : d / max);
        var v = max / 255;
        var h;
        switch (max) {
            case min:
                h = 0;
                break;
            case r:
                h = (g - b) + d * (g < b ? 6 : 0);
                h /= 6 * d;
                break;
            case g:
                h = (b - r) + d * 2;
                h /= 6 * d;
                break;
            case b:
                h = (r - g) + d * 4;
                h /= 6 * d;
                break;
        }
        return [h, s, v];
    };
    ColorPickerComponent.prototype._rgbToHsl = function (r, g, b) {
        r = r / 255;
        g = g / 255;
        b = b / 255;
        var maxColor = Math.max(r, g, b);
        var minColor = Math.min(r, g, b);
        // Calculate L:
        var L = (maxColor + minColor) / 2;
        var S = 0;
        var H = 0;
        if (maxColor !== minColor) {
            // Calculate S:
            if (L < 0.5) {
                S = (maxColor - minColor) / (maxColor + minColor);
            }
            else {
                S = (maxColor - minColor) / (2.0 - maxColor - minColor);
            }
            // Calculate H:
            if (r === maxColor) {
                H = (g - b) / (maxColor - minColor);
            }
            else if (g === maxColor) {
                H = 2.0 + (b - r) / (maxColor - minColor);
            }
            else {
                H = 4.0 + (r - g) / (maxColor - minColor);
            }
        }
        L = L * 100;
        S = S * 100;
        H = H * 60;
        if (H < 0) {
            H += 360;
        }
        return [H, S, L];
    };
    return ColorPickerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('bar'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], ColorPickerComponent.prototype, "barEl", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('sat'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object)
], ColorPickerComponent.prototype, "satEl", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('input'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object)
], ColorPickerComponent.prototype, "inputEl", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mousemove', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ColorPickerComponent.prototype, "onMouseMove", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mouseup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ColorPickerComponent.prototype, "onMouseUp", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ColorPickerComponent.prototype, "handleBlurClick", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], ColorPickerComponent.prototype, "extraColors", null);
ColorPickerComponent = ColorPickerComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'color-picker',
        template: __webpack_require__("../../../../../src/app/components/color-picker/color-picker.html"),
        styles: [__webpack_require__("../../../../../src/app/components/color-picker/color-picker.css")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush,
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
                useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* forwardRef */])(function () { return ColorPickerComponent_1; }),
                multi: true,
            }],
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _e || Object])
], ColorPickerComponent);

var ColorPickerComponent_1, _a, _b, _c, _d, _e;
//# sourceMappingURL=color-picker.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/color-picker/color-picker.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  display: block;\r\n  position: relative;\r\n}\r\n\r\n.jaspero__colorpicker-wrapper {\r\n  display: inline-block;\r\n  position: relative;\r\n  min-width: 100px;\r\n}\r\n\r\n.jaspero__colorpicker-preview {\r\n  width: 70px;\r\n  height: 35px;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  border-radius: 4px;\r\n}\r\n\r\n.jaspero__colorpicker-input {\r\n  font-family: sans-serif;\r\n  border: 0;\r\n  padding: 10px 10px 10px 50px;\r\n  outline: none;\r\n  width: 100%;\r\n  border-radius: 3px;\r\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);\r\n}\r\n\r\n.jaspero__colorpicker-dropdown {\r\n  position: absolute;\r\n  top: 110%;\r\n  left: 0;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  -webkit-transform: translateY(-10px);\r\n          transform: translateY(-10px);\r\n  transition: all .2s ease;\r\n  min-width: 300px;\r\n  padding: 10px;\r\n  background: white;\r\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);\r\n}\r\n\r\n.jaspero__colorpicker-dropdown.active {\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n  -webkit-transform: translateY(0px);\r\n          transform: translateY(0px);\r\n}\r\n\r\n.jaspero__colorpicker-dropdown__bar {\r\n  background: linear-gradient(to bottom, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);\r\n  width: 14px;\r\n  height: 200px;\r\n  position: relative;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  float: right;\r\n}\r\n\r\n.jaspero__colorpicker-dropdown__extra-color {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n.jaspero__colorpicker-dropdown__bar_picker {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 0;\r\n  -webkit-transform: translate(-50%, -50%);\r\n  transform: translate(-50%, -50%);\r\n  height: 7px;\r\n  width: 14px;\r\n  border: 2px solid white;\r\n  cursor: pointer;\r\n  box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, .3);\r\n  background: hsl(0, 100%, 50%);\r\n}\r\n\r\n.jaspero__colorpicker-dropdown__bar_picker.active {\r\n  width: 18px;\r\n  height: 18px;\r\n}\r\n\r\n.jaspero__colorpicker-dropdown__sat {\r\n  width: 90%;\r\n  height: 200px;\r\n  display: inline-block;\r\n  background: hsl(0, 100%, 50%);\r\n  position: relative;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.jaspero__colorpicker-dropdown__sat_sat_picker {\r\n  position: absolute;\r\n  -webkit-transform: translate(-50%, -50%);\r\n  transform: translate(-50%, -50%);\r\n  width: 12px;\r\n  height: 12px;\r\n  top: 0;\r\n  left: 100%;\r\n  border-radius: 50%;\r\n  border: 2px solid white;\r\n  z-index: 10;\r\n  transition: width .25s, height .25s;\r\n  background: hsl(0, 100%, 50%);\r\n  box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, .3);\r\n}\r\n\r\n.jaspero__colorpicker-dropdown__sat_sat_picker.active {\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n\r\n.jaspero__colorpicker-dropdown__sat_white,\r\n.jaspero__colorpicker-dropdown__sat_black {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n\r\n.jaspero__colorpicker-dropdown__sat_white {\r\n  background: linear-gradient(to right, #fff, rgba(204, 154, 129, 0));\r\n}\r\n\r\n.jaspero__colorpicker-dropdown__sat_black {\r\n  background: linear-gradient(to top, #000, rgba(204, 154, 129, 0));\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/color-picker/color-picker.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jaspero__colorpicker-wrapper\" (click)=\"toggle()\">\r\n  <div class=\"jaspero__colorpicker-preview\" [style.background]=\"hslFullColor\"></div>\r\n  <input class=\"jaspero__colorpicker-input\" type=\"text\" #input style=\"visibility: hidden;\"/>\r\n</div>\r\n<div class=\"jaspero__colorpicker-dropdown\" [class.active]=\"dropDownOpen\">\r\n\r\n  <div class=\"jaspero__colorpicker-dropdown__sat\" #sat [style.background]=\"hslBackgroundColor\"\r\n       (mousedown)=\"satClick($event)\">\r\n    <div class=\"jaspero__colorpicker-dropdown__sat_white\"></div>\r\n    <div class=\"jaspero__colorpicker-dropdown__sat_black\"></div>\r\n    <div class=\"jaspero__colorpicker-dropdown__sat_sat_picker\" [class.active]=\"satCliked\"\r\n         [ngStyle]=\"satPickerStyle\"></div>\r\n  </div>\r\n  <div class=\"jaspero__colorpicker-dropdown__bar\" #bar (mousedown)=\"barClick($event)\">\r\n    <div class=\"jaspero__colorpicker-dropdown__bar_picker\" [class.active]=\"barClicked\"\r\n         [ngStyle]=\"barPickerStyle\"></div>\r\n  </div>\r\n  <div class=\"jaspero__colorpicker-dropdown__extra\" *ngIf=\"extraColorsInner.length\">\r\n    <h5>Extra colors</h5>\r\n    <div class=\"jaspero__colorpicker-dropdown__extra-color\" *ngFor=\"let color of extraColorsInner\"\r\n         [style.background]=\"'#' + color\" (click)=\"hexChange(color)\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/document-editor/document-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation (navigate)=\"onNavigate($event)\"></app-navigation>\n<md-sidenav-container class=\"example-container\">\n  <md-sidenav [opened]=\"true\" mode=\"side\" #sidenav class=\"example-sidenav\">\n    <app-sidebar [selectionSource]=\"selectionSource.asObservable()\"></app-sidebar>\n  </md-sidenav>\n  <div class=\"example-sidenav-content\">\n    <app-editor2 class=\"full-size\" (select)=\"onEditorSelection($event)\"></app-editor2>\n  </div>\n</md-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/components/document-editor/document-editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n  width: 100vw;\n  height: calc(100vh - 50px);\n  border: 1px solid rgba(0, 0, 0, 0.5); }\n\n.example-sidenav-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: relative; }\n\n.example-sidenav {\n  padding: 20px; }\n\n.full-size {\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/document-editor/document-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editor_objects_view_set__ = __webpack_require__("../../../../../src/app/components/editor/objects/view-set.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editor_objects_view_group__ = __webpack_require__("../../../../../src/app/components/editor/objects/view-group.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editor_objects_view_element__ = __webpack_require__("../../../../../src/app/components/editor/objects/view-element.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DocumentEditorComponent = (function () {
    function DocumentEditorComponent(_dataService) {
        this._dataService = _dataService;
        this.itemsSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.selectionSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    DocumentEditorComponent.prototype.ngOnInit = function () {
    };
    DocumentEditorComponent.prototype.onNavigate = function (r) {
        this.itemsSource.next(this.makeViewSet(this._dataService.getSubtree(r.id)));
    };
    DocumentEditorComponent.prototype.onEditorSelection = function (selection) {
        this.selectionSource.next(selection);
    };
    // zaglooshka
    DocumentEditorComponent.prototype.makeViewSet = function (r) {
        var vs = new __WEBPACK_IMPORTED_MODULE_2__editor_objects_view_set__["a" /* ViewSet */]();
        vs.viewId = r.root.id;
        for (var gi = 0; gi < Math.random() * 2 + 1; gi++) {
            var viewGroup = new __WEBPACK_IMPORTED_MODULE_4__editor_objects_view_group__["a" /* ViewGroup */]();
            viewGroup.position = new PIXI.Point(Math.random() * 1000, Math.random() * 1000);
            for (var i = 0; i < Math.random() * 10 + 1; i++) {
                var ve = new __WEBPACK_IMPORTED_MODULE_5__editor_objects_view_element__["a" /* ViewElement */]();
                ve.position = new PIXI.Point(Math.random() * 1000, Math.random() * 1000);
                viewGroup.elements.push(ve);
            }
            vs.elements.push(viewGroup);
        }
        return vs;
    };
    return DocumentEditorComponent;
}());
DocumentEditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-tech-editor',
        template: __webpack_require__("../../../../../src/app/components/document-editor/document-editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/document-editor/document-editor.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], DocumentEditorComponent);

var _a;
//# sourceMappingURL=document-editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/document-list/document-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Список документов</h1>\n<a md-button routerLink=\"editor\">Редактировать документ</a>\n<a md-button routerLink=\"level-editor\">Новый документ</a>\n"

/***/ }),

/***/ "../../../../../src/app/components/document-list/document-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/document-list/document-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocumentListComponent = (function () {
    function DocumentListComponent() {
    }
    DocumentListComponent.prototype.ngOnInit = function () {
    };
    return DocumentListComponent;
}());
DocumentListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-document-list',
        template: __webpack_require__("../../../../../src/app/components/document-list/document-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/document-list/document-list.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DocumentListComponent);

//# sourceMappingURL=document-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<canvas #pixi></canvas>\r\n<div style='position:absolute; border: 1px dashed black'\r\n     *ngIf=\"selectionFrameVisible\"\r\n     [style.left.px]=\"posCss.left\"\r\n     [style.top.px]=\"posCss.top\"\r\n     [style.width.px]=\"posCss.width\"\r\n     [style.height.px]=\"posCss.height\"\r\n></div>\"\r\n"

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pixi_js__ = __webpack_require__("../../../../pixi.js/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_pixi_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pixi_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_editor_object__ = __webpack_require__("../../../../../src/app/components/editor/objects/editor-object.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objects_connection__ = __webpack_require__("../../../../../src/app/components/editor/objects/connection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__objects_keyboard__ = __webpack_require__("../../../../../src/app/components/editor/objects/keyboard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ext_bump__ = __webpack_require__("../../../../../src/app/ext/bump.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__objects_view_group__ = __webpack_require__("../../../../../src/app/components/editor/objects/view-group.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__objects_group_object__ = __webpack_require__("../../../../../src/app/components/editor/objects/group-object.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__zoom__ = __webpack_require__("../../../../../src/app/components/editor/zoom.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__input__ = __webpack_require__("../../../../../src/app/components/editor/input.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var EditorComponent = (function () {
    function EditorComponent(_ngZone) {
        this._ngZone = _ngZone;
        this.zoom = new __WEBPACK_IMPORTED_MODULE_9__zoom__["a" /* Zoom */]();
        this.elements = [];
        this.posCss = {
            left: 0,
            top: 0,
            width: 0,
            height: 0
        };
        this.selectionFrameVisible = false;
        this.mousePt = new __WEBPACK_IMPORTED_MODULE_1_pixi_js__["Point"]();
    }
    EditorComponent.prototype.ngOnDestroy = function () {
        if (this.renderer) {
            this.renderer.destroy();
        }
    };
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.input = new __WEBPACK_IMPORTED_MODULE_10__input__["a" /* InteractionInput */](this.pixiContainer);
        var renderer = this.renderer = __WEBPACK_IMPORTED_MODULE_1_pixi_js__["autoDetectRenderer"]({
            view: this.pixiContainer.nativeElement,
            width: this.pixiContainer.nativeElement.parentElement.clientWidth,
            height: this.pixiContainer.nativeElement.parentElement.clientHeight,
            transparent: true,
            autoResize: true
        });
        this.bump = new __WEBPACK_IMPORTED_MODULE_6__ext_bump__["a" /* Bump */](__WEBPACK_IMPORTED_MODULE_1_pixi_js__);
        var stage = this.stage = new __WEBPACK_IMPORTED_MODULE_1_pixi_js__["Container"]();
        var zoomContainer = this.zoomContainer = new __WEBPACK_IMPORTED_MODULE_1_pixi_js__["Container"]();
        zoomContainer.addChild(stage);
        this.addSelectionFrame(renderer, stage);
        this.itemSource.subscribe(function (viewSet) {
            if (_this.viewSet) {
                if (viewSet.viewId != _this.viewSet.viewId) {
                    _this.elements = [];
                    stage.removeChildren();
                }
            }
            _this.viewSet = viewSet;
            viewSet.elements.forEach(function (element) {
                if (element instanceof __WEBPACK_IMPORTED_MODULE_7__objects_view_group__["a" /* ViewGroup */]) {
                    var group_1 = new __WEBPACK_IMPORTED_MODULE_8__objects_group_object__["a" /* GroupObject */]();
                    element.elements.forEach(function (e) {
                        var editorObject = new __WEBPACK_IMPORTED_MODULE_2__objects_editor_object__["a" /* EditorObject */]();
                        editorObject.x = e.position.x;
                        editorObject.y = e.position.y;
                        group_1.add(editorObject);
                        _this.elements.push(editorObject);
                    });
                    stage.addChild(group_1);
                    _this.elements.push(group_1);
                    var groupChildren = group_1.getChildren();
                    for (var i = 0; i < groupChildren.length - 1; i++) {
                        var conn = new __WEBPACK_IMPORTED_MODULE_4__objects_connection__["a" /* Connection */](groupChildren[i], groupChildren[i + 1]);
                        stage.addChild(conn);
                    }
                }
                else {
                    throw new Error('invalid element');
                }
            });
        });
        var ctrlKey = new __WEBPACK_IMPORTED_MODULE_5__objects_keyboard__["a" /* KeyboardKey */](17);
        renderer.plugins.interaction.on('mousedown', function (ev) {
            var mouseX = ev.data.global.x;
            var mouseY = ev.data.global.y;
            var hitObject = renderer.plugins.interaction.hitTest(ev.data.global, stage);
            if (hitObject instanceof __WEBPACK_IMPORTED_MODULE_2__objects_editor_object__["a" /* EditorObject */]) {
                if (ctrlKey.isUp) {
                    _this.elements.forEach(function (e) {
                        e.selected = false;
                    });
                }
                hitObject.selected = true;
                _this.elements.filter(function (e) { return e.selected; }).forEach(function (e) {
                    e.startDrag(new __WEBPACK_IMPORTED_MODULE_1_pixi_js__["Point"](mouseX - e.x, mouseY - e.y));
                });
            }
            else if (hitObject === null) {
                _this.elements.forEach(function (e) {
                    e.selected = false;
                });
            }
        });
        renderer.plugins.interaction.on('mousemove', function (ev) {
            _this.elements.filter(function (e) { return e.isDragging(); }).forEach(function (e) {
                e.updatePosition(ev);
            });
        });
        renderer.plugins.interaction.on('mouseup', function (ev) {
            _this.elements.forEach(function (e) {
                e.stopDrag();
            });
        });
        var ticker = __WEBPACK_IMPORTED_MODULE_1_pixi_js__["ticker"].shared;
        ticker.autoStart = false;
        ticker.stop();
        ticker.start();
        ticker.add(function (deltaTime) {
            var input = _this.input;
            _this.mousePt.set(input.mouseX, input.mouseY);
            var gamePt = _this.stage.toLocal(_this.mousePt, _this.stage);
            if (input.isDragging) {
                _this.zoom.translateBy(_this.input.mouseDX, _this.input.mouseDY);
                _this.input.clearMouseDelta();
                _this._updateZoom();
            }
            else {
                _this.zoom.setScaleCenter(gamePt.x, gamePt.y);
                //this.cursorRect.position.set(gamePt.x, gamePt.y);
            }
            if (input.isZoomIn) {
                _this._zoomIn(gamePt);
            }
            else if (input.isZoomOut) {
                _this._zoomOut(gamePt);
            }
            renderer.render(zoomContainer);
        });
    };
    EditorComponent.prototype._zoomIn = function (at) {
        this.zoom.zoomBy(0.1, 0.1);
        this._updateZoom();
    };
    EditorComponent.prototype._zoomOut = function (at) {
        this.zoom.zoomBy(-0.1, -0.1);
        this._updateZoom();
    };
    EditorComponent.prototype._updateZoom = function () {
        var t = this.zoom.Transform;
        this.stage.transform.localTransform.set(t.a, t.b, t.c, t.d, t.tx, t.ty);
        this.zoomContainer.transform.updateTransform(this.stage.transform);
    };
    EditorComponent.prototype.addSelectionFrame = function (renderer, stage) {
        var _this = this;
        var mouseDownX = null;
        var mouseDownY = null;
        renderer.plugins.interaction.on('mousedown', function (ev) {
            var hitObject = renderer.plugins.interaction.hitTest(ev.data.global, stage);
            if (hitObject != null)
                return;
            mouseDownX = ev.data.global.x;
            mouseDownY = ev.data.global.y;
            _this.selectionFrameVisible = true;
        });
        renderer.plugins.interaction.on('mousemove', function (ev) {
            if (!_this.selectionFrameVisible)
                return;
            var x = ev.data.global.x;
            var y = ev.data.global.y;
            var selectWidth = Math.abs(x - mouseDownX);
            var selectHeight = Math.abs(y - mouseDownY);
            var minX = Math.min(ev.data.global.x, mouseDownX);
            var minY = Math.min(ev.data.global.y, mouseDownY);
            _this.posCss = {
                "left": minX + _this.pixiContainer.nativeElement.clientLeft,
                "top": minY + _this.pixiContainer.nativeElement.clientTop,
                "width": selectWidth,
                "height": selectHeight
            };
        });
        renderer.plugins.interaction.on('mouseup', function (ev) {
            _this.posCss = { left: 0, top: 0, width: 0, height: 0 };
            _this.selectionFrameVisible = false;
        });
        renderer.plugins.interaction.on('mouseupoutside', function (ev) {
            var hitTest = function (container, pt) {
                return container.contains(pt.x, pt.y);
            };
            if (_this.selectionFrameVisible) {
                var rect_1 = new __WEBPACK_IMPORTED_MODULE_1_pixi_js__["Rectangle"](_this.posCss.left, _this.posCss.top, _this.posCss.left + _this.posCss.width, _this.posCss.top + _this.posCss.height);
                _this.elements.forEach(function (e) {
                    e.selected = hitTest(rect_1, e.getGlobalPosition());
                });
            }
            _this.posCss = { left: 0, top: 0, width: 0, height: 0 };
            _this.selectionFrameVisible = false;
        });
    };
    EditorComponent.prototype.onResize = function (event) {
        if (!this.renderer) {
            return;
        }
        var el = this.pixiContainer.nativeElement.parentElement;
        var w = el.clientWidth;
        var h = el.clientHeight;
        var renderer = this.renderer;
        renderer.view.style.width = w + "px";
        renderer.view.style.height = h + "px";
        renderer.resize(w, h);
    };
    return EditorComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('pixi'),
    __metadata("design:type", Object)
], EditorComponent.prototype, "pixiContainer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], EditorComponent.prototype, "itemSource", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EditorComponent.prototype, "onResize", null);
EditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-editor',
        template: __webpack_require__("../../../../../src/app/components/editor/editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/editor/editor.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _b || Object])
], EditorComponent);

var _a, _b;
//# sourceMappingURL=editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/input.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionInput; });
var InteractionInput = (function () {
    function InteractionInput(pixiDiv) {
        var _this = this;
        this.pixiDiv = pixiDiv;
        this._mouseDown = false;
        // Drag = down && moved
        this._mouseMoved = false;
        // Custom keys specific to game
        this._zKeyActive = false;
        this._leftKeyActive = false;
        this._rightKeyActive = false;
        this._upKeyActive = false;
        this._downKeyActive = false;
        this._cntlKeyActive = false;
        this._altKeyActive = false;
        this._cmdKeyActive = false;
        this._mouseDownX = 0;
        this._mouseDownY = 0;
        this._prevDownX = 0;
        this._prevDownY = 0;
        this._mouseX = 0;
        this._mouseY = 0;
        this._mouseDX = 0;
        this._mouseDY = 0;
        this._wheeldx = 0;
        this._wheeldyUp = 0;
        this._wheeldyDown = 0;
        this._wheeldz = 0; // pinching two fingers on mousepad.
        this._element = pixiDiv.nativeElement;
        this._element.addEventListener('keydown', function (event) { return _this._keydownHandler(event); }, false);
        this._element.addEventListener('keyup', function (event) { return _this._keyupHandler(event); }, false);
        this._element.addEventListener('mousedown', function (event) { return _this._mouseDownHandler(event); }, false);
        this._element.addEventListener('mouseup', function (event) { return _this._mouseUpHandler(event); }, false);
        this._element.addEventListener('mousemove', function (event) { return _this._mouseMoveHandler(event); }, false);
        this._element.addEventListener('wheel', function (event) { return _this._mouseWheelHandler(event); }, { capture: false });
    }
    InteractionInput.prototype._keydownHandler = function (event) {
        // console.log('_keydownHandler', event.keyCode);
        switch (event.keyCode) {
            case 90:
                this._zKeyActive = true;
                break;
            case 37:
                this._leftKeyActive = true;
                break;
            case 38:
                this._upKeyActive = true;
                break;
            case 39:
                this._rightKeyActive = true;
                break;
            case 40:
                this._downKeyActive = true;
                break;
            case 17:
                this._cntlKeyActive = true;
                break;
            case 18:
                this._altKeyActive = true;
                break;
            case 91:
                this._cmdKeyActive = true;
                break;
        }
    };
    InteractionInput.prototype._keyupHandler = function (event) {
        // console.log('_keyupHandler', event.keyCode);
        switch (event.keyCode) {
            case 90:
                this._zKeyActive = false;
                break;
            case 37:
                this._leftKeyActive = false;
                break;
            case 38:
                this._upKeyActive = false;
                break;
            case 39:
                this._rightKeyActive = false;
                break;
            case 40:
                this._downKeyActive = false;
                break;
            case 17:
                this._cntlKeyActive = false;
                break;
            case 18:
                this._altKeyActive = false;
                break;
            case 91:
                this._cmdKeyActive = false;
                break;
        }
    };
    InteractionInput.prototype._mouseDownHandler = function (event) {
        this._mouseDown = true;
        this._mouseDownX = event.pageX - this._element.offsetLeft;
        this._mouseDownY = event.pageY - this._element.offsetTop;
        this._prevDownX = this._mouseDownX;
        this._prevDownY = this._mouseDownY;
        this._mouseButton = event.button;
        event.preventDefault();
        event.stopPropagation();
    };
    InteractionInput.prototype._mouseWheelHandler = function (event) {
        this._wheeldx = event.deltaX;
        if (event.deltaY < 0) {
            this._wheeldyUp = event.deltaY;
        }
        else if (event.deltaY > 0) {
            this._wheeldyDown = event.deltaY;
        }
        this._wheeldz = event.deltaZ;
        // console.log('wheel', event);
        event.preventDefault();
    };
    InteractionInput.prototype._mouseUpHandler = function (event) {
        this._mouseDown = false;
        this._mouseMoved = false;
        this._mouseButton = undefined;
        event.preventDefault();
        event.stopPropagation();
    };
    InteractionInput.prototype._mouseMoveHandler = function (event) {
        this._mouseX = event.pageX - this._element.offsetLeft;
        this._mouseY = event.pageY - this._element.offsetTop;
        if (this._mouseDown) {
            this._mouseMoved = true;
            // if (this._cmdKeyActive) {
            // Dragging.
            this._mouseDX = this._mouseX - this._prevDownX;
            this._mouseDY = this._mouseY - this._prevDownY;
            // }
        }
        this._prevDownX = this._mouseX;
        this._prevDownY = this._mouseY;
        event.preventDefault();
    };
    Object.defineProperty(InteractionInput.prototype, "isMouseDown", {
        get: function () {
            return this._mouseDown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractionInput.prototype, "isControlKeyDown", {
        get: function () {
            return this._cntlKeyActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractionInput.prototype, "isCommandKeyDown", {
        get: function () {
            return this._cmdKeyActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractionInput.prototype, "isAltKeyDown", {
        get: function () {
            return this._altKeyActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractionInput.prototype, "mouseMoved", {
        get: function () {
            return this._mouseDown && this._mouseMoved;
        },
        enumerable: true,
        configurable: true
    });
    InteractionInput.prototype.clearMouseDelta = function () {
        this._mouseDX = 0;
        this._mouseDY = 0;
    };
    Object.defineProperty(InteractionInput.prototype, "mouseDX", {
        get: function () {
            return this._mouseDX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractionInput.prototype, "mouseDY", {
        get: function () {
            return this._mouseDY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractionInput.prototype, "mouseX", {
        get: function () {
            return this._mouseX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractionInput.prototype, "mouseY", {
        get: function () {
            return this._mouseY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractionInput.prototype, "isZKeyActive", {
        get: function () {
            return this._zKeyActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractionInput.prototype, "isLeftKeyActive", {
        get: function () {
            return this._leftKeyActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractionInput.prototype, "isRightKeyActive", {
        get: function () {
            return this._rightKeyActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractionInput.prototype, "isUpKeyActive", {
        get: function () {
            return this._upKeyActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractionInput.prototype, "isDownKeyActive", {
        get: function () {
            return this._downKeyActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractionInput.prototype, "isDragging", {
        get: function () {
            return this._mouseDown && this._mouseButton === 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractionInput.prototype, "isZoomIn", {
        get: function () {
            // if (this._altKeyActive) {
            var b = this._wheeldyUp < 0;
            this._wheeldyUp = 0;
            return b;
            // }
            // return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractionInput.prototype, "isZoomOut", {
        get: function () {
            // if (this._altKeyActive) {
            var b = this._wheeldyDown > 0;
            this._wheeldyDown = 0;
            return b;
            // }
            // return false;
        },
        enumerable: true,
        configurable: true
    });
    return InteractionInput;
}());

//# sourceMappingURL=input.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/objects/block-type.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockType; });
var BlockType;
(function (BlockType) {
    BlockType[BlockType["SuperBlock"] = 0] = "SuperBlock";
    BlockType[BlockType["Block"] = 1] = "Block";
    BlockType[BlockType["Element"] = 2] = "Element";
})(BlockType || (BlockType = {}));
//# sourceMappingURL=block-type.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/objects/connection.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Connection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_merge__ = __webpack_require__("../../../../rxjs/add/operator/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_merge__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Graphics = PIXI.Graphics;

var Connection = (function (_super) {
    __extends(Connection, _super);
    function Connection(a, b) {
        var _this = _super.call(this) || this;
        _this._lastDifference = { x: 0, y: 0 };
        _this._a = a;
        _this._b = b;
        var graphics = _this.graphics = new Graphics();
        _this.addChild(graphics);
        _this.update();
        a.onMove.merge(b.onMove).subscribe(function () { return _this.update(); });
        return _this;
    }
    Connection.prototype.update = function () {
        var graphics = this.graphics;
        var a = this._a.getGlobalPosition();
        var b = this._b.getGlobalPosition();
        // let diff = {x: a.x - b.x, y: a.y - b.y};
        // console.log(diff, this._lastDifference);
        // if(diff.x === this._lastDifference.x && diff.y === this._lastDifference.y) {
        //   return;
        // } else {
        //   this._lastDifference = diff;
        // }
        //let d = Math.sqrt(Math.pow(this._a.x - this._b.x, 2) + Math.pow(this._a.y - this._b.y, 2));
        graphics.clear();
        graphics.lineStyle(2, 0x33FF00);
        graphics.moveTo(a.x, a.y);
        graphics.lineTo(b.x, b.y);
    };
    return Connection;
}(PIXI.Container));

//# sourceMappingURL=connection.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/objects/editor-object.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorObject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi_js__ = __webpack_require__("../../../../pixi.js/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pixi_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var EditorObject = (function (_super) {
    __extends(EditorObject, _super);
    function EditorObject() {
        var _this = _super.call(this) || this;
        _this._moveSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        _this.onMove = _this._moveSubject.asObservable();
        _this.buttonMode = true;
        _this.interactive = true;
        _this.createDragAndDropFor(_this);
        _this.createView();
        return _this;
    }
    EditorObject.prototype.startDrag = function (offset) {
        this._dragOffset = offset;
        this._dragging = true;
    };
    EditorObject.prototype.stopDrag = function () {
        this._dragOffset = null;
        this._dragging = false;
    };
    Object.defineProperty(EditorObject.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (value) {
            this._selected = value;
            this.updateSelectionFrame(value);
        },
        enumerable: true,
        configurable: true
    });
    EditorObject.prototype.updateSelectionFrame = function (isSelected) {
        if (isSelected && !this._selected) {
            var selectionIndicator = new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Graphics"]();
            var b = this.getBounds();
            selectionIndicator.fillAlpha = 1;
            selectionIndicator.lineStyle(1, 0x333300);
            selectionIndicator.drawRect(0, 0, b.width, b.height);
            this.addChild(selectionIndicator);
            this._selectionIndicator = selectionIndicator;
        }
        else {
            this.removeChild(this._selectionIndicator);
            this._selectionIndicator = null;
        }
    };
    EditorObject.prototype.moved = function () {
        this._moveSubject.next(this.getGlobalPosition());
    };
    EditorObject.prototype.createView = function () {
        var shape = new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Graphics"]();
        shape.beginFill(200);
        shape.drawCircle(20, 20, 20);
        shape.endFill();
        this.addChild(shape);
    };
    EditorObject.prototype.createDragAndDropFor = function (target) {
        var _this = this;
        target.on("mouseup", function (e) {
            target._dragging = false;
            target._dragOffset = null;
        });
        target.on("mousemove", function (e) {
            if (target._dragging) {
                _this.updatePosition(e);
            }
        });
    };
    EditorObject.prototype.updatePosition = function (e) {
        this.position.x = e.data.global.x - this._dragOffset.x;
        this.position.y = e.data.global.y - this._dragOffset.y;
        this._moveSubject.next(this.getGlobalPosition());
    };
    EditorObject.prototype.isDragging = function () {
        return this._dragging;
    };
    return EditorObject;
}(__WEBPACK_IMPORTED_MODULE_0_pixi_js__["Container"]));

//# sourceMappingURL=editor-object.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/objects/group-object.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupObject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_object__ = __webpack_require__("../../../../../src/app/components/editor/objects/editor-object.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var GroupObject = (function (_super) {
    __extends(GroupObject, _super);
    function GroupObject() {
        var _this = _super.call(this) || this;
        _this.getChildren = function () { return _this.container.children; };
        _this.createDragAndDropFor(_this);
        return _this;
    }
    GroupObject.prototype.getframeColor = function () {
        return this._selected ? 0xCC0000 : 0xCCFF00;
    };
    ;
    GroupObject.prototype.createView = function () {
        this.container = new PIXI.Container();
        this.addChild(this.container);
        this.updateFrame();
    };
    GroupObject.prototype.add = function (object) {
        var _this = this;
        this.container.addChild(object);
        object.onMove.subscribe(function () { return _this.updateFrame(); });
        this.updateFrame();
    };
    GroupObject.prototype.updateFrame = function () {
        if (!this.frame) {
            this.frame = new PIXI.Graphics();
            this.addChild(this.frame);
        }
        this.frame.clear();
        this.frame.beginFill(0x777777, 0.5);
        this.frame.lineStyle(2, this.getframeColor());
        var bounds = this.container.getLocalBounds();
        this.frame.drawRect(bounds.x, bounds.y, bounds.width, bounds.height);
        this.frame.endFill();
    };
    GroupObject.prototype.updateSelectionFrame = function (isSelected) {
        this.updateFrame();
        if (isSelected && !this._selected) {
        }
        else {
        }
    };
    GroupObject.prototype.updatePosition = function (e) {
        this.position.x = e.data.global.x - this._dragOffset.x;
        this.position.y = e.data.global.y - this._dragOffset.y;
        this._moveSubject.next(this.position);
        this.container.children.forEach(function (x) { return x.moved(); });
    };
    return GroupObject;
}(__WEBPACK_IMPORTED_MODULE_0__editor_object__["a" /* EditorObject */]));

//# sourceMappingURL=group-object.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/objects/keyboard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardKey; });
var KeyboardKey = (function () {
    function KeyboardKey(keyCode) {
        var _this = this;
        this.isDown = false;
        this.isUp = true;
        this.code = keyCode;
        var downHandler = function (event) {
            if (event.keyCode === _this.code) {
                if (_this.isUp && _this.press)
                    _this.press();
                _this.isDown = true;
                _this.isUp = false;
            }
            event.preventDefault();
        };
        var upHandler = function (event) {
            if (event.keyCode === _this.code) {
                if (_this.isDown && _this.release)
                    _this.release();
                _this.isDown = false;
                _this.isUp = true;
            }
            event.preventDefault();
        };
        window.addEventListener("keydown", downHandler, false);
        window.addEventListener("keyup", upHandler, false);
    }
    return KeyboardKey;
}());

//# sourceMappingURL=keyboard.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/objects/view-element.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewElement; });
var ViewElement = (function () {
    function ViewElement() {
    }
    return ViewElement;
}());

//# sourceMappingURL=view-element.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/objects/view-group.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_element__ = __webpack_require__("../../../../../src/app/components/editor/objects/view-element.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ViewGroup = (function (_super) {
    __extends(ViewGroup, _super);
    function ViewGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.elements = [];
        return _this;
    }
    return ViewGroup;
}(__WEBPACK_IMPORTED_MODULE_0__view_element__["a" /* ViewElement */]));

//# sourceMappingURL=view-group.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/objects/view-set.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewSet; });
var ViewSet = (function () {
    function ViewSet() {
        this.elements = [];
    }
    return ViewSet;
}());

//# sourceMappingURL=view-set.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/zoom.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Zoom; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi_js__ = __webpack_require__("../../../../pixi.js/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pixi_js__);

var Zoom = (function () {
    function Zoom() {
        this._zoomDirty = true;
        this._positionX = 0;
        this._positionY = 0;
        this._scaleX = 1;
        this._scaleY = 1;
        this._scaleCenterX = 0;
        this._scaleCenterY = 0;
        this._atSCTransform = new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Matrix"]();
        this._zoomCenter = new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Matrix"]();
        this._scaleTransform = new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Matrix"]();
        this._negScaleCenter = new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Matrix"]();
        this._transform = new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Matrix"]();
    }
    Zoom.prototype._updateMatrix = function () {
        this._zoomCenter.set(1, 0, 0, 1, this._scaleCenterX, this._scaleCenterY); // Sets to translate
        this._scaleTransform.set(this._scaleX, 0, 0, this._scaleY, 0, 0); // Sets to scale
        this._negScaleCenter.set(1, 0, 0, 1, -this._scaleCenterX, -this._scaleCenterY); // Sets to translate
        // Accumulate zoom transformations.
        // atSCTransform is an intermediate accumulative matrix used for tracking the current zoom target.
        this._atSCTransform.append(this._zoomCenter);
        this._atSCTransform.append(this._scaleTransform);
        this._atSCTransform.append(this._negScaleCenter);
        // We reset Scale because atSCTransform is accumulative and has "captured" the information.
        this._scaleX = 1;
        this._scaleY = 1;
        // Tack on translation. Note: we don't append it, but concat it into a separate matrix.
        // We want to leave atSCTransform solely responsible for zooming.
        // "transform" is the final matrix.
        this._transform.set(this._atSCTransform.a, this._atSCTransform.b, this._atSCTransform.c, this._atSCTransform.d, this._atSCTransform.tx, this._atSCTransform.ty);
        // this._transform.prepend(this._atTransform);
        this._transform.translate(this._positionX, this._positionY);
    };
    Object.defineProperty(Zoom.prototype, "Transform", {
        get: function () {
            if (this._zoomDirty) {
                this._updateMatrix();
                // Now that we have rebuilt the transform matrix is it no longer dirty.
                this._zoomDirty = false;
            }
            return this._transform;
        },
        set: function (t) {
            this._transform = t;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Use this if you want to manually set the positional value.
     * You would typically use translateBy() instead.
     */
    Zoom.prototype.setPosition = function (posX, posY) {
        this._positionX = posX;
        this._positionY = posY;
        this._zoomDirty = true;
    };
    Object.defineProperty(Zoom.prototype, "positionX", {
        get: function () {
            return this._positionX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Zoom.prototype, "positionY", {
        get: function () {
            return this._positionY;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * A relative zoom.
     * [delta] is a delta relative to the current scale/zoom.
     */
    Zoom.prototype.zoomBy = function (deltaX, deltaY) {
        this._scaleX += deltaX;
        this._scaleY += deltaY;
        this._zoomDirty = true;
    };
    Zoom.prototype.translateBy = function (deltaX, deltaY) {
        this._positionX += deltaX;
        this._positionY += deltaY;
        this._zoomDirty = true;
    };
    Object.defineProperty(Zoom.prototype, "currentScale", {
        get: function () {
            return this._atSCTransform.a;
        },
        /**
         * Set the zoom value absolutely. If you want to zoom relative use
         * [zoomBy]
         */
        set: function (newScale) {
            if (this._zoomDirty) {
                this._updateMatrix();
            }
            // We use dimensional analysis to set the scale. Remember we can't
            // just set the scale absolutely because atSCTransform is an accumulating matrix.
            // We have to take its current value and compute a new value based
            // on the passed in value.
            // Also, I can use atSCTransform.a because I don't allow rotations within in the game,
            // so the diagonal components correctly represent the matrix's current scale.
            // And because I only perform uniform scaling I can safely use just the "a" element.
            var scaleFactor = newScale / this._atSCTransform.a;
            this._scaleX = scaleFactor;
            this._scaleY = scaleFactor;
            this._zoomDirty = true;
        },
        enumerable: true,
        configurable: true
    });
    Zoom.prototype.setScaleCenter = function (posX, posY) {
        this._scaleCenterX = posX;
        this._scaleCenterY = posY;
        this._zoomDirty = true;
    };
    return Zoom;
}());

//# sourceMappingURL=zoom.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor2/editor2.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%; user-select: none;\" class=\"buttons-panel\">\r\n  <button (click)=\"createBlock()\" title=\"Cоздать блок\"><i class=\"material-icons md-36\">label</i></button>\r\n  <button (click)=\"createCondition()\" title=\"Cоздать условие\"><i class=\"material-icons md-36\">label_outline</i></button>\r\n  <!--<button (click)=\"deleteSelected()\" title=\"Удалить выбранное\"><i class=\"material-icons md-36\">delete_forever</i></button>-->\r\n  <!--<button (click)=\"alignHorizontal()\" title=\"Выровнять горизонтально\"><i class=\"material-icons md-36\">vertical_align_top</i></button>-->\r\n  <!--<button (click)=\"distributeHorizontal()\" title=\"Распределить горизонтально\"><i class=\"material-icons md-36\">view_week</i></button>-->\r\n  <!--<button (click)=\"alignVertical()\" title=\"Выровнять вертикально\"><i class=\"material-icons md-36\">format_align_left</i></button>-->\r\n  <!--<button (click)=\"distributeVertical()\" title=\"Распределить вертикально\"><i class=\"material-icons md-36\">reorder</i></button>-->\r\n  <!--<button (click)=\"alignHorizontalCenter()\" title=\"Выровнять горизонтально по центру\"><i class=\"material-icons md-36\">vertical_align_center</i></button>-->\r\n  <!--<button (click)=\"alignVerticalCenter()\" title=\"Выровнять вертикально по центру\"><i class=\"material-icons md-36\">format_align_center</i></button>-->\r\n  <button (click)=\"autoLayout()\" title=\"Авторасстановка\"><i class=\"material-icons md-36\">flash_auto</i></button>\r\n  <button (click)=\"zoomToFit()\" title=\"Показать все\"><i class=\"material-icons md-36\">zoom_out_map</i></button>\r\n  <button (click)=\"exportImage()\"><i class=\"material-icons md-36\" title=\"Экспорт в PNG\">burst_mode</i></button>\r\n</div>\r\n<canvas #pixi></canvas>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/editor2/editor2.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".buttons-panel button {\n  width: 48px;\n  height: 48px;\n  border: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor2/editor2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Editor2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__zoom__ = __webpack_require__("../../../../../src/app/components/editor2/zoom.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input__ = __webpack_require__("../../../../../src/app/components/editor2/input.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__objects_simple_block__ = __webpack_require__("../../../../../src/app/components/editor2/objects/simple-block.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objects_port__ = __webpack_require__("../../../../../src/app/components/editor2/objects/port.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__objects_connection__ = __webpack_require__("../../../../../src/app/components/editor2/objects/connection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__objects_editor_object__ = __webpack_require__("../../../../../src/app/components/editor2/objects/editor-object.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__objects_condition__ = __webpack_require__("../../../../../src/app/components/editor2/objects/condition.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__objects_phantom_connection__ = __webpack_require__("../../../../../src/app/components/editor2/objects/phantom-connection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__objects_aligner__ = __webpack_require__("../../../../../src/app/components/editor2/objects/aligner.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__objects_selection_frame__ = __webpack_require__("../../../../../src/app/components/editor2/objects/selection-frame.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__selector_fn__ = __webpack_require__("../../../../../src/app/components/editor2/selector-fn.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ext_bump__ = __webpack_require__("../../../../../src/app/ext/bump.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__get_loader__ = __webpack_require__("../../../../../src/app/components/editor2/get-loader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__extract_image__ = __webpack_require__("../../../../../src/app/components/editor2/extract-image.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var Editor2Component = (function () {
    function Editor2Component(_ngZone) {
        this._ngZone = _ngZone;
        this.aligner = new __WEBPACK_IMPORTED_MODULE_9__objects_aligner__["a" /* Aligner */]();
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.game = new PIXI.Container();
        this.connectionContainer = new PIXI.Container();
        this.zoomContainer = new PIXI.Container();
        this.zoom = new __WEBPACK_IMPORTED_MODULE_1__zoom__["a" /* Zoom */]();
        this.overlay = new PIXI.Container();
        this.stage = new PIXI.Container();
        this.selectedObjects = [];
        this.phantomConnection = new __WEBPACK_IMPORTED_MODULE_8__objects_phantom_connection__["a" /* PhantomConnection */]();
        this.bump = new __WEBPACK_IMPORTED_MODULE_12__ext_bump__["a" /* Bump */](PIXI);
        this.dragObjects = [];
    }
    Editor2Component.prototype.ngOnInit = function () {
        var _this = this;
        this._ngZone.runOutsideAngular(function () { return _this.init(); });
    };
    Editor2Component.prototype.ngOnDestroy = function () {
        PIXI.ticker.shared.destroy();
        if (this.renderer)
            this.renderer.destroy();
    };
    Editor2Component.prototype.onResize = function (event) {
        if (!this.renderer)
            return;
        var el = this.pixiContainer.nativeElement.parentElement;
        var w = el.clientWidth;
        var h = el.clientHeight;
        var renderer = this.renderer;
        renderer.view.style.width = w + "px";
        renderer.view.style.height = h + "px";
        renderer.resize(w, h);
    };
    Editor2Component.prototype.createBlock = function () {
        var b = new __WEBPACK_IMPORTED_MODULE_3__objects_simple_block__["a" /* SimpleBlock */]();
        var p = new PIXI.Point(this.renderer.width / 2 - b.width, this.renderer.height / 2 - b.height);
        b.setPosition(this.game.toLocal(p));
        this.game.addChild(b);
    };
    Editor2Component.prototype.createCondition = function () {
        var con = new __WEBPACK_IMPORTED_MODULE_7__objects_condition__["a" /* Condition */](3, 'Условие');
        var p = new PIXI.Point(this.renderer.width / 2 - con.width, this.renderer.height / 2 - con.height);
        con.setPosition(this.game.toLocal(p));
        this.game.addChild(con);
    };
    Editor2Component.prototype.autoLayout = function () {
        this.aligner.autoAlign(this.game.children.filter(function (x) { return x instanceof __WEBPACK_IMPORTED_MODULE_6__objects_editor_object__["a" /* EditorObject */]; }));
        this.zoomToFit();
    };
    Editor2Component.prototype.exportImage = function () {
        var _this = this;
        this.updateZoom(new PIXI.Matrix());
        Object(__WEBPACK_IMPORTED_MODULE_14__extract_image__["a" /* extractImage */])(this.renderer, this.zoomContainer).then(function () { return _this.updateZoom(); });
    };
    Editor2Component.prototype.zoomToFit = function () {
        var _this = this;
        var zoomOffset = 0.85;
        var xOffset = -150;
        var f = function () {
            var bounds = _this.game.getLocalBounds();
            var realBounds = { x: bounds.x, y: bounds.y, width: bounds.width, height: bounds.height };
            var desiredScale = Math.min(_this.renderer.width / realBounds.width, _this.renderer.height / realBounds.height) * zoomOffset;
            var bCenter = new PIXI.Point(bounds.x + bounds.width / 2, bounds.y + bounds.height / 2);
            var zoomCenter = _this.game.toGlobal(bCenter);
            _this.zoom.setScaleCenter(zoomCenter.x, zoomCenter.y);
            _this.zoom.currentScale = desiredScale;
            _this.zoom.translateBy(_this.renderer.width / 2 - zoomCenter.x, _this.renderer.height / 2 - zoomCenter.y);
            _this.updateZoom();
        };
        f();
        f();
        this.zoom.translateBy(xOffset, 0);
        this.updateZoom();
    };
    Editor2Component.prototype.deleteSelected = function () {
        var _this = this;
        this.selectedObjects.forEach(function (o) {
            if (o.hasConnenctions()) {
                o.children.filter(function (x) { return x instanceof __WEBPACK_IMPORTED_MODULE_4__objects_port__["a" /* Port */]; })
                    .map(function (x) { return x; })
                    .forEach(function (x) { return x.connections.forEach(function (c) {
                    c.parent.removeChild(c);
                    c.clearPorts();
                }); });
            }
            _this.game.removeChild(o);
        });
        this.selectedObjects = [];
    };
    Editor2Component.prototype.init = function () {
        var _this = this;
        var renderer = this.renderer = PIXI.autoDetectRenderer({
            view: this.pixiContainer.nativeElement,
            width: this.pixiContainer.nativeElement.parentElement.clientWidth,
            height: this.pixiContainer.nativeElement.parentElement.clientHeight,
            transparent: true,
            autoResize: true,
            antialias: true,
        });
        var time = new Date().getTime();
        Object(__WEBPACK_IMPORTED_MODULE_13__get_loader__["a" /* getLoader */])().onComplete.add((function () {
            _this.createGame(_this.game);
            _this.zoomContainer.addChild(_this.connectionContainer);
            _this.zoomContainer.addChild(_this.game);
            _this.stage.addChild(_this.zoomContainer);
            _this.stage.addChild(_this.overlay);
            console.log('TIME - ' + (new Date().getTime() - time));
        }));
        var input = new __WEBPACK_IMPORTED_MODULE_2__input__["a" /* MyInput */](renderer.plugins.interaction, this.pixiContainer);
        this.setupInput(input);
        PIXI.ticker.shared.add(function (deltaTime) {
            var mousePoint = _this.game.toLocal(input.getMousePoint(), _this.overlay);
            _this.zoom.setScaleCenter(mousePoint.x, mousePoint.y);
            renderer.render(_this.stage);
        });
    };
    Editor2Component.prototype.startDrag = function (e) {
        this.dragObjects = this.selectedObjects.map(function (o) {
            var globalPos = o.getGlobalPosition();
            return {
                object: o,
                offset: new PIXI.Point(e.data.global.x - globalPos.x, e.data.global.y - globalPos.y)
            };
        });
    };
    Editor2Component.prototype.updateZoom = function (_t) {
        if (_t === void 0) { _t = null; }
        var t = _t || this.zoom.Transform;
        this.connectionContainer.transform.localTransform.set(t.a, t.b, t.c, t.d, t.tx, t.ty);
        this.game.transform.localTransform.set(t.a, t.b, t.c, t.d, t.tx, t.ty);
        this.zoomContainer.transform.updateTransform(this.game.transform);
    };
    Editor2Component.prototype.createConnection = function (p1, p2) {
        if (p1.parent === p2.parent)
            return;
        if (p1.isInput === p2.isInput)
            return;
        this.connectionContainer.addChild(new __WEBPACK_IMPORTED_MODULE_5__objects_connection__["a" /* Connection */](p1, p2));
    };
    Editor2Component.prototype.createGame = function (game) {
        var nodes = [];
        for (var i = 0; i < 10; i++) {
            var t = new __WEBPACK_IMPORTED_MODULE_3__objects_simple_block__["a" /* SimpleBlock */]();
            t.blockName = 'adfads';
            t.blockCode = 'sdfg';
            t.blockRole = 'dfasf';
            t.blockHours = '1232';
            t.setPosition(new PIXI.Point(Math.random() * 1000 - 500, Math.random() * 1000 - 500));
            nodes.push(t);
            game.addChild(t);
            if (i > 1) {
                var c = new __WEBPACK_IMPORTED_MODULE_5__objects_connection__["a" /* Connection */](t.inPort, nodes[i - 1].outPort);
                this.connectionContainer.addChild(c);
            }
        }
        var c1 = new __WEBPACK_IMPORTED_MODULE_7__objects_condition__["a" /* Condition */](3, 'Условие');
        c1.setPosition(new PIXI.Point(500, 500));
        game.addChild(this.phantomConnection);
        game.addChild(c1);
    };
    Editor2Component.prototype.notifySelect = function (selectedObjects) {
        var _this = this;
        this._ngZone.run(function () {
            _this.select.emit(_this.selectedObjects.map(function (selectedObject) { return 'objekt-Objekt'; }));
        });
    };
    Editor2Component.prototype.startSelectionFrame = function (mousePos) {
        if (this.selectionFrame)
            this.stopSelectionFrame();
        this.selectionFrame = new __WEBPACK_IMPORTED_MODULE_10__objects_selection_frame__["a" /* SelectionFrame */](mousePos.clone());
        this.overlay.addChild(this.selectionFrame);
    };
    Editor2Component.prototype.stopSelectionFrame = function () {
        this.overlay.removeChild(this.selectionFrame);
        this.selectionFrame = null;
    };
    Editor2Component.prototype.updateSelectionFrame = function (mousePos) {
        if (!this.selectionFrame)
            return;
        this.selectionFrame.update(mousePos);
    };
    Editor2Component.prototype.getFrameSelection = function (rect, direction) {
        return this.game.children.filter(direction.right ?
            __WEBPACK_IMPORTED_MODULE_11__selector_fn__["a" /* SelectorFn */].containsSelectorFn(this.bump, rect) : __WEBPACK_IMPORTED_MODULE_11__selector_fn__["a" /* SelectorFn */].intersectSelectorFn(this.bump, rect));
    };
    Editor2Component.prototype.selectAll = function () {
        this.setSelectedObjects(this.game.children.filter(function (x) { return x instanceof __WEBPACK_IMPORTED_MODULE_6__objects_editor_object__["a" /* EditorObject */]; }), true);
    };
    Editor2Component.prototype.deselectAll = function () {
        this.setSelectedObjects([], false);
    };
    Editor2Component.prototype.setSelectedObjects = function (_objects, select, append) {
        if (select === void 0) { select = true; }
        if (append === void 0) { append = false; }
        var objects = _objects instanceof Array ? _objects : [_objects];
        if (append) {
            this.selectedObjects = this.selectedObjects.concat(objects);
        }
        else {
            this.selectedObjects.forEach(function (o) { return o.setSelected(false); });
            this.selectedObjects = this.select ? objects : [];
        }
        objects.forEach(function (o) { return o.setSelected(select); });
        this.notifySelect(this.selectedObjects);
    };
    Editor2Component.prototype.stopDrag = function () {
        this.dragObjects = [];
    };
    Editor2Component.prototype.updateDrag = function (e) {
        this.dragObjects.forEach(function (dragObject) {
            var newPos = dragObject.object.parent.toLocal(new PIXI.Point(e.data.global.x - dragObject.offset.x, e.data.global.y - dragObject.offset.y));
            dragObject.object.setPosition(newPos);
        });
    };
    Editor2Component.prototype.setupInput = function (input) {
        var _this = this;
        input.onZoom.subscribe(function (zoom) {
            _this.zoom.zoomBy(zoom, zoom);
            _this.updateZoom();
        });
        input.onRightDrag.subscribe(function (d) {
            _this.zoom.translateBy(d.dx, d.dy);
            _this.updateZoom();
        });
        input.onKeyDown.subscribe(function (e) {
            switch (e.keyCode) {
                case 46:
                    _this.deleteSelected();
                    break;
                case 65:
                    if (input.isCtrlKeyDown()) {
                        _this.selectAll();
                        e.preventDefault();
                    }
                    break;
            }
        });
        input.onMouseMove.subscribe(function (e) {
            if (_this.selectedPort != null) {
                var hitObject = _this.renderer.plugins.interaction.hitTest(e.data.global, _this.stage);
                if (hitObject instanceof __WEBPACK_IMPORTED_MODULE_4__objects_port__["a" /* Port */] && hitObject.isInput === _this.selectedPort.isInput) {
                    // нельзя так соединять порты!
                }
                var portSnap = _this.snapToPort(e.data.global);
                _this.phantomConnection.update(portSnap.position);
            }
            if (input.isLeftMouseDown()) {
                _this.updateDrag(e);
                _this.updateSelectionFrame(e.data.global);
            }
            else {
                _this.stopDrag();
                _this.stopSelectionFrame();
            }
        });
        input.onMouseOut.merge(input.onMouseUpOutside).subscribe(function () {
            _this.stopSelectionFrame();
        });
        input.onMouseUp.subscribe(function (e) {
            _this.stopDrag();
            if (_this.selectionFrame) {
                var rect = _this.selectionFrame.getRect();
                if (rect)
                    _this.setSelectedObjects(_this.getFrameSelection(rect, _this.selectionFrame.direction), true);
                _this.stopSelectionFrame();
            }
        });
        input.onMouseDown.subscribe(function (e) {
            var hitObject = _this.renderer.plugins.interaction.hitTest(e.data.global, _this.stage);
            if (_this.phantomConnection.isActive()) {
                var port = _this.snapToPort(e.data.global).port;
                if (port)
                    _this.createConnection(_this.selectedPort, port);
                _this.selectedPort = null;
                _this.phantomConnection.hide();
                return;
            }
            if (hitObject instanceof __WEBPACK_IMPORTED_MODULE_4__objects_port__["a" /* Port */]) {
                if (!_this.selectedPort || _this.selectedPort === hitObject) {
                    _this.selectedPort = hitObject;
                    _this.phantomConnection.setPort(_this.selectedPort);
                    return;
                }
                _this.createConnection(_this.selectedPort, hitObject);
                _this.selectedPort = null;
                _this.phantomConnection.hide();
            }
            else if (hitObject instanceof __WEBPACK_IMPORTED_MODULE_6__objects_editor_object__["a" /* EditorObject */]) {
                if (!hitObject.selected)
                    _this.setSelectedObjects(hitObject, true, input.isCtrlKeyDown());
                _this.startDrag(e);
            }
            else if (hitObject === null) {
                _this.deselectAll();
                if (_this.selectedPort !== null) {
                    _this.selectedPort = null;
                    _this.phantomConnection.hide();
                }
                _this.startSelectionFrame(e.data.global);
            }
        });
        input.onMouseDoubleClick.subscribe(function (e) {
            alert('DOUBLE CLICK!!!11');
        });
    };
    Editor2Component.prototype.snapToPort = function (mousePos) {
        var _this = this;
        var distanceThreshold = 100;
        var ports = __WEBPACK_IMPORTED_MODULE_15_lodash__["sortBy"](__WEBPACK_IMPORTED_MODULE_15_lodash__["flatMap"](this.game.children, function (o) { return o instanceof __WEBPACK_IMPORTED_MODULE_6__objects_editor_object__["a" /* EditorObject */] ? o.getPorts() : []; })
            .map(function (p) {
            var portPos = p.getGlobalPosition();
            return {
                port: p,
                distance: Math.sqrt(Math.pow(portPos.x - mousePos.x, 2) + Math.pow(portPos.y - mousePos.y, 2))
            };
        }).filter(function (o) { return o.distance < distanceThreshold && o.port !== _this.selectedPort && o.port.isInput !== _this.selectedPort.isInput; }), 'distance');
        return ports.length > 0 ? { position: ports[0].port.getGlobalPosition(), port: ports[0].port } : {
            position: mousePos,
            port: null
        };
    };
    return Editor2Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('pixi'),
    __metadata("design:type", Object)
], Editor2Component.prototype, "pixiContainer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], Editor2Component.prototype, "select", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Editor2Component.prototype, "onResize", null);
Editor2Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-editor2',
        template: __webpack_require__("../../../../../src/app/components/editor2/editor2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/editor2/editor2.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _b || Object])
], Editor2Component);

var _a, _b;
//# sourceMappingURL=editor2.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor2/events/position-changed-args.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionChangedArgs; });
var PositionChangedArgs = (function () {
    function PositionChangedArgs(position) {
        this.position = position;
    }
    return PositionChangedArgs;
}());

//# sourceMappingURL=position-changed-args.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor2/extract-image.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = extractImage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__my_extract__ = __webpack_require__("../../../../../src/app/components/editor2/my-extract.ts");

function extractImage(renderer, container) {
    var extract = new __WEBPACK_IMPORTED_MODULE_0__my_extract__["a" /* MyExtract */](renderer);
    return new Promise(function (resolve, reject) {
        extract.canvas(container, new PIXI.Rectangle(0, 0, Math.round(container.width), Math.round(container.height))).toBlob(function (blob) {
            window.open(URL.createObjectURL(blob));
            resolve();
        }, 'image/png');
    });
}
//# sourceMappingURL=extract-image.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor2/get-loader.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getLoader;
var assets = [
    ['book', 'assets/book.png'],
    ['del', 'assets/del.png'],
    ['edu', 'assets/edu.png'],
    ['excel', 'assets/excel.png'],
    ['navisworks', 'assets/navisworks.png'],
    ['pdf', 'assets/pdf.png'],
    ['picture', 'assets/picture.png'],
    ['revit', 'assets/revit.png'],
    ['table', 'assets/table.png'],
    ['word', 'assets/word.png'],
    ['youtube', 'assets/youtube.png'],
];
function getLoader() {
    var loader = PIXI.loader;
    assets.forEach(function (x) { return loader.add(x[0], x[1]); });
    loader.load();
    return loader;
}
//# sourceMappingURL=get-loader.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor2/glow.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlowFilter; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var vertex = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}\n";
var fragment = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nuniform float distance;\nuniform float outerStrength;\nuniform float innerStrength;\nuniform vec4 glowColor;\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nvec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);\n\nvoid main(void) {\n    const float PI = 3.14159265358979323846264;\n    vec4 ownColor = texture2D(uSampler, vTextureCoord);\n    vec4 curColor;\n    float totalAlpha = 0.0;\n    float maxTotalAlpha = 0.0;\n    float cosAngle;\n    float sinAngle;\n    vec2 displaced;\n    for (float angle = 0.0; angle <= PI * 2.0; angle += %QUALITY_DIST%) {\n       cosAngle = cos(angle);\n       sinAngle = sin(angle);\n       for (float curDistance = 1.0; curDistance <= %DIST%; curDistance++) {\n           displaced.x = vTextureCoord.x + cosAngle * curDistance * px.x;\n           displaced.y = vTextureCoord.y + sinAngle * curDistance * px.y;\n           curColor = texture2D(uSampler, clamp(displaced, filterClamp.xy, filterClamp.zw));\n           totalAlpha += (distance - curDistance) * curColor.a;\n           maxTotalAlpha += (distance - curDistance);\n       }\n    }\n    maxTotalAlpha = max(maxTotalAlpha, 0.0001);\n\n    ownColor.a = max(ownColor.a, 0.0001);\n    ownColor.rgb = ownColor.rgb / ownColor.a;\n    float outerGlowAlpha = (totalAlpha / maxTotalAlpha)  * outerStrength * (1. - ownColor.a);\n    float innerGlowAlpha = ((maxTotalAlpha - totalAlpha) / maxTotalAlpha) * innerStrength * ownColor.a;\n    float resultAlpha = (ownColor.a + outerGlowAlpha);\n    gl_FragColor = vec4(mix(mix(ownColor.rgb, glowColor.rgb, innerGlowAlpha / ownColor.a), glowColor.rgb, outerGlowAlpha / resultAlpha) * resultAlpha, resultAlpha);\n}\n";
/**
 * GlowFilter, originally by mishaa
 * http://www.html5gamedevs.com/topic/12756-glow-filter/?hl=mishaa#entry73578
 * http://codepen.io/mishaa/pen/raKzrm
 * ![original](../tools/screenshots/dist/original.png)![filter](../tools/screenshots/dist/glow.png)
 *
 * @class
 *
 * @extends PIXI.Filter
 * @memberof PIXI.filters
 * @param {number} [distance=10] The distance of the glow. Make it 2 times more for resolution=2. It cant be changed after filter creation
 * @param {number} [outerStrength=4] The strength of the glow outward from the edge of the sprite.
 * @param {number} [innerStrength=0] The strength of the glow inward from the edge of the sprite.
 * @param {number} [color=0xffffff] The color of the glow.
 * @param {number} [quality=0.1] A number between 0 and 1 that describes the quality of the glow.
 *
 * @example
 *  someSprite.filters = [
 *      new GlowFilter(15, 2, 1, 0xFF0000, 0.5)
 *  ];
 */
var GlowFilter = (function (_super) {
    __extends(GlowFilter, _super);
    function GlowFilter(distance, outerStrength, innerStrength, color, quality) {
        var _this = this;
        if (distance === void 0)
            distance = 10;
        if (outerStrength === void 0)
            outerStrength = 4;
        if (innerStrength === void 0)
            innerStrength = 0;
        if (color === void 0)
            color = 0xffffff;
        if (quality === void 0)
            quality = 0.1;
        _this = _super.call(this, vertex, fragment
            .replace(/%QUALITY_DIST%/gi, '' + (1 / quality / distance).toFixed(7))
            .replace(/%DIST%/gi, '' + distance.toFixed(7))) || this;
        _this.uniforms.glowColor = new Float32Array([0, 0, 0, 1]);
        _this.distance = distance;
        _this.color = color;
        _this.outerStrength = outerStrength;
        _this.innerStrength = innerStrength;
        return _this;
    }
    Object.defineProperty(GlowFilter.prototype, "color", {
        get: function () {
            return PIXI.utils.rgb2hex(this.uniforms.glowColor);
        },
        set: function (value) {
            PIXI.utils.hex2rgb(value, this.uniforms.glowColor);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlowFilter.prototype, "distance", {
        get: function () {
            return this.uniforms.distance;
        },
        set: function (value) {
            this.uniforms.distance = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlowFilter.prototype, "innerStrength", {
        get: function () {
            return this.uniforms.innerStrength;
        },
        set: function (value) {
            this.uniforms.innerStrength = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlowFilter.prototype, "outerStrength", {
        get: function () {
            return this.uniforms.outerStrength;
        },
        set: function (value) {
            this.uniforms.outerStrength = value;
        },
        enumerable: true,
        configurable: true
    });
    return GlowFilter;
}(PIXI.Filter));

//# sourceMappingURL=glow.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor2/input.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyInput; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_buffer__ = __webpack_require__("../../../../rxjs/add/operator/buffer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_buffer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_buffer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounce__ = __webpack_require__("../../../../rxjs/add/operator/debounce.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_timer__ = __webpack_require__("../../../../rxjs/add/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_timer__);







var MyInput = (function () {
    function MyInput(_interactionManager, pixiContainer) {
        var _this = this;
        this._interactionManager = _interactionManager;
        this.keymap = new Map();
        this._mousePoint = new PIXI.Point(0, 0);
        this._zoomSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this._rightDragSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this._mouseDownSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this._mouseUpSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this._mouseUpOutsideSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this._mouseMoveSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this._mouseOutSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this._keyDownSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.onZoom = this._zoomSubject.asObservable();
        this.onRightDrag = this._rightDragSubject.asObservable();
        this.onMouseDown = this._mouseDownSubject.asObservable();
        this.onMouseUp = this._mouseUpSubject.asObservable();
        this.onMouseUpOutside = this._mouseUpOutsideSubject.asObservable();
        this.onMouseMove = this._mouseMoveSubject.asObservable();
        this.onMouseOut = this._mouseOutSubject.asObservable();
        this.onKeyDown = this._keyDownSubject.asObservable();
        this.mousePosition = new PIXI.Point();
        _interactionManager.on('mousemove', function (e) { return _this.handleMousemove(e); });
        _interactionManager.on('mousedown', function (e) { return _this.handleMousedown(e); });
        _interactionManager.on('mouseup', function (e) { return _this.handleMouseup(e); });
        _interactionManager.on('mouseout', function (e) { return _this.handleMouseout(e); });
        _interactionManager.on('mouseupoutside', function (e) { return _this.handleMouseupOutside(e); });
        _interactionManager.on('rightdown', function (e) { return _this.handleRightMousedown(e); });
        _interactionManager.on('rightup', function (e) { return _this.handleRightMouseup(e); });
        this.onMouseDoubleClick = this._mouseDownSubject
            .buffer(this._mouseDownSubject.debounce(function (x) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].timer(250); }))
            .map(function (list) { return list.length; })
            .filter(function (x) { return x === 2; });
        var element = pixiContainer.nativeElement;
        document.addEventListener('keydown', function (e) { return _this.handleKeydown(e); }, false);
        document.addEventListener('keyup', function (e) { return _this.handleKeyup(e); }, false);
        element.addEventListener('wheel', function (e) { return _this.handleMouseWheel(e); }, false);
        element.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        }, false);
    }
    MyInput.prototype.handleMousemove = function (e) {
        this._mousePoint = e.data.global;
        if (this._lastDragMousePos && this._rightMouseDown) {
            this._rightDragSubject.next({
                dx: e.data.global.x - this._lastDragMousePos.x,
                dy: e.data.global.y - this._lastDragMousePos.y
            });
            this._lastDragMousePos = e.data.global.clone();
        }
        this.mousePosition.set(e.data.global.x, e.data.global.y);
        this._mouseMoveSubject.next(e);
    };
    MyInput.prototype.handleMousedown = function (e) {
        this._leftMouseDown = true;
        this._mouseDownSubject.next(e);
    };
    MyInput.prototype.handleMouseup = function (e) {
        this._leftMouseDown = false;
        this._mouseUpSubject.next(e);
    };
    MyInput.prototype.handleKeydown = function (e) {
        this.keymap[e.keyCode] = true;
        this._keyDownSubject.next(e);
    };
    MyInput.prototype.handleKeyup = function (e) {
        this.keymap[e.keyCode] = false;
    };
    MyInput.prototype.handleMouseWheel = function (e) {
        if (e.deltaY < 0) {
            this._zoomSubject.next(0.1);
        }
        else if (e.deltaY > 0) {
            this._zoomSubject.next(-0.1);
        }
        e.preventDefault();
    };
    MyInput.prototype.handleRightMousedown = function (e) {
        this._rightMouseDown = true;
        this._lastDragMousePos = e.data.global.clone();
    };
    MyInput.prototype.handleRightMouseup = function (e) {
        this._rightMouseDown = false;
        this._lastDragMousePos = undefined;
    };
    MyInput.prototype.isCtrlKeyDown = function () {
        return this.keymap[17] === true;
    };
    MyInput.prototype.isLeftMouseDown = function () {
        return this._leftMouseDown === true;
    };
    MyInput.prototype.isRightMouseDown = function () {
        return this._rightMouseDown === true;
    };
    MyInput.prototype.getMousePoint = function () {
        return this._mousePoint;
    };
    MyInput.prototype.handleMouseupOutside = function (e) {
        this._mouseUpOutsideSubject.next(e);
    };
    MyInput.prototype.handleMouseout = function (e) {
        this._mouseOutSubject.next(e);
    };
    return MyInput;
}());

//# sourceMappingURL=input.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor2/my-extract.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyExtract; });
var RenderTexture = PIXI.RenderTexture;
var Matrix = PIXI.Matrix;
var TEMP_RECT = new PIXI.Rectangle();
var BYTES_PER_PIXEL = 4;
/**
 * The extract manager provides functionality to export content from the renderers.
 *
 * An instance of this class is automatically created by default, and can be found at renderer.plugins.extract
 *
 * @class
 * @memberof PIXI.extract
 */
var MyExtract = (function () {
    /**
     * @param {PIXI.WebGLRenderer} renderer - A reference to the current renderer
     */
    function MyExtract(renderer) {
        this.renderer = renderer;
        /**
         * Collection of methods for extracting data (image, pixels, etc.) from a display object or render texture
         *
         * @member {PIXI.extract.WebGLExtract} extract
         * @memberof PIXI.WebGLRenderer#
         * @see PIXI.extract.WebGLExtract
         */
        renderer.extract = this;
    }
    /**
     * Will return a HTML Image of the target
     *
     * @param {PIXI.DisplayObject|PIXI.RenderTexture} target - A displayObject or renderTexture
     *  to convert. If left empty will use use the main renderer
     * @return {HTMLImageElement} HTML Image of the target
     */
    MyExtract.prototype.image = function (target) {
        var image = new Image();
        image.src = this.base64(target);
        return image;
    };
    /**
     * Will return a a base64 encoded string of this target. It works by calling
     *  `WebGLExtract.getCanvas` and then running toDataURL on that.
     *
     * @param {PIXI.DisplayObject|PIXI.RenderTexture} target - A displayObject or renderTexture
     *  to convert. If left empty will use use the main renderer
     * @return {string} A base64 encoded string of the texture.
     */
    MyExtract.prototype.base64 = function (target) {
        return this.canvas(target).toDataURL();
    };
    /**
     * Creates a Canvas element, renders this target to it and then returns it.
     *
     * @param {PIXI.DisplayObject|PIXI.RenderTexture} target - A displayObject or renderTexture
     *  to convert. If left empty will use use the main renderer
     * @return {HTMLCanvasElement} A Canvas element with the texture rendered on.
     */
    MyExtract.prototype.canvas = function (target, _frame) {
        if (_frame === void 0) { _frame = null; }
        var renderer = this.renderer;
        var textureBuffer;
        var resolution;
        var frame;
        var flipY = false;
        var renderTexture;
        frame = _frame;
        if (target) {
            if (target instanceof PIXI.RenderTexture) {
                renderTexture = target;
            }
            else {
                renderTexture = this.generateTexture(target, 0, 1);
            }
        }
        if (renderTexture) {
            textureBuffer = renderTexture.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID];
            resolution = textureBuffer.resolution;
            //frame = _frame || renderTexture.frame;
            flipY = false;
        }
        else {
            textureBuffer = this.renderer.rootRenderTarget;
            resolution = textureBuffer.resolution;
            flipY = true;
            //frame = TEMP_RECT;
            // frame.width = textureBuffer.size.width;
            //frame.height = textureBuffer.size.height;
        }
        var width = frame.width * resolution;
        var height = frame.height * resolution;
        var canvasBuffer = new PIXI.CanvasRenderTarget(width, height, 1);
        if (textureBuffer) {
            // bind the buffer
            renderer.bindRenderTarget(textureBuffer);
            // set up an array of pixels
            var webglPixels = new Uint8Array(BYTES_PER_PIXEL * width * height);
            // read pixels to the array
            var gl = renderer.gl;
            gl.readPixels(frame.x * resolution, frame.y * resolution, width, height, gl.RGBA, gl.UNSIGNED_BYTE, webglPixels);
            // add the pixels to the canvas
            var canvasData = canvasBuffer.context.getImageData(0, 0, width, height);
            canvasData.data.set(webglPixels);
            canvasBuffer.context.putImageData(canvasData, 0, 0);
            // pulling pixels
            if (flipY) {
                canvasBuffer.context.scale(1, -1);
                canvasBuffer.context.drawImage(canvasBuffer.canvas, 0, -height);
            }
        }
        // send the canvas back..
        return canvasBuffer.canvas;
    };
    MyExtract.prototype.generateTexture = function (displayObject, scaleMode, resolution) {
        var bounds = displayObject.getLocalBounds();
        var renderTexture = RenderTexture.create(bounds.width | 0, bounds.height | 0, scaleMode, resolution);
        var tempMatrix = new Matrix();
        tempMatrix.tx = -bounds.x;
        tempMatrix.ty = -bounds.y;
        this.renderer.render(displayObject, renderTexture, false, tempMatrix, true);
        return renderTexture;
    };
    /**
     * Will return a one-dimensional array containing the pixel data of the entire texture in RGBA
     * order, with integer values between 0 and 255 (included).
     *
     * @param {PIXI.DisplayObject|PIXI.RenderTexture} target - A displayObject or renderTexture
     *  to convert. If left empty will use use the main renderer
     * @return {Uint8ClampedArray} One-dimensional array containing the pixel data of the entire texture
     */
    MyExtract.prototype.pixels = function (target) {
        var renderer = this.renderer;
        var textureBuffer;
        var resolution;
        var frame;
        var renderTexture;
        if (target) {
            if (target instanceof PIXI.RenderTexture) {
                renderTexture = target;
            }
            else {
                renderTexture = this.renderer.generateTexture(target);
            }
        }
        if (renderTexture) {
            textureBuffer = renderTexture.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID];
            resolution = textureBuffer.resolution;
            frame = renderTexture.frame;
        }
        else {
            textureBuffer = this.renderer.rootRenderTarget;
            resolution = textureBuffer.resolution;
            frame = TEMP_RECT;
            frame.width = textureBuffer.size.width;
            frame.height = textureBuffer.size.height;
        }
        var width = frame.width * resolution;
        var height = frame.height * resolution;
        var webglPixels = new Uint8Array(BYTES_PER_PIXEL * width * height);
        if (textureBuffer) {
            // bind the buffer
            renderer.bindRenderTarget(textureBuffer);
            // read pixels to the array
            var gl = renderer.gl;
            gl.readPixels(frame.x * resolution, frame.y * resolution, width, height, gl.RGBA, gl.UNSIGNED_BYTE, webglPixels);
        }
        return webglPixels;
    };
    /**
     * Destroys the extract
     *
     */
    MyExtract.prototype.destroy = function () {
        this.renderer.extract = null;
        this.renderer = null;
    };
    return MyExtract;
}());

//# sourceMappingURL=my-extract.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor2/objects/Layouts/alignment.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alignment; });
var Alignment;
(function (Alignment) {
    Alignment[Alignment["TopLeft"] = 0] = "TopLeft";
    Alignment[Alignment["Top"] = 1] = "Top";
    Alignment[Alignment["TopRight"] = 2] = "TopRight";
    Alignment[Alignment["CenterLeft"] = 3] = "CenterLeft";
    Alignment[Alignment["Center"] = 4] = "Center";
    Alignment[Alignment["CenterRight"] = 5] = "CenterRight";
    Alignment[Alignment["BottomLeft"] = 6] = "BottomLeft";
    Alignment[Alignment["Bottom"] = 7] = "Bottom";
    Alignment[Alignment["BottomRight"] = 8] = "BottomRight";
})(Alignment || (Alignment = {}));
//# sourceMappingURL=alignment.enum.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor2/objects/Layouts/cell.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cell; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table__ = __webpack_require__("../../../../../src/app/components/editor2/objects/Layouts/table.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alignment_enum__ = __webpack_require__("../../../../../src/app/components/editor2/objects/Layouts/alignment.enum.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Container = PIXI.Container;


var Graphics = PIXI.Graphics;
var Cell = (function (_super) {
    __extends(Cell, _super);
    function Cell(table, col, row, debug) {
        if (debug === void 0) { debug = false; }
        var _this = _super.call(this) || this;
        _this.curAlignment = __WEBPACK_IMPORTED_MODULE_1__alignment_enum__["a" /* Alignment */].TopLeft;
        _this.lines = new Graphics();
        _this.columnIndex = 0;
        _this.rowIndex = 0;
        _this.padding = 0;
        _this.span = 1;
        _this.isDebug = false;
        _this.debugRect = new PIXI.Graphics();
        _this.isDebug = debug;
        _this.table = table;
        _this.columnIndex = col;
        _this.rowIndex = row;
        if (_this.isDebug)
            _this.drawDebug();
        return _this;
    }
    Cell.prototype.add = function (obj) {
        this.removeChild(this.curObj);
        this.curObj = obj;
        this.addChild(obj);
        return this;
    };
    //region Align
    Cell.prototype.align = function (align) {
        switch (align) {
            case __WEBPACK_IMPORTED_MODULE_1__alignment_enum__["a" /* Alignment */].TopLeft:
                this.alignTopLeft();
                break;
            case __WEBPACK_IMPORTED_MODULE_1__alignment_enum__["a" /* Alignment */].Top:
                this.alignTop();
                break;
            case __WEBPACK_IMPORTED_MODULE_1__alignment_enum__["a" /* Alignment */].TopRight:
                this.alignTopRight();
                break;
            case __WEBPACK_IMPORTED_MODULE_1__alignment_enum__["a" /* Alignment */].BottomLeft:
                this.alignBottomLeft();
                break;
            case __WEBPACK_IMPORTED_MODULE_1__alignment_enum__["a" /* Alignment */].Bottom:
                this.alignBottom();
                break;
            case __WEBPACK_IMPORTED_MODULE_1__alignment_enum__["a" /* Alignment */].BottomRight:
                this.alignBottomRight();
                break;
            case __WEBPACK_IMPORTED_MODULE_1__alignment_enum__["a" /* Alignment */].CenterLeft:
                this.alignCenterLeft();
                break;
            case __WEBPACK_IMPORTED_MODULE_1__alignment_enum__["a" /* Alignment */].Center:
                this.alignCenter();
                break;
            case __WEBPACK_IMPORTED_MODULE_1__alignment_enum__["a" /* Alignment */].CenterRight:
                this.alignCenterRight();
                break;
        }
        return this;
    };
    Cell.prototype.alignTopLeft = function () {
        this.curAlignment = __WEBPACK_IMPORTED_MODULE_1__alignment_enum__["a" /* Alignment */].TopLeft;
        this.curObj.x = this.padding;
        this.curObj.y = this.padding;
        return this;
    };
    Cell.prototype.alignTop = function () {
        this.curAlignment = __WEBPACK_IMPORTED_MODULE_1__alignment_enum__["a" /* Alignment */].Top;
        this.curObj.x = (this.width - this.curObj.width) / 2;
        this.curObj.y = this.padding;
        return this;
    };
    Cell.prototype.alignTopRight = function () {
        this.curAlignment = __WEBPACK_IMPORTED_MODULE_1__alignment_enum__["a" /* Alignment */].TopRight;
        this.curObj.x = this.width - this.curObj.width - this.padding;
        this.curObj.y = this.padding;
        return this;
    };
    Cell.prototype.alignBottomLeft = function () {
        this.curAlignment = __WEBPACK_IMPORTED_MODULE_1__alignment_enum__["a" /* Alignment */].BottomLeft;
        this.curObj.x = this.padding;
        this.curObj.y = this.height - this.curObj.height - this.padding;
        return this;
    };
    Cell.prototype.alignBottom = function () {
        this.curAlignment = __WEBPACK_IMPORTED_MODULE_1__alignment_enum__["a" /* Alignment */].Bottom;
        this.curObj.x = (this.width - this.curObj.width) / 2;
        this.curObj.y = this.height - this.curObj.height - this.padding;
        return this;
    };
    Cell.prototype.alignBottomRight = function () {
        this.curAlignment = __WEBPACK_IMPORTED_MODULE_1__alignment_enum__["a" /* Alignment */].BottomRight;
        this.curObj.x = this.width - this.curObj.width - this.padding;
        this.curObj.y = this.height - this.curObj.height - this.padding;
        return this;
    };
    Cell.prototype.alignCenterLeft = function () {
        this.curAlignment = __WEBPACK_IMPORTED_MODULE_1__alignment_enum__["a" /* Alignment */].CenterLeft;
        this.curObj.x = this.padding;
        this.curObj.y = (this.height - this.curObj.height) / 2;
        return this;
    };
    Cell.prototype.alignCenter = function () {
        this.curAlignment = __WEBPACK_IMPORTED_MODULE_1__alignment_enum__["a" /* Alignment */].Center;
        this.curObj.x = (this.width - this.curObj.width) / 2;
        this.curObj.y = (this.height - this.curObj.height) / 2;
        return this;
    };
    Cell.prototype.alignCenterRight = function () {
        this.curAlignment = __WEBPACK_IMPORTED_MODULE_1__alignment_enum__["a" /* Alignment */].CenterRight;
        this.curObj.x = this.width - this.curObj.width - this.padding;
        this.curObj.y = (this.height - this.curObj.height) / 2;
        return this;
    };
    //endregion
    //region Padding
    Cell.prototype.pad = function (pad) {
        this.padding = pad;
        this.align(this.curAlignment);
    };
    //endregion
    Cell.prototype.colspan = function (i) {
        this.span = i;
        this.table.colspan(i);
        return this;
    };
    Cell.prototype.setSize = function (width, height) {
        var _this = this;
        var smallTexture = PIXI.RenderTexture.create(width, height);
        this.size = new PIXI.Sprite(smallTexture);
        this.children.forEach(function (x) { return _this.removeChild(x); });
        this.addChild(this.size);
        if (this.isDebug)
            this.drawDebug();
        this.add(this.curObj);
        this.update();
    };
    Cell.prototype.update = function () {
        this.align(this.curAlignment);
        this.pad(this.padding);
        //colspan
    };
    Cell.prototype.drawDebug = function () {
        this.debugRect.lineStyle(1, 0xFF0000);
        this.debugRect.drawRect(0, 0, this.width, this.height);
        this.addChild(this.debugRect);
    };
    Cell.prototype.debug = function (debug) {
        var _this = this;
        this.isDebug = debug;
        this.children.forEach(function (x) { return _this.removeChild(x); });
        this.addChild(this.size);
        if (debug)
            this.drawDebug();
        this.add(this.curObj);
        if (this.curObj instanceof __WEBPACK_IMPORTED_MODULE_0__table__["a" /* Table */])
            this.curObj.debug(debug);
    };
    Cell.prototype.drawLines = function () {
        this.lines.clear();
        this.lines.lineStyle(1);
        if (this.rowIndex !== this.table.rowsCount - 1) {
            this.lines.moveTo(0, this.height);
            this.lines.lineTo(this.width, this.height);
        }
        else
            this.lines.moveTo(this.width, this.height);
        if (this.span !== this.table.columnsCount)
            this.lines.lineTo(this.width, 0);
        this.addChild(this.lines);
    };
    return Cell;
}(Container));

//# sourceMappingURL=cell.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor2/objects/Layouts/table.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Table; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cell__ = __webpack_require__("../../../../../src/app/components/editor2/objects/Layouts/cell.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Container = PIXI.Container;

var Table = (function (_super) {
    __extends(Table, _super);
    function Table() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.curCol = 0;
        _this.curRow = 0;
        _this.cells = [[]];
        return _this;
    }
    Object.defineProperty(Table.prototype, "cellsCount", {
        get: function () {
            return this.cells.reduce(function (a, b) { return a.concat(b); }).length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "columnsCount", {
        get: function () {
            return this.cells.map(function (x) { return x.length; })
                .reduce(function (a, b) { return Math.max(a, b); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "rowsCount", {
        get: function () {
            return this.cells.length;
        },
        enumerable: true,
        configurable: true
    });
    Table.prototype.add = function (obj) {
        var cell = new __WEBPACK_IMPORTED_MODULE_0__cell__["a" /* Cell */](this, this.curCol, this.curRow);
        cell.add(obj);
        this.cells[this.curRow].push(cell);
        this.curCol++;
        this.addChild(cell);
        return cell;
    };
    Table.prototype.addText = function (str) {
        var cell = new __WEBPACK_IMPORTED_MODULE_0__cell__["a" /* Cell */](this, this.curCol, this.curRow);
        cell.add(new PIXI.Text(str));
        this.cells[this.curRow].push(cell);
        this.curCol++;
        this.addChild(cell);
        return cell;
    };
    Table.prototype.row = function () {
        if (this.cells.length > 1 && !this.checkRows()) {
            throw new Error('Не одинаковое количество колонок');
        }
        this.curRow++;
        this.curCol = 0;
        this.cells.push([]);
        return this;
    };
    Table.prototype.checkRows = function () {
        return this.cells.map(function (cr) { return cr.map(function (c) { return c.span; }).reduce(function (a, b) { return a + b; }); })
            .every(function (x, i, a) { return x === a[0]; });
    };
    Table.prototype.colspan = function (i) {
        this.curCol += i - 1;
    };
    Table.prototype.build = function () {
        var curX = 0;
        var curY = 0;
        for (var row = 0; row < this.cells.length; row++) {
            for (var col = 0; col < this.cells[row].length; col++) {
                var cell = this.cells[row][col];
                var maxHeight = this.getRowHeight(row);
                // let maxWidth = this.getColumnWidth(col);
                var maxWidth = this.getColumnWidthWithSpan(cell.columnIndex, cell.span);
                cell.setSize(maxWidth, maxHeight);
                cell.position.set(curX, curY);
                curX += cell.width;
            }
            curX = 0;
            curY += cell.height;
        }
    };
    Table.prototype.build2 = function (drawLines) {
        if (drawLines === void 0) { drawLines = false; }
        var curX = 0;
        var curY = 0;
        var allCells = this.cells.reduce(function (a, b) { return a.concat(b); });
        var numberOfCols = this.columnsCount;
        var colWidths = [];
        for (var i = 0; i < numberOfCols; i++) {
            colWidths.push(this.getColumnWidth(i));
        }
        var rowHeights = [];
        for (var i = 0; i < this.cells.length; i++) {
            rowHeights.push(this.getRowHeight(i));
        }
        allCells.forEach(function (cell) {
            var width = 0;
            for (var i = cell.columnIndex; i < cell.columnIndex + cell.span; i++) {
                width += colWidths[i];
            }
            cell.setSize(width, rowHeights[cell.rowIndex]);
        });
        for (var row = 0; row < this.cells.length; row++) {
            for (var col = 0; col < this.cells[row].length; col++) {
                var cell = this.cells[row][col];
                cell.position.set(curX, curY);
                curX += cell.width;
            }
            curX = 0;
            curY += cell.height;
        }
        if (drawLines) {
            this.cells.reduce(function (a, b) { return a.concat(b); }).forEach(function (x, i, a) {
                if (i !== a.length - 1)
                    x.drawLines();
            });
        }
    };
    Table.prototype.getRowHeight = function (row) {
        return this.cells[row].map(function (x) { return x.height; })
            .reduce(function (a, b) { return Math.max(a, b); });
    };
    Table.prototype.getColumnWidthWithSpan = function (col, span) {
        var result = 0;
        for (var i = 0; i < span; i++) {
            result += this.getColumnWidth(col + i);
        }
        return result;
    };
    Table.prototype.getColumnWidth = function (col) {
        var widths = [];
        this.cells.reduce(function (a, b) { return a.concat(b); })
            .filter(function (x) { return x.columnIndex === col; })
            .forEach(function (c) {
            // if (c.span === 1) {
            var result = c.width;
            widths.push(result);
            // }
        });
        return widths.reduce(function (a, b) { return Math.max(a, b); });
    };
    Table.prototype.debug = function (debug) {
        if (debug)
            this.cells.forEach(function (r) { return r.forEach(function (c) { return c.debug(debug); }); });
    };
    return Table;
}(Container));

//# sourceMappingURL=table.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor2/objects/aligner.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Aligner; });
var Point = PIXI.Point;
var Aligner = (function () {
    function Aligner() {
        this.distance = 50;
        this.stack = [];
    }
    Aligner.prototype.alignHorizontal = function (objects) {
        var y = objects[0].getGlobalPosition().y;
        objects.forEach(function (x) {
            var p = x.getGlobalPosition();
            p.y = y;
            var newP = x.parent.toLocal(p);
            x.setPosition(newP);
        });
    };
    Aligner.prototype.alignHorizontalCenter = function (objects) {
        var y = objects[0].getGlobalPosition().y + objects[0].height / 2;
        objects.forEach(function (x) {
            var p = x.getGlobalPosition();
            p.y = y - x.height / 2;
            var newP = x.parent.toLocal(p);
            x.setPosition(newP);
        });
    };
    Aligner.prototype.alignVertical = function (objects) {
        var x = objects[0].getGlobalPosition().x;
        objects.forEach(function (o) {
            var p = o.getGlobalPosition();
            p.x = x;
            var newP = o.parent.toLocal(p);
            o.setPosition(newP);
        });
    };
    Aligner.prototype.alignVerticalCenter = function (objects) {
        var x = objects[0].getGlobalPosition().x + objects[0].width / 2;
        objects.forEach(function (o) {
            var p = o.getGlobalPosition();
            p.x = x - o.width / 2;
            var newP = o.parent.toLocal(p);
            o.setPosition(newP);
        });
    };
    Aligner.prototype.distributeHorizontal = function (objects, sortByX) {
        if (sortByX === void 0) { sortByX = true; }
        if (sortByX)
            objects = objects.sort(this.sortX);
        for (var i = 1; i < objects.length; i++) {
            var newP = new Point(objects[i - 1].x + objects[i - 1].width + this.distance, objects[i].y);
            objects[i].setPosition(newP);
        }
    };
    Aligner.prototype.distributeVertical = function (objects, sortByY) {
        if (sortByY === void 0) { sortByY = true; }
        if (sortByY)
            objects = objects.sort(this.sortY);
        for (var i = 1; i < objects.length; i++) {
            var newP = new Point(objects[i].x, objects[i - 1].y + objects[i - 1].height + this.distance);
            objects[i].setPosition(newP);
        }
    };
    Aligner.prototype.autoAlign = function (objects) {
        var _this = this;
        var rootObjs = this.getRootObjects(objects);
        var y = 0;
        rootObjs.forEach(function (x, i) {
            var newP = new Point(0, y);
            x.setPosition(newP);
            var branchHeight = _this.setNext(x, objects);
            y += branchHeight + +_this.distance;
        });
    };
    Aligner.prototype.sortX = function (a, b) {
        if (a.x > b.x)
            return 1;
        else if (a.x < b.x)
            return -1;
        else
            return 0;
    };
    Aligner.prototype.sortY = function (a, b) {
        if (a.y > b.y)
            return 1;
        else if (a.y < b.y)
            return -1;
        else
            return 0;
    };
    Aligner.prototype.getRootObjects = function (objects) {
        return objects.filter(function (x) { return x.getInputPort().connections.length === 0; });
    };
    Aligner.prototype.setNext = function (x, objects) {
        var _this = this;
        var delta = 0;
        var ports = x.getOutputPorts().filter(function (p) { return p.connections.length > 0; });
        ports.forEach(function (p) {
            p.connections.forEach(function (c) {
                var node = c.port2.parent;
                var X = x.x + x.width + _this.distance;
                var Y = x.y + delta;
                var point = new Point(X, Y);
                delta += node.height + _this.distance;
                node.setPosition(point);
                if (node.getOutputPorts().filter(function (p) { return p.connections.length > 0; }).length > 0)
                    _this.setNext(node, objects);
            });
        });
        return delta === 0 ? x.height : delta;
    };
    return Aligner;
}());

//# sourceMappingURL=aligner.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor2/objects/button.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Sprite = PIXI.Sprite;
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(name, click) {
        var _this = _super.call(this) || this;
        _this.s = 1;
        _this.down = function (delta) { return _this.scaleDown(delta); };
        _this.up = function (delta) { return _this.scaleUp(delta); };
        _this.sprite = new Sprite(PIXI.loader.resources[name].texture);
        _this.sprite.width = 32;
        _this.sprite.height = 32;
        _this.sprite.interactive = true;
        _this.sprite.on('pointerout', function (e) {
            PIXI.ticker.shared.remove(_this.up);
            PIXI.ticker.shared.add(_this.down);
        });
        _this.sprite.on('pointerover', function (e) {
            PIXI.ticker.shared.remove(_this.down);
            PIXI.ticker.shared.add(_this.up);
        });
        _this.addChild(_this.sprite);
        _this.sprite.on('click', function (e) { return click(); });
        return _this;
    }
    Button.prototype.scaleUp = function (delta) {
        this.s += 0.1 * delta;
        this.sprite.scale.set(this.s, this.s);
        if (this.s >= 1.5) {
            PIXI.ticker.shared.remove(this.up);
        }
    };
    Button.prototype.scaleDown = function (delta) {
        this.s -= 0.2 * delta;
        this.sprite.scale.set(this.s, this.s);
        if (this.s <= 1) {
            this.sprite.scale.set(1, 1);
            PIXI.ticker.shared.remove(this.down);
        }
    };
    return Button;
}(PIXI.Container));

//# sourceMappingURL=button.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor2/objects/condition.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Condition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_object__ = __webpack_require__("../../../../../src/app/components/editor2/objects/editor-object.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__port__ = __webpack_require__("../../../../../src/app/components/editor2/objects/port.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Condition = (function (_super) {
    __extends(Condition, _super);
    function Condition(rowCount, title) {
        var _this = _super.call(this) || this;
        _this.rowCount = rowCount;
        _this.title = title;
        _this.outPorts = [];
        _this.interactive = true;
        _this.createView();
        return _this;
    }
    Condition.prototype.getPorts = function () {
        return this.outPorts.concat([this.inPort]);
    };
    Condition.prototype.createView = function () {
        var box = this._box = new PIXI.Graphics();
        var headerHeight = 50;
        var rowHeight = 40;
        var height = headerHeight + rowHeight * this.rowCount;
        var width = 200;
        box.beginFill(0xffe311);
        box.lineStyle(1);
        box.drawRoundedRect(0, 0, width, height, 10);
        box.endFill();
        var nameTxt = new PIXI.Text(this.title);
        nameTxt.x = 15;
        nameTxt.y = 5;
        var inPort = this.inPort = new __WEBPACK_IMPORTED_MODULE_1__port__["a" /* Port */](this, __WEBPACK_IMPORTED_MODULE_1__port__["b" /* PortOrientation */].Left);
        inPort.x = 0;
        inPort.y = headerHeight / 2;
        inPort.isInput = true;
        var answerLabels = [];
        for (var i = 1; i <= this.rowCount; i++) {
            var port = new __WEBPACK_IMPORTED_MODULE_1__port__["a" /* Port */](this, __WEBPACK_IMPORTED_MODULE_1__port__["b" /* PortOrientation */].Right);
            port.x = width;
            port.y = headerHeight + i * rowHeight - rowHeight / 2;
            this.outPorts.push(port);
            var label = new PIXI.Text('Otvet ' + i);
            label.x = 25;
            label.y = headerHeight + (i - 1) * rowHeight;
            answerLabels.push(label);
        }
        this.addChild.apply(this, [box, nameTxt, inPort].concat(this.outPorts, answerLabels));
    };
    return Condition;
}(__WEBPACK_IMPORTED_MODULE_0__editor_object__["a" /* EditorObject */]));

//# sourceMappingURL=condition.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor2/objects/connection.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Connection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_startWith__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Graphics = PIXI.Graphics;
var Sprite = PIXI.Sprite;

var Connection = (function (_super) {
    __extends(Connection, _super);
    function Connection(_p1, _p2) {
        var _this = _super.call(this) || this;
        _this.btnScale = 1;
        _this.ticker = 0;
        _this.isSelected = false;
        _this.fun = function (delta) { return _this.tick(delta); };
        _this.deleteButton = new Sprite(PIXI.loader.resources.del.texture);
        _this.deleteButton.width = 32;
        _this.deleteButton.height = 32;
        _this.deleteButton.pivot = new PIXI.Point(16, 16);
        _this.deleteButton.interactive = true;
        _this.deleteButton.buttonMode = true;
        _this.deleteButton.on('click', function (e) {
            _this.parent.removeChild(_this);
            _this.clearPorts();
            _this.hideDelBtn();
        });
        _this.interactive = true;
        var _a = _p2.isInput ? [_p1, _p2] : [_p2, _p1], p1 = _a[0], p2 = _a[1];
        _this.port1 = p1;
        _this.port2 = p2;
        p1.connections.push(_this);
        p2.connections.push(_this);
        _this.curve = new Graphics();
        _this.addChild(_this.curve);
        p1.parent.onPositionChanged.merge(p2.parent.onPositionChanged).startWith(null).subscribe(function (e) {
            _this.update();
        });
        return _this;
    }
    Connection.prototype.setSelected = function (value) {
        this.isSelected = value;
        if (value) {
            this.showDelBtn();
        }
        else {
            this.hideDelBtn();
        }
        this.update();
    };
    Connection.prototype.clearPorts = function () {
        var index = this.port1.connections.indexOf(this);
        if (index !== -1) {
            this.port1.connections.splice(index, 1);
        }
        index = this.port2.connections.indexOf(this);
        if (index !== -1) {
            this.port2.connections.splice(index, 1);
        }
    };
    Connection.prototype.update = function () {
        var c2;
        var c1;
        var a = new PIXI.Point(this.port1.position.x + this.port1.parent.position.x, this.port1.position.y + this.port1.parent.position.y);
        var b = new PIXI.Point(this.port2.position.x + this.port2.parent.position.x, this.port2.position.y + this.port2.parent.position.y);
        if (a.x < b.x) {
            c1 = new PIXI.Point(b.x - (b.x - a.x) / 2, a.y);
            c2 = new PIXI.Point(a.x + (b.x - a.x) / 2, b.y);
        }
        else if (a.x >= b.x) {
            c1 = new PIXI.Point(a.x + 350, a.y);
            c2 = new PIXI.Point(b.x - 350, b.y);
        }
        this.curve.clear();
        this.curve.lineStyle(this.isSelected ? 5 : 3, this.isSelected ? 0xff4500 : 0x3355ee);
        this.curve.moveTo(a.x + 10, a.y);
        this.curve.bezierCurveTo(c1.x, c1.y, c2.x, c2.y, b.x - 10, b.y);
        this.calcBtnPosition();
    };
    Connection.prototype.getMiddlePoint = function () {
        var point = new PIXI.Point();
        var a = this.port1.getGlobalPosition();
        var b = this.port2.getGlobalPosition();
        point.x = (a.x + b.x) / 2;
        point.y = (a.y + b.y) / 2;
        return this.toLocal(point);
    };
    Connection.prototype.showDelBtn = function () {
        this.calcBtnPosition();
        this.addChild(this.deleteButton);
        PIXI.ticker.shared.remove((this.fun));
        PIXI.ticker.shared.add(this.fun);
    };
    Connection.prototype.hideDelBtn = function () {
        this.removeChild(this.deleteButton);
        PIXI.ticker.shared.remove(this.fun);
        this.ticker = Math.random() * 100;
    };
    Connection.prototype.calcBtnPosition = function () {
        var p = this.getMiddlePoint();
        this.deleteButton.position.set(p.x, p.y);
    };
    Connection.prototype.tick = function (delta) {
        this.btnScale = (Math.sin(this.ticker += delta / 20) + 1) * 0.15 + 0.6;
        this.deleteButton.scale.set(this.btnScale, this.btnScale);
    };
    return Connection;
}(PIXI.Container));

//# sourceMappingURL=connection.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor2/objects/editor-object.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorObject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events_position_changed_args__ = __webpack_require__("../../../../../src/app/components/editor2/events/position-changed-args.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__port__ = __webpack_require__("../../../../../src/app/components/editor2/objects/port.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__glow__ = __webpack_require__("../../../../../src/app/components/editor2/glow.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var EditorObject = (function (_super) {
    __extends(EditorObject, _super);
    function EditorObject() {
        var _this = _super.call(this) || this;
        _this.isSelected = false;
        _this._positionChangedSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        _this.onPositionChanged = _this._positionChangedSubject.asObservable();
        _this.outlineFilter = new __WEBPACK_IMPORTED_MODULE_3__glow__["a" /* GlowFilter */](10, 2, 0, 0x0099ff, 0.5);
        return _this;
    }
    EditorObject.prototype.setPosition = function (point) {
        this.x = point.x;
        this.y = point.y;
        this._positionChangedSubject.next(new __WEBPACK_IMPORTED_MODULE_1__events_position_changed_args__["a" /* PositionChangedArgs */](point.clone()));
    };
    EditorObject.prototype.setSelected = function (isSelected) {
        if (isSelected && !this.isSelected) {
            this.selectConnections();
            this.filters = [this.outlineFilter];
        }
        else if (!isSelected && this.isSelected) {
            this.deselectConnections();
            this.filters = [];
        }
        this.isSelected = isSelected;
    };
    Object.defineProperty(EditorObject.prototype, "selected", {
        get: function () {
            return this.isSelected;
        },
        enumerable: true,
        configurable: true
    });
    EditorObject.prototype.createView = function () {
    };
    EditorObject.prototype.selectConnections = function () {
        var ports = this.children.filter(function (x) { return x instanceof __WEBPACK_IMPORTED_MODULE_2__port__["a" /* Port */]; })
            .map(function (x) { return x; })
            .filter(function (x) { return x.connections.length > 0; });
        ports.forEach(function (x) {
            x.connections.forEach(function (c) { return c.setSelected(true); });
        });
    };
    EditorObject.prototype.deselectConnections = function () {
        var ports = this.children.filter(function (x) { return x instanceof __WEBPACK_IMPORTED_MODULE_2__port__["a" /* Port */]; })
            .map(function (x) { return x; })
            .filter(function (x) { return x.connections.length > 0; });
        ports.forEach(function (x) {
            x.connections.forEach(function (c) { return c.setSelected(false); });
        });
    };
    EditorObject.prototype.hasConnenctions = function () {
        return this.children.filter(function (x) { return x instanceof __WEBPACK_IMPORTED_MODULE_2__port__["a" /* Port */]; })
            .map(function (x) { return x; })
            .filter(function (x) { return x.connections.length > 0; }).length > 0;
    };
    EditorObject.prototype.getInputPort = function () {
        return this.children.filter(function (x) { return x instanceof __WEBPACK_IMPORTED_MODULE_2__port__["a" /* Port */]; })
            .map(function (x) { return x; })
            .filter(function (x) { return x.isInput; })[0];
    };
    EditorObject.prototype.getOutputPorts = function () {
        return this.children.filter(function (x) { return x instanceof __WEBPACK_IMPORTED_MODULE_2__port__["a" /* Port */]; })
            .map(function (x) { return x; })
            .filter(function (x) { return !x.isInput; });
    };
    return EditorObject;
}(PIXI.Container));

//# sourceMappingURL=editor-object.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor2/objects/phantom-connection.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhantomConnection; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Graphics = PIXI.Graphics;
var Container = PIXI.Container;
var Point = PIXI.Point;
var PhantomConnection = (function (_super) {
    __extends(PhantomConnection, _super);
    function PhantomConnection() {
        var _this = _super.call(this) || this;
        _this.curve = new Graphics();
        _this.addChild(_this.curve);
        return _this;
    }
    PhantomConnection.prototype.hide = function () {
        this.curve.clear();
        this.p1 = null;
    };
    PhantomConnection.prototype.setPort = function (p1) {
        this.p1 = p1;
    };
    PhantomConnection.prototype.isActive = function () {
        return !!this.p1;
    };
    PhantomConnection.prototype.update = function (b) {
        if (!this.p1)
            return;
        b = this.parent.toLocal(b);
        var c2;
        var c1;
        var a = new PIXI.Point(this.p1.position.x + this.p1.parent.position.x, this.p1.position.y + this.p1.parent.position.y);
        c1 = new PIXI.Point(b.x - (b.x - a.x) / 2, a.y);
        c2 = new PIXI.Point(a.x + (b.x - a.x) / 2, b.y);
        this.curve.clear();
        var vvv = Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
        var step = 1 / (vvv / 10);
        var delta = step * 0.3;
        step -= delta;
        for (var i = 0; i <= 1; i += step + delta) {
            var lp1 = PhantomConnection.bezier4(a, c1, c2, b, i);
            var lp2 = PhantomConnection.bezier4(a, c1, c2, b, i + step);
            this.curve.lineStyle(2, 0x111133);
            this.curve.moveTo(lp1.x, lp1.y);
            this.curve.lineTo(lp2.x, lp2.y);
        }
    };
    PhantomConnection.bezier4 = function (p1, p2, p3, p4, mu) {
        var mum1, mum13, mu3;
        var p = new PIXI.Point();
        mum1 = 1 - mu;
        mum13 = mum1 * mum1 * mum1;
        mu3 = mu * mu * mu;
        p.x = mum13 * p1.x + 3 * mu * mum1 * mum1 * p2.x + 3 * mu * mu * mum1 * p3.x + mu3 * p4.x;
        p.y = mum13 * p1.y + 3 * mu * mum1 * mum1 * p2.y + 3 * mu * mu * mum1 * p3.y + mu3 * p4.y;
        return p;
    };
    PhantomConnection.prototype.getLength = function (p0, p1, p2) {
        var a = new Point(p0.x - 2 * p1.x + p2.x, p0.y - 2 * p1.y + p2.y);
        var b = new Point(2 * p1.x - 2 * p0.x, 2 * p1.y - 2 * p0.y);
        var A = 4 * (a.x * a.x + a.y * a.y);
        var B = 4 * (a.x * b.x + a.y * b.y);
        var C = b.x * b.x + b.y * b.y;
        var Sabc = 2 * Math.sqrt(A + B + C);
        var A_2 = Math.sqrt(A);
        var A_32 = 2 * A * A_2;
        var C_2 = 2 * Math.sqrt(C);
        var BA = B / A_2;
        return (A_32 * Sabc + A_2 * B * (Sabc - C_2) + (4 * C * A - B * B) * Math.log((2 * A_2 + BA + Sabc) / (BA + C_2))) / (4 * A_32);
    };
    return PhantomConnection;
}(Container));

//# sourceMappingURL=phantom-connection.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor2/objects/port.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Port; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PortOrientation; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Port = (function (_super) {
    __extends(Port, _super);
    function Port(parent, orientation) {
        if (orientation === void 0) { orientation = PortOrientation.Left; }
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.isInput = false;
        _this.connections = [];
        _this._color = 0x00aa33;
        _this.orientation = orientation;
        _this.update();
        _this.interactive = true;
        _this.buttonMode = true;
        return _this;
    }
    Object.defineProperty(Port.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (c) {
            this._color = c;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Port.prototype.update = function () {
        this.beginFill(this.color);
        this.lineStyle(2);
        var angle = this.getAngle(this.orientation);
        this.arc(0, 0, 10, angle, Math.PI + angle);
        this.endFill();
    };
    Port.prototype.getAngle = function (orientation) {
        switch (orientation) {
            case PortOrientation.Left:
                return Math.PI / 2;
            case PortOrientation.Right:
                return Math.PI / 2 + Math.PI;
            default:
                return Math.PI / 2;
        }
    };
    return Port;
}(PIXI.Graphics));

var PortOrientation;
(function (PortOrientation) {
    PortOrientation[PortOrientation["Left"] = 0] = "Left";
    PortOrientation[PortOrientation["Right"] = 1] = "Right";
})(PortOrientation || (PortOrientation = {}));
//# sourceMappingURL=port.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor2/objects/requirement.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Requirement; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__port__ = __webpack_require__("../../../../../src/app/components/editor2/objects/port.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Layouts_table__ = __webpack_require__("../../../../../src/app/components/editor2/objects/Layouts/table.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Container = PIXI.Container;


var Requirement = (function (_super) {
    __extends(Requirement, _super);
    function Requirement(parent, text, isInput) {
        if (isInput === void 0) { isInput = true; }
        var _this = _super.call(this) || this;
        _this.isInput = true;
        _this.isInput = isInput;
        _this.text = new PIXI.Text(text);
        _this.title = text;
        var c = new Container();
        _this.port = isInput ? new __WEBPACK_IMPORTED_MODULE_0__port__["a" /* Port */](parent) : new __WEBPACK_IMPORTED_MODULE_0__port__["a" /* Port */](parent, __WEBPACK_IMPORTED_MODULE_0__port__["b" /* PortOrientation */].Right);
        _this.port.isInput = isInput;
        _this.port.position.set(0, 10);
        c.width = 10;
        c.height = 10;
        c.addChild(_this.port);
        var table = new __WEBPACK_IMPORTED_MODULE_1__Layouts_table__["a" /* Table */]();
        if (_this.isInput) {
            table.add(c).alignCenterLeft();
            table.add(_this.text).alignCenterLeft();
        }
        else {
            table.add(_this.text).alignCenterRight().pad(3);
            table.add(c).alignCenterRight();
        }
        table.build2();
        _this.addChild(table);
        return _this;
    }
    Object.defineProperty(Requirement.prototype, "color", {
        set: function (c) {
            this.port.color = c;
        },
        enumerable: true,
        configurable: true
    });
    return Requirement;
}(Container));

//# sourceMappingURL=requirement.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor2/objects/selection-frame.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionFrame; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SelectionFrame = (function (_super) {
    __extends(SelectionFrame, _super);
    function SelectionFrame(startPoint) {
        var _this = _super.call(this) || this;
        _this.startPoint = startPoint;
        return _this;
    }
    SelectionFrame.prototype.update = function (currentPoint) {
        this.clear();
        var width = currentPoint.x - this.startPoint.x;
        var height = currentPoint.y - this.startPoint.y;
        this.frameWidth = Math.abs(width);
        this.frameHeight = Math.abs(height);
        this.lineStyle(1, 0x002277);
        this.beginFill(0x0000ff, 0.05);
        this.drawRect(this.startPoint.x, this.startPoint.y, width, height);
        this.endFill();
        this.endPoint = currentPoint.clone();
        this.direction = { down: height > 0, right: width > 0 };
    };
    SelectionFrame.prototype.getRect = function () {
        if (!this.endPoint)
            return null;
        return new PIXI.Rectangle(Math.min(this.startPoint.x, this.endPoint.x), Math.min(this.startPoint.y, this.endPoint.y), this.frameWidth, this.frameHeight);
    };
    return SelectionFrame;
}(PIXI.Graphics));

//# sourceMappingURL=selection-frame.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor2/objects/simple-block.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleBlock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__port__ = __webpack_require__("../../../../../src/app/components/editor2/objects/port.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_object__ = __webpack_require__("../../../../../src/app/components/editor2/objects/editor-object.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Layouts_table__ = __webpack_require__("../../../../../src/app/components/editor2/objects/Layouts/table.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button__ = __webpack_require__("../../../../../src/app/components/editor2/objects/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__requirement__ = __webpack_require__("../../../../../src/app/components/editor2/objects/requirement.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var Container = PIXI.Container;
var SimpleBlock = (function (_super) {
    __extends(SimpleBlock, _super);
    function SimpleBlock() {
        var _this = _super.call(this) || this;
        _this.inputReqs = [];
        _this.outputReqs = [];
        _this.blockName = 'pupsik\r\nshmupsik\r\nepta';
        _this.blockCode = 'ПД.ОДИ.Б1.Э1';
        _this.blockRole = 'АР_ВС';
        _this.blockHours = '10000';
        _this.createView();
        _this.interactive = true;
        _this.addListener('added', function (e) {
            // this.update();
        });
        return _this;
    }
    SimpleBlock.prototype.addInputReq = function (req) {
        this.inputReqs.push(req);
        return this;
    };
    SimpleBlock.prototype.addOutputReq = function (req) {
        this.outputReqs.push(req);
        return this;
    };
    SimpleBlock.prototype.getPorts = function () {
        return [this.inPort, this.outPort];
    };
    SimpleBlock.prototype.createView = function () {
        // let co = new Container();
        // let c1 = new Condition();
        // c1.addCase('case 1');
        // c1.addCase('case 2');
        // c1.addCase('case 3');
        // c1.position.set(30, 0);
        // let c2 = new Condition();
        // c2.addCase('case 1');
        // c2.addCase('case 2');
        // c2.position.set(300, 30);
        // let cccc = new Connection(c1.outPorts[0], c2.inPort);
        // co.addChild(c1, c2, cccc);
        var table = new __WEBPACK_IMPORTED_MODULE_2__Layouts_table__["a" /* Table */]();
        table.add(new PIXI.Text(this.blockName)).alignCenter().colspan(3);
        table.row();
        // table.add(co).colspan(3).pad(20);
        // table.row();
        table.add(new PIXI.Text(this.blockCode)).alignCenter(); //.separtor();
        table.add(new PIXI.Text(this.blockRole)).alignCenter(); //.separtor();
        table.add(new PIXI.Text(this.blockHours)).alignCenter();
        table.row();
        this.loadImg(table);
        table.build2();
        table.debug(true);
        var inputReqs = new __WEBPACK_IMPORTED_MODULE_2__Layouts_table__["a" /* Table */]();
        var r = new __WEBPACK_IMPORTED_MODULE_4__requirement__["a" /* Requirement */](this, 'rere');
        r.color = 0x0000FF;
        inputReqs.add(r);
        inputReqs.row();
        inputReqs.add(new __WEBPACK_IMPORTED_MODULE_4__requirement__["a" /* Requirement */](this, 'rer1e'));
        inputReqs.row();
        inputReqs.add(new __WEBPACK_IMPORTED_MODULE_4__requirement__["a" /* Requirement */](this, 'rere2'));
        inputReqs.row();
        inputReqs.add(new __WEBPACK_IMPORTED_MODULE_4__requirement__["a" /* Requirement */](this, 'rere2'));
        inputReqs.row();
        inputReqs.add(new __WEBPACK_IMPORTED_MODULE_4__requirement__["a" /* Requirement */](this, 'rere2'));
        inputReqs.row();
        inputReqs.add(new __WEBPACK_IMPORTED_MODULE_4__requirement__["a" /* Requirement */](this, 'rere2'));
        inputReqs.row();
        inputReqs.add(new __WEBPACK_IMPORTED_MODULE_4__requirement__["a" /* Requirement */](this, 'rere2'));
        inputReqs.row();
        inputReqs.add(new __WEBPACK_IMPORTED_MODULE_4__requirement__["a" /* Requirement */](this, 'rere2'));
        inputReqs.row();
        inputReqs.add(new __WEBPACK_IMPORTED_MODULE_4__requirement__["a" /* Requirement */](this, 'rere2'));
        inputReqs.build2();
        inputReqs.position.set(0, 0);
        var outputReqs = new __WEBPACK_IMPORTED_MODULE_2__Layouts_table__["a" /* Table */]();
        var r1 = new __WEBPACK_IMPORTED_MODULE_4__requirement__["a" /* Requirement */](this, 'rere', false);
        r1.color = 0xff0000;
        outputReqs.add(r1).alignCenterRight();
        outputReqs.row();
        var r2 = new __WEBPACK_IMPORTED_MODULE_4__requirement__["a" /* Requirement */](this, 'rer1e', false);
        r2.color = 0xffff00;
        outputReqs.add(r2).alignCenterRight();
        outputReqs.row();
        outputReqs.add(new __WEBPACK_IMPORTED_MODULE_4__requirement__["a" /* Requirement */](this, 'rere2', false)).alignCenterRight();
        outputReqs.build2();
        outputReqs.position.set(table.width - outputReqs.width + 17, 0);
        table.position.set(0, Math.max(inputReqs.height, outputReqs.height));
        var box = this._box = new PIXI.Graphics();
        var h = table.height + Math.max(inputReqs.height, outputReqs.height);
        var w = table.width;
        box.beginFill(0xCBC6BE);
        box.lineStyle(2);
        box.drawRoundedRect(0, 0, w, h, 10);
        box.endFill();
        var inPort = this.inPort = new __WEBPACK_IMPORTED_MODULE_0__port__["a" /* Port */](this, __WEBPACK_IMPORTED_MODULE_0__port__["b" /* PortOrientation */].Left);
        inPort.x = 0;
        inPort.y = h - table.height / 2;
        inPort.isInput = true;
        var outPort = this.outPort = new __WEBPACK_IMPORTED_MODULE_0__port__["a" /* Port */](this, __WEBPACK_IMPORTED_MODULE_0__port__["b" /* PortOrientation */].Right);
        outPort.x = w;
        outPort.y = h - table.height / 2;
        this.addChild(box, inPort, outPort, inputReqs, outputReqs, table);
    };
    SimpleBlock.prototype.update = function () {
        this.removeChildren();
        this.createEmbeddedContainer();
        var root = this.createMainContent();
        var reqs = this.createReqs(root);
        root.position.set(0, Math.max(reqs[0].height, reqs[1].height));
        var box = this.createBox(root, reqs[0], reqs[1]);
        var ports = this.createPorts(root, reqs[0], reqs[1]);
        this.addChild.apply(this, [ports[0], ports[1], box].concat(reqs, [root]));
    };
    SimpleBlock.prototype.createReqs = function (rootTable) {
        var inputReqs = new __WEBPACK_IMPORTED_MODULE_2__Layouts_table__["a" /* Table */]();
        for (var _i = 0, _a = this.inputReqs; _i < _a.length; _i++) {
            var req = _a[_i];
            inputReqs.add(req);
            inputReqs.row();
        }
        if (inputReqs.cellsCount > 0)
            inputReqs.build2();
        inputReqs.position.set(0, 0);
        var outputReqs = new __WEBPACK_IMPORTED_MODULE_2__Layouts_table__["a" /* Table */]();
        for (var _b = 0, _c = this.outputReqs; _b < _c.length; _b++) {
            var req = _c[_b];
            outputReqs.add(req);
            outputReqs.row();
        }
        if (outputReqs.cellsCount > 0)
            outputReqs.build2();
        outputReqs.position.set(rootTable.width - outputReqs.width + 17, 0);
        return [inputReqs, outputReqs];
    };
    SimpleBlock.prototype.createMainContent = function () {
        var table = new __WEBPACK_IMPORTED_MODULE_2__Layouts_table__["a" /* Table */]();
        table.addText(this.blockName).alignCenter().colspan(3);
        table.row();
        table.add(this.embeddedContainer).colspan(3).pad(20);
        table.row();
        table.addText(this.blockCode).alignCenter(); //.separtor();
        table.addText(this.blockRole).alignCenter(); //.separtor();
        table.addText(this.blockHours).alignCenter();
        table.row();
        this.loadImg(table);
        table.build2(true);
        return table;
    };
    SimpleBlock.prototype.createEmbeddedContainer = function () {
        this.embeddedContainer = new Container();
        //ToDo сделать заполнение вложенными данными
        // let co = new Container();
        // let c1 = new Condition(3, 'fgsfg');
        // c1.position.set(30, 0);
        // let c2 = new Condition(3, 'fgsfg');
        // c2.position.set(300, 30);
        // let cccc = new Connection(c1.outPorts[0], c2.inPort);
        // co.addChild(c1, c2, cccc);
    };
    SimpleBlock.prototype.createBox = function (rootTable, inputReqs, outputReqs) {
        var box = this._box = new PIXI.Graphics();
        var h = rootTable.height + Math.max(inputReqs.height, outputReqs.height);
        var w = rootTable.width;
        box.beginFill(0xCBC6BE);
        box.lineStyle(2);
        box.drawRoundedRect(0, 0, w, h, 10);
        box.endFill();
        return box;
    };
    SimpleBlock.prototype.createPorts = function (rootTable, inputReqs, outputReqs) {
        var h = rootTable.height + Math.max(inputReqs.height, outputReqs.height);
        var w = rootTable.width;
        var inPort = this.inPort = new __WEBPACK_IMPORTED_MODULE_0__port__["a" /* Port */](this, __WEBPACK_IMPORTED_MODULE_0__port__["b" /* PortOrientation */].Left);
        inPort.x = 0;
        inPort.y = h - rootTable.height / 2;
        inPort.isInput = true;
        var outPort = this.outPort = new __WEBPACK_IMPORTED_MODULE_0__port__["a" /* Port */](this, __WEBPACK_IMPORTED_MODULE_0__port__["b" /* PortOrientation */].Right);
        outPort.x = w;
        outPort.y = h - rootTable.height / 2;
        return [inPort, outPort];
    };
    SimpleBlock.prototype.loadImg = function (rootTable) {
        var table = new __WEBPACK_IMPORTED_MODULE_2__Layouts_table__["a" /* Table */]();
        table.add(this.loadSprite('word')).alignCenter();
        table.add(this.loadSprite('pdf')).alignCenter();
        table.add(this.loadSprite('revit')).alignCenter();
        table.add(this.loadSprite('navisworks')).alignCenter();
        table.add(this.loadSprite('excel')).alignCenter();
        table.build2();
        var table1 = new __WEBPACK_IMPORTED_MODULE_2__Layouts_table__["a" /* Table */]();
        table1.add(new __WEBPACK_IMPORTED_MODULE_3__button__["a" /* Button */]('picture', function () {
            alert('sdgasfgsfag');
        }));
        table1.add(new __WEBPACK_IMPORTED_MODULE_3__button__["a" /* Button */]('youtube', function () {
            window.open('https://youtu.be/nKFDp9Y52-o');
        })).alignCenter();
        table1.add(new __WEBPACK_IMPORTED_MODULE_3__button__["a" /* Button */]('table', function () {
        })).alignCenter();
        table1.add(new __WEBPACK_IMPORTED_MODULE_3__button__["a" /* Button */]('edu', function () {
        })).alignCenter();
        table1.add(new __WEBPACK_IMPORTED_MODULE_3__button__["a" /* Button */]('book', function () {
        })).alignCenter();
        table1.build2();
        rootTable.add(table).alignCenterLeft();
        rootTable.add(table1).alignCenterRight().colspan(2);
    };
    SimpleBlock.prototype.loadSprite = function (name) {
        var sprite = new PIXI.Sprite(PIXI.loader.resources[name].texture);
        sprite.scale = new PIXI.Point(0.5, 0.5);
        sprite.width = 32;
        sprite.height = 32;
        return sprite;
    };
    return SimpleBlock;
}(__WEBPACK_IMPORTED_MODULE_1__editor_object__["a" /* EditorObject */]));

//# sourceMappingURL=simple-block.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor2/selector-fn.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectorFn; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_editor_object__ = __webpack_require__("../../../../../src/app/components/editor2/objects/editor-object.ts");

var SelectorFn = (function () {
    function SelectorFn() {
    }
    SelectorFn.containsSelectorFn = function (bump, rect) {
        return function (object) {
            if (!(object instanceof __WEBPACK_IMPORTED_MODULE_0__objects_editor_object__["a" /* EditorObject */]))
                return false;
            var bounds = object.getBounds();
            return rect.x < bounds.x && rect.y < bounds.y && (rect.x + rect.width > bounds.x + bounds.width) &&
                (rect.y + rect.height > bounds.y + bounds.height);
        };
    };
    ;
    SelectorFn.intersectSelectorFn = function (bump, rect) {
        return function (object) {
            if (!(object instanceof __WEBPACK_IMPORTED_MODULE_0__objects_editor_object__["a" /* EditorObject */]))
                return false;
            return bump.hitTestRectangle(rect, object.getBounds());
        };
    };
    ;
    return SelectorFn;
}());

//# sourceMappingURL=selector-fn.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor2/zoom.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Zoom; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi_js__ = __webpack_require__("../../../../pixi.js/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pixi_js__);

var Zoom = (function () {
    function Zoom() {
        this._zoomDirty = true;
        this._positionX = 0;
        this._positionY = 0;
        this._scaleX = 1;
        this._scaleY = 1;
        this._scaleCenterX = 0;
        this._scaleCenterY = 0;
        this._atSCTransform = new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Matrix"]();
        this._zoomCenter = new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Matrix"]();
        this._scaleTransform = new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Matrix"]();
        this._negScaleCenter = new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Matrix"]();
        this._transform = new __WEBPACK_IMPORTED_MODULE_0_pixi_js__["Matrix"]();
    }
    Zoom.prototype._updateMatrix = function () {
        this._zoomCenter.set(1, 0, 0, 1, this._scaleCenterX, this._scaleCenterY); // Sets to translate
        this._scaleTransform.set(this._scaleX, 0, 0, this._scaleY, 0, 0); // Sets to scale
        this._negScaleCenter.set(1, 0, 0, 1, -this._scaleCenterX, -this._scaleCenterY); // Sets to translate
        // Accumulate zoom transformations.
        // atSCTransform is an intermediate accumulative matrix used for tracking the current zoom target.
        this._atSCTransform.append(this._zoomCenter);
        this._atSCTransform.append(this._scaleTransform);
        this._atSCTransform.append(this._negScaleCenter);
        // We reset Scale because atSCTransform is accumulative and has "captured" the information.
        this._scaleX = 1;
        this._scaleY = 1;
        // Tack on translation. Note: we don't append it, but concat it into a separate matrix.
        // We want to leave atSCTransform solely responsible for zooming.
        // "transform" is the final matrix.
        this._transform.set(this._atSCTransform.a, this._atSCTransform.b, this._atSCTransform.c, this._atSCTransform.d, this._atSCTransform.tx, this._atSCTransform.ty);
        // this._transform.prepend(this._atTransform);
        this._transform.translate(this._positionX, this._positionY);
    };
    Object.defineProperty(Zoom.prototype, "Transform", {
        get: function () {
            if (this._zoomDirty) {
                this._updateMatrix();
                // Now that we have rebuilt the transform matrix is it no longer dirty.
                this._zoomDirty = false;
            }
            return this._transform;
        },
        set: function (t) {
            this._transform = t;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Use this if you want to manually set the positional value.
     * You would typically use translateBy() instead.
     */
    Zoom.prototype.setPosition = function (posX, posY) {
        this._positionX = posX;
        this._positionY = posY;
        this._zoomDirty = true;
    };
    Object.defineProperty(Zoom.prototype, "positionX", {
        get: function () {
            return this._positionX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Zoom.prototype, "positionY", {
        get: function () {
            return this._positionY;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * A relative zoom.
     * [delta] is a delta relative to the current scale/zoom.
     */
    Zoom.prototype.zoomBy = function (deltaX, deltaY) {
        this._scaleX += deltaX;
        this._scaleY += deltaY;
        this._zoomDirty = true;
    };
    Zoom.prototype.translateBy = function (deltaX, deltaY) {
        this._positionX += deltaX;
        this._positionY += deltaY;
        this._zoomDirty = true;
    };
    Object.defineProperty(Zoom.prototype, "currentScale", {
        get: function () {
            return this._atSCTransform.a;
        },
        /**
         * Set the zoom value absolutely. If you want to zoom relative use
         * [zoomBy]
         */
        set: function (newScale) {
            if (this._zoomDirty) {
                this._updateMatrix();
            }
            // We use dimensional analysis to set the scale. Remember we can't
            // just set the scale absolutely because atSCTransform is an accumulating matrix.
            // We have to take its current value and compute a new value based
            // on the passed in value.
            // Also, I can use atSCTransform.a because I don't allow rotations within in the game,
            // so the diagonal components correctly represent the matrix's current scale.
            // And because I only perform uniform scaling I can safely use just the "a" element.
            var scaleFactor = newScale / this._atSCTransform.a;
            this._scaleX = scaleFactor;
            this._scaleY = scaleFactor;
            this._zoomDirty = true;
        },
        enumerable: true,
        configurable: true
    });
    Zoom.prototype.setScaleCenter = function (posX, posY) {
        this._scaleCenterX = posX;
        this._scaleCenterY = posY;
        this._zoomDirty = true;
    };
    return Zoom;
}());

//# sourceMappingURL=zoom.js.map

/***/ }),

/***/ "../../../../../src/app/components/level-editor/level-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Редактор уровней</h1>\r\n<md-card style=\"width: 980px; margin-left: 36px;\">\r\n  <md-card-title>Уровни</md-card-title>\r\n  <md-card-content>\r\n    <form novalidate [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form)\" style=\"font-size: medium;\">\r\n      <div formArrayName=\"levels\">\r\n        <div *ngFor=\"let level of form.controls.levels.controls; let i=index\">\r\n          <div [formGroupName]=\"i\">\r\n            <span><b>#{{i + 1}}</b></span>\r\n            <md-form-field [floatPlaceholder]=\"true\">\r\n              <input mdInput placeholder=\"Шифр\" formControlName=\"code\" required>\r\n            </md-form-field>\r\n            <md-form-field [floatPlaceholder]=\"true\">\r\n              <input mdInput placeholder=\"Название\" formControlName=\"name\" required>\r\n            </md-form-field>\r\n            <md-checkbox formControlName=\"autoNumbering\">Автонумерация</md-checkbox>\r\n            <color-picker formControlName=\"color\"\r\n                          style=\"z-index: 1000; width: 100px; display: inline-block;    margin-left: 36px;\"></color-picker>\r\n            <button md-button type=\"button\" (click)=\"removeLevel(level, i)\" title=\"Удалить уровень\">х</button>\r\n          </div>\r\n        </div>\r\n        <button md-button type=\"button\" (click)=\"addLevel()\">Добавить уровень</button>\r\n      </div>\r\n    </form>\r\n  </md-card-content>\r\n</md-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/level-editor/level-editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/level-editor/level-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LevelEditorComponent = (function () {
    function LevelEditorComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.form = _formBuilder.group({
            levels: _formBuilder.array([
                _formBuilder.group(this.makeLevel())
            ])
        });
    }
    LevelEditorComponent.prototype.ngOnInit = function () {
    };
    LevelEditorComponent.prototype.onSubmit = function (o) {
        console.log(o);
    };
    LevelEditorComponent.prototype.makeLevel = function () {
        return {
            name: '',
            code: '',
            autoNumbering: true,
            color: 'ff0000'
        };
    };
    LevelEditorComponent.prototype.addLevel = function () {
        var control = this.form.controls.levels;
        var level = this._formBuilder.group(this.makeLevel());
        control.push(level);
    };
    LevelEditorComponent.prototype.removeLevel = function (level, i) {
        var control = this.form.controls.levels;
        control.removeAt(i);
    };
    return LevelEditorComponent;
}());
LevelEditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-level-editor',
        template: __webpack_require__("../../../../../src/app/components/level-editor/level-editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/level-editor/level-editor.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object])
], LevelEditorComponent);

var _a;
//# sourceMappingURL=level-editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navigation/collapsible-tree.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapsibleTree; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3__ = __webpack_require__("../../../../d3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);


var CollapsibleTree = (function () {
    function CollapsibleTree() {
        this.duration = 300;
        this.margin = { top: 20, right: 120, bottom: 20, left: 120 };
        this.xOffset = 100;
        this.i = 1;
        this._navigate = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.onNavigate = this._navigate.asObservable();
    }
    CollapsibleTree.prototype.init = function (svgElement, treeData) {
        var _this = this;
        var margin = this.margin;
        var width = svgElement.clientWidth - margin.right - margin.left;
        var height = svgElement.clientHeight - margin.top - margin.bottom;
        this.svg = __WEBPACK_IMPORTED_MODULE_0_d3__["c" /* select */](svgElement)
            .attr("width", width + margin.right + margin.left)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        this.treemap = __WEBPACK_IMPORTED_MODULE_0_d3__["d" /* tree */]().size([height, width]);
        var root = __WEBPACK_IMPORTED_MODULE_0_d3__["b" /* hierarchy */](treeData, function (d) { return d.children; });
        root.x0 = height / 2;
        root.y0 = 0;
        root.children.forEach(function (x) { return _this.collapse(x); });
        this.root = root;
        this.update(root);
    };
    CollapsibleTree.prototype.collapse = function (d) {
        var _this = this;
        if (d.children) {
            d._children = d.children;
            d._children.forEach(function (x) { return _this.collapse(x); });
            d.children = null;
        }
    };
    CollapsibleTree.prototype.click = function (d) {
        if (d.children) {
            d._children = d.children;
            d.children = null;
        }
        else {
            d.children = d._children;
            d._children = null;
        }
        this.update(d);
    };
    CollapsibleTree.diagonal = function (s, d) {
        return "M " + s.y + " " + s.x + " C " + (s.y + d.y) / 2 + " " + s.x + "," + (s.y + d.y) / 2 + " " + d.x + "," + d.y + " " + d.x;
    };
    CollapsibleTree.prototype.update = function (source) {
        var _this = this;
        var treeData = this.treemap(this.root);
        var nodes = treeData.descendants(), links = treeData.descendants().slice(1);
        nodes.forEach(function (d) {
            d.y = d.depth * _this.xOffset;
        });
        var node = this.svg.selectAll('g.node').data(nodes, function (d) { return d.id || (d.id = _this.getId()); });
        var nodeEnter = node.enter().append('g')
            .attr('class', 'node')
            .attr("transform", function (d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
            .on('contextmenu', function (d) {
            __WEBPACK_IMPORTED_MODULE_0_d3__["a" /* event */].preventDefault();
            _this._navigate.next(d.data);
        })
            .on('click', function (d) { return _this.click(d); });
        nodeEnter.append('circle')
            .attr('class', 'node')
            .attr('r', 1e-6)
            .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });
        nodeEnter.append('text')
            .attr("dy", ".35em")
            .attr("x", function (d) { return d.children || d._children ? -13 : 13; })
            .attr("text-anchor", function (d) { return d.children || d._children ? "end" : "start"; })
            .text(function (d) { return d.data.name; });
        var nodeUpdate = nodeEnter.merge(node);
        nodeUpdate.transition()
            .duration(this.duration)
            .attr("transform", function (d) {
            return "translate(" + d.y + "," + d.x + ")";
        });
        nodeUpdate.select('circle.node')
            .attr('r', 10)
            .style("fill", function (d) {
            return d._children ? "lightsteelblue" : "#fff";
        })
            .attr('cursor', 'pointer');
        var nodeExit = node.exit().transition()
            .duration(this.duration)
            .attr("transform", function (d) {
            return "translate(" + source.y + "," + source.x + ")";
        })
            .remove();
        nodeExit.select('circle')
            .attr('r', 1e-6);
        nodeExit.select('text')
            .style('fill-opacity', 1e-6);
        var link = this.svg.selectAll('path.link')
            .data(links, function (d) { return d.id; });
        var linkEnter = link.enter().insert('path', "g")
            .attr("class", "link")
            .attr('d', function (d) {
            var o = { x: source.x0, y: source.y0 };
            return CollapsibleTree.diagonal(o, o);
        });
        var linkUpdate = linkEnter.merge(link);
        linkUpdate.transition()
            .duration(this.duration)
            .attr('d', function (d) {
            return CollapsibleTree.diagonal(d, d.parent);
        });
        var linkExit = link.exit().transition()
            .duration(this.duration)
            .attr('d', function (d) {
            var o = { x: source.x, y: source.y };
            return CollapsibleTree.diagonal(o, o);
        })
            .remove();
        nodes.forEach(function (d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });
    };
    CollapsibleTree.prototype.getId = function () {
        this.i += 1;
        return this.i;
    };
    return CollapsibleTree;
}());

//# sourceMappingURL=collapsible-tree.js.map

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<md-expansion-panel>\n  <md-expansion-panel-header>\n    <md-panel-title>\n      Навигация\n    </md-panel-title>\n    <md-panel-description>\n      .\n    </md-panel-description>\n  </md-expansion-panel-header>\n  <svg #svg width=\"960\" height=\"500\" class=\"no-select\"></svg>\n</md-expansion-panel>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-expansion-panel-header {\n  box-shadow: 1px -3px 7px 3px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collapsible_tree__ = __webpack_require__("../../../../../src/app/components/navigation/collapsible-tree.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationComponent = (function () {
    function NavigationComponent(_dataService) {
        this._dataService = _dataService;
        this.navigate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        var collapsibleTree = new __WEBPACK_IMPORTED_MODULE_1__collapsible_tree__["a" /* CollapsibleTree */]();
        collapsibleTree.onNavigate.subscribe(function (r) {
            if (r.navigatable) {
                _this.accordion.close();
                _this.navigate.emit(r);
            }
        });
        this._dataService.getNavigation().subscribe(function (treeData) {
            collapsibleTree.init(_this.svg.nativeElement, treeData);
        });
        this._dataService.navigationStructureChanges.subscribe(function (treeData) {
            collapsibleTree.init(_this.svg.nativeElement, treeData);
        });
    };
    return NavigationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('svg'),
    __metadata("design:type", Object)
], NavigationComponent.prototype, "svg", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* AccordionItem */]),
    __metadata("design:type", Object)
], NavigationComponent.prototype, "accordion", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], NavigationComponent.prototype, "navigate", void 0);
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../src/app/components/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navigation/navigation.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]) === "function" && _b || Object])
], NavigationComponent);

var _a, _b;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 250px;\">\n  <p>\n    Свойства\n  </p>\n  <div *ngIf=\"items.length\">\n    Выбрано объектов: {{items.length}}\n    <ul>\n      <li *ngFor=\"let item of items\">{{item}}</li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = (function () {
    function SidebarComponent() {
        this.items = [];
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectionSource.subscribe(function (items) { return _this.items = items; });
    };
    return SidebarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], SidebarComponent.prototype, "selectionSource", void 0);
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

var _a;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/ext/bump.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bump; });
var Bump = (function () {
    function Bump(renderingEngine) {
        if (renderingEngine === void 0) { renderingEngine = PIXI; }
        if (renderingEngine === undefined)
            throw new Error("Please assign a rendering engine in the constructor before using bump.js");
        this.renderer = "pixi";
    }
    //`addCollisionProperties` adds extra properties to sprites to help
    //simplify the collision code. It won't add these properties if they
    //already exist on the sprite. After these properties have been
    //added, this methods adds a Boolean property to the sprite called `_bumpPropertiesAdded`
    //and sets it to `true` to flag that the sprite has these
    //new properties
    Bump.prototype.addCollisionProperties = function (sprite) {
        //Add properties to Pixi sprites
        if (this.renderer === "pixi") {
            //gx
            if (sprite.gx === undefined) {
                Object.defineProperty(sprite, "gx", {
                    get: function () {
                        return sprite.getGlobalPosition().x;
                    },
                    enumerable: true, configurable: true
                });
            }
            //gy
            if (sprite.gy === undefined) {
                Object.defineProperty(sprite, "gy", {
                    get: function () {
                        return sprite.getGlobalPosition().y;
                    },
                    enumerable: true, configurable: true
                });
            }
            //centerX
            if (sprite.centerX === undefined) {
                Object.defineProperty(sprite, "centerX", {
                    get: function () {
                        return sprite.x + sprite.width / 2;
                    },
                    enumerable: true, configurable: true
                });
            }
            //centerY
            if (sprite.centerY === undefined) {
                Object.defineProperty(sprite, "centerY", {
                    get: function () {
                        return sprite.y + sprite.height / 2;
                    },
                    enumerable: true, configurable: true
                });
            }
            //halfWidth
            if (sprite.halfWidth === undefined) {
                Object.defineProperty(sprite, "halfWidth", {
                    get: function () {
                        return sprite.width / 2;
                    },
                    enumerable: true, configurable: true
                });
            }
            //halfHeight
            if (sprite.halfHeight === undefined) {
                Object.defineProperty(sprite, "halfHeight", {
                    get: function () {
                        return sprite.height / 2;
                    },
                    enumerable: true, configurable: true
                });
            }
            //xAnchorOffset
            if (sprite.xAnchorOffset === undefined) {
                Object.defineProperty(sprite, "xAnchorOffset", {
                    get: function () {
                        if (sprite.anchor !== undefined) {
                            return sprite.width * sprite.anchor.x;
                        }
                        else {
                            return 0;
                        }
                    },
                    enumerable: true, configurable: true
                });
            }
            //yAnchorOffset
            if (sprite.yAnchorOffset === undefined) {
                Object.defineProperty(sprite, "yAnchorOffset", {
                    get: function () {
                        if (sprite.anchor !== undefined) {
                            return sprite.height * sprite.anchor.y;
                        }
                        else {
                            return 0;
                        }
                    },
                    enumerable: true, configurable: true
                });
            }
            if (sprite.circular && sprite.radius === undefined) {
                Object.defineProperty(sprite, "radius", {
                    get: function () {
                        return sprite.width / 2;
                    },
                    enumerable: true, configurable: true
                });
            }
            //Earlier code - not needed now.
            /*
            Object.defineProperties(sprite, {
              "gx": {
                get(){return sprite.getGlobalPosition().x},
                enumerable: true, configurable: true
              },
              "gy": {
                get(){return sprite.getGlobalPosition().y},
                enumerable: true, configurable: true
              },
              "centerX": {
                get(){return sprite.x + sprite.width / 2},
                enumerable: true, configurable: true
              },
              "centerY": {
                get(){return sprite.y + sprite.height / 2},
                enumerable: true, configurable: true
              },
              "halfWidth": {
                get(){return sprite.width / 2},
                enumerable: true, configurable: true
              },
              "halfHeight": {
                get(){return sprite.height / 2},
                enumerable: true, configurable: true
              },
              "xAnchorOffset": {
                get(){
                  if (sprite.anchor !== undefined) {
                    return sprite.height * sprite.anchor.x;
                  } else {
                    return 0;
                  }
                },
                enumerable: true, configurable: true
              },
              "yAnchorOffset": {
                get(){
                  if (sprite.anchor !== undefined) {
                    return sprite.width * sprite.anchor.y;
                  } else {
                    return 0;
                  }
                },
                enumerable: true, configurable: true
              }
            });
            */
        }
        //Add a Boolean `_bumpPropertiesAdded` property to the sprite to flag it
        //as having these new properties
        sprite._bumpPropertiesAdded = true;
    };
    /*
    hitTestPoint
    ------------
  
    Use it to find out if a point is touching a circlular or rectangular sprite.
    Parameters:
    a. An object with `x` and `y` properties.
    b. A sprite object with `x`, `y`, `centerX` and `centerY` properties.
    If the sprite has a `radius` property, the function will interpret
    the shape as a circle.
    */
    Bump.prototype.hitTestPoint = function (point, sprite) {
        //Add collision properties
        if (!sprite._bumpPropertiesAdded)
            this.addCollisionProperties(sprite);
        var shape, left, right, top, bottom, vx, vy, magnitude, hit;
        //Find out if the sprite is rectangular or circular depending
        //on whether it has a `radius` property
        if (sprite.radius) {
            shape = "circle";
        }
        else {
            shape = "rectangle";
        }
        //Rectangle
        if (shape === "rectangle") {
            //Get the position of the sprite's edges
            left = sprite.x - sprite.xAnchorOffset;
            right = sprite.x + sprite.width - sprite.xAnchorOffset;
            top = sprite.y - sprite.yAnchorOffset;
            bottom = sprite.y + sprite.height - sprite.yAnchorOffset;
            //Find out if the point is intersecting the rectangle
            hit = point.x > left && point.x < right && point.y > top && point.y < bottom;
        }
        //Circle
        if (shape === "circle") {
            //Find the distance between the point and the
            //center of the circle
            var vx_1 = point.x - sprite.x - (sprite.width / 2) + sprite.xAnchorOffset, vy_1 = point.y - sprite.y - (sprite.height / 2) + sprite.yAnchorOffset, magnitude_1 = Math.sqrt(vx_1 * vx_1 + vy_1 * vy_1);
            //The point is intersecting the circle if the magnitude
            //(distance) is less than the circle's radius
            hit = magnitude_1 < sprite.radius;
        }
        //`hit` will be either `true` or `false`
        return hit;
    };
    /*
    hitTestCircle
    -------------
  
    Use it to find out if two circular sprites are touching.
    Parameters:
    a. A sprite object with `centerX`, `centerY` and `radius` properties.
    b. A sprite object with `centerX`, `centerY` and `radius`.
    */
    Bump.prototype.hitTestCircle = function (c1, c2, global) {
        if (global === void 0) { global = false; }
        //Add collision properties
        if (!c1._bumpPropertiesAdded)
            this.addCollisionProperties(c1);
        if (!c2._bumpPropertiesAdded)
            this.addCollisionProperties(c2);
        var vx, vy, magnitude, combinedRadii, hit;
        //Calculate the vector between the circles’ center points
        if (global) {
            //Use global coordinates
            vx = (c2.gx + (c2.width / 2) - c2.xAnchorOffset) - (c1.gx + (c1.width / 2) - c1.xAnchorOffset);
            vy = (c2.gy + (c2.width / 2) - c2.yAnchorOffset) - (c1.gy + (c1.width / 2) - c1.yAnchorOffset);
        }
        else {
            //Use local coordinates
            vx = (c2.x + (c2.width / 2) - c2.xAnchorOffset) - (c1.x + (c1.width / 2) - c1.xAnchorOffset);
            vy = (c2.y + (c2.width / 2) - c2.yAnchorOffset) - (c1.y + (c1.width / 2) - c1.yAnchorOffset);
        }
        //Find the distance between the circles by calculating
        //the vector's magnitude (how long the vector is)
        magnitude = Math.sqrt(vx * vx + vy * vy);
        //Add together the circles' total radii
        combinedRadii = c1.radius + c2.radius;
        //Set `hit` to `true` if the distance between the circles is
        //less than their `combinedRadii`
        hit = magnitude < combinedRadii;
        //`hit` will be either `true` or `false`
        return hit;
    };
    /*
    circleCollision
    ---------------
  
    Use it to prevent a moving circular sprite from overlapping and optionally
    bouncing off a non-moving circular sprite.
    Parameters:
    a. A sprite object with `x`, `y` `centerX`, `centerY` and `radius` properties.
    b. A sprite object with `x`, `y` `centerX`, `centerY` and `radius` properties.
    c. Optional: true or false to indicate whether or not the first sprite
    should bounce off the second sprite.
    The sprites can contain an optional mass property that should be greater than 1.
  
    */
    Bump.prototype.circleCollision = function (c1, c2, bounce, global) {
        if (bounce === void 0) { bounce = false; }
        if (global === void 0) { global = false; }
        //Add collision properties
        if (!c1._bumpPropertiesAdded)
            this.addCollisionProperties(c1);
        if (!c2._bumpPropertiesAdded)
            this.addCollisionProperties(c2);
        var magnitude, combinedRadii, overlap, vx, vy, dx, dy, s = { x: undefined, y: undefined }, hit = false;
        //Calculate the vector between the circles’ center points
        if (global) {
            //Use global coordinates
            vx = (c2.gx + (c2.width / 2) - c2.xAnchorOffset) - (c1.gx + (c1.width / 2) - c1.xAnchorOffset);
            vy = (c2.gy + (c2.width / 2) - c2.yAnchorOffset) - (c1.gy + (c1.width / 2) - c1.yAnchorOffset);
        }
        else {
            //Use local coordinates
            vx = (c2.x + (c2.width / 2) - c2.xAnchorOffset) - (c1.x + (c1.width / 2) - c1.xAnchorOffset);
            vy = (c2.y + (c2.width / 2) - c2.yAnchorOffset) - (c1.y + (c1.width / 2) - c1.yAnchorOffset);
        }
        //Find the distance between the circles by calculating
        //the vector's magnitude (how long the vector is)
        magnitude = Math.sqrt(vx * vx + vy * vy);
        //Add together the circles' combined half-widths
        combinedRadii = c1.radius + c2.radius;
        //Figure out if there's a collision
        if (magnitude < combinedRadii) {
            //Yes, a collision is happening
            hit = true;
            //Find the amount of overlap between the circles
            overlap = combinedRadii - magnitude;
            //Add some "quantum padding". This adds a tiny amount of space
            //between the circles to reduce their surface tension and make
            //them more slippery. "0.3" is a good place to start but you might
            //need to modify this slightly depending on the exact behaviour
            //you want. Too little and the balls will feel sticky, too much
            //and they could start to jitter if they're jammed together
            var quantumPadding = 0.3;
            overlap += quantumPadding;
            //Normalize the vector
            //These numbers tell us the direction of the collision
            dx = vx / magnitude;
            dy = vy / magnitude;
            //Move circle 1 out of the collision by multiplying
            //the overlap with the normalized vector and subtract it from
            //circle 1's position
            c1.x -= overlap * dx;
            c1.y -= overlap * dy;
            //Bounce
            if (bounce) {
                //Create a collision vector object, `s` to represent the bounce "surface".
                //Find the bounce surface's x and y properties
                //(This represents the normal of the distance vector between the circles)
                s.x = vy;
                s.y = -vx;
                //Bounce c1 off the surface
                this.bounceOffSurface(c1, s);
            }
        }
        return hit;
    };
    /*
    movingCircleCollision
    ---------------------
  
    Use it to make two moving circles bounce off each other.
    Parameters:
    a. A sprite object with `x`, `y` `centerX`, `centerY` and `radius` properties.
    b. A sprite object with `x`, `y` `centerX`, `centerY` and `radius` properties.
    The sprites can contain an optional mass property that should be greater than 1.
  
    */
    Bump.prototype.movingCircleCollision = function (c1, c2, global) {
        if (global === void 0) { global = false; }
        //Add collision properties
        if (!c1._bumpPropertiesAdded)
            this.addCollisionProperties(c1);
        if (!c2._bumpPropertiesAdded)
            this.addCollisionProperties(c2);
        var combinedRadii, overlap, xSide, ySide, 
        //`s` refers to the distance vector between the circles
        s = {
            vx: undefined,
            vy: undefined,
            lx: undefined,
            ly: undefined,
            magnitude: undefined,
            dx: undefined,
            dy: undefined,
            vxHalf: undefined,
            vyHalf: undefined
        }, p1A = { x: undefined, y: undefined }, p1B = { x: undefined, y: undefined }, p2A = { x: undefined, y: undefined }, p2B = { x: undefined, y: undefined }, hit = false;
        //Apply mass, if the circles have mass properties
        c1.mass = c1.mass || 1;
        c2.mass = c2.mass || 1;
        //Calculate the vector between the circles’ center points
        if (global) {
            //Use global coordinates
            s.vx = (c2.gx + c2.radius - c2.xAnchorOffset) - (c1.gx + c1.radius - c1.xAnchorOffset);
            s.vy = (c2.gy + c2.radius - c2.yAnchorOffset) - (c1.gy + c1.radius - c1.yAnchorOffset);
        }
        else {
            //Use local coordinates
            s.vx = (c2.x + c2.radius - c2.xAnchorOffset) - (c1.x + c1.radius - c1.xAnchorOffset);
            s.vy = (c2.y + c2.radius - c2.yAnchorOffset) - (c1.y + c1.radius - c1.yAnchorOffset);
        }
        //Find the distance between the circles by calculating
        //the vector's magnitude (how long the vector is)
        s.magnitude = Math.sqrt(s.vx * s.vx + s.vy * s.vy);
        //Add together the circles' combined half-widths
        combinedRadii = c1.radius + c2.radius;
        //Figure out if there's a collision
        if (s.magnitude < combinedRadii) {
            //Yes, a collision is happening
            hit = true;
            //Find the amount of overlap between the circles
            overlap = combinedRadii - s.magnitude;
            //Add some "quantum padding" to the overlap
            overlap += 0.3;
            //Normalize the vector.
            //These numbers tell us the direction of the collision
            s.dx = s.vx / s.magnitude;
            s.dy = s.vy / s.magnitude;
            //Find the collision vector.
            //Divide it in half to share between the circles, and make it absolute
            s.vxHalf = Math.abs(s.dx * overlap / 2);
            s.vyHalf = Math.abs(s.dy * overlap / 2);
            //Find the side that the collision is occurring on
            (c1.x > c2.x) ? xSide = 1 : xSide = -1;
            (c1.y > c2.y) ? ySide = 1 : ySide = -1;
            //Move c1 out of the collision by multiplying
            //the overlap with the normalized vector and adding it to
            //the circles' positions
            c1.x = c1.x + (s.vxHalf * xSide);
            c1.y = c1.y + (s.vyHalf * ySide);
            //Move c2 out of the collision
            c2.x = c2.x + (s.vxHalf * -xSide);
            c2.y = c2.y + (s.vyHalf * -ySide);
            //1. Calculate the collision surface's properties
            //Find the surface vector's left normal
            s.lx = s.vy;
            s.ly = -s.vx;
            //2. Bounce c1 off the surface (s)
            //Find the dot product between c1 and the surface
            var dp1 = c1.vx * s.dx + c1.vy * s.dy;
            //Project c1's velocity onto the collision surface
            p1A.x = dp1 * s.dx;
            p1A.y = dp1 * s.dy;
            //Find the dot product of c1 and the surface's left normal (s.lx and s.ly)
            var dp2 = c1.vx * (s.lx / s.magnitude) + c1.vy * (s.ly / s.magnitude);
            //Project the c1's velocity onto the surface's left normal
            p1B.x = dp2 * (s.lx / s.magnitude);
            p1B.y = dp2 * (s.ly / s.magnitude);
            //3. Bounce c2 off the surface (s)
            //Find the dot product between c2 and the surface
            var dp3 = c2.vx * s.dx + c2.vy * s.dy;
            //Project c2's velocity onto the collision surface
            p2A.x = dp3 * s.dx;
            p2A.y = dp3 * s.dy;
            //Find the dot product of c2 and the surface's left normal (s.lx and s.ly)
            var dp4 = c2.vx * (s.lx / s.magnitude) + c2.vy * (s.ly / s.magnitude);
            //Project c2's velocity onto the surface's left normal
            p2B.x = dp4 * (s.lx / s.magnitude);
            p2B.y = dp4 * (s.ly / s.magnitude);
            //4. Calculate the bounce vectors
            //Bounce c1
            //using p1B and p2A
            c1.bounce = {};
            c1.bounce.x = p1B.x + p2A.x;
            c1.bounce.y = p1B.y + p2A.y;
            //Bounce c2
            //using p1A and p2B
            c2.bounce = {};
            c2.bounce.x = p1A.x + p2B.x;
            c2.bounce.y = p1A.y + p2B.y;
            //Add the bounce vector to the circles' velocity
            //and add mass if the circle has a mass property
            c1.vx = c1.bounce.x / c1.mass;
            c1.vy = c1.bounce.y / c1.mass;
            c2.vx = c2.bounce.x / c2.mass;
            c2.vy = c2.bounce.y / c2.mass;
        }
        return hit;
    };
    /*
    multipleCircleCollision
    -----------------------
  
    Checks all the circles in an array for a collision against
    all the other circles in an array, using `movingCircleCollision` (above)
    */
    Bump.prototype.multipleCircleCollision = function (arrayOfCircles, global) {
        if (global === void 0) { global = false; }
        for (var i = 0; i < arrayOfCircles.length; i++) {
            //The first circle to use in the collision check
            var c1 = arrayOfCircles[i];
            for (var j = i + 1; j < arrayOfCircles.length; j++) {
                //The second circle to use in the collision check
                var c2 = arrayOfCircles[j];
                //Check for a collision and bounce the circles apart if
                //they collide. Use an optional `mass` property on the sprite
                //to affect the bounciness of each marble
                this.movingCircleCollision(c1, c2, global);
            }
        }
    };
    /*
    rectangleCollision
    ------------------
  
    Use it to prevent two rectangular sprites from overlapping.
    Optionally, make the first rectangle bounce off the second rectangle.
    Parameters:
    a. A sprite object with `x`, `y` `centerX`, `centerY`, `halfWidth` and `halfHeight` properties.
    b. A sprite object with `x`, `y` `centerX`, `centerY`, `halfWidth` and `halfHeight` properties.
    c. Optional: true or false to indicate whether or not the first sprite
    should bounce off the second sprite.
    */
    Bump.prototype.rectangleCollision = function (r1, r2, bounce, global) {
        if (bounce === void 0) { bounce = false; }
        if (global === void 0) { global = true; }
        //Add collision properties
        if (!r1._bumpPropertiesAdded)
            this.addCollisionProperties(r1);
        if (!r2._bumpPropertiesAdded)
            this.addCollisionProperties(r2);
        var collision, combinedHalfWidths, combinedHalfHeights, overlapX, overlapY, vx, vy;
        //Calculate the distance vector
        if (global) {
            vx = (r1.gx + Math.abs(r1.halfWidth) - r1.xAnchorOffset) - (r2.gx + Math.abs(r2.halfWidth) - r2.xAnchorOffset);
            vy = (r1.gy + Math.abs(r1.halfHeight) - r1.yAnchorOffset) - (r2.gy + Math.abs(r2.halfHeight) - r2.yAnchorOffset);
        }
        else {
            //vx = r1.centerX - r2.centerX;
            //vy = r1.centerY - r2.centerY;
            vx = (r1.x + Math.abs(r1.halfWidth) - r1.xAnchorOffset) - (r2.x + Math.abs(r2.halfWidth) - r2.xAnchorOffset);
            vy = (r1.y + Math.abs(r1.halfHeight) - r1.yAnchorOffset) - (r2.y + Math.abs(r2.halfHeight) - r2.yAnchorOffset);
        }
        //Figure out the combined half-widths and half-heights
        combinedHalfWidths = Math.abs(r1.halfWidth) + Math.abs(r2.halfWidth);
        combinedHalfHeights = Math.abs(r1.halfHeight) + Math.abs(r2.halfHeight);
        //Check whether vx is less than the combined half widths
        if (Math.abs(vx) < combinedHalfWidths) {
            //A collision might be occurring!
            //Check whether vy is less than the combined half heights
            if (Math.abs(vy) < combinedHalfHeights) {
                //A collision has occurred! This is good!
                //Find out the size of the overlap on both the X and Y axes
                overlapX = combinedHalfWidths - Math.abs(vx);
                overlapY = combinedHalfHeights - Math.abs(vy);
                //The collision has occurred on the axis with the
                //*smallest* amount of overlap. Let's figure out which
                //axis that is
                if (overlapX >= overlapY) {
                    //The collision is happening on the X axis
                    //But on which side? vy can tell us
                    if (vy > 0) {
                        collision = "top";
                        //Move the rectangle out of the collision
                        r1.y = r1.y + overlapY;
                    }
                    else {
                        collision = "bottom";
                        //Move the rectangle out of the collision
                        r1.y = r1.y - overlapY;
                    }
                    //Bounce
                    if (bounce) {
                        r1.vy *= -1;
                        /*Alternative
                        //Find the bounce surface's vx and vy properties
                        var s = {};
                        s.vx = r2.x - r2.x + r2.width;
                        s.vy = 0;
            
                        //Bounce r1 off the surface
                        //this.bounceOffSurface(r1, s);
                        */
                    }
                }
                else {
                    //The collision is happening on the Y axis
                    //But on which side? vx can tell us
                    if (vx > 0) {
                        collision = "left";
                        //Move the rectangle out of the collision
                        r1.x = r1.x + overlapX;
                    }
                    else {
                        collision = "right";
                        //Move the rectangle out of the collision
                        r1.x = r1.x - overlapX;
                    }
                    //Bounce
                    if (bounce) {
                        r1.vx *= -1;
                        /*Alternative
                        //Find the bounce surface's vx and vy properties
                        var s = {};
                        s.vx = 0;
                        s.vy = r2.y - r2.y + r2.height;
            
                        //Bounce r1 off the surface
                        this.bounceOffSurface(r1, s);
                        */
                    }
                }
            }
            else {
                //No collision
            }
        }
        else {
            //No collision
        }
        //Return the collision string. it will be either "top", "right",
        //"bottom", or "left" depending on which side of r1 is touching r2.
        return collision;
    };
    /*
    hitTestRectangle
    ----------------
  
    Use it to find out if two rectangular sprites are touching.
    Parameters:
    a. A sprite object with `centerX`, `centerY`, `halfWidth` and `halfHeight` properties.
    b. A sprite object with `centerX`, `centerY`, `halfWidth` and `halfHeight` properties.
  
    */
    Bump.prototype.hitTestRectangle = function (r1, r2, global) {
        if (global === void 0) { global = false; }
        //Add collision properties
        if (!r1._bumpPropertiesAdded)
            this.addCollisionProperties(r1);
        if (!r2._bumpPropertiesAdded)
            this.addCollisionProperties(r2);
        var hit, combinedHalfWidths, combinedHalfHeights, vx, vy;
        //A variable to determine whether there's a collision
        hit = false;
        //Calculate the distance vector
        if (global) {
            vx = (r1.gx + Math.abs(r1.halfWidth) - r1.xAnchorOffset) - (r2.gx + Math.abs(r2.halfWidth) - r2.xAnchorOffset);
            vy = (r1.gy + Math.abs(r1.halfHeight) - r1.yAnchorOffset) - (r2.gy + Math.abs(r2.halfHeight) - r2.yAnchorOffset);
        }
        else {
            vx = (r1.x + Math.abs(r1.halfWidth) - r1.xAnchorOffset) - (r2.x + Math.abs(r2.halfWidth) - r2.xAnchorOffset);
            vy = (r1.y + Math.abs(r1.halfHeight) - r1.yAnchorOffset) - (r2.y + Math.abs(r2.halfHeight) - r2.yAnchorOffset);
        }
        //Figure out the combined half-widths and half-heights
        combinedHalfWidths = Math.abs(r1.halfWidth) + Math.abs(r2.halfWidth);
        combinedHalfHeights = Math.abs(r1.halfHeight) + Math.abs(r2.halfHeight);
        //Check for a collision on the x axis
        if (Math.abs(vx) < combinedHalfWidths) {
            //A collision might be occuring. Check for a collision on the y axis
            if (Math.abs(vy) < combinedHalfHeights) {
                //There's definitely a collision happening
                hit = true;
            }
            else {
                //There's no collision on the y axis
                hit = false;
            }
        }
        else {
            //There's no collision on the x axis
            hit = false;
        }
        //`hit` will be either `true` or `false`
        return hit;
    };
    /*
    hitTestCircleRectangle
    ----------------
  
    Use it to find out if a circular shape is touching a rectangular shape
    Parameters:
    a. A sprite object with `centerX`, `centerY`, `halfWidth` and `halfHeight` properties.
    b. A sprite object with `centerX`, `centerY`, `halfWidth` and `halfHeight` properties.
  
    */
    Bump.prototype.hitTestCircleRectangle = function (c1, r1, global) {
        if (global === void 0) { global = false; }
        //Add collision properties
        if (!r1._bumpPropertiesAdded)
            this.addCollisionProperties(r1);
        if (!c1._bumpPropertiesAdded)
            this.addCollisionProperties(c1);
        var region, collision, c1x, c1y, r1x, r1y;
        //Use either global or local coordinates
        if (global) {
            c1x = c1.gx;
            c1y = c1.gy;
            r1x = r1.gx;
            r1y = r1.gy;
        }
        else {
            c1x = c1.x;
            c1y = c1.y;
            r1x = r1.x;
            r1y = r1.y;
        }
        //Is the circle above the rectangle's top edge?
        if (c1y - c1.yAnchorOffset < r1y - Math.abs(r1.halfHeight) - r1.yAnchorOffset) {
            //If it is, we need to check whether it's in the
            //top left, top center or top right
            if (c1x - c1.xAnchorOffset < r1x - 1 - Math.abs(r1.halfWidth) - r1.xAnchorOffset) {
                region = "topLeft";
            }
            else if (c1x - c1.xAnchorOffset > r1x + 1 + Math.abs(r1.halfWidth) - r1.xAnchorOffset) {
                region = "topRight";
            }
            else {
                region = "topMiddle";
            }
        }
        else if (c1y - c1.yAnchorOffset > r1y + Math.abs(r1.halfHeight) - r1.yAnchorOffset) {
            //If it is, we need to check whether it's in the bottom left,
            //bottom center, or bottom right
            if (c1x - c1.xAnchorOffset < r1x - 1 - Math.abs(r1.halfWidth) - r1.xAnchorOffset) {
                region = "bottomLeft";
            }
            else if (c1x - c1.xAnchorOffset > r1x + 1 + Math.abs(r1.halfWidth) - r1.xAnchorOffset) {
                region = "bottomRight";
            }
            else {
                region = "bottomMiddle";
            }
        }
        else {
            if (c1x - c1.xAnchorOffset < r1x - Math.abs(r1.halfWidth) - r1.xAnchorOffset) {
                region = "leftMiddle";
            }
            else {
                region = "rightMiddle";
            }
        }
        //Is this the circle touching the flat sides
        //of the rectangle?
        if (region === "topMiddle" || region === "bottomMiddle" || region === "leftMiddle" || region === "rightMiddle") {
            //Yes, it is, so do a standard rectangle vs. rectangle collision test
            collision = this.hitTestRectangle(c1, r1, global);
        }
        else {
            var point = { x: undefined, y: undefined };
            switch (region) {
                case "topLeft":
                    point.x = r1x - r1.xAnchorOffset;
                    point.y = r1y - r1.yAnchorOffset;
                    break;
                case "topRight":
                    point.x = r1x + r1.width - r1.xAnchorOffset;
                    point.y = r1y - r1.yAnchorOffset;
                    break;
                case "bottomLeft":
                    point.x = r1x - r1.xAnchorOffset;
                    point.y = r1y + r1.height - r1.yAnchorOffset;
                    break;
                case "bottomRight":
                    point.x = r1x + r1.width - r1.xAnchorOffset;
                    point.y = r1y + r1.height - r1.yAnchorOffset;
            }
            //Check for a collision between the circle and the point
            collision = this.hitTestCirclePoint(c1, point, global);
        }
        //Return the result of the collision.
        //The return value will be `undefined` if there's no collision
        if (collision) {
            return region;
        }
        else {
            return collision;
        }
    };
    /*
    hitTestCirclePoint
    ------------------
  
    Use it to find out if a circular shape is touching a point
    Parameters:
    a. A sprite object with `centerX`, `centerY`, and `radius` properties.
    b. A point object with `x` and `y` properties.
  
    */
    Bump.prototype.hitTestCirclePoint = function (c1, point, global) {
        if (global === void 0) { global = false; }
        //Add collision properties
        if (!c1._bumpPropertiesAdded)
            this.addCollisionProperties(c1);
        //A point is just a circle with a diameter of
        //1 pixel, so we can cheat. All we need to do is an ordinary circle vs. circle
        //Collision test. Just supply the point with the properties
        //it needs
        point.diameter = 1;
        point.width = point.diameter;
        point.radius = 0.5;
        point.centerX = point.x;
        point.centerY = point.y;
        point.gx = point.x;
        point.gy = point.y;
        point.xAnchorOffset = 0;
        point.yAnchorOffset = 0;
        point._bumpPropertiesAdded = true;
        return this.hitTestCircle(c1, point, global);
    };
    /*
    circleRectangleCollision
    ------------------------
  
    Use it to bounce a circular shape off a rectangular shape
    Parameters:
    a. A sprite object with `centerX`, `centerY`, `halfWidth` and `halfHeight` properties.
    b. A sprite object with `centerX`, `centerY`, `halfWidth` and `halfHeight` properties.
  
    */
    Bump.prototype.circleRectangleCollision = function (c1, r1, bounce, global) {
        if (bounce === void 0) { bounce = false; }
        if (global === void 0) { global = false; }
        //Add collision properties
        if (!r1._bumpPropertiesAdded)
            this.addCollisionProperties(r1);
        if (!c1._bumpPropertiesAdded)
            this.addCollisionProperties(c1);
        var region, collision, c1x, c1y, r1x, r1y;
        //Use either the global or local coordinates
        if (global) {
            c1x = c1.gx;
            c1y = c1.gy;
            r1x = r1.gx;
            r1y = r1.gy;
        }
        else {
            c1x = c1.x;
            c1y = c1.y;
            r1x = r1.x;
            r1y = r1.y;
        }
        //Is the circle above the rectangle's top edge?
        if (c1y - c1.yAnchorOffset < r1y - Math.abs(r1.halfHeight) - r1.yAnchorOffset) {
            //If it is, we need to check whether it's in the
            //top left, top center or top right
            if (c1x - c1.xAnchorOffset < r1x - 1 - Math.abs(r1.halfWidth) - r1.xAnchorOffset) {
                region = "topLeft";
            }
            else if (c1x - c1.xAnchorOffset > r1x + 1 + Math.abs(r1.halfWidth) - r1.xAnchorOffset) {
                region = "topRight";
            }
            else {
                region = "topMiddle";
            }
        }
        else if (c1y - c1.yAnchorOffset > r1y + Math.abs(r1.halfHeight) - r1.yAnchorOffset) {
            //If it is, we need to check whether it's in the bottom left,
            //bottom center, or bottom right
            if (c1x - c1.xAnchorOffset < r1x - 1 - Math.abs(r1.halfWidth) - r1.xAnchorOffset) {
                region = "bottomLeft";
            }
            else if (c1x - c1.xAnchorOffset > r1x + 1 + Math.abs(r1.halfWidth) - r1.xAnchorOffset) {
                region = "bottomRight";
            }
            else {
                region = "bottomMiddle";
            }
        }
        else {
            if (c1x - c1.xAnchorOffset < r1x - Math.abs(r1.halfWidth) - r1.xAnchorOffset) {
                region = "leftMiddle";
            }
            else {
                region = "rightMiddle";
            }
        }
        //Is this the circle touching the flat sides
        //of the rectangle?
        if (region === "topMiddle" || region === "bottomMiddle" || region === "leftMiddle" || region === "rightMiddle") {
            //Yes, it is, so do a standard rectangle vs. rectangle collision test
            collision = this.rectangleCollision(c1, r1, bounce, global);
        }
        else {
            var point = { x: undefined, y: undefined };
            switch (region) {
                case "topLeft":
                    point.x = r1x - r1.xAnchorOffset;
                    point.y = r1y - r1.yAnchorOffset;
                    break;
                case "topRight":
                    point.x = r1x + r1.width - r1.xAnchorOffset;
                    point.y = r1y - r1.yAnchorOffset;
                    break;
                case "bottomLeft":
                    point.x = r1x - r1.xAnchorOffset;
                    point.y = r1y + r1.height - r1.yAnchorOffset;
                    break;
                case "bottomRight":
                    point.x = r1x + r1.width - r1.xAnchorOffset;
                    point.y = r1y + r1.height - r1.yAnchorOffset;
            }
            //Check for a collision between the circle and the point
            collision = this.circlePointCollision(c1, point, bounce, global);
        }
        if (collision) {
            return region;
        }
        else {
            return collision;
        }
    };
    /*
    circlePointCollision
    --------------------
  
    Use it to boucnce a circle off a point.
    Parameters:
    a. A sprite object with `centerX`, `centerY`, and `radius` properties.
    b. A point object with `x` and `y` properties.
  
    */
    Bump.prototype.circlePointCollision = function (c1, point, bounce, global) {
        if (bounce === void 0) { bounce = false; }
        if (global === void 0) { global = false; }
        //Add collision properties
        if (!c1._bumpPropertiesAdded)
            this.addCollisionProperties(c1);
        //A point is just a circle with a diameter of
        //1 pixel, so we can cheat. All we need to do is an ordinary circle vs. circle
        //Collision test. Just supply the point with the properties
        //it needs
        point.diameter = 1;
        point.width = point.diameter;
        point.radius = 0.5;
        point.centerX = point.x;
        point.centerY = point.y;
        point.gx = point.x;
        point.gy = point.y;
        point.xAnchorOffset = 0;
        point.yAnchorOffset = 0;
        point._bumpPropertiesAdded = true;
        return this.circleCollision(c1, point, bounce, global);
    };
    /*
    bounceOffSurface
    ----------------
  
    Use this to bounce an object off another object.
    Parameters:
    a. An object with `v.x` and `v.y` properties. This represents the object that is colliding
    with a surface.
    b. An object with `x` and `y` properties. This represents the surface that the object
    is colliding into.
    The first object can optionally have a mass property that's greater than 1. The mass will
    be used to dampen the bounce effect.
    */
    Bump.prototype.bounceOffSurface = function (o, s) {
        //Add collision properties
        if (!o._bumpPropertiesAdded)
            this.addCollisionProperties(o);
        var dp1, dp2, p1 = { vx: undefined, vy: undefined }, p2 = { vx: undefined, vy: undefined }, bounce = { x: undefined, y: undefined }, mass = o.mass || 1;
        //1. Calculate the collision surface's properties
        //Find the surface vector's left normal
        s.lx = s.y;
        s.ly = -s.x;
        //Find its magnitude
        s.magnitude = Math.sqrt(s.x * s.x + s.y * s.y);
        //Find its normalized values
        s.dx = s.x / s.magnitude;
        s.dy = s.y / s.magnitude;
        //2. Bounce the object (o) off the surface (s)
        //Find the dot product between the object and the surface
        dp1 = o.vx * s.dx + o.vy * s.dy;
        //Project the object's velocity onto the collision surface
        p1.vx = dp1 * s.dx;
        p1.vy = dp1 * s.dy;
        //Find the dot product of the object and the surface's left normal (s.lx and s.ly)
        dp2 = o.vx * (s.lx / s.magnitude) + o.vy * (s.ly / s.magnitude);
        //Project the object's velocity onto the surface's left normal
        p2.vx = dp2 * (s.lx / s.magnitude);
        p2.vy = dp2 * (s.ly / s.magnitude);
        //Reverse the projection on the surface's left normal
        p2.vx *= -1;
        p2.vy *= -1;
        //Add up the projections to create a new bounce vector
        bounce.x = p1.vx + p2.vx;
        bounce.y = p1.vy + p2.vy;
        //Assign the bounce vector to the object's velocity
        //with optional mass to dampen the effect
        o.vx = bounce.x / mass;
        o.vy = bounce.y / mass;
    };
    /*
    contain
    -------
    `contain` can be used to contain a sprite with `x` and
    `y` properties inside a rectangular area.
  
    The `contain` function takes four arguments: a sprite with `x` and `y`
    properties, an object literal with `x`, `y`, `width` and `height` properties. The
    third argument is a Boolean (true/false) value that determines if the sprite
    should bounce when it hits the edge of the container. The fourth argument
    is an extra user-defined callback function that you can call when the
    sprite hits the container
    ```js
    contain(anySprite, {x: 0, y: 0, width: 512, height: 512}, true, callbackFunction);
    ```
    The code above will contain the sprite's position inside the 512 by
    512 pixel area defined by the object. If the sprite hits the edges of
    the container, it will bounce. The `callBackFunction` will run if
    there's a collision.
  
    An additional feature of the `contain` method is that if the sprite
    has a `mass` property, it will be used to dampen the sprite's bounce
    in a natural looking way.
  
    If the sprite bumps into any of the containing object's boundaries,
    the `contain` function will return a value that tells you which side
    the sprite bumped into: “left”, “top”, “right” or “bottom”. Here's how
    you could keep the sprite contained and also find out which boundary
    it hit:
    ```js
    //Contain the sprite and find the collision value
    let collision = contain(anySprite, {x: 0, y: 0, width: 512, height: 512});
  
    //If there's a collision, display the boundary that the collision happened on
    if(collision) {
      if collision.has("left") console.log("The sprite hit the left");
      if collision.has("top") console.log("The sprite hit the top");
      if collision.has("right") console.log("The sprite hit the right");
      if collision.has("bottom") console.log("The sprite hit the bottom");
    }
    ```
    If the sprite doesn't hit a boundary, the value of
    `collision` will be `undefined`.
    */
    /*
     contain(sprite, container, bounce = false, extra = undefined) {
  
       //Helper methods that compensate for any possible shift the the
       //sprites' anchor points
       let nudgeAnchor = (o, value, axis) => {
         if (o.anchor !== undefined) {
           if (o.anchor[axis] !== 0) {
             return value * ((1 - o.anchor[axis]) - o.anchor[axis]);
           } else {
             return value;
           }
         } else {
           return value;
         }
       };
  
       let compensateForAnchor = (o, value, axis) => {
         if (o.anchor !== undefined) {
           if (o.anchor[axis] !== 0) {
             return value * o.anchor[axis];
           } else {
             return 0;
           }
         } else {
           return 0;
         }
       };
  
       let compensateForAnchors = (a, b, property1, property2) => {
          return compensateForAnchor(a, a[property1], property2) + compensateForAnchor(b, b[property1], property2)
       };
       //Create a set called `collision` to keep track of the
       //boundaries with which the sprite is colliding
       let collision = new Set();
  
       //Left
       if (sprite.x - compensateForAnchor(sprite, sprite.width, "x") < container.x - sprite.parent.gx - compensateForAnchor(container, container.width, "x")) {
         //Bounce the sprite if `bounce` is true
         if (bounce) sprite.vx *= -1;
  
         //If the sprite has `mass`, let the mass
         //affect the sprite's velocity
         if(sprite.mass) sprite.vx /= sprite.mass;
  
         //Keep the sprite inside the container
         sprite.x = container.x - sprite.parent.gx + compensateForAnchor(sprite, sprite.width, "x") - compensateForAnchor(container, container.width, "x");
  
         //Add "left" to the collision set
         collision.add("left");
       }
  
       //Top
       if (sprite.y - compensateForAnchor(sprite, sprite.height, "y") < container.y - sprite.parent.gy - compensateForAnchor(container, container.height, "y")) {
         if (bounce) sprite.vy *= -1;
         if(sprite.mass) sprite.vy /= sprite.mass;
         sprite.y = container.x - sprite.parent.gy + compensateForAnchor(sprite, sprite.height, "y") - compensateForAnchor(container, container.height, "y");
         collision.add("top");
       }
  
       //Right
       if (sprite.x - compensateForAnchor(sprite, sprite.width, "x") + sprite.width > container.width - compensateForAnchor(container, container.width, "x")) {
         if (bounce) sprite.vx *= -1;
         if(sprite.mass) sprite.vx /= sprite.mass;
         sprite.x = container.width - sprite.width + compensateForAnchor(sprite, sprite.width, "x") - compensateForAnchor(container, container.width, "x");
         collision.add("right");
       }
  
       //Bottom
       if (sprite.y - compensateForAnchor(sprite, sprite.height, "y") + sprite.height > container.height - compensateForAnchor(container, container.height, "y")) {
         if (bounce) sprite.vy *= -1;
         if(sprite.mass) sprite.vy /= sprite.mass;
         sprite.y = container.height - sprite.height + compensateForAnchor(sprite, sprite.height, "y") - compensateForAnchor(container, container.height, "y");
         collision.add("bottom");
       }
  
       //If there were no collisions, set `collision` to `undefined`
       if (collision.size === 0) collision = undefined;
  
       //The `extra` function runs if there was a collision
       //and `extra` has been defined
       if (collision && extra) extra(collision);
  
       //Return the `collision` value
       return collision;
     }
     */
    Bump.prototype.contain = function (sprite, container, bounce, extra) {
        if (bounce === void 0) { bounce = false; }
        if (extra === void 0) { extra = undefined; }
        //Add collision properties
        if (!sprite._bumpPropertiesAdded)
            this.addCollisionProperties(sprite);
        //Give the container x and y anchor offset values, if it doesn't
        //have any
        if (container.xAnchorOffset === undefined)
            container.xAnchorOffset = 0;
        if (container.yAnchorOffset === undefined)
            container.yAnchorOffset = 0;
        if (sprite.parent.gx === undefined)
            sprite.parent.gx = 0;
        if (sprite.parent.gy === undefined)
            sprite.parent.gy = 0;
        //Create a Set called `collision` to keep track of the
        //boundaries with which the sprite is colliding
        var collision = new Set();
        //Left
        if (sprite.x - sprite.xAnchorOffset < container.x - sprite.parent.gx - container.xAnchorOffset) {
            //Bounce the sprite if `bounce` is true
            if (bounce)
                sprite.vx *= -1;
            //If the sprite has `mass`, let the mass
            //affect the sprite's velocity
            if (sprite.mass)
                sprite.vx /= sprite.mass;
            //Reposition the sprite inside the container
            sprite.x = container.x - sprite.parent.gx - container.xAnchorOffset + sprite.xAnchorOffset;
            //Make a record of the side which the container hit
            collision.add("left");
        }
        //Top
        if (sprite.y - sprite.yAnchorOffset < container.y - sprite.parent.gy - container.yAnchorOffset) {
            if (bounce)
                sprite.vy *= -1;
            if (sprite.mass)
                sprite.vy /= sprite.mass;
            sprite.y = container.y - sprite.parent.gy - container.yAnchorOffset + sprite.yAnchorOffset;
            ;
            collision.add("top");
        }
        //Right
        if (sprite.x - sprite.xAnchorOffset + sprite.width > container.width - container.xAnchorOffset) {
            if (bounce)
                sprite.vx *= -1;
            if (sprite.mass)
                sprite.vx /= sprite.mass;
            sprite.x = container.width - sprite.width - container.xAnchorOffset + sprite.xAnchorOffset;
            collision.add("right");
        }
        //Bottom
        if (sprite.y - sprite.yAnchorOffset + sprite.height > container.height - container.yAnchorOffset) {
            if (bounce)
                sprite.vy *= -1;
            if (sprite.mass)
                sprite.vy /= sprite.mass;
            sprite.y = container.height - sprite.height - container.yAnchorOffset + sprite.yAnchorOffset;
            collision.add("bottom");
        }
        //If there were no collisions, set `collision` to `undefined`
        if (collision.size === 0)
            collision = undefined;
        //The `extra` function runs if there was a collision
        //and `extra` has been defined
        if (collision && extra)
            extra(collision);
        //Return the `collision` value
        return collision;
    };
    //`outsideBounds` checks whether a sprite is outide the boundary of
    //another object. It returns an object called `collision`. `collision` will be `undefined` if there's no
    //collision. But if there is a collision, `collision` will be
    //returned as a Set containg strings that tell you which boundary
    //side was crossed: "left", "right", "top" or "bottom"
    Bump.prototype.outsideBounds = function (s, bounds, extra) {
        var x = bounds.x, y = bounds.y, width = bounds.width, height = bounds.height;
        //The `collision` object is used to store which
        //side of the containing rectangle the sprite hits
        var collision = new Set();
        //Left
        if (s.x < x - s.width) {
            collision.add("left");
        }
        //Top
        if (s.y < y - s.height) {
            collision.add("top");
        }
        //Right
        if (s.x > width + s.width) {
            collision.add("right");
        }
        //Bottom
        if (s.y > height + s.height) {
            collision.add("bottom");
        }
        //If there were no collisions, set `collision` to `undefined`
        if (collision.size === 0)
            collision = undefined;
        //The `extra` function runs if there was a collision
        //and `extra` has been defined
        if (collision && extra)
            extra(collision);
        //Return the `collision` object
        return collision;
    };
    /*
    _getCenter
    ----------
  
    A utility that finds the center point of the sprite. If it's anchor point is the
    sprite's top left corner, then the center is calculated from that point.
    If the anchor point has been shifted, then the anchor x/y point is used as the sprite's center
    */
    Bump.prototype._getCenter = function (o, dimension, axis) {
        if (o.anchor !== undefined) {
            if (o.anchor[axis] !== 0) {
                return 0;
            }
            else {
                //console.log(o.anchor[axis])
                return dimension / 2;
            }
        }
        else {
            return dimension;
        }
    };
    /*
    hit
    ---
    A convenient universal collision function to test for collisions
    between rectangles, circles, and points.
    */
    Bump.prototype.hit = function (a, b, react, bounce, global, extra) {
        if (react === void 0) { react = false; }
        if (bounce === void 0) { bounce = false; }
        if (extra === void 0) { extra = undefined; }
        //Local references to bump's collision methods
        var hitTestPoint = this.hitTestPoint.bind(this), hitTestRectangle = this.hitTestRectangle.bind(this), hitTestCircle = this.hitTestCircle.bind(this), movingCircleCollision = this.movingCircleCollision.bind(this), circleCollision = this.circleCollision.bind(this), hitTestCircleRectangle = this.hitTestCircleRectangle.bind(this), rectangleCollision = this.rectangleCollision.bind(this), circleRectangleCollision = this.circleRectangleCollision.bind(this);
        var collision, aIsASprite = a.parent !== undefined, bIsASprite = b.parent !== undefined;
        //Check to make sure one of the arguments isn't an array
        if (aIsASprite && b instanceof Array || bIsASprite && a instanceof Array) {
            //If it is, check for a collision between a sprite and an array
            spriteVsArray();
        }
        else {
            //If one of the arguments isn't an array, find out what type of
            //collision check to run
            collision = findCollisionType(a, b);
            if (collision && extra)
                extra(collision);
        }
        //Return the result of the collision.
        //It will be `undefined` if there's no collision and `true` if
        //there is a collision. `rectangleCollision` sets `collsision` to
        //"top", "bottom", "left" or "right" depeneding on which side the
        //collision is occuring on
        return collision;
        function findCollisionType(a, b) {
            //Are `a` and `b` both sprites?
            //(We have to check again if this function was called from
            //`spriteVsArray`)
            var aIsASprite = a.parent !== undefined;
            var bIsASprite = b.parent !== undefined;
            if (aIsASprite && bIsASprite) {
                //Yes, but what kind of sprites?
                if (a.diameter && b.diameter) {
                    //They're circles
                    return circleVsCircle(a, b);
                }
                else if (a.diameter && !b.diameter) {
                    //The first one is a circle and the second is a rectangle
                    return circleVsRectangle(a, b);
                }
                else {
                    //They're rectangles
                    return rectangleVsRectangle(a, b);
                }
            }
            else if (bIsASprite && !(a.x === undefined) && !(a.y === undefined)) {
                //Yes, so this is a point vs. sprite collision test
                return hitTestPoint(a, b);
            }
            else {
                //The user is trying to test some incompatible objects
                throw new Error("I'm sorry, " + a + " and " + b + " cannot be use together in a collision test.'");
            }
        }
        function spriteVsArray() {
            //If `a` happens to be the array, flip it around so that it becomes `b`
            var b;
            if (a instanceof Array) {
                _a = [b, a], a = _a[0], b = _a[1];
            }
            //Loop through the array in reverse
            for (var i = b.length - 1; i >= 0; i--) {
                var sprite = b[i];
                collision = findCollisionType(a, sprite);
                if (collision && extra)
                    extra(collision, sprite);
            }
            var _a;
        }
        function circleVsCircle(a, b) {
            //If the circles shouldn't react to the collision,
            //just test to see if they're touching
            if (!react) {
                return hitTestCircle(a, b);
            }
            else {
                //Are they both moving?
                if (a.vx + a.vy !== 0 && b.vx + b.vy !== 0) {
                    //Yes, they are both moving
                    //(moving circle collisions always bounce apart so there's
                    //no need for the third, `bounce`, argument)
                    return movingCircleCollision(a, b, global);
                }
                else {
                    //No, they're not both moving
                    return circleCollision(a, b, bounce, global);
                }
            }
        }
        function rectangleVsRectangle(a, b) {
            //If the rectangles shouldn't react to the collision, just
            //test to see if they're touching
            if (!react) {
                return hitTestRectangle(a, b, global);
            }
            else {
                return rectangleCollision(a, b, bounce, global);
            }
        }
        function circleVsRectangle(a, b) {
            //If the rectangles shouldn't react to the collision, just
            //test to see if they're touching
            if (!react) {
                return hitTestCircleRectangle(a, b, global);
            }
            else {
                return circleRectangleCollision(a, b, bounce, global);
            }
        }
    };
    return Bump;
}());

//# sourceMappingURL=bump.js.map

/***/ }),

/***/ "../../../../../src/app/models/navigation-record.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationRecord; });
var NavigationRecord = (function () {
    function NavigationRecord() {
    }
    return NavigationRecord;
}());

//# sourceMappingURL=navigation-record.js.map

/***/ }),

/***/ "../../../../../src/app/modules/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_document_list_document_list_component__ = __webpack_require__("../../../../../src/app/components/document-list/document-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_document_editor_document_editor_component__ = __webpack_require__("../../../../../src/app/components/document-editor/document-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_level_editor_level_editor_component__ = __webpack_require__("../../../../../src/app/components/level-editor/level-editor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_document_list_document_list_component__["a" /* DocumentListComponent */],
        children: []
    },
    {
        path: 'editor',
        component: __WEBPACK_IMPORTED_MODULE_3__components_document_editor_document_editor_component__["a" /* DocumentEditorComponent */],
        children: []
    },
    {
        path: 'level-editor',
        component: __WEBPACK_IMPORTED_MODULE_4__components_level_editor_level_editor_component__["a" /* LevelEditorComponent */],
        children: []
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
MaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MdFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdCheckboxModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MdFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdCheckboxModule */]
        ],
        declarations: []
    })
], MaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_navigation_record__ = __webpack_require__("../../../../../src/app/models/navigation-record.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_editor_objects_block_type__ = __webpack_require__("../../../../../src/app/components/editor/objects/block-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DataService = (function () {
    function DataService() {
        this._navigationStructureChanges = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.navigationStructureChanges = this._navigationStructureChanges.asObservable();
        this.data = [
            { id: '1', name: 'ПИК', code: 'PIK', type: __WEBPACK_IMPORTED_MODULE_4__components_editor_objects_block_type__["a" /* BlockType */].SuperBlock, kind: 'Tech', parent: null },
            { id: '2', name: 'МП', code: 'MP', type: __WEBPACK_IMPORTED_MODULE_4__components_editor_objects_block_type__["a" /* BlockType */].SuperBlock, kind: 'WorkType', parent: '1' },
            { id: '3', name: 'АК', code: 'AK', type: __WEBPACK_IMPORTED_MODULE_4__components_editor_objects_block_type__["a" /* BlockType */].SuperBlock, kind: 'WorkType', parent: '1' },
            { id: '4', name: 'СЭМ 2', code: 'SEM2', type: __WEBPACK_IMPORTED_MODULE_4__components_editor_objects_block_type__["a" /* BlockType */].SuperBlock, kind: 'WorkTypeVariant', parent: '2' },
            { id: '5', name: 'версия 1', code: 'V1', type: __WEBPACK_IMPORTED_MODULE_4__components_editor_objects_block_type__["a" /* BlockType */].SuperBlock, kind: 'WorkTypeVariantVersion', parent: '4' },
            { id: '6', name: 'версия 2', code: 'V2', type: __WEBPACK_IMPORTED_MODULE_4__components_editor_objects_block_type__["a" /* BlockType */].SuperBlock, kind: 'WorkTypeVariantVersion', parent: '4' },
            { id: '7', name: 'AR', code: 'AR', type: __WEBPACK_IMPORTED_MODULE_4__components_editor_objects_block_type__["a" /* BlockType */].SuperBlock, kind: 'WorkSection', parent: '5' },
            { id: '8', name: 'KR', code: 'KR', type: __WEBPACK_IMPORTED_MODULE_4__components_editor_objects_block_type__["a" /* BlockType */].SuperBlock, kind: 'WorkSection', parent: '5' },
            { id: '9', name: 'Б1', code: 'B1', type: __WEBPACK_IMPORTED_MODULE_4__components_editor_objects_block_type__["a" /* BlockType */].Block, kind: 'StageSet', parent: '7' },
            { id: '10', name: 'Э1', code: 'Э1', type: __WEBPACK_IMPORTED_MODULE_4__components_editor_objects_block_type__["a" /* BlockType */].Element, kind: 'Stage', parent: '9' },
            { id: '11', name: 'Э2', code: 'Э2', type: __WEBPACK_IMPORTED_MODULE_4__components_editor_objects_block_type__["a" /* BlockType */].Element, kind: 'Stage', parent: '9' },
            { id: '12', name: 'Э3', code: 'Э3', type: __WEBPACK_IMPORTED_MODULE_4__components_editor_objects_block_type__["a" /* BlockType */].Element, kind: 'Stage', parent: '9' },
        ];
    }
    DataService.prototype.getNavigation = function () {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.makeNavigationData());
    };
    DataService.prototype.makeNavigationData = function () {
        function makeChildren(parentId, data) {
            var d = data.filter(function (x) { return x.parent === parentId && x.type != __WEBPACK_IMPORTED_MODULE_4__components_editor_objects_block_type__["a" /* BlockType */].Element; });
            var children = d.map(function (x) {
                var navigationRecord = new __WEBPACK_IMPORTED_MODULE_2__models_navigation_record__["a" /* NavigationRecord */]();
                navigationRecord.id = x.id;
                navigationRecord.name = x.name;
                navigationRecord.code = x.code;
                navigationRecord.navigatable = true;
                navigationRecord.children = makeChildren(x.id, data);
                return navigationRecord;
            });
            return children;
        }
        var root = this.data.filter(function (x) { return !x.parent; })[0];
        var nd = new __WEBPACK_IMPORTED_MODULE_2__models_navigation_record__["a" /* NavigationRecord */]();
        nd.id = root.id;
        nd.name = root.name;
        nd.code = root.code;
        nd.navigatable = false;
        nd.children = makeChildren(root.id, this.data);
        return nd;
    };
    DataService.prototype.getSubtree = function (id) {
        var _this = this;
        var getByParent = function (parentId) {
            var d = _this.data.filter(function (x) { return x.parent === parentId; });
            return d.concat(__WEBPACK_IMPORTED_MODULE_5_lodash__["flatten"](d.map(function (x) { return getByParent(x.id); })));
        };
        var root = this.data.filter(function (x) { return x.id === id; })[0];
        return { root: root, data: getByParent(id) };
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DataService);

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map