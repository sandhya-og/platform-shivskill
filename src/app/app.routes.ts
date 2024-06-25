import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'join-us', loadChildren: () => import('./components/auth/join-us/join-us.module').then(m => m.JoinUsModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
