import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input()
  quotes: Quotes = new Quotes;
  constructor() { }

  ngOnInit(): void {
  }

}
