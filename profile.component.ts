import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { BookService } from './book.service';
import { Book } from './book.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'], 
    imports: [CommonModule]
})
export class ProfileComponent implements OnInit {
  user: any;  // Replace with the actual user model if you have one
  borrowingHistory: Book[] = [];  // A list of books that the user has borrowed

  constructor(
    private authService: AuthService,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    // For now, let's simulate a user object (ideally, you would fetch this from an API)
    this.user = {
      username: 'john_doe',
      name: 'John Doe',
      email: 'john@example.com',
      borrowingHistory: ['1', '2']  // List of book IDs the user has borrowed
    };

    this.fetchBorrowingHistory();
  }

  fetchBorrowingHistory() {
    // Simulating fetching the user's borrowed books by their IDs
    const bookIds = this.user.borrowingHistory;
    bookIds.forEach((bookId: string) => {
      this.bookService.getBookDetails(bookId).subscribe(book => {
        this.borrowingHistory.push(book);
      });
    });
  }

  // Handle logout
  onLogout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
