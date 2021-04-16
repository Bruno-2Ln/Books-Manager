import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user-model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profil-view',
  templateUrl: './profil-view.component.html',
  styleUrls: ['./profil-view.component.scss']
})
export class ProfilViewComponent implements OnInit, OnDestroy {

  user: User;

  userForm: FormGroup;

  userSubscription: Subscription;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.userSubscription = this.authService.getUserAuth().subscribe(
      (user: User) => {
        this.user = user;
      }
    )

    console.log(this.user);
    
      this.userForm = this.formBuilder.group({
        'firstname': ['', [Validators.required]],
        'lastname': ['', [Validators.required]],
        'email': ['', [Validators.required]],
        'password': ['', [Validators.required]],
      })
    }

  onSubmitEditUser() {
    console.log(this.user);
    this.userService.updateUser(this.user);
    this.router.navigate(['books'])
    
  }

  ngOnDestroy(): void{ 
  }

}
