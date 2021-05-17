import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quotes!: Quotes;
  @Output() isRead = new EventEmitter<boolean>();
  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }
  upvote(){
    this.quotes.likes+=1;
  }
  downvote(){
    this.quotes.dislikes+=1;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
