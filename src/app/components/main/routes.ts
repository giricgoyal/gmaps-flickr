import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children : [
            {
                path: '',
                loadChildren: '../maps/index#MapsModule',
            }
        ]
    }
];

export const MainRouteModule: ModuleWithProviders = RouterModule.forChild(routes);
