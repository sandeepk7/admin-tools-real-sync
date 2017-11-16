import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class UserRequestServices {

    constructor(public http: Http) {
    }

    getUserLst() {
        return new Promise((resolve, reject) => {
            this.http.get('../../assets/jsonData/userData.json')
                .subscribe(data => {
                    console.log(JSON.parse(data['_body']))
                    resolve(JSON.parse(data['_body']));
                });
        });
    }
}

