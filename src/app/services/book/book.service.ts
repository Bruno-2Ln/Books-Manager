import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/book-model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Array<Book> = [];

  constructor() { 
    this.books = [];

    for (let i = 1; i <= 10; i++) {
      this.books.push(
        new Book( "Titre " + i, "Auteur " + i, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur adipisci, ipsum aspernatur nostrum quas odit?", 'Libre')
      )}
  }

  getBook(id: number){
    for(let book of this.books) {
      if(book.id === id){
        return book;
      }
    }
  }

  switchAllbooksStatus(status: string): void {
    for(let book of this.books) {
      book.status = status;
    }
  }

  updateStatus(id: number, newStatus: string){
    for(let book of this.books) {
      if(book.id === id){
        book.status = newStatus;
        break;
      }
    }
  }

  addBook(newBook : Book) {
    this.books.push(newBook);
  }

  updateBook(editedBook : Book) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id === editedBook.id) {
        this.books[i] = editedBook ;
        break;
      }
    }
  }


}
