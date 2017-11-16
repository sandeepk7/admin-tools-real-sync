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
  styleUrls: ['./roles-modal.component.scss'],
  templateUrl: './roles-modal.component.html',
})
export class RolesModalComponent {

  //create instance of form
  public form: FormGroup;
  //create instance of form controls
  public roleLst: AbstractControl = null;
  public clientLst: AbstractControl = null;
  public roleName: AbstractControl;
  public componentLst: AbstractControl;  
  //create instance of services
  public utlityService: UtilityServices;  
  public roleService: RoleRequestServices;
  public userService: UserRequestServices;
  public clientService: ClientRequestServices;
  //create array instance of permission model
  componentList: Permission[];
  componentData: Permission[] = [];

  constructor(private activeModal: NgbActiveModal, fb: FormBuilder,
    public roleRequestService: RoleRequestServices,
    public utlityRequestService: UtilityServices,
    public userRequestService: UserRequestServices,
    public clientRequestService: ClientRequestServices) {
      this.form = fb.group({
        roleName: new FormControl(),
        componentLst: new FormControl(),
        selectedComponents: new FormControl(),
      });
  }

  ngOnInit() {              
      this.roleRequestService.getComponentData().then(response => { // get permission data of role.
        this.componentData = JSON.parse(JSON.stringify(response));
        this.componentData.forEach(data => {
          console.log(JSON.stringify(data));
          let componentControlArray = new FormArray(this.componentData.map((l) => {//define the permission in the form controls.
            return new FormGroup({
              key: new FormControl(l.name),
              value: new FormControl(l.name),
              id: new FormControl(l.id),
              crud: new FormControl(l.crud),
              checked: new FormControl(false),
            });
          }));


          this.form = new FormGroup({
            roleName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)])),
            componentLst: componentControlArray,
            selectedComponents: new FormControl(this.mapComponent(componentControlArray.value), Validators.required),

          });
          this.roleName = this.form.controls['roleName'];
          componentControlArray.valueChanges.subscribe((v) => {
            this.form.controls.selectedComponents.setValue(this.mapComponent(v));
            console.log("form:" + this.form.controls.selectedComponents);
          });
        });
      });
    
  }

  // map selected permission with roles.
  mapComponent(component) {
    let selectedComponent = component.filter((l) => l.checked).map((l) => l);
    console.log(selectedComponent);
    return selectedComponent.length ? selectedComponent : null;
  }

  closeModal() {
    this.activeModal.close();
  }

  onSubmit(values: Object): void {

  }
}
