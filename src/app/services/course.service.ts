import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourseInfo(){
    return [
      {id: 1, name: 'Angular', fee: 15000},
      {id: 2, name: 'Angular Material', fee: 10000},
      {id: 3, name: 'Bootstrap', fee: 5000}
    ]
  }
}
