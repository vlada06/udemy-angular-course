import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {COURSES} from "../../db-data";

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  standalone: true,
  styleUrl: './course-card.component.css'
})

export class CourseCardComponent {

  @Input() //  Effin important
  course: Course;



  constructor() {
  }

  ngOnInit() {
  }

}
