import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/guard/auth-guard.service';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { BookViewComponent } from './views/book-view/book-view.component';
import { BooksViewComponent } from './views/books-view/books-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';

const routes: Routes = [
  {path: 'auth', component: AuthViewComponent},
  {path: '', canActivate:[AuthGuardService], component: BooksViewComponent},
  {path: 'books', canActivate:[AuthGuardService], component: BooksViewComponent},
  {path: 'book/:id', canActivate:[AuthGuardService], component: BookViewComponent},
  {path: 'not-found', component: ErrorViewComponent},
  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
