import { Component } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-name',
  templateUrl: './course-name.component.html',
  styleUrls: ['./course-name.component.css']
})
export class CourseNameComponent {
  public course = [];
  public errMsg = ''
  constructor(private _courseService : CourseService ){
    this._courseService.getCourseInfo()
    .subscribe(res => this.course = res ,
                err => this.errMsg = err)

  }
 
}
