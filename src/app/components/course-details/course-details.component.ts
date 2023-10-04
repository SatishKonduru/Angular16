import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  public course = []
  public errMsg = ''
  constructor(private _courseService: CourseService, private _router: Router, private _activatedRoute: ActivatedRoute){
   this._courseService.getCourseInfo()
   .subscribe(res => this.course = res ,
              err => this.errMsg = err)
  }

  onSelect(x){
    this._router.navigate(['/selectedItem', x.id])
  }
  

public returningID ;
  isSelected(x){
    this._activatedRoute.paramMap.subscribe((p: ParamMap) => {
this.returningID = parseInt(p.get('id'))
    })
return x.id === this.returningID

  }
}
