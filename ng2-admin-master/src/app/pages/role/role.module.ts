import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { DataTableModule } from 'angular2-datatable';
import { Role } from './role.component';
import { routing }       from './role.routing';
import { RoleRequestServices } from '../../services/role/roleService';
import { DataFilterPipe } from './data-filter.pipe';
import {UtilityServices} from '../../services/utilityService';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing,
    DataTableModule,  
      
  ],
  declarations: [
    Role, 
    DataFilterPipe ,    
  ],  
  
  providers:[RoleRequestServices,UtilityServices]
})
export class RoleModule {}
