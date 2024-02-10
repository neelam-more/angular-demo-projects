import { Component, Input, Output } from '@angular/core';
//  import { emit } from 'process';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

  @Output() public Message = new EventEmitter();
  @Input() public container: any;


  public communication() {

    this.Message.emit("Hello from Child.. ");
  }
}
