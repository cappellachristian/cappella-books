import { Component } from '@angular/core';
import {Books} from './book.model';
import { BOOK } from './mock-book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cappella-books';
}
