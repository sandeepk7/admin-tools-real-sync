import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ClientService {

    constructor(public http: Http) { }
    // function to get the list of client from the json file.
    returnClientList() {
        return new Promise((resolve, reject) => {
            this.http.get('../../../../assets/jsonData/client.json')
                .subscribe(data => {
                    resolve(JSON.parse(data['_body']));
                });
        });
    }
    // function to get the data of client from the json file.
    returnClientData(id) {
        return new Promise((resolve, reject) => {
            this.http.get('../../../../assets/jsonData/clientInfo.json')
                .subscribe(data => {
                    resolve(JSON.parse(data['_body']).find(item => item.id == id).details);
                });
        });
    }

}