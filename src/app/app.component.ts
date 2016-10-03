import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import '../../public/css/styles.css';

import {StateService} from './state/state.service';
import {PageService} from './page/page.service';

import {StateItem} from './state/state.interface';

interface paginationControll {
  prevDisabled:boolean;
  nextDisabled:boolean;
  nextLink:string;
  prevLink:string;
};

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [StateService, PageService]
})

export class AppComponent{

  logo = 'CN ux&nbsp;&&nbsp;ui guide';
  title = 'About the guide';
  pagination:{}[];
  paginationControl:paginationControll;


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

  //called on every route change/load
  getState(page:string): void {
    this.state = this.stateService.getState(page);
    let pageRoute = page.split("/");
    pageRoute[2] = pageRoute[2] || "0";
    let pagination = this.pageService.getPageOfTypeLength(pageRoute[1], +pageRoute[2])

    this.pagination = [];
    this.paginationControl = {
      prevDisabled:true,
      nextDisabled:true,
      prevLink:"",
      nextLink:""
    };

    this.paginationControl.nextDisabled = true;

    for (let i = 0; i <= pagination.total; i++){
      let paginationItem = {
        link: "/" + pageRoute[1] + "/" + (i || ""),
        text: pageRoute[1],
        class:""
      };

      if(i < +pageRoute[2] && this.paginationControl.prevDisabled){
        this.paginationControl.prevDisabled = false;
        this.paginationControl.prevLink = "/" + pageRoute[1] + "/" + ((+pageRoute[2] - 1) || "");
      }

      if(i > +pageRoute[2] && this.paginationControl.nextDisabled){
        this.paginationControl.nextDisabled = false;
        this.paginationControl.nextLink = "/" + pageRoute[1] + "/" + i;
      }

      if(i <= pagination.id){
        paginationItem.class = "bar-passed";
      }else{
        paginationItem.class = "bar-next";
      }

      this.pagination.push(paginationItem);
    }

  }
}
