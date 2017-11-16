import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { DataTableModule } from 'angular2-datatable';
import { User } from './user.component';
import { routing }       from './user.routing';
import { UserRequestServices } from '../../services/user/userService';
import { DataFilterPipe } from './data-filter.pipe';
import {UtilityServices} from '../../services/utilityService';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing,
    DataTableModule
  ],
  declarations: [
    User,  
    DataFilterPipe     
  ],   
  providers:[UserRequestServices,UtilityServices]
})
export class UserModule {}
