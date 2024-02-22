import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  public str: string = "This Assignment is on Services and Dependency Injection."

  public count: number = 0;

  countCapital() {

    for (let i = 0; i < this.str.length - 1; i++) {
      if (this.str[i] === this.str[i].trim().toUpperCase()) {
        this.count += 1;


      }

    }
    return (this.count);
  }
}