import { NumberService } from './../number.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {

  public Prime: any;

  constructor(obj: NumberService) {

    this.Prime = obj.chkPrime();

  }

}
