import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator, EqualPasswordsValidator } from '../../theme/validators';
import { RoleRequestServices } from '../../services/role/roleService';
import {RolesData} from '../../models/roleModel';
import { UtilityServices} from '../../services/utilityService';
import { RolesModalComponent } from './roles-modal/roles-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'role',
  templateUrl: './role.html',
  styleUrls: ['./role.scss'],  
})
export class Role {

  public roleService: RoleRequestServices;
  public roleLst: Array<RolesData> = [];  
  

  constructor(roleService: RoleRequestServices,
     public utilityService: UtilityServices,
     private modalService: NgbModal) {
    
      //get the role list 
      roleService.getRoleLst().then(response => {        
      let clientResp=null;
      clientResp=response;
      clientResp.forEach(element => {
        this.roleLst.push(element);
      });            
    });
  }


  // add/edit details of role.

  addRole(action, item) {
    this.utilityService.ACTION = action;
    this.utilityService.ACTION_DATA = item;
    const activeModal = this.modalService.open(RolesModalComponent, { size: 'lg' });     
  }

  //submit the form
  public onSubmit(values: Object): void {  
  }
}
