import { Component, OnInit, Pipe } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormArray, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { RoleRequestServices } from '../../../services/role/roleService';
import { UserRequestServices } from '../../../services/user/userService';
import { UtilityServices } from '../../../services/utilityService';
import { ClientRequestServices } from '../../../services/client/clientService';
import { UserData } from '../../../models/userModel';
import { RolesData } from '../../../models/roleModel';
import { Permission } from '../../../models/permissionModel';

@Component({
  selector: 'add-service1-modal',
  styleUrls: ['./users-modal.component.scss'],
  templateUrl: './users-modal.component.html',  
})
export class UsersModalComponent {
  
  public roleName: AbstractControl;
  public componentLst: AbstractControl;  
  roleList: Permission[];
  roleData: RolesData[] = [];
  userData: UserData;
  clientList: UserData[] = [];
  public assignRoleForm: FormGroup;  
  public roleLst: AbstractControl = null;
  public clientLst: AbstractControl = null;
  public submitted: boolean = false;

  constructor(private activeModal: NgbActiveModal, fb: FormBuilder, 
    public userRequestService: UserRequestServices,
    public roleRequestService: RoleRequestServices,
    public utlityService: UtilityServices,    
    public clientRequestService: ClientRequestServices) {
      this.assignRoleForm = fb.group({
        roleName: new FormControl(),
        roleLst: new FormControl(),
        selectedRoles: new FormControl(),
        clientLst: new FormControl(),
        selectedClients: new FormControl(),
        //   'roleName': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      });
  }

//map selected data into the user modal popup.
  mapComponent(component) {
    let selectedComponent = component.filter((l) => l.checked).map((l) => l);    
    return selectedComponent.length ? selectedComponent : null;
  }

  ngOnInit() {
    if (this.utlityService.ACTION === 'edit') {
      const editData = JSON.parse(JSON.stringify(this.utlityService.ACTION_DATA));
      this.roleRequestService.getRoleLst().then(response => {
        this.roleData = JSON.parse(JSON.stringify(response));
        this.roleData = this.roleRequestService.generateRoleList(editData['roleName'], this.roleData);
        this.clientRequestService.getClientLst().then(clientResponse => {
          this.clientList = JSON.parse(JSON.stringify(clientResponse));
          if (editData['clientsName']) {
            this.clientList = this.clientRequestService.generateClientList(editData, this.clientList);
          }

          this.roleData.forEach(data => {
            console.log(JSON.stringify(data));
            const roleControlArray = new FormArray(this.roleData.map((l) => {
              return new FormGroup({
                key: new FormControl(l.roleName),
                value: new FormControl(l.roleName),
                id: new FormControl(l.id),
                checked: new FormControl(l.checked),
              });
            }));


            this.clientList.forEach(element => {
              console.log(JSON.stringify(element));
              const clientControlArray = new FormArray(this.clientList.map((l) => {
                return new FormGroup({
                  key: new FormControl(l.clientName),
                  value: new FormControl(l.clientName),
                  id: new FormControl(l.clientID),
                  checked: new FormControl(l.checked),
                });
              }));


              this.assignRoleForm = new FormGroup({
                roleName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)])),
                roleLst: roleControlArray,
                selectedRoles: new FormControl(this.mapComponent(roleControlArray.value), Validators.required),
                clientLst: clientControlArray,
                selectedClients: new FormControl(this.mapComponent(clientControlArray.value), Validators.required),
              });

              //this.roleName = this.form.controls['roleName'];
              roleControlArray.valueChanges.subscribe((v) => {
                this.assignRoleForm.controls.selectedRoles.setValue(this.mapComponent(v));
                console.log("form:" + this.assignRoleForm.controls.selectedRoles);
              });
              clientControlArray.valueChanges.subscribe((v) => {
                this.assignRoleForm.controls.selectedClients.setValue(this.mapComponent(v));
                console.log("form:" + this.assignRoleForm.controls.selectedClients);
              });
            });
          });
        });
      });

    }
    else {
      this.roleRequestService.getRoleLst().then(response => {
        this.roleData = JSON.parse(JSON.stringify(response));
        this.clientRequestService.getClientLst().then(clientResponse => {
          this.clientList = JSON.parse(JSON.stringify(clientResponse));
          this.clientList.forEach(element => {
            console.log(JSON.stringify(element));
            const clientControlArray = new FormArray(this.clientList.map((l) => {
              return new FormGroup({
                key: new FormControl(l.clientName),
                value: new FormControl(l.clientName),
                id: new FormControl(l.clientID),
                checked: new FormControl(false),
              });
            }));
            this.roleData.forEach(data => {
              console.log(JSON.stringify(data));
              const roleControlArray = new FormArray(this.roleData.map((l) => {
                return new FormGroup({
                  key: new FormControl(l.roleName),
                  value: new FormControl(l.roleName),
                  id: new FormControl(l.id),
                  checked: new FormControl(false),
                });
              }));

              this.assignRoleForm = new FormGroup({
                roleName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)])),
                roleLst: roleControlArray,
                selectedRoles: new FormControl(this.mapComponent(roleControlArray.value), Validators.required),
                clientLst: clientControlArray,
                selectedClients: new FormControl(this.mapComponent(clientControlArray.value), Validators.required),
              });


              roleControlArray.valueChanges.subscribe((v) => {
                this.assignRoleForm.controls.selectedRoles.setValue(this.mapComponent(v));
                console.log("form:" + this.assignRoleForm.controls.selectedRoles);
              });
              clientControlArray.valueChanges.subscribe((v) => {
                this.assignRoleForm.controls.selectedClients.setValue(this.mapComponent(v));
                console.log("form:" + this.assignRoleForm.controls.selectedClients);
              });
            });
          });
        });
      });
    }
  }


  //close open modal.

  closeModal() {
    this.activeModal.close();
  }

  onSubmit(values: Object): void {        
  }

}
