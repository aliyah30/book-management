import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { BookDetailComponent } from './book-detail.component';
import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'book/:id', component: BookDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
];
