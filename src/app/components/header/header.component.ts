import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user-model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {

  isAuth: boolean;

  profilUrl: string;
  user: User;

  userSubscription: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.userSubscription = this.authService.getUserAuth().subscribe(
      (user: User) => {
        this.user = user;
      }
    )

    this.isAuth = this.authService.isAuth;
    console.log(this.isAuth);
  }

  ngOnChanges(): void {
    
    
  }

  onClickSignOut(): void {
    this.authService.signOut();
    this.router.navigate(['/auth']);
    
    
  }

}
