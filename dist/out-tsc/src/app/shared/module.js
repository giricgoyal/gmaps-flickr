"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var services_1 = require("./services");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule,
            providers: [services_1.HttpService, services_1.ToasterInjectableService, services_1.SessionService]
        };
    };
    return SharedModule;
}());
SharedModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    http_1.HttpModule,
                    router_1.RouterModule
                ],
                declarations: [],
                exports: [
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    http_1.HttpModule,
                    router_1.RouterModule
                ]
            },] },
];
/** @nocollapse */
SharedModule.ctorParameters = function () { return []; };
exports.SharedModule = SharedModule;
//# sourceMappingURL=module.js.map