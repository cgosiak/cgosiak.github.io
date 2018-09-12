import { Component, OnInit } from '@angular/core';
import {interval} from 'rxjs';

export interface Quote {
  text: string;
  author: string;
}

@Component({
  selector: 'app-quote-machine',
  templateUrl: './quote-machine.component.html',
  styleUrls: ['./quote-machine.component.css']
})
export class QuoteMachineComponent implements OnInit {
  quotes: Quote[] = [
    {text: 'The best thing about a boolean is even if you are wrong, you are only off by a bit.', author: 'Anonymous'},
    {text: 'Before software can be reusable it first has to be usable.', author: 'Ralph Johnson'},
    {text: 'The best method for accelerating a computer is the one that boosts it by 9.8 m/s2.', author: 'Anonymous'},
    {text: 'A good programmer is someone who always looks both ways before crossing a one-way street.', author: 'Doug Linder'},
    {text: 'Deleted code is debugged code.', author: 'Jeff Sickel'},
    {text: 'In order to understand recursion, one must first understand recursion.', author: 'Anonymous'},
  ];
  current_quote: Quote;

  constructor() { }

  ngOnInit() {
    this.current_quote = this.randomQuote();
    interval(5000).subscribe(() => {
      this.current_quote = this.randomQuote();
    });
  }

  private randomQuote() {
    return this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }

}
