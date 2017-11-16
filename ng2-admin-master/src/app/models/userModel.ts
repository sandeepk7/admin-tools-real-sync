// user detail model
export class UserData {

    public username: string;
    public email: string;
    public profile_picture: string;
    public access_token: string;
    public provider: string;
    public uid: string;
    public status: string;
    public roleName: Object[] = [];
    public clientsName: Object[] = [];
    public custom_token: string;
    public id: string;
    public lastLogin: string;
    public checked: boolean;
    private static _userDataInsatance: UserData;
    public clientID: string;
    public clientName: string;
    public clientHostName: string;

    public static getInstance() { // create or get instance of user model
        if (!this._userDataInsatance) {
            this._userDataInsatance = new UserData();
        }
        return this._userDataInsatance;
    }

    public static cleanInstance() { // clear instance of user model
        if (this._userDataInsatance) {
            this._userDataInsatance = new UserData();
        }
    }

}

