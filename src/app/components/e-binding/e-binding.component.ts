import { Component } from '@angular/core';

@Component({
  selector: 'app-e-binding',
  templateUrl: './e-binding.component.html',
  styleUrls: ['./e-binding.component.css']
})
export class EBindingComponent {
  onClick(){
    console.log("You Clicked this Button")
  }
  onDblClick(){
    console.log("You Double Clicked this Button")
  }
  onOver(){
    console.log("Mouse over")
  }
  onOut(){
    console.log("Mouse Exit")
  }
  onMove(){
    console.log("Mouse Moved")
  }
  kDown(){
    console.log("Key down")
  }
  kUp(){
    console.log('Key UP')
  }
  kPress(){
    console.log("You pressed a key")
  }
  onFocus(){
    console.log("Input got Focus")
  }
  onFocusLost(){
    console.log("Input lost focus")
  }
  onInput(){
    console.log("You entered a character")
  }
}
