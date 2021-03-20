import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class QuotesService {
  constructor(private http: HttpClient) {}

  getRandomQuotes() {
    return this.http.get(`${environment.apiUrl}/random`).pipe(
      map((res) => {
        return res["data"];
      })
    );
  }

  getAuthorQuotes(author: string) {
    const params = new HttpParams();
    params.set("author", author);
    return this.http.get(`${environment.apiUrl}`, { params }).pipe(
      map((res) => {
        return res["data"];
      })
    );
  }
}
