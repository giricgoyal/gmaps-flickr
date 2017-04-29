"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_1 = require("../../shared");
var component_1 = require("./component");
var routes_1 = require("./routes");
var core_2 = require("angular2-google-maps/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var MapsModule = (function () {
    function MapsModule() {
    }
    return MapsModule;
}());
MapsModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    ng_bootstrap_1.NgbModule,
                    routes_1.MapsRouteModule,
                    shared_1.SharedModule,
                    core_2.AgmCoreModule.forRoot({
                        apiKey: 'AIzaSyCMI9FmsaIzTkYWF3WlcXF4yBte09lNII0'
                    })
                ],
                declarations: [
                    component_1.MapsComponent
                ]
            },] },
];
/** @nocollapse */
MapsModule.ctorParameters = function () { return []; };
exports.MapsModule = MapsModule;
//# sourceMappingURL=index.js.map