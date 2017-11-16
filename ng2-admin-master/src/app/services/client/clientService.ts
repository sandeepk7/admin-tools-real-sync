import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ClientData } from '../../models/clientModel';
import { UserData} from '../../models/userModel';

@Injectable()
export class ClientRequestServices {

    clientDetailLst: ClientData[] = [];
    constructor(public http: Http) {
    }

    getClientLst() {
        return new Promise((resolve, reject) => {
            this.http.get('../../assets/jsonData/clientData.json')
                .subscribe(data => {
                    this.clientDetailLst = [];
                    let clientObj = JSON.parse(JSON.stringify(data['_body']));
                    let clinetkeysArray =Object.keys(JSON.parse(clientObj));
                    for (let m = 0; m < clinetkeysArray.length; m++) {
                        let key = clinetkeysArray[m];
                        let value =(JSON.parse(clientObj))[key];
                        let clientValueObj = JSON.parse(JSON.stringify(value));
                        let clinetValuekeysArray =Object.keys(JSON.parse(JSON.stringify(clientValueObj)));
                        for (let m1 = 0; m1 < clinetValuekeysArray.length; m1++) {
                            let valuekeym = clinetValuekeysArray[m1];
                            let valuekeym1 = (JSON.parse(JSON.stringify(clientValueObj)))[valuekeym];
                            let clientValueObjm1 = JSON.parse(JSON.stringify(valuekeym1));
                            var clinetValuekeysArraym1 =Object.keys(JSON.parse(JSON.stringify(clientValueObjm1)));
                            for (var m2 = 0; m2 < 1; m2++) {
                                var valuekeym2 = clinetValuekeysArraym1[m2];
                                var valuekeym21 = (JSON.parse(JSON.stringify(valuekeym1)))[valuekeym2];
                                let clientValueObjm12 = JSON.parse(JSON.stringify(valuekeym21));
                                var clinetValuekeysArraym12 =Object.keys(JSON.parse(JSON.stringify(clientValueObjm12)));
                                for (var m3 = 0; m3 < 1; m3++) {
                                    var valuekeym23 = clinetValuekeysArraym12[m3];
                                    var valuekeym213 =(JSON.parse(JSON.stringify(valuekeym21)))[valuekeym23];
                                    const obj = new ClientData();
                                    obj.id = key;
                                    obj.clientName = valuekeym;
                                    obj.detail = valuekeym213;
                                    this.clientDetailLst.push(obj);
                                }
                            }
                        }
                    }
                    resolve(this.clientDetailLst);
                });
        });
    }

    generateClientList(userData: UserData, newData: UserData[]) {
        newData.forEach(element => {
            if (userData.clientsName.length != 0) {
                userData.clientsName.forEach(item => {                    
                    if (element.clientID === item['clientId']) {
                        element.checked = true;
                        var index = userData.clientsName.indexOf(item);
                        if (index) {
                            userData.clientsName.splice(index, 1);
                        }
                    }
                });
            }
        });        
        return newData;
    }
}

