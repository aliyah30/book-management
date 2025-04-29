import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class AppComponent {
navigateToProfile() {
throw new Error('Method not implemented.');
}
onClick() {
throw new Error('Method not implemented.');
}
  title = 'Library Management System';
}
