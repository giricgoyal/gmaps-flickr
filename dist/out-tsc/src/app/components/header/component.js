"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_1 = require("../../shared");
var shared_2 = require("../../shared");
var AppHeaderComponent = (function () {
    function AppHeaderComponent(sessionService) {
        this.sessionService = sessionService;
        this.title = '';
        this.title = shared_1.APP_CONFIG.appTitle;
    }
    return AppHeaderComponent;
}());
AppHeaderComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'app-header',
                templateUrl: './component.html',
                styleUrls: ['./component.scss'],
                providers: []
            },] },
];
/** @nocollapse */
AppHeaderComponent.ctorParameters = function () { return [
    { type: shared_2.SessionService, },
]; };
exports.AppHeaderComponent = AppHeaderComponent;
//# sourceMappingURL=component.js.map