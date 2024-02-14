import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {
  value: any;
  value1: any;

  transform(value: number, value1: number): number {

    return value * value1;
  }

}
