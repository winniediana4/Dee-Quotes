import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes} from '../quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  private _newQuote = this.newMethod();
  private newMethod() {
    return new Quotes(0,"", "", ,"",new Date());
  }

  public get newQuote_1() {
    return this._newQuote;
  }
  public set newQuote_1(value) {
    this._newQuote = value;
  }
  public get newQuote() {
    return this._newQuote;
  }
  public set newQuote(value) {
    this._newQuote = value;
  }
  constructor() { }


  ngOnInit(): void {
  }

}
