import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';
import { Video } from '../models/video.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = `${environment.apiUrl}/courses`;

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }

  getCourseBySlug(slug: string): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${slug}`);
  }

  getVideoBySlug(courseSlug: string, videoSlug: string): Observable<Video> {
    return this.http.get<Video>(`${this.apiUrl}/${courseSlug}/videos/${videoSlug}`);
  }
} 