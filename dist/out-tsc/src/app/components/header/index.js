"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_1 = require("../../shared");
var component_1 = require("./component");
var AppHeaderModule = (function () {
    function AppHeaderModule() {
    }
    return AppHeaderModule;
}());
AppHeaderModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    shared_1.SharedModule
                ],
                declarations: [
                    component_1.AppHeaderComponent
                ],
                exports: [component_1.AppHeaderComponent]
            },] },
];
/** @nocollapse */
AppHeaderModule.ctorParameters = function () { return []; };
exports.AppHeaderModule = AppHeaderModule;
//# sourceMappingURL=index.js.map