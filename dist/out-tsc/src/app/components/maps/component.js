"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_1 = require("../../shared");
var MapsComponent = (function () {
    // constructor
    function MapsComponent(httpService) {
        this.httpService = httpService;
        // initial zoom
        this.zoom = 3;
        // initial center position for the map
        this.lat = 28.7041;
        this.lng = 77.1025;
    }
    MapsComponent.prototype.ngOnInit = function () {
        this.getFlickrData(1);
    };
    // on map click event
    MapsComponent.prototype.mapClicked = function ($event) {
        this.lat = $event.coords.lat;
        this.lng = $event.coords.lng;
        this.getFlickrData(1);
    };
    MapsComponent.prototype.getFlickrData = function (page) {
        var _this = this;
        this.flickrData = undefined;
        var params = {
            page: page,
            per_page: 10,
            lat: this.lat,
            lon: this.lng
        };
        this.httpService.requestFlickr('flickr.photos.search', params, function (res) {
            _this.flickrData = res.photos;
        }, function (err) {
            console.log(err);
        });
    };
    MapsComponent.prototype.getPhotoLink = function (photo) {
        return "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_m.jpg";
    };
    MapsComponent.prototype.pageChanged = function ($event) {
        this.getFlickrData($event);
    };
    return MapsComponent;
}());
MapsComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'maps-component',
                templateUrl: './component.html',
                styleUrls: ['./component.scss']
            },] },
];
/** @nocollapse */
MapsComponent.ctorParameters = function () { return [
    { type: shared_1.HttpService, },
]; };
exports.MapsComponent = MapsComponent;
//# sourceMappingURL=component.js.map