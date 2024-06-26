import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from "../model/course";
import {COURSES} from "../../db-data";


@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  standalone: true,
  styleUrl: './course-card.component.css'
})

export class CourseCardComponent {

  @Input({
    required: true
  })
  course: Course | any;

  @Output('courseSelected')
  courseEmmiter = new EventEmitter<Course> ();
  // @Output()
  // courseSelected = new EventEmitter<Course> ();

  constructor() {
  }

  ngOnInit() {
  }

  onCourseViewed(){
    console.log("card component - button clicked...");
    this.courseEmmiter.emit(this.course);
  }
}
