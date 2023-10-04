import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  public course = []
  public errMsg = ''
  constructor(private _courseService: CourseService, private _router: Router){
   this._courseService.getCourseInfo()
   .subscribe(res => this.course = res ,
              err => this.errMsg = err)
  }

  onSelect(x){
    this._router.navigate(['/selectedItem', x.id])
  }
  
}
