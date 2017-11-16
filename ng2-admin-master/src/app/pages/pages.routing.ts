import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },      
      { path: 'roles', loadChildren: './role/role.module#RoleModule' },
      { path: 'users', loadChildren: './user/user.module#UserModule' },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
