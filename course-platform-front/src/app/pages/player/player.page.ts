import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Course } from '../../models/course.model';
import { Video } from '../../models/video.model';
import { PlayerStoreService } from '../../services/player-store.service';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { PlayerResolverData } from '../../resolvers/player.resolver';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-player-page',
  standalone: true,
  imports: [RouterLink, SafeUrlPipe, NgClass],
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss']
})
export class PlayerPage implements OnInit, OnDestroy {
  course!: Course;
  video!: Video;
  private currentVideoIndex = 0;
  private routeSubscription?: Subscription;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private playerStore = inject(PlayerStoreService);

  ngOnInit(): void {
    // Acessa os dados do resolver
    const data = this.route.snapshot.data['data'] as PlayerResolverData;
    this.course = data.course;
    this.video = data.video;

    // Encontra o índice do vídeo atual
    this.updateCurrentVideoIndex();

    this.routeSubscription = this.route.params.subscribe(() => {
      const data = this.route.snapshot.data['data'] as PlayerResolverData;
      this.course = data.course;
      this.video = data.video;
      this.updateCurrentVideoIndex();
    });
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  private updateCurrentVideoIndex(): void {
    this.currentVideoIndex = this.course.videos.findIndex(v => v.slug === this.video.slug);
    this.playerStore.setCurrentVideoIndex(this.currentVideoIndex);
  }

  getCurrentVideoIndex(): number {
    return this.currentVideoIndex;
  }

  getEmbedUrl(): string {
    return `https://play.gumlet.io/embed/${this.video.gumletAssetId}`;
  }

  onVideoEnded(): void {
    if (this.hasNext()) {
      setTimeout(() => this.goToNext(), 3000);
    }
  }

  hasPrevious(): boolean {
    return this.currentVideoIndex > 0;
  }

  hasNext(): boolean {
    return this.currentVideoIndex < this.course.videos.length - 1;
  }

  goToPrevious(): void {
    if (this.hasPrevious()) {
      const previousVideo = this.course.videos[this.currentVideoIndex - 1];
      this.router.navigate(['/', this.course.slug, previousVideo.slug]);
    }
  }

  goToNext(): void {
    if (this.hasNext()) {
      const nextVideo = this.course.videos[this.currentVideoIndex + 1];
      this.router.navigate(['/', this.course.slug, nextVideo.slug]);
    }
  }
} 