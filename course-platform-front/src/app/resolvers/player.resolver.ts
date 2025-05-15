import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Observable, forkJoin, map } from 'rxjs';
import { Course } from '../models/course.model';
import { Video } from '../models/video.model';
import { CourseService } from '../services/course.service';

export interface PlayerResolverData {
  course: Course;
  video: Video;
}

export const PlayerResolver: ResolveFn<PlayerResolverData> = (
  route: ActivatedRouteSnapshot
) => {
  const courseService = inject(CourseService);
  const courseSlug = route.paramMap.get('course') as string;
  const videoSlug = route.paramMap.get('video') as string;

  return forkJoin({
    course: courseService.getCourseBySlug(courseSlug),
    video: courseService.getVideoBySlug(courseSlug, videoSlug)
  });
}; 