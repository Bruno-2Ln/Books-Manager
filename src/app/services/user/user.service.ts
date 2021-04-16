import { Injectable } from '@angular/core';
import { User } from '../../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];
  userAuth

  constructor() {

    this.users = [];

    this.users.push(new User('Bruno', 'Delaine', 'bd@hotmail.fr', 'azerty'));
    this.users.push(new User('Mayline', 'Delaine', 'md@hotmail.fr', 'poiuyt'));
  }

  getUserBy(searchedAttr, searchedValue): User {
    for (const user of this.users) {
      if(user[searchedAttr] === searchedValue) {
        return user;
      }
    }
    return null;
  }

  updateUser(editedUser: User){
    for (let i = 0; i < this.users.length; i++) {
      if(this.users[i].id === editedUser.id) {
        this.users[i] = editedUser;
        break;
      }
    }
  }


}
