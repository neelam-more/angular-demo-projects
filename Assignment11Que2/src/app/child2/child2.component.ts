import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})



export class Child2Component {

  public capitalCount: any;

  constructor(obj: StringService) {
    this.capitalCount = obj.countCapital();
  }
}
