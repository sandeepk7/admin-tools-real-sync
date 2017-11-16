import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator, EqualPasswordsValidator } from '../../theme/validators';
import { UserRequestServices } from '../../services/user/userService';
import {UserData} from '../../models/userModel';
import { UtilityServices} from '../../services/utilityService';
import { UsersModalComponent } from './users-modal/users-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'user',
  templateUrl: './user.html',
  styleUrls: ['./user.scss'],  
})
export class User {

  public userService: UserRequestServices; //instance of client service.
  public userLst: Array<UserData> = [];  //create array of userlist of userdata modal.

  constructor(fb: FormBuilder,
     userService: UserRequestServices,
     public utilityService: UtilityServices,
     private modalService: NgbModal) {
    
      //get the users list 
    userService.getUserLst().then(response => {
      let clientResp=null;
      clientResp=response;
      clientResp.forEach(element => {
        this.userLst.push(element);
      });            
    });
  }

  // add/edit assigning roles and add/edit details of users.

  assignRole(item) { 
    this.utilityService.ACTION = 'edit'; //set action item as edit for editing the user details.
    this.utilityService.ACTION_DATA = item; //transfer the selected item to modal.
    const activeModal = this.modalService.open(UsersModalComponent, { size: 'lg' });    
  }

  //submit the form
  public onSubmit(values: Object): void {
   
  }
}
