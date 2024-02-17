import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {


  transform(value: number, param: string): any {


    if (param == "Even") {
      if (value % 2 == 0) {
        return "It is Even.";
      }
      else {
        return "It is not Even."
      }
    }


    if (param == "Odd") {
      if (value % 2 == 1) {
        return "It is Odd.";
      }
      else {
        return "It is not Odd.";
      }

    }
    if (param == "Prime") {

      for (var i = 2; i < value; i++) {
        if ((value % i) == 0) {

          return "It is not a Prime Number.";
        }
      }
      return " It is  a Prime Number.";
    }

    if (param == "Perfect") {

      var add: number = 0;

      for (var i = 1; i < value; i++) {
        if (value % i == 0) {
          console.log(i);
          add = add + i;
        }
      }
      if (value == add) {
        return "It is Perfect Number."
      } else {
        return "It is not Perfect Number."
      }

    }
  }
}