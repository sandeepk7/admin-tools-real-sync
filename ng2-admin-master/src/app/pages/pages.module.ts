import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'angular2-datatable';
import { routing } from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';
import { RolesModalComponent } from '../pages/role/roles-modal/roles-modal.component';
import { UsersModalComponent } from '../pages/user/users-modal/users-modal.component';
import { Pages } from './pages.component';
import { RoleRequestServices } from '../services/role/roleService';
import { UserRequestServices } from '../services/user/userService';
import { UtilityServices } from '../services/utilityService';
import { ClientRequestServices } from '../services/client/clientService';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [CommonModule,
    AppTranslationModule,
    NgaModule,
    routing,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule],    
  declarations: [Pages,
    RolesModalComponent,
    UsersModalComponent],
  entryComponents: [RolesModalComponent,
    UsersModalComponent],
  providers: [RoleRequestServices,
    UserRequestServices,
  UtilityServices,
ClientRequestServices]
})
export class PagesModule {
}
