import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'semantic-elements',
    pathMatch: 'full',
  },
  {
    path: 'semantic-elements',
    loadComponent: () =>
      import('./pocs/semantic-elements/semantic-elements').then((m) => m.SemanticElements),
  },
  {
    path: 'grid-flex',
    loadComponent: () =>
      import('./pocs/grid-flex/grid-flex').then((m) => m.GridFlex),
  },
  {
    path:"hoisting",
    loadComponent: () => import('./pocs/hoisting/hoisting').then(m=>m.Hoisting)
  }
];
