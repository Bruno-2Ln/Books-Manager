import { Injectable } from '@angular/core';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];

  constructor() {

    this.users = [];

    this.users.push(new User('Bruno', 'Delaine', 'bd@hotmail.fr', 'azerty'));
    this.users.push(new User('Mayline', 'Delaine', 'md@hotmail.fr', 'poiuyt'));
  }

  getUserByMail(searchedEmail): User | void {
    for (const user of this.users) {
      if(user.email === searchedEmail) {
        return user;
      }
    }
    return null;
  }


}
