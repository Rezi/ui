import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './page/page.component';

const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
      },
      {
        path: 'about',
        component: PageComponent
      },
      {
        path: 'about/:id',
        component: PageComponent
      },
      {
        path: 'layout',
        component: PageComponent
      },
      {
        path: 'layout/:id',
        component: PageComponent
      },
      {
        path: 'colors',
        component: PageComponent
      },
      {
        path: 'colors/:id',
        component: PageComponent
      },
      {
        path: 'accessibility',
        component: PageComponent
      },
      {
        path: 'accessibility/:id',
        component: PageComponent
      },
      {
        path: 'usability',
        component: PageComponent
      },
      {
        path: 'usability/:id',
        component: PageComponent
      },      
      {
        path: 'guidelines',
        component: PageComponent
      },
      {
        path: 'guidelines/:id',
        component: PageComponent
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
