export class User {

    private _id: number;
    private _firstname : string;
    private _lastname : string;
    private _email : string;
    private _password : string;

    static nextId = 1;

    constructor(firstname : string, lastname : string, email : string, password: string) {

        this._id = User.nextId;
        this._firstname = firstname;
        this._lastname = lastname;
        this._email = email;
        this._password = password;

        User.nextId++;
    }

    get id() { return this._id; }

    get firstname() { return this._firstname; }

    get lastname() { return this._lastname; }

    get email() { return this._email; }

    get password() { return this._password; }


    set id(value: number) {this._id = value; }

    set firstname(value: string) { this._firstname = value; }

    set lastname(value: string) { this._lastname = value; }

    set email(value: string) { this._email = value; }

    set password(value: string) { this._password = value; }
    
    }

