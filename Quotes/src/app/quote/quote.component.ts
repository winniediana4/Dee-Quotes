import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = 'welcome to Dee quotes';
  quotes:Quotes[] = [
    new Quotes(1, 'To be or not to be? That is the question', 'William Shakespeare', new Date(2020,3,14),0,0),
    new Quotes(2, 'A rose is a rose by any other name', 'William Shakespeare', new Date(2020,3,14),0,0),
    new Quotes(3, 'Success is not final failure is fatal, It is the courage to continue that counts', 'Jayson-Demers', new Date (2020,3,14),0,0),
    new Quotes(4, 'Love has nothing to do with what you are expecting to get, only with what you are expecting to give, which is everything', 'Katherine Harper', new Date (2020,3,14),0,0),
    new Quotes(5, 'Its better to have loved and lost than never to have loved at all', 'Alfred Tennyson', new Date (20202,3,4),0,0)
  ];
  get Quote() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quote: Quotes){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(this.Quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead: any, index: number){
    if (isRead) {
      let toDelete = confirm('Are you sure you want to delete?')
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
 
  constructor() { }

  ngOnInit() {
  }

}


