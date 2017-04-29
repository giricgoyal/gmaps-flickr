import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared';

@Component({
    selector: 'maps-component',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class MapsComponent implements OnInit {
    // initial zoom
    zoom: number = 3;
  
    // initial center position for the map
    lat: number = 28.7041;
    lng: number = 77.1025;

    flickrData: any;

    // constructor
    constructor(private httpService: HttpService) {

    }

    ngOnInit() {
        this.getFlickrData(1);
    }

    // on map click event
    mapClicked($event) {
        this.lat = $event.coords.lat;
        this.lng = $event.coords.lng;
        this.getFlickrData(1);
    }
    
    getFlickrData(page) {
        this.flickrData = undefined;
        
        let params = {
            page: page,
            per_page: 10,
            lat: this.lat,
            lon: this.lng
        };

        this.httpService.requestFlickr('flickr.photos.search', params, (res)=> {
            this.flickrData = res.photos;
        }, (err) => {
            console.log(err);
        });
    }

    getPhotoLink(photo) {
        return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`;
    }

    pageChanged($event) {
        this.getFlickrData($event);
    }
}