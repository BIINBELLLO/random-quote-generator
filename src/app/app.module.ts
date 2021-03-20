import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { QuotesComponent } from "./quotes/quotes.component";
import { HttpClientModule } from "@angular/common/http";
import { AuthorQuotesComponent } from './author-quotes/author-quotes.component';

@NgModule({
  declarations: [AppComponent, QuotesComponent, AuthorQuotesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
