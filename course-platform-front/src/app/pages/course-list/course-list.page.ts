import { Component, OnInit, inject } from '@angular/core';
import { Course } from '../../models/course.model';
import { Observable } from 'rxjs';
import { CourseService } from '../../services/course.service';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.page.html',
  styleUrls: ['./course-list.page.scss'],
  imports: [CourseCardComponent, CommonModule],
  standalone: true
})
export class CourseListPage implements OnInit {
  courses$!: Observable<Course[]>;
  private courseService = inject(CourseService);

  ngOnInit(): void {
    this.courses$ = this.courseService.getCourses();
  }
} 