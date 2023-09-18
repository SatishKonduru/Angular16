import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent {
  public names = ['Satish', 'Renu', 'Chikkie', 'Micky']
  public emp = [
                  {
                    id: 1,
                    name: 'Satish',
                    age: 43
                  },
                  {
                    id: 2,
                    name: 'Renu',
                    age: 38
                  },
                  {
                    id: 3,
                    name: 'Chikkie',
                    age: 13
                  },

  ]


}
