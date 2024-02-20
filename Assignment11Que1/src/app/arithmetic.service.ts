import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {
  num: any = 9;
  num1: any = 4;
  constructor() {
  }




  add() {
    var Result = this.num + this.num1;
    return Result;

  }

  sub() {
    var Total = this.num - this.num1;
    return Total;


  }




}