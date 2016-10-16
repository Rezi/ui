import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PageComponent } from './page/page.component';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    NavComponent,
    PageComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
