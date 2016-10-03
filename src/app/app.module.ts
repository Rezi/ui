import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './page/about/about.component';
import { LayoutComponent } from './page/layout/layout.component';
import { ColorsComponent } from './page/colors/colors.component';
import { UsabilityComponent } from './page/usability/usability.component';
import { GuidelinesComponent } from './page/guidelines/guidelines.component';

import { Angular2DataTableModule } from 'angular2-data-table';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    Angular2DataTableModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    LayoutComponent,
    ColorsComponent,
    UsabilityComponent,
    GuidelinesComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
