import { environment } from '../../../environments/environment';

const api = {
    prod: '',
    dev: '',
    localhost: 'http://localhost:3000/api'
}

var env = 'dev';
if (environment.production) {
    env = 'prod'
}

export const APP_CONFIG = {
    api: api[env],
    appTitle: 'GoogleMaps - Flickr Demo',
    storage: 'localStorage',
    jwtKey: 'jwtToken',
    flickrApi: '0f915dcb176f6f3d95808693a6b8420d'
}