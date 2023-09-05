import { Component } from '@angular/core';

@Component({
  selector: 'app-c-binding',
  templateUrl: './c-binding.component.html',
  styleUrls: ['./c-binding.component.css']
})
export class CBindingComponent {
public myText = 'textSize'
public myGroup = {
  textColor :true,
  textSize: true
}
public isRequired: boolean = true
}
