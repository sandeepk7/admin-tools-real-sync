import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { RolesData } from '../../models/roleModel';
import { Permission } from '../../models/permissionModel';
import { debug } from 'util';

@Injectable()
export class RoleRequestServices {

    componentLst: Permission[] = [];
    constructor(public http: Http) {
    }

    getRoleLst() {
        return new Promise((resolve, reject) => {
            this.http.get('../../assets/jsonData/roleData.json')
                .subscribe(data => {
                    console.log(JSON.parse(data['_body']))
                    resolve(JSON.parse(data['_body']));
                });
        });
    }

    generateRoleList(roleData: RolesData[], newData: RolesData[]) {
        newData.forEach(element => {
            if (roleData.length != 0) {
                roleData.forEach(item => {
                    if (element.id === item.id) {
                        element.checked = true;
                        var index = roleData.indexOf(item);
                        if (index) {
                            roleData.splice(index, 1);
                        }
                    }
                });
            }
        });
        return newData;
    }

    getComponentData() {
        this.componentLst = [];
        return new Promise((resolve, reject) => {
            this.http.get('../../assets/jsonData/componentData.json')
                .subscribe(data => {
                    debugger;
                    let componentObj = JSON.parse(JSON.stringify(data['_body']));
                    let componentkeysArray = Object.keys(JSON.parse(componentObj));
                    for (let m = 0; m < componentkeysArray.length; m++) {
                        let key = componentkeysArray[m];
                        let val = (JSON.parse(componentObj))[key];
                        const permissionObj = new Permission();
                        permissionObj.name = val.name;
                        permissionObj.crud = val.crud;
                        permissionObj.id = key;
                        permissionObj.checked = false;
                        this.componentLst.push(permissionObj);
                    }
                    resolve(this.componentLst);
                });
        });
    }

    generatePermissionList(roleData: RolesData, newData: Permission[]) {

        newData.forEach(element => {
            if (roleData.permission.length != 0) {
                roleData.permission.forEach(item => {
                    if (element.id === item.id) {
                        element.checked = true;
                        var index = roleData.permission.indexOf(item);
                        if (index) {
                            roleData.permission.splice(index, 1);
                        }
                    }
                });
            }
        });
        console.log('updated newDAta', JSON.stringify(newData));
        return newData;
    }

}

