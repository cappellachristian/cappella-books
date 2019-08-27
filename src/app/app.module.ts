import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Book } from './book.model.ts/book.model.ts.component';
import { RecensioneComponent } from './recensione/recensione.component';

@NgModule({
  declarations: [
    AppComponent,
    Book.Model.TsComponent,
    RecensioneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
