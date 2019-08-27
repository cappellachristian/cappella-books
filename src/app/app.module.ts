import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import{NgModule} from '@angular/core';
import { RecensioneComponent } from './recensione/recensione.component';
import { ReviewComponent } from './review/review.component';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RecensioneComponent,
    ReviewComponent,
    BookListComponent
  ],
 imports: [
    BrowserModule,NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
