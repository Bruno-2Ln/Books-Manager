import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.scss']
})
export class AuthViewComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onClickSignIn(): void {
    this.authService.signIn()
    .then(() => {
      this.router.navigate(['books']);
    })
    .catch(() => {

    })

  }


}
