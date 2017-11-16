import { Component, OnInit, Pipe, Input } from '@angular/core';
import { FormGroup, FormArray, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BaThemeSpinner } from '../../../../../theme/services/baThemeSpinner';
import { ClientService } from '../../../services/clientService/client.service';

@Component({
  selector: 'client-detail',
  templateUrl: './clientDetailModal.html',
  providers: [BaThemeSpinner, ClientService]
})
export class ClientDetailModal implements OnInit {
  @Input() oSelectedClient;
  public formClientData: FormGroup;
  public submitted: boolean = false; 
  strClientName: string = '';
  strCompanyName: string = ''; 
  oClientData;

  constructor(private activeModal: NgbActiveModal, fb: FormBuilder, public _loader: BaThemeSpinner, private _clientService: ClientService) {
    this.formClientData = fb.group({
      'strClientName': [null, Validators.required],
      'strCompanyName': [null, Validators.required]
    })
  }

  ngOnInit() {
    this._loader.show();
    // getting the data for particular client based on the id of the client.[Array]
    // this._clientService.returnClientData(this.selectedClient.id).then(response => {
    //   console.log(response)
    //   let clientData = null;
    //   clientData = response;
    //   clientData.map(element => {
    //     this.clientData.push(element);
    //   });
    // });
    //Object
    this._clientService.returnClientData(this.oSelectedClient.id).then(response => {
      //console.log(response)
      let clientData = null;
      clientData = response;
      this.oClientData = clientData;
      this.formClientData.patchValue({
        strClientName: this.oClientData.clientName,
        strCompanyName: this.oClientData.companyName
      })
      // clientData.map(element => {
      //   this.clientData.push(element);
      // });
    });
    this._loader.hide();
  }

  //function to close the modal.
  closeModal() {
    this.activeModal.close();
  }

  //function called on submit button of the modal.
  onSubmit(values: Object): void {
    this.submitted = true;

  }
}