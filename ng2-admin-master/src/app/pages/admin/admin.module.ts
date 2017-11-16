import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import {ClientDetailModal} from './components/client/clientDetailModal/clientDetailModal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './admin.routing';
import { Admin } from './admin.component';
import { Client } from './components/client/client.component';
import { ClientService} from './services/clientService/client.service';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgaModule } from '../../theme/nga.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModalModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    NgaModule
  ],
  declarations: [
    Admin,
    ClientDetailModal,
    Client
        
  ],
  entryComponents: [
    ClientDetailModal
  ],
  providers: [
    ClientService
  ]
})
export class AdminModule {}
