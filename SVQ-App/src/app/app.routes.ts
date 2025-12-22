import { Routes } from '@angular/router';
import { HomePage } from './Pages/home-page/home-page';
import { Page404 } from './Pages/page404/page404';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: HomePage },

    {path: '**', component: Page404 }
];
