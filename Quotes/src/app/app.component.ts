import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    {id:1, name:''},
    {id:2, name:''},
    {id:3, name:''},
    {id:4, name:''},
    {id:5, name:''},
    {id:6, name:''}
  ];
}
