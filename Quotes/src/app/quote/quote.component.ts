import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quotes[] = [
    {id:1, name: 'To be or not to be? That is the question'},
    {id:2, name: 'A rose is a rose by any other name'},
  ];

  constructor() { }

  ngOnInit(){
  }

}
