import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Books} from './book.model';
import { BOOK } from './mock-book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cappella-books';
  myForm: FormGroup;
  books = BOOK;
  BooksSelezionato:Books;

   constructor(fb: FormBuilder) {
    this.myForm = fb.group({'titolo': ['', Validators.required], 'descrizione': ['', Validators.required], 'prezzo': ['', Validators.required], 'recensione': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

      onSubmit(value: string): void {

    let book: Books = new Books();
    book.titolo = this.myForm.controls['nome'].value;
    book.descrizione = this.myForm.controls['cognome'].value;
    book.prezzo = this.myForm.controls['indirizzo'].value;
    book.recensione = this.myForm.controls['email'].value;

    this.books.push(book);
  }
  onSelect(book:Books):void{
    this.BooksSelezionato=book;
  }


}