import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models/user-model';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: boolean = false;
  userAuth: BehaviorSubject<User>;

  constructor(
    private userService: UserService,
  ) {
    this.userAuth = new BehaviorSubject<User>(null);
  }

  signIn(email: string, password: string) {
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {

        const user = this.userService.getUserBy('email', email);
        console.log(user);
        

        if(user) {
          if(user.password === password) {
            this.isAuth = true;
            this.userAuth.next(user);
            resolve(this.isAuth);
          }
          reject("Le mot de passe est erroné")
        }

        reject("L'adresse email n'existe pas.")

        
        
      }, 1000)
    })
  }

  signOut() {
    this.isAuth = false;
    this.userAuth.next(null);
  }

  getUserAuth() : Observable<User>{
    return this.userAuth;
  }


}
