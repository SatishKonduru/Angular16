import { Component } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-name',
  templateUrl: './course-name.component.html',
  styleUrls: ['./course-name.component.css']
})
export class CourseNameComponent {
  public course = [];
  constructor(private _courseService : CourseService ){
    this.course = _courseService.getCourseInfo()

  }
 
}
