import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers: [ArithmeticService],
})
export class DemoComponent {
  public Result: number;
  public Answer: number;


  constructor(obj: ArithmeticService) {
    this.Result = obj.add();
    this.Answer = obj.sub();
  }
}
