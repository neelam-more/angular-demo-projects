import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {
  constructor() { }

  value: any = 1151;
  chkPrime() {

    for (var i = 2; i < this.value; i++) {
      if ((this.value % i) == 0) {

        return (this.value + " is not Prime Number.");

      }

    }
    console.log(i);
    return (this.value + "  is Prime Number.");

  }
}
