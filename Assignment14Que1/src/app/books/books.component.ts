import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})

export class BooksComponent {

  public Name: any = [];

  public Books() {

    this.Name = [" Gang of four ", " Learning Node Js ", " Android Programming ", " Big Data "]
  }

}

