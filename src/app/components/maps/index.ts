import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { MapsComponent } from './component';
import { MapsRouteModule } from './routes';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    NgbModule,
    MapsRouteModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCMI9FmsaIzTkYWF3WlcXF4yBte09lNII0'
    })
  ],
  declarations: [
    MapsComponent
  ]
})

export class MapsModule {}