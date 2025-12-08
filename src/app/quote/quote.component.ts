import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {
  qotes: string[] = [
    "Push yourself, because no one else is going to do it for you", "Success is not for the lazy.", "the secret of geting ahead is getting started.","Don't watch the clock; do what it does. Keep going."];

    currentQote: string = this.qotes[0];

    showRandomQote() {
      const randomIndex = Math.floor(Math.random() * this.qotes.length);
      this.currentQote = this.qotes[randomIndex];
    }

    // Cat fact ninja api

    currFact : string = "Click the button to get a cat fact!";
    apiURL = 'https://catfact.ninja/fact';

    constructor(private http: HttpClient) {}

    getCatFact() {
      this.http.get<{ fact:string }>(this.apiURL).subscribe({
        next: (response) =>{
          this.currFact = response.fact;
        },
        error: (err) => {
          this.currFact = "Oops! Couldn't fetch a cat fact 😺";
          console.log(err);
          
        }
      });
    }

}
