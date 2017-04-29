"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("./shared/services");
var shared_1 = require("./shared");
var AppComponent = (function () {
    function AppComponent(httpService, sessionService) {
        this.httpService = httpService;
        this.sessionService = sessionService;
    }
    return AppComponent;
}());
AppComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            },] },
];
/** @nocollapse */
AppComponent.ctorParameters = function () { return [
    { type: services_1.HttpService, },
    { type: shared_1.SessionService, },
]; };
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map