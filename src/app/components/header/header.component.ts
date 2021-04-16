import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {

  isAuth: boolean;

  profilUrl: string;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {

    this.isAuth = this.authService.isAuth;
    console.log(this.isAuth);

    this.profilUrl = '/profil/' + this.authService.userIdAuth
  }

  ngOnChanges(): void {
    
    
  }

  onClickSignOut(): void {
    this.authService.signOut();
    this.router.navigate(['/auth']);
    
    
  }

}
