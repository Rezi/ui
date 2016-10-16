import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import '../../public/css/styles.css';

import {StateService} from './state/state.service';
import {PageService} from './page/page.service';
import {PageItem} from './page/page.interface';

import {StateItem} from './state/state.interface';

interface paginationControll {
  prevDisabled:boolean;
  nextDisabled:boolean;
  nextLink:string;
  prevLink:string;
  hasPrevSection:boolean;
  hasNextSection:boolean;
};

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [StateService, PageService]
})

export class AppComponent{

  logo = 'CN ux&nbsp;&&nbsp;ui guide';
  page:PageItem;
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

    this.pageService = pageService;

    router.events.subscribe((event) => {
      if(event instanceof NavigationStart) {
        this.getState(event.url);
      }
    });
  }

  //called on every route change/load
  getState(page:string): void {
    
    this.state = this.stateService.getState(page);

    /* Pagination */
    
    let pageRoute = page.split("/");
    let pageId = pageRoute[1];
    let pageNumber = pageRoute[2];

    pageNumber = pageNumber || "0";
    let pagination = this.pageService.getPageOfTypeLength(pageRoute[1], +pageNumber)

    this.pagination = [];
    this.paginationControl = {
      prevDisabled:true,
      nextDisabled:true,
      prevLink:"",
      nextLink:"",
      hasPrevSection:false,
      hasNextSection:false
    };

    

    for (let i = 0; i <= pagination.total; i++){
      let paginationItem = {
        link: "/" + pageId + "/" + (i || ""),
        text: pageId,
        class:""
      };

      if(i < +pageNumber && this.paginationControl.prevDisabled){
        this.paginationControl.prevDisabled = false;
        this.paginationControl.prevLink = "/" + pageId + "/" + ((+pageNumber - 1) || "");
      }

      if(i > +pageNumber && this.paginationControl.nextDisabled){
        this.paginationControl.nextDisabled = false;
        this.paginationControl.nextLink = "/" + pageId + "/" + i;
      }

      if(i <= pagination.id){
        paginationItem.class = "bar-passed";
      }else{
        paginationItem.class = "bar-next";
      }

      this.pagination.push(paginationItem);
    }

    //check if there is a previous section (layout / colors etc.)
    if(this.paginationControl.prevDisabled){
      let prevSectionId = this.pageService.getPrevSectionId(pageId);
      if(prevSectionId){
        let pageParam = "/" + this.pageService.getPageOfTypeLength(prevSectionId, +pageNumber).total;
        
        this.paginationControl.prevDisabled = false;
        this.paginationControl.prevLink = "/" + prevSectionId + pageParam;
        this.paginationControl.hasPrevSection = true;
      }
      
    }

    //check if there is a next section (layout / colors etc.)
    if(this.paginationControl.nextDisabled){
      let nextSectionId = this.pageService.getNextSectionId(pageId);
      if(nextSectionId){
        this.paginationControl.nextDisabled = false;
        this.paginationControl.nextLink = "/" + nextSectionId;
        this.paginationControl.hasNextSection = true;
      }
      
    }

    
  }
}
