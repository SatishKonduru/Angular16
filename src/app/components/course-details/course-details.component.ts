import { Component } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  public course = [
    {id: 1, name: 'Angular', fee: 15000},
    {id: 2, name: 'Angular Material', fee: 10000},
    {id: 3, name: 'Bootstrap', fee: 5000}
  ]
}
