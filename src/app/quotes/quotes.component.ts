import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Quotes } from "../models/quotes";
import { QuotesService } from "../services/quotes.service";

@Component({
  selector: "app-quotes",
  templateUrl: "./quotes.component.html",
  styleUrls: ["./quotes.component.scss"],
})
export class QuotesComponent implements OnInit {
  randomQuote: Quotes = {
    _id: "",
    quoteText: "",
    quoteAuthor: "",
    quoteGenre: "",
  };

  constructor(private quotesService: QuotesService, private router: Router) {}

  ngOnInit() {
    this.getAnyRandomQuote();
  }

  getAnyRandomQuote() {
    this.quotesService.getRandomQuotes().subscribe({
      next: (response) => {
        this.randomQuote = response[0];
      },
      error: (e) => {
        alert("An error occured! Please try again!");
      },
    });
  }

  // getAllQuotesFromAuthor() {
  //   this.quotesService.getAuthorQuotes(this.randomQuote.quoteAuthor).subscribe({
  //     next: (response) => {
  //       console.log(response);
  //     },
  //     error: (e) => {
  //       alert("An error occured! Please try again!");
  //     },
  //   });
  // }

  getAllQuotesFromAuthor() {
    this.router.navigate(["quotes", this.randomQuote.quoteAuthor]);
  }
}
