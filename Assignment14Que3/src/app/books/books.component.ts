import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})

export class BooksComponent {

  public List: any = [];

  public Books() {

    this.List = [" Gang of four ", " Learning Node Js ", " Android Programming ", " Big Data "];

  }

}
