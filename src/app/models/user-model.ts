export class User {

    private _firstname : string;
    private _lastname : string;
    private _email : string;
    private _password : string;

    constructor(firstname : string, lastname : string, email : string, password: string) {

        this._firstname = firstname;
        this._lastname = lastname;
        this._email = email;
        this._password = password;
    }

    get firstname() { return this._firstname; }

    get lastname() { return this._lastname; }

    get email() { return this._email; }

    get password() { return this._password; }


    set firstname(value: string) { this._firstname = value; }

    set lastname(value: string) { this._lastname = value; }

    set email(value: string) { this._email = value; }

    set password(value: string) { this._password = value; }
    
    }

