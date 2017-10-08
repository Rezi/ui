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
  providers: [StateService, PageService],
  host: {
        '(document:keydown)': 'handleKeyboardEvents($event)'
    }
})

export class AppComponent{

  logo = 'UX&nbsp;&&nbsp;UI overview';
  page:PageItem;
  pagination:{}[];
  paginationControl:paginationControll;
  zoomedIn = false;
  timeToShow: string = '';
  minutes = 50;
  activeTimeout:any = null;


  state:StateItem = {
    id:null,
    css:{}
  };;

  constructor(
    private stateService: StateService,
    private pageService: PageService,
    private router:Router
  ) {

    this.pageService = pageService;

    this.router.events.subscribe((event) => {
      if(event instanceof NavigationStart) {
        this.getState(event.url);
      }
    });

    const time = window.localStorage.getItem('time');
    if(time) {
      const timeArray = time.split(':').map((part:string) => Number(part));
      this.countdown(timeArray[0], timeArray[1]);
    } else {
      this.countdown(this.minutes);
    }    
  }

  resetCountDown(){
    clearTimeout(this.activeTimeout);
    this.countdown(this.minutes);
  }

  countdown(minutes: number, seconds?: number) {
    let rightSeconds = seconds || 60;
    this.tick(minutes, rightSeconds);
  }

  tick(minutes: number, seconds:number) {
        const current_minutes = minutes-1
        seconds--;
        window.localStorage.setItem('time', `${minutes}:${seconds}`);
        this.timeToShow = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
          this.activeTimeout = setTimeout(() => this.tick(minutes, seconds), 1000);
        } else if(minutes > 1){
          this.activeTimeout = setTimeout(() => { this.countdown(current_minutes); }, 1000);
        }
    }


  scrollTo(element:any, to:number, duration:number) {
    let start = element.scrollTop,
        change = to - start,
        increment = 20;

    let animateScroll = (elapsedTime:number) => {        
        elapsedTime += increment;
        let position = this.easeInOut(elapsedTime, start, change, duration);                        
        element.scrollTop = position; 
        if (elapsedTime < duration) {
            setTimeout(function() {
                animateScroll(elapsedTime);
            }, increment);
        }
    };

    animateScroll(0);
  }

  easeInOut(currentTime:number, start:number, change:number, duration:number) {
    currentTime /= duration / 2;
    if (currentTime < 1) {
        return change / 2 * currentTime * currentTime + start;
    }
    currentTime -= 1;
    return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
}

  scrollBottom(){
    var element = document.getElementsByTagName('ng-component')[0];
    let scrollTo = element.scrollHeight - element.clientHeight;
    this.scrollTo(element, scrollTo, 800);
  }

  scrollTop(){
    var element = document.getElementsByTagName('ng-component')[0];
    this.scrollTo(element, 0, 800);
  }

  handleKeyboardEvents(event: KeyboardEvent) {
    let keyCode = event.which || event.keyCode;

    if (keyCode === 37) {
      // left arrow
      this.router.navigate([this.paginationControl.prevLink]);         
    }
    else if (keyCode === 38) {
      // right arrow
      this.scrollTop();
    }
    else if (keyCode === 39) {
      // right arrow
      this.router.navigate([this.paginationControl.nextLink])
    }
    else if (keyCode === 40) {
      // down arrow
      this.scrollBottom();
    }
    else if (keyCode === 90) {
      // "z"" key
      //to zoom in add zoom class to q4
      this.zoomedIn = !this.zoomedIn;
    }
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
