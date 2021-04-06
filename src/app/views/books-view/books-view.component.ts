import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.scss']
})
export class BooksViewComponent implements OnInit {

  books: Array<any>;

  constructor(
    private bookService: BookService,) 
    {}

  ngOnInit(): void {
    this.books = this.bookService.books;
  }

  allChangeStatus(status){
    this.bookService.switchAllbooksStatus(status);
  }

}
