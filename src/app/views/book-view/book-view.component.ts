import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent implements OnInit {

  book: any;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];

    this.book = this.bookService.getBook(+id);
    console.log(this.book);

  }

}
