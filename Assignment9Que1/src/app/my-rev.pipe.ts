import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string {

    let Name: string = "Marvellous";
    let MyRev: string = "";

    for (let i = Name.length - 1; i >= 0; i--) {
      MyRev = MyRev + Name[i];
    }
    return MyRev;
  }

}
