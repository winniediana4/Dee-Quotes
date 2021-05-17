import { Quote } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quotes[] = [
    new Quotes(1, 'To be or not to be? That is the question', 'William Shakespeare'),
    new Quotes(2, 'A rose is a rose by any other name', 'William Shakespeare'),
  ];

  toggleDetails(index: string | number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuotes(isComplete: any, index: number){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit(){
  }

}
