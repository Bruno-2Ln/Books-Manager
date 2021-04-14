export class Book {

    private _id: number;
    private _title: string;
    private _author: string;
    private _description: string;
    private _status: string;

    static nextId = 1;

    constructor(title: string, author: string, description : string, status: string) {
        this._id = Book.nextId;
        this._title = title;
        this._author = author;
        this._description = description;
        this._status = status;

        Book.nextId++;
    }

    get id() { 
        return this._id; 
    }

    get title() { 
        return this._title; 
    }

    get author() { 
        return this._author; 
    }

    get description() { 
        return this._description; 
    }

    get status() { 
        return this._status; 
    }

    set id(value: number) {
        this._id = value; 
    }

    set title(value: string){
        this._title = value; 
    }

    set author(value: string){
        this._author = value; 
    }

    set description(value: string){
        this._description = value; 
    }

    set status(value: string){
        this._status = value; 
    }
}