import { Routes, RouterModule }  from '@angular/router';

import { Role } from './role.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Role
  }
];

export const routing = RouterModule.forChild(routes);
