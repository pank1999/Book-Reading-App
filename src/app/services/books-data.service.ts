import { Injectable } from '@angular/core';
import {Books} from "../mocks/Books";
import {Book} from "../interfaces/Book";

@Injectable({
  providedIn: 'root'
})
export class BooksDataService {

  constructor() { }
  pages!:string[];
  getBooksData(name:string){
       
       Books.forEach((book:Book)=>{
          if(book.bookName===name){
             this.pages=book.pages;
          }
       })
       return this.pages
  }
}
