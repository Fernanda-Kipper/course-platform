import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Course } from '../../models/course.model';
import { PlayerStoreService } from '../../services/player-store.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input() course!: Course;

  constructor(private playerStore: PlayerStoreService) { }

  get progress(): number {
    if (!this.course || this.course.videos.length === 0) return 0;
    const completed = this.playerStore.getCompletedVideosCount(this.course.slug);
    return completed;
  }

  get progressPercentage(): number {
    if (!this.course || this.course.videos.length === 0) return 0;
    return Math.round((this.progress / this.course.videos.length) * 100);
  }

  get dashOffset(): number {
    if (!this.course || this.course.videos.length === 0) return this.getCircumference();
    const progress = this.progress / this.course.videos.length;
    return this.getCircumference() - (progress * this.getCircumference());
  }

  getCircumference(): number {
    return 2 * Math.PI * 16;
  }

  getFirstVideoToPlay(): string {
    if (!this.course || !this.course.videos.length) return '';

    // Tenta obter o último vídeo assistido
    const lastWatched = this.playerStore.getLastWatchedVideo(this.course.slug);
    if (lastWatched) return lastWatched;

    // Se não há último vídeo assistido, retorna o primeiro vídeo do curso
    return this.course.videos[0].slug;
  }
} 