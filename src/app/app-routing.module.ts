import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthorQuotesComponent } from "./author-quotes/author-quotes.component";
import { QuotesComponent } from "./quotes/quotes.component";

const routes: Routes = [
  { path: "", redirectTo: "quotes", pathMatch: "full" },
  { path: "quotes", component: QuotesComponent },
  { path: "quotes/:author", component: AuthorQuotesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
