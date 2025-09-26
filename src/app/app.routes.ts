import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent),
  },
  {
    path: 'income',
    loadComponent: () => import('./pages/income/income.component').then((m) => m.IncomeComponent),
  },
  {
    path: 'expend',
    loadComponent: () => import('./pages/expend/expend.component').then((m) => m.ExpendComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
];
