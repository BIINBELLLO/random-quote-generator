import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Quotes } from "../models/quotes";
import { QuotesService } from "../services/quotes.service";

@Component({
  selector: "app-author-quotes",
  templateUrl: "./author-quotes.component.html",
  styleUrls: ["./author-quotes.component.scss"],
})
export class AuthorQuotesComponent implements OnInit {
  author: string = "";
  quoteList: Array<Quotes> = [];
  constructor(
    private quotesService: QuotesService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getSelectedAuthor();
  }

  getSelectedAuthor() {
    this.activeRoute.params.subscribe((res) => {
      this.author = res.author;
      this.getAllQuotesFromAuthor(this.author);
    });
  }

  getAllQuotesFromAuthor(author: string) {
    this.quotesService.getAuthorQuotes(author).subscribe({
      next: (response) => {
        console.log(response);
        this.quoteList = response;
      },
      error: (e) => {
        alert("An error occured! Please try again!");
      },
    });
  }

  getAnyRandomQuote() {
    this.router.navigate(["quotes"]);
  }
}
