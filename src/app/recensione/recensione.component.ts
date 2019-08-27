import { Component, OnInit, Input } from '@angular/core';
import {Books} from '../book.model';

@Component({
  selector: 'app-recensione',
  templateUrl: './recensione.component.html',
  styleUrls: ['./recensione.component.css']
})
export class RecensioneComponent implements OnInit {
 @Input() book: Books;
  constructor() { }

  ngOnInit() {
  }

}
