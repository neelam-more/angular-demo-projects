//import { text } from 'stream/consumers';
//import { style } from '@angular/animations';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]',
  standalone: true
})
export class CustomStyleDirective {

  constructor(private el: ElementRef) {


    this.el.nativeElement.style.background = "yellow";

    this.el.nativeElement.style.fontWeight = "bold";
  }


}



