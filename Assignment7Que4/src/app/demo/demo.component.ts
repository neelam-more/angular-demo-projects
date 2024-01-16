import { Component } from '@angular/core';


@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{

  public Name : string = "Marvellous Infosystems";

  public UpperStr () : any
  {
    this.Name = this.Name.toUpperCase();
  }

  
  public LowerStr () : any
  {
    this.Name = this.Name.toLowerCase();  
  }
}
