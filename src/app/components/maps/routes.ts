import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapsComponent } from './component';

const routes: Routes = [
    {
        path: '',
        component: MapsComponent
    }
];

export const MapsRouteModule: ModuleWithProviders = RouterModule.forChild(routes);