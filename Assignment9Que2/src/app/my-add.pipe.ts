import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {
  value: any;
  value1: any;

  transform(value: number, value1: number): number {

    return value + value1;


  }

}
