import { RouterModule, Routes } from '@angular/router';
import {
    AboutComponent,
    PortafolioComponent,
    ItemPortafolioComponent,
    SearchComponent
 } from './components/index.paginas';

const app_routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item/:id', component: ItemPortafolioComponent },
    { path: 'buscar/:termino', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});