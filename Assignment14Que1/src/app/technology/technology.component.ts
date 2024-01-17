import { Component } from '@angular/core';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css'
})

export class TechnologyComponent {

  public List: any = [];

  public Technology() {

    this.List = [" Angular ", " Node JS ", " Android", " Big data ", " Artificial Intelligence "]
  }


}
