import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerStoreService {
  private currentVideoIndexSubject = new BehaviorSubject<number>(0);
  currentVideoIndex$ = this.currentVideoIndexSubject.asObservable();

  setCurrentVideoIndex(index: number): void {
    this.currentVideoIndexSubject.next(index);
  }

  markVideoAsWatched(courseSlug: string, videoSlug: string): void {
    return
  }


  getLastWatchedVideo(courseSlug: string): string | null {
    return null;
  }

  isVideoCompleted(courseSlug: string, videoSlug: string): boolean {
    return false;
  }

  getCompletedVideosCount(courseSlug: string): number {
    return 0;
  }
} 