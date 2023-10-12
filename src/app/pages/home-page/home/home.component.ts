import { Book } from './../../../interfaces/book';
import { BookService } from './../../../services/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: Book[];

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(
      (results:any) =>{
       this.books = results.content;
       console.log(this.books)
      }
    )
  }



}
