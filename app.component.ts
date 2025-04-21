import { Component } from '@angular/core';
import { AuthService } from '../app/auth.service.ts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: '../app/login.component.html',
  styleUrls: ['../app/login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authservice: AuthService, private router: Router) {}

  onLogin() {
    this.authservice.login(this.username, this.password).subscribe((success: any) => {
      if (success) {
        this.router.navigate(['/profile']);
      } else {
        alert('Invalid credentials');
      }
    });
  }
}
