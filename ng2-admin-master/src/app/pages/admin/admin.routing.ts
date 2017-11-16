import { Routes, RouterModule }  from '@angular/router';

import { Admin } from './admin.component';
import { Client } from './components/client/client.component'

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Admin,
    children: [
      { path: 'client', component: Client }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
