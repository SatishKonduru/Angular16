import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent {

  public myName: string = ''
  public myCourse: string = ''
  public myFee : number = 0
  public myText: string = ''
  onClick(name){
    console.log("Welcome: ", name)
    this.myName= name
  }
  onClick1(course){
    console.log("Course name: ", course)
    this.myCourse = course
  }
  onClick2(fee){
    console.log("Fee Details: ", fee)
    this.myFee= fee
  }
}
