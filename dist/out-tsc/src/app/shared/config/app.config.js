"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../../../environments/environment");
var api = {
    prod: '',
    dev: '',
    localhost: 'http://localhost:3000/api'
};
var env = 'dev';
if (environment_1.environment.production) {
    env = 'prod';
}
exports.APP_CONFIG = {
    api: api[env],
    appTitle: 'GoogleMaps - Flickr Demo',
    storage: 'localStorage',
    jwtKey: 'jwtToken',
    flickrApi: '0f915dcb176f6f3d95808693a6b8420d'
};
//# sourceMappingURL=app.config.js.map