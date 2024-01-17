import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  public List1: any = [];

  public Books() {
    this.List1 = [" Gang of four ", " Learning Node Js ", " Android Programming ", " Big Data "]
  }

}
