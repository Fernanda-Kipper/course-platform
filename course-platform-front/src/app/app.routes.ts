import { Routes } from '@angular/router';
import { PlayerResolver } from './resolvers/player.resolver';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/course-list/course-list.page').then(m => m.CourseListPage) },
  {
    path: ':course/:video',
    loadComponent: () => import('./pages/player/player.page').then(m => m.PlayerPage),
    resolve: { data: PlayerResolver }
  },
  { path: '404', loadComponent: () => import('./pages/error/not-found.page').then(m => m.NotFoundPage) },
  { path: '**', redirectTo: '404' }
];
