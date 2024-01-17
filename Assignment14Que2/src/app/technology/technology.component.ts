import { Component } from '@angular/core';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css'
})
export class TechnologyComponent {

  public Name: any = [];

  public Technology() {
    this.Name = [" Angular ", " Node JS ", " Android", " Big data ", " Artificial Intelligence "]
  }

}
