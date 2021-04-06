import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Array<any> = [];

  constructor() { 
    this.books = [];

    for (let i = 1; i <= 10; i++) {
      this.books.push({
        id: i,
        title: "titre " + i,
        author: "auteur " + i,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur adipisci, ipsum aspernatur nostrum quas odit?",
        status: 'Libre'
      });
    }
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
}
