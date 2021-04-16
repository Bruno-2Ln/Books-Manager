import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profil-view',
  templateUrl: './profil-view.component.html',
  styleUrls: ['./profil-view.component.scss']
})
export class ProfilViewComponent implements OnInit {

  user: User;

  userForm: FormGroup;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    this.user = this.userService.getUserBy('id', +id);
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

}
