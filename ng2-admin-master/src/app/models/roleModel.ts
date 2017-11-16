import { Permission } from '../models/permissionModel';

// role basic model
export class RolesData {
   roleName: string;
   permission: Permission[];
   id: string;  
   checked: boolean;
}
