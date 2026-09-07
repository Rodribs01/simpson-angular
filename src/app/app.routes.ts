import { Routes } from '@angular/router';
import { MainPage } from './layout/main-page/main-page';
import { Characters } from './pages/characters/characters';
import { Episodes } from './pages/episodes/episodes';
import { Locations } from './pages/locations/locations';

export const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'characters',
        component: Characters,
      },
      {
        path: 'episodes',
        component: Episodes,
      },
      {
        path: 'locations',
        component: Locations,
      },
    ],
  },
];
