import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import '../../public/css/styles.css';

import {StateService} from './state/state.service';
import {PageService} from './page/page.service';

import {StateItem} from './state/state.interface';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StateService, PageService]
})

export class AppComponent{

  logo = 'CN ux&nbsp;&&nbsp;ui guide';
  title = 'About the guide';
  pagination = {
    total:1,
    id:0
  };
  state:StateItem = {
    id:null,
    css:{}
  };;

  constructor(
    private stateService: StateService,
    private pageService: PageService,
    router:Router
  ) {

    router.events.subscribe((event) => {
      if(event instanceof NavigationStart) {
        this.getState(event.url);
      }
    });
  }

  getState(page:string): void {
    this.state = this.stateService.getState(page);
    let pageRoute = page.split("/");

    this.pagination = this.pageService.getPageOfTypeLength(pageRoute[1], Number(pageRoute[2]) || 0)
  }
}
