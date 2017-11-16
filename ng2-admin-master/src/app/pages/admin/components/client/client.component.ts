import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { BaThemeSpinner } from '../../../../theme/services/baThemeSpinner';
import { ClientDetailModal } from './clientDetailModal/clientDetailModal.component';
import { ClientService } from '../../services/clientService/client.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'client-component',
  styleUrls: ['./client.scss'],
  templateUrl: './client.html',
  providers: [BaThemeSpinner, ClientService]
})

export class Client implements OnInit {
  sortBy = "username";
  sortOrder = "asc";
  clientList: Array<ClientData> = [];
  constructor(
    private fb: FormBuilder,
    public _loader: BaThemeSpinner,
    private _clientService: ClientService,
    private modalService: NgbModal,
  ) { }

  //on init function called when the component is loaded.
  ngOnInit() {
    this._loader.show();
    // getting the list of client and assigning it to clientList array
    this._clientService.returnClientList().then(response => {
      let clientResp = null;
      clientResp = response;
      clientResp.forEach(element => {
        this.clientList.push(element);
      });
    });
    this._loader.hide();
  }

  //function to remove client.
  removeClient(item) {
    if (confirm("Are you sure to delete " + item.clientName)) {
      console.log("Implement delete functionality here");
    }
  }

  //function to open client detail modal
  openDetailModal(item) {
    const activeModal = this.modalService.open(ClientDetailModal, { size: 'lg' });
    activeModal.componentInstance.oSelectedClient = item;
  }
}
