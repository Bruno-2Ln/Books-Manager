import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: boolean = false;
  userIdAuth: number;

  constructor(
    private userService: UserService,
  ) { }

  signIn(email: string, password: string) {
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {

        const user = this.userService.getUserBy('email', email);
        console.log(user);
        

        if(user) {
          if(user.password === password) {
            this.isAuth = true;
            this.userIdAuth = user.id;
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
    this.userIdAuth = null;
  }
}
