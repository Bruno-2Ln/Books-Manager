import { Injectable } from '@angular/core';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: boolean = false;

  constructor(
    private userService: UserService,
  ) { }

  signIn(email: string, password: string) {
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {

        const user = this.userService.getUserByMail(email);
        console.log(user);
        

        if(user) {
          if(user.password === password) {
            this.isAuth = true;
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
  }
}
