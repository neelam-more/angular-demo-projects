import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})

export class DemoComponent {
  @Output() public MyEvent = new EventEmitter();

  public SendText(value: any): any {
    this.MyEvent.emit(value);

  }
}
