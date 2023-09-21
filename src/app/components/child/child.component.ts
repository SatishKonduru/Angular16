import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() public pPostMan

@Output() public cData  = new EventEmitter()

onClick(){
  this.cData.emit("This is Child Data")
}


}
