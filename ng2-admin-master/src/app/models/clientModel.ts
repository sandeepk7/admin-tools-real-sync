import { ClientDetailData } from '../models/clientDetailModel';


// client basic model
export class ClientData {
   clientName: string;
   detail: ClientDetailData = new ClientDetailData();   
   id: string;     
}
