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
}
