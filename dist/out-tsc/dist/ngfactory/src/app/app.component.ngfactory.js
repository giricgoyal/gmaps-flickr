/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var import0 = require("./app.component.scss.shim.ngstyle");
var import1 = require("@angular/core");
var import2 = require("@angular/router");
var import3 = require("../../../../src/app/app.component");
var import4 = require("../../../../src/app/shared/services/http.service");
var import5 = require("../../../../src/app/shared/services/session.service");
var styles_AppComponent = [import0.styles];
exports.RenderType_AppComponent = import1.ɵcrt({
    encapsulation: 0,
    styles: styles_AppComponent,
    data: {}
});
function View_AppComponent_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(8388608, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
        import1.ɵdid(73728, null, 0, import2.RouterOutlet, [
            import2.RouterOutletMap,
            import1.ViewContainerRef,
            import1.ComponentFactoryResolver,
            [
                8,
                null
            ]
        ], null, null)
    ], null, null);
}
exports.View_AppComponent_0 = View_AppComponent_0;
function View_AppComponent_Host_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'app-root', [], null, null, null, View_AppComponent_0, exports.RenderType_AppComponent)),
        import1.ɵdid(24576, null, 0, import3.AppComponent, [
            import4.HttpService,
            import5.SessionService
        ], null, null)
    ], null, null);
}
exports.AppComponentNgFactory = import1.ɵccf('app-root', import3.AppComponent, View_AppComponent_Host_0, {}, {}, []);
//# sourceMappingURL=app.component.ngfactory.js.map