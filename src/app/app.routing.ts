import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './page/about/about.component';
import { LayoutComponent } from './page/layout/layout.component';
import { ColorsComponent } from './page/colors/colors.component';
import { UsabilityComponent } from './page/usability/usability.component';
import { GuidelinesComponent } from './page/guidelines/guidelines.component';

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
        component: AboutComponent
      },
      {
        path: 'about/:id',
        component: AboutComponent
      },
      {
        path: 'layout',
        component: LayoutComponent
      },
      {
        path: 'layout/:id',
        component: LayoutComponent
      },
      {
        path: 'colors',
        component: ColorsComponent
      },
      {
        path: 'colors/:id',
        component: ColorsComponent
      },
      {
        path: 'usability',
        component: UsabilityComponent
      },
      {
        path: 'usability/:id',
        component: UsabilityComponent
      },
      {
        path: 'guidelines',
        component: UsabilityComponent
      },
      {
        path: 'guidelines/:id',
        component: GuidelinesComponent
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
