import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

  public Name :string = "Marvellous Insystems.";
  
  public fun()
  {

     this.Name = "Educating for Better tomorrow.";
  }

}