import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BookService } from './book.service';
import { Book } from './book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink]
})
export class HomeComponent {
  searchQuery: string = '';
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  searchBooks() {
    this.bookService.searchBooks(this.searchQuery).subscribe(data => {
      this.books = data;
    });
  }
}
