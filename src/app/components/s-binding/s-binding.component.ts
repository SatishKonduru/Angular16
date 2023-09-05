import { Component } from '@angular/core';

@Component({
  selector: 'app-s-binding',
  templateUrl: './s-binding.component.html',
  styleUrls: ['./s-binding.component.css']
})
export class SBindingComponent {
  public myColor = 'blue'
  public isRequired : boolean = false
  public myStyleGroup = {
    color: 'orange',
    fontStyle: 'italic',
    fontSize: '80px'
  }
}
